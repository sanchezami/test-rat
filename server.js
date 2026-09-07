const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const crypto = require("crypto");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const rooms = new Map();

function makeRoomId() {
    return crypto.randomBytes(4).toString("hex");
}

function send(ws, data) {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(data));
    }
}

function broadcast(room, sender, data) {
    for (const client of room.clients) {
        if (client !== sender) {
            send(client, data);
        }
    }
}

wss.on("connection", (ws) => {

    ws.roomId = null;
    ws.role = null;

    send(ws, {
        type: "connected"
    });

    ws.on("message", (raw) => {

        let message;

        try {
            message = JSON.parse(raw.toString());
        } catch {
            return;
        }

        /*
         * CREATE ROOM
         */
        if (message.type === "create-room") {

            const roomId = makeRoomId();

            const room = {
                clients: new Set()
            };

            rooms.set(roomId, room);

            ws.roomId = roomId;
            ws.role = "host";

            room.clients.add(ws);

            send(ws, {
                type: "room-created",
                roomId
            });

            return;
        }

        /*
         * JOIN ROOM
         */
        if (message.type === "join-room") {

            const roomId = String(message.roomId || "")
                .replace(/[^a-zA-Z0-9]/g, "")
                .slice(0, 20);

            const room = rooms.get(roomId);

            if (!room) {
                send(ws, {
                    type: "error",
                    message: "Комната не существует или уже закрыта."
                });

                return;
            }

            if (room.clients.size >= 2) {
                send(ws, {
                    type: "error",
                    message: "В комнате уже есть участники."
                });

                return;
            }

            ws.roomId = roomId;
            ws.role = "guest";

            room.clients.add(ws);

            send(ws, {
                type: "joined",
                roomId
            });

            broadcast(room, ws, {
                type: "guest-joined"
            });

            return;
        }

        /*
         * WEBRTC SIGNALING
         */
        if (
            message.type === "offer" ||
            message.type === "answer" ||
            message.type === "ice"
        ) {

            if (!ws.roomId) return;

            const room = rooms.get(ws.roomId);

            if (!room) return;

            broadcast(room, ws, message);

            return;
        }

        /*
         * STOP STREAM
         */
        if (message.type === "stream-stopped") {

            if (!ws.roomId) return;

            const room = rooms.get(ws.roomId);

            if (!room) return;

            broadcast(room, ws, {
                type: "stream-stopped"
            });

            return;
        }

    });

    ws.on("close", () => {

        if (!ws.roomId) return;

        const room = rooms.get(ws.roomId);

        if (!room) return;

        room.clients.delete(ws);

        broadcast(room, ws, {
            type: "peer-left"
        });

        /*
         * Host leaving closes the room.
         */
        if (ws.role === "host") {

            for (const client of room.clients) {

                send(client, {
                    type: "room-closed"
                });

                try {
                    client.close();
                } catch {}
            }

            rooms.delete(ws.roomId);

        } else if (room.clients.size === 0) {

            rooms.delete(ws.roomId);
        }
    });
});

server.listen(PORT, () => {
    console.log(`CameraShare running on port ${PORT}`);
});
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<title>RAT LAB // C2 TRAINING</title>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: #07090d;
    color: #d8dee9;
    font-family:
        Inter,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
}

header {
    height: 70px;
    border-bottom: 1px solid #202631;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    background: #0a0d12;
}

.logo {
    font-weight: 900;
    letter-spacing: 3px;
    font-size: 19px;
}

.logo span {
    opacity: .45;
}

.mode {
    border: 1px solid #394352;
    padding: 7px 12px;
    border-radius: 7px;
    font-size: 11px;
    letter-spacing: 1px;
}

.layout {
    display: grid;
    grid-template-columns: 260px 1fr;
    min-height: calc(100vh - 70px);
}

aside {
    border-right: 1px solid #202631;
    background: #090c11;
    padding: 20px;
}

.section-title {
    color: #667085;
    font-size: 10px;
    letter-spacing: 2px;
    margin: 12px 0;
}

.nav {
    padding: 12px;
    border-radius: 7px;
    margin-bottom: 6px;
    cursor: pointer;
    font-size: 13px;
}

.nav.active {
    background: #171d26;
}

main {
    padding: 25px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}

.card {
    background: #0c1016;
    border: 1px solid #202631;
    border-radius: 9px;
    padding: 18px;
}

.metric {
    font-size: 28px;
    font-weight: 800;
    margin-top: 7px;
}

.label {
    color: #707b8c;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 15px;
}

.panel {
    background: #0c1016;
    border: 1px solid #202631;
    border-radius: 9px;
    overflow: hidden;
}

.panel-head {
    padding: 15px;
    border-bottom: 1px solid #202631;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
}

.agent {
    padding: 15px;
    border-bottom: 1px solid #171c24;
    cursor: pointer;
}

.agent:hover {
    background: #11161e;
}

.agent-name {
    font-weight: 700;
}

.agent-meta {
    margin-top: 6px;
    color: #737f90;
    font-size: 11px;
}

.dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 6px;
    background: #777;
}

.online {
    background: #62d38a;
}

.offline {
    background: #e06c75;
}

.console {
    height: 330px;
    overflow-y: auto;
    padding: 15px;
    font-family: monospace;
    font-size: 12px;
}

.log {
    margin-bottom: 9px;
    color: #8994a5;
}

.log strong {
    color: #cbd5e1;
}

.controls {
    padding: 15px;
    border-top: 1px solid #202631;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

button {
    background: #161c25;
    border: 1px solid #303947;
    color: #d8dee9;
    padding: 10px 14px;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background: #202936;
}

button.danger {
    border-color: #6b3036;
}

.selected {
    border-left: 3px solid #d8dee9;
}

.notice {
    margin-top: 15px;
    padding: 14px;
    background: #0d1118;
    border: 1px dashed #394352;
    color: #8994a5;
    font-size: 12px;
    border-radius: 8px;
}

pre {
    white-space: pre-wrap;
    word-break: break-word;
}

@media(max-width:900px) {
    .layout {
        grid-template-columns: 1fr;
    }

    aside {
        display: none;
    }

    .grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .content {
        grid-template-columns: 1fr;
    }
}
</style>
</head>

<body>

<header>
    <div class="logo">
        RAT LAB <span>// C2 TRAINING</span>
    </div>

    <div class="mode">
        SAFE SANDBOX MODE
    </div>
</header>

<div class="layout">

<aside>

    <div class="section-title">CONTROL</div>

    <div class="nav active">
        Dashboard
    </div>

    <div class="nav">
        Agents
    </div>

    <div class="nav">
        Command Lab
    </div>

    <div class="nav">
        Event Log
    </div>

    <div class="section-title">TRAINING</div>

    <div class="nav">
        C2 Architecture
    </div>

    <div class="nav">
        Network Monitor
    </div>

    <div class="nav">
        Detection Lab
    </div>

</aside>

<main>

    <div class="grid">

        <div class="card">
            <div class="label">Agents</div>
            <div class="metric" id="agents">0</div>
        </div>

        <div class="card">
            <div class="label">Online</div>
            <div class="metric" id="online">0</div>
        </div>

        <div class="card">
            <div class="label">Commands</div>
            <div class="metric" id="commands">0</div>
        </div>

        <div class="card">
            <div class="label">Mode</div>
            <div class="metric" style="font-size:18px">
                SAFE
            </div>
        </div>

    </div>

    <div class="content">

        <section class="panel">

            <div class="panel-head">
                <span>AGENTS</span>
                <span id="selected">NONE</span>
            </div>

            <div id="agentList"></div>

        </section>

        <section class="panel">

            <div class="panel-head">
                COMMAND CONSOLE
            </div>

            <div class="console" id="console">
                <div class="log">
                    <strong>[SYSTEM]</strong>
                    Waiting for training agent...
                </div>
            </div>

            <div class="controls">

                <button onclick="command('PING')">
                    PING
                </button>

                <button onclick="command('INFO')">
                    SYSTEM INFO
                </button>

                <button onclick="command('STATUS')">
                    STATUS
                </button>

                <button onclick="command('LIST_TEST_FILES')">
                    TEST FILES
                </button>

                <button class="danger" onclick="clearConsole()">
                    CLEAR
                </button>

            </div>

        </section>

    </div>

    <div class="notice">
        ⚠ TRAINING ENVIRONMENT: команды ограничены безопасным
        симулятором. Произвольное выполнение команд ОС,
        скрытый доступ, сбор паролей, камеры и микрофона отключены.
    </div>

</main>

</div>

<script>

let selectedAgent = null;
let commandCount = 0;

function log(type, message) {

    const consoleBox =
        document.getElementById("console");

    const row =
        document.createElement("div");

    row.className = "log";

    row.innerHTML =
        `<strong>[${type}]</strong> ${escapeHtml(message)}`;

    consoleBox.prepend(row);
}

function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

async function refresh() {

    try {

        const response =
            await fetch("/api/agents");

        const data =
            await response.json();

        renderAgents(data.agents);

        document.getElementById("agents")
            .textContent = data.agents.length;

        document.getElementById("online")
            .textContent =
            data.agents.filter(
                x => x.status === "ONLINE"
            ).length;

    } catch {

        log(
            "ERROR",
            "C2 server unavailable"
        );
    }
}

function renderAgents(agents) {

    const list =
        document.getElementById("agentList");

    list.innerHTML = "";

    if (!agents.length) {

        list.innerHTML = `
            <div style="
                padding:25px;
                color:#667085;
                font-size:12px;
            ">
                No training agents connected.
            </div>
        `;

        return;
    }

    agents.forEach(agent => {

        const item =
            document.createElement("div");

        item.className =
            "agent " +
            (selectedAgent === agent.id
                ? "selected"
                : "");

        item.onclick = () => {

            selectedAgent = agent.id;

            document.getElementById("selected")
                .textContent = agent.name;

            renderAgents(agents);

            log(
                "SELECT",
                `${agent.name} selected`
            );
        };

        item.innerHTML = `
            <div class="agent-name">
                <span class="dot ${
                    agent.status === "ONLINE"
                        ? "online"
                        : "offline"
                }"></span>

                ${escapeHtml(agent.name)}
            </div>

            <div class="agent-meta">
                ${escapeHtml(agent.os)}
                · v${escapeHtml(agent.version)}
                · ${agent.status}
            </div>
        `;

        list.appendChild(item);
    });
}

async function command(cmd) {

    if (!selectedAgent) {

        log(
            "WARN",
            "Select an agent first"
        );

        return;
    }

    log(
        "SEND",
        `${cmd} → ${selectedAgent}`
    );

    try {

        const response =
            await fetch("/api/command", {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    id: selectedAgent,
                    command: cmd
                })

            });

        const data =
            await response.json();

        commandCount++;

        document.getElementById("commands")
            .textContent = commandCount;

        log(
            response.ok ? "RESULT" : "ERROR",
            JSON.stringify(data)
        );

    } catch {

        log(
            "ERROR",
            "Request failed"
        );
    }
}

function clearConsole() {

    document.getElementById("console")
        .innerHTML = "";

    log(
        "SYSTEM",
        "Console cleared"
    );
}

refresh();

setInterval(refresh, 3000);

</script>

</body>
</html>
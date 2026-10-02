/* =========================================================
   SURAJ PORTFOLIO - COMPLETE SCRIPT
========================================================= */


/* =========================================================
   RANDOM FLOATING CODE BACKGROUND
========================================================= */

const codeElements = document.querySelectorAll(
    ".code-background span"
);

const floatingElements = [];

codeElements.forEach((element) => {

    floatingElements.push({
        element: element,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        rotation: (Math.random() - 0.5) * 10,
        phase: Math.random() * Math.PI * 2
    });

});

function animateCode() {

    const time = Date.now();

    floatingElements.forEach((item) => {

        item.x += item.speedX;
        item.y += item.speedY;

        const waveX =
            Math.sin(
                time * 0.0005 +
                item.phase
            ) * 0.5;

        const waveY =
            Math.cos(
                time * 0.0004 +
                item.phase
            ) * 0.5;

        if (item.x < -150) {
            item.x = window.innerWidth + 50;
        }

        if (item.x > window.innerWidth + 150) {
            item.x = -50;
        }

        if (item.y < -80) {
            item.y = window.innerHeight + 50;
        }

        if (item.y > window.innerHeight + 80) {
            item.y = -50;
        }

        item.element.style.transform =
            `translate3d(
                ${item.x + waveX}px,
                ${item.y + waveY}px,
                0
            ) rotate(${item.rotation}deg)`;

    });

    requestAnimationFrame(animateCode);
}

animateCode();


/* =========================================================
   ABOUT DROPDOWNS
========================================================= */

const aboutDropdowns =
    document.querySelectorAll(".about-dropdown");

aboutDropdowns.forEach((dropdown) => {

    const button =
        dropdown.querySelector(".about-dropdown-btn");

    if (!button) return;

    button.addEventListener("click", () => {

        aboutDropdowns.forEach((otherDropdown) => {

            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove("active");
            }

        });

        dropdown.classList.toggle("active");

    });

});


/* =========================================================
   SKILLS DROPDOWNS
========================================================= */

const skillDropdowns =
    document.querySelectorAll(".skill-dropdown");

skillDropdowns.forEach((dropdown) => {

    const button =
        dropdown.querySelector(".skill-dropdown-btn");

    if (!button) return;

    button.addEventListener("click", () => {

        skillDropdowns.forEach((otherDropdown) => {

            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove("active");
            }

        });

        dropdown.classList.toggle("active");

    });

});


/* =========================================================
   PROJECT DROPDOWNS
========================================================= */

const projectDropdowns =
    document.querySelectorAll(".project-dropdown");

projectDropdowns.forEach((dropdown) => {

    const button =
        dropdown.querySelector(".project-dropdown-btn");

    if (!button) return;

    button.addEventListener("click", () => {

        projectDropdowns.forEach((otherDropdown) => {

            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove("active");
            }

        });

        dropdown.classList.toggle("active");

    });

});

/* =========================
   CERTIFICATE DROPDOWNS
========================= */

const certificateItems =
    document.querySelectorAll(".certificate-item");

certificateItems.forEach((item) => {

    const button =
        item.querySelector(".certificate-header");

    button.addEventListener("click", () => {

        certificateItems.forEach((otherItem) => {

            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

/* =========================================================
   PROGRAMMING SYMBOL LOADER
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const loader =
            document.getElementById("code-loader");

        const container =
            document.querySelector(".code-symbols");

        if (loader && container) {

            const symbols = [

                "</>",
                "<>",
                "/>",
                "{}",
                "[]",
                "()",
                "() =>",
                "=>",
                ";",
                ":",
                "::",
                "#",
                "@",
                "$",
                "%",
                "&",
                "*",
                "+",
                "-",
                "=",
                "==",
                "===",
                "!=",
                "!==",
                "++",
                "--",
                "&&",
                "||",
                "!",
                "?",
                "??",
                "?.",
                "...",
                "//",
                "/* */",
                "\\",

                "<html>",
                "<head>",
                "<body>",
                "<div>",
                "<section>",
                "<h1>",
                "<p>",
                "</div>",
                "</section>",

                "CSS",
                "display",
                "flex",
                "grid",
                "margin",
                "padding",
                "color",
                "width",
                "height",
                "@media",

                "JavaScript",
                "JS",
                "const",
                "let",
                "var",
                "function",
                "return",
                "async",
                "await",
                "if",
                "else",
                "for",
                "while",
                "true",
                "false",
                "null",

                "Java",
                "class",
                "public",
                "private",
                "static",
                "void",
                "new",
                "extends",
                "implements",
                "interface",

                "Python",
                "def",
                "import",
                "from",
                "print()",
                "self",
                "None",
                "True",
                "False",

                "API",
                "REST",
                "HTTP",
                "JSON",
                "GET",
                "POST",
                "PUT",
                "DELETE",
                "CRUD",

                "SQL",
                "MySQL",
                "MongoDB",
                "SELECT",
                "INSERT",
                "UPDATE",
                "JOIN",

                "Git",
                "GitHub",
                "Docker",
                "Jenkins",
                "AWS",
                "Linux",
                "CI/CD",
                "DevOps",
                "Bash",
                "npm",
                "Maven",

                "React",
                "Spring",
                "Spring Boot",
                "Node.js",
                "Angular",

                "console.log()",
                "System.out.println()",
                "main()",
                "localhost",
                "8080",
                "404",
                "200",
                "500"

            ];

            const total = 120;

            for (let i = 0; i < total; i++) {

                const symbol =
                    document.createElement("span");

                symbol.classList.add("code-symbol");

                symbol.textContent =
                    symbols[
                        Math.floor(
                            Math.random() *
                            symbols.length
                        )
                    ];

                const size =
                    16 + Math.random() * 18;

                symbol.style.fontSize =
                    `${size}px`;

                symbol.style.left =
                    `${Math.random() * 100}%`;

                symbol.style.top =
                    `${Math.random() * 100}%`;

                symbol.style.opacity =
                    0.5 + Math.random() * 0.5;

                const side =
                    Math.floor(
                        Math.random() * 4
                    );

                let startX;
                let startY;

                if (side === 0) {

                    startX = "-100vw";
                    startY =
                        `${Math.random() * 100 - 50}vh`;

                } else if (side === 1) {

                    startX = "100vw";
                    startY =
                        `${Math.random() * 100 - 50}vh`;

                } else if (side === 2) {

                    startX =
                        `${Math.random() * 100 - 50}vw`;

                    startY = "-100vh";

                } else {

                    startX =
                        `${Math.random() * 100 - 50}vw`;

                    startY = "100vh";

                }

                symbol.style.setProperty(
                    "--start-x",
                    startX
                );

                symbol.style.setProperty(
                    "--start-y",
                    startY
                );

                symbol.style.setProperty(
                    "--rotate",
                    `${Math.random() * 90 - 45}deg`
                );

                const delay =
                    Math.random() * 0.8;

                symbol.style.animationDelay =
                    `${delay}s, ${delay}s`;

                container.appendChild(symbol);

            }

            setTimeout(() => {

                loader.classList.add("hide");

            }, 3300);

            setTimeout(() => {

                loader.style.display = "none";

                const flyingRobot =
                    document.getElementById("flyingRobot");

                if (flyingRobot) {
                    flyingRobot.classList.add("robot-ready");
                }

                const dock =
                    document.getElementById("robotDock");

                if (dock) {
                    dock.style.opacity = "1";
                    dock.style.visibility = "visible";
                }

            }, 4300);

        }

    }
);


/* =========================================================
   FLYING ROBOT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const robot =
            document.getElementById("flyingRobot");

        if (!robot) return;

        const speech =
            document.getElementById("robotSpeech");


        /* =================================================
           ROBOT STATE
        ================================================= */

        let robotState = "docked";

        let boostTimer;
        let idleTimer;
        let speechTimer;
        let scrollTimer;


        /* =================================================
           CREATE DOCKING STATION
        ================================================= */

        const dock =
            document.createElement("div");

        dock.id = "robotDock";

        dock.innerHTML = `

            <div class="dock-top-light"></div>

            <div class="dock-frame">

                <div class="dock-door"></div>

                <div class="dock-grid">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

        `;

        document.body.appendChild(dock);

        dock.style.opacity = "0";
        dock.style.visibility = "hidden";
        dock.style.position = "fixed";
        dock.style.zIndex = "9990";


        /* =================================================
           DOCK STYLES
        ================================================= */

        const dockStyle =
            document.createElement("style");

        dockStyle.textContent = `

            #robotDock {
                width: 82px;
                height: 76px;
                right: 24px;
                bottom: 20px;
                pointer-events: none;
                transition: opacity .5s ease;
            }

            #robotDock .dock-frame {
                position: absolute;
                left: 8px;
                right: 8px;
                bottom: 0;
                height: 62px;

                border:
                    2px solid
                    rgba(45,212,191,.55);

                border-radius:
                    14px 14px 10px 10px;

                background:
                    linear-gradient(
                        180deg,
                        rgba(45,212,191,.12),
                        rgba(11,17,32,.92)
                    );

                box-shadow:
                    0 0 12px
                    rgba(45,212,191,.2),

                    inset 0 0 18px
                    rgba(45,212,191,.08);

                overflow: hidden;
            }

            #robotDock .dock-door {
                position: absolute;
                left: 12px;
                right: 12px;
                top: 8px;
                bottom: 0;

                border-radius:
                    12px 12px 0 0;

                border:
                    1px solid
                    rgba(45,212,191,.28);

                background:
                    rgba(2,8,23,.7);
            }

            #robotDock .dock-top-light {
                position: absolute;
                left: 50%;
                top: 0;

                width: 8px;
                height: 8px;

                transform:
                    translateX(-50%);

                border-radius: 50%;

                background: #2DD4BF;

                box-shadow:
                    0 0 8px #2DD4BF,
                    0 0 18px rgba(45,212,191,.7);
            }

            #robotDock .dock-grid {
                position: absolute;
                left: 18px;
                right: 18px;
                bottom: 9px;

                display: grid;
                grid-template-columns:
                    repeat(3,1fr);

                gap: 4px;
                z-index: 2;
            }

            #robotDock .dock-grid span {
                height: 3px;
                border-radius: 3px;
                background:
                    rgba(45,212,191,.4);
            }

            #robotDock.dock-active {
                filter:
                    drop-shadow(
                        0 0 10px
                        rgba(45,212,191,.45)
                    );
            }

            /* ===============================
               LAUNCH BOOST
            =============================== */

            .flying-robot.launch-boost {
                filter:
                    drop-shadow(
                        0 0 10px
                        #2DD4BF
                    )
                    drop-shadow(
                        0 0 25px
                        rgba(45,212,191,.8)
                    );
            }

            .flying-robot.launch-boost
            .jetpack span {

                height: 55px !important;
                opacity: 1 !important;

                box-shadow:
                    0 0 10px #2DD4BF,
                    0 0 25px #2DD4BF,
                    0 0 45px rgba(45,212,191,.9),
                    0 0 65px rgba(45,212,191,.6);

                animation:
                    launchFlame
                    .12s
                    ease-in-out
                    infinite
                    alternate;
            }

            @keyframes launchFlame {

                from {
                    transform:
                        translateX(-50%)
                        scaleY(.8);
                }

                to {
                    transform:
                        translateX(-50%)
                        scaleY(1.25);
                }

            }

            /* ===============================
               LANDING BOOST
            =============================== */

            .flying-robot.landing-boost {
                animation: none !important;

                filter:
                    drop-shadow(
                        0 0 10px
                        #2DD4BF
                    )
                    drop-shadow(
                        0 0 25px
                        rgba(45,212,191,.8)
                    );
            }

            .flying-robot.landing-boost
            .jetpack span {

                height: 52px !important;
                opacity: 1 !important;

                box-shadow:
                    0 0 10px #2DD4BF,
                    0 0 25px #2DD4BF,
                    0 0 45px rgba(45,212,191,.9);

                animation:
                    landingFlame
                    .14s
                    ease-in-out
                    infinite
                    alternate;
            }

            @keyframes landingFlame {

                from {
                    transform:
                        translateX(-50%)
                        scaleY(1.2);
                }

                to {
                    transform:
                        translateX(-50%)
                        scaleY(.7);
                }

            }

            /* ===============================
               DOCKED ROBOT
            =============================== */

            .flying-robot.robot-docked {
                animation: none !important;
                transition: none !important;
            }

            @media (max-width: 768px) {

                #robotDock {
                    right: 14px;
                    bottom: 14px;

                    transform: scale(.85);
                    transform-origin: bottom right;
                }

            }

        `;

        document.head.appendChild(dockStyle);


        /* =================================================
           ROBOT FLIGHT ANIMATIONS
        ================================================= */

        const flightStyle =
            document.createElement("style");

        flightStyle.textContent = `

            /* =========================================
               STRAIGHT LAUNCH
            ========================================= */

            @keyframes surajRobotLaunch {

                0% {
                    left: var(--dock-left);
                    top: var(--dock-top);

                    transform:
                        scale(.82)
                        rotate(0deg);
                }

                20% {
                    left: var(--dock-left);
                    top:
                        calc(
                            var(--dock-top) - 90px
                        );

                    transform:
                        scale(.92)
                        rotate(0deg);
                }

                45% {
                    left: var(--dock-left);
                    top:
                        calc(
                            var(--dock-top) - 200px
                        );

                    transform:
                        scale(1)
                        rotate(0deg);
                }

                70% {
                    left: var(--dock-left);
                    top: 25%;

                    transform:
                        scale(1)
                        rotate(0deg);
                }

                100% {
                    left: var(--launch-left);
                    top: var(--launch-top);

                    transform:
                        scale(1)
                        rotate(0deg);
                }

            }


            /* =========================================
               COMPLETE PAGE ROAMING
            ========================================= */

            @keyframes surajRobotRoam {

                /* EXACT LAUNCH END */
                0% {
                    left: var(--launch-left);
                    top: var(--launch-top);

                    transform:
                        rotate(0deg)
                        scale(1);
                }

                /* TOP RIGHT */
                12% {
                    left: 82%;
                    top: 10%;

                    transform:
                        rotate(8deg)
                        scale(1);
                }

                /* RIGHT */
                25% {
                    left: 90%;
                    top: 45%;

                    transform:
                        rotate(12deg)
                        scale(1);
                }

                /* BOTTOM RIGHT */
                38% {
                    left: 78%;
                    top: 82%;

                    transform:
                        rotate(-8deg)
                        scale(1);
                }

                /* BOTTOM */
                50% {
                    left: 50%;
                    top: 88%;

                    transform:
                        rotate(0deg)
                        scale(1);
                }

                /* BOTTOM LEFT */
                62% {
                    left: 18%;
                    top: 82%;

                    transform:
                        rotate(-10deg)
                        scale(1);
                }

                /* LEFT */
                75% {
                    left: 8%;
                    top: 45%;

                    transform:
                        rotate(10deg)
                        scale(1);
                }

                /* TOP LEFT */
                88% {
                    left: 18%;
                    top: 12%;

                    transform:
                        rotate(-8deg)
                        scale(1);
                }

                /* BACK TO LAUNCH AREA */
                100% {
                    left: var(--launch-left);
                    top: var(--launch-top);

                    transform:
                        rotate(0deg)
                        scale(1);
                }

            }

        `;

        document.head.appendChild(flightStyle);


        /* =================================================
           DOCK POSITION
        ================================================= */

        function getDockPosition() {

            const rect =
                dock.getBoundingClientRect();

            const robotWidth =
                robot.offsetWidth || 70;

            const robotHeight =
                robot.offsetHeight || 100;

            return {

                left:
                    rect.left +
                    (rect.width / 2) -
                    (robotWidth / 2),

                top:
                    rect.top +
                    rect.height -
                    robotHeight -
                    4

            };

        }


        /* =================================================
           DOCK ROBOT
        ================================================= */

        function dockRobot() {

            const position =
                getDockPosition();

            robot.classList.remove(
                "boost",
                "excited",
                "idle",
                "launch-boost",
                "landing-boost"
            );

            robot.classList.add(
                "robot-docked"
            );

            robot.style.animation =
                "none";

            robot.style.transition =
                "none";

            robot.style.left =
                `${position.left}px`;

            robot.style.top =
                `${position.top}px`;

            robot.style.transform =
                "scale(.82)";

            robot.style.setProperty(
                "--dock-left",
                `${position.left}px`
            );

            robot.style.setProperty(
                "--dock-top",
                `${position.top}px`
            );

            dock.classList.add(
                "dock-active"
            );

            robotState =
                "docked";

        }


        /* =================================================
           SHOW MESSAGE
        ================================================= */

        function showMessage(
            message,
            duration = 3000
        ) {

            if (!speech) return;

            speech.textContent =
                message;

            speech.classList.add(
                "show"
            );

            clearTimeout(
                speechTimer
            );

            speechTimer =
                setTimeout(() => {

                    speech.classList.remove(
                        "show"
                    );

                }, duration);

        }


        /* =================================================
           ROBOT MESSAGES
        ================================================= */

        const messages = {

            home:
                "Hi! I'm Suraj's little coding assistant. 🤖",

            about:
                "Want to know more about Suraj?",

            skills:
                "Checking out Suraj's skills?",

            projects:
                "Let's see what Suraj has built! 🚀",

            contact:
                "Let's connect with Suraj! 💻",

            launch:
                "Launching! 🚀",

            return:
                "Returning to my station! 🛬"

        };


        /* =================================================
           LAUNCH ROBOT
        ================================================= */

        function launchRobot() {

            if (
                robotState !==
                "docked"
            ) {
                return;
            }

            robotState =
                "launching";

            dock.classList.remove(
                "dock-active"
            );

            robot.classList.remove(
                "robot-docked"
            );

            robot.classList.remove(
                "idle",
                "excited",
                "landing-boost",
                "boost"
            );

            const position =
                getDockPosition();

            /* Dock starting position */

            robot.style.setProperty(
                "--dock-left",
                `${position.left}px`
            );

            robot.style.setProperty(
                "--dock-top",
                `${position.top}px`
            );

            /*
             * Calculate launch position.
             *
             * The robot keeps its dock-side horizontal
             * position during the straight vertical launch.
             */

            const launchLeft =
                Math.min(
                    Math.max(
                        position.left,
                        20
                    ),
                    Math.max(
                        20,
                        window.innerWidth -
                        robot.offsetWidth -
                        20
                    )
                );

            const launchTop =
                Math.max(
                    20,
                    Math.min(
                        window.innerHeight * 0.15,
                        window.innerHeight -
                        robot.offsetHeight -
                        20
                    )
                );

            robot.style.setProperty(
                "--launch-left",
                `${launchLeft}px`
            );

            robot.style.setProperty(
                "--launch-top",
                `${launchTop}px`
            );

            robot.style.left =
                `${position.left}px`;

            robot.style.top =
                `${position.top}px`;

            robot.style.animation =
                "none";

            robot.style.transition =
                "none";

            robot.style.transform =
                "scale(.82)";

            void robot.offsetWidth;


            /* =========================================
               STRONG LAUNCH BOOST
            ========================================= */

            robot.classList.add(
                "launch-boost"
            );

            robot.style.transform =
                "scale(.92)";

            showMessage(
                messages.launch,
                1500
            );


            /* =========================================
               START LAUNCH
            ========================================= */

            setTimeout(() => {

                if (
                    robotState !==
                    "launching"
                ) {
                    return;
                }


                /*
                 * Listen BEFORE starting animation.
                 * This prevents the animation-end event
                 * from being missed.
                 */

                const launchFinished =
                    (event) => {

                        if (
                            event.animationName !==
                            "surajRobotLaunch"
                        ) {
                            return;
                        }

                        robot.removeEventListener(
                            "animationend",
                            launchFinished
                        );

                        if (
                            robotState !==
                            "launching"
                        ) {
                            return;
                        }


                        /*
                         * Stop launch boost.
                         */

                        robot.classList.remove(
                            "launch-boost"
                        );


                        /*
                         * Start flying.
                         */

                        robotState =
                            "flying";


                        /*
                         * IMPORTANT:
                         *
                         * The first frame of the roaming
                         * animation uses --launch-left
                         * and --launch-top.
                         *
                         * Therefore the robot does NOT
                         * jump sideways after launching.
                         */

                        robot.style.animation =
                            "surajRobotRoam 24s cubic-bezier(.45,.05,.55,.95) infinite";

                        robot.style.animationFillMode =
                            "both";

                        resetIdleTimer();

                    };


                robot.addEventListener(
                    "animationend",
                    launchFinished
                );


                /*
                 * Start launch AFTER listener is attached.
                 */

                robot.style.animation =
                    "surajRobotLaunch 2.8s cubic-bezier(.18,.72,.22,1) forwards";

            }, 500);

        }


        /* =================================================
           RETURN ROBOT TO DOCK
        ================================================= */

        function returnRobotToDock() {

            if (
                robotState !==
                "flying"
            ) {
                return;
            }

            robotState =
                "returning";

            clearTimeout(
                boostTimer
            );

            clearTimeout(
                idleTimer
            );

            robot.classList.remove(
                "idle",
                "excited",
                "boost"
            );

            showMessage(
                messages.return,
                1800
            );


            /*
             * Get current visual position
             * before stopping animation.
             */

            const currentRect =
                robot.getBoundingClientRect();

            const currentLeft =
                currentRect.left;

            const currentTop =
                currentRect.top;


            robot.style.animation =
                "none";

            robot.style.transition =
                "none";

            robot.style.left =
                `${currentLeft}px`;

            robot.style.top =
                `${currentTop}px`;

            robot.style.transform =
                "scale(1)";

            void robot.offsetWidth;


            /*
             * Get dock target.
             */

            const dockPosition =
                getDockPosition();

            robot.style.setProperty(
                "--dock-left",
                `${dockPosition.left}px`
            );

            robot.style.setProperty(
                "--dock-top",
                `${dockPosition.top}px`
            );


            /*
             * Strong landing boost.
             */

            robot.classList.add(
                "landing-boost"
            );


            robot.style.transition =
                "left 1.8s cubic-bezier(.18,.72,.22,1), " +
                "top 1.8s cubic-bezier(.18,.72,.22,1), " +
                "transform 1.8s cubic-bezier(.18,.72,.22,1)";


            robot.style.left =
                `${dockPosition.left}px`;

            robot.style.top =
                `${dockPosition.top}px`;

            robot.style.transform =
                "scale(.82)";


            setTimeout(() => {

                robot.classList.remove(
                    "landing-boost"
                );

                robot.classList.add(
                    "robot-docked"
                );

                robot.style.animation =
                    "none";

                robot.style.transition =
                    "none";

                robot.style.left =
                    `${dockPosition.left}px`;

                robot.style.top =
                    `${dockPosition.top}px`;

                robot.style.transform =
                    "scale(.82)";

                dock.classList.add(
                    "dock-active"
                );

                robotState =
                    "docked";

                resetIdleTimer();

            }, 1850);

        }


        /* =================================================
           ROBOT CLICK
        ================================================= */

        robot.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                if (
                    robotState ===
                    "docked"
                ) {

                    launchRobot();

                }

                else if (
                    robotState ===
                    "flying"
                ) {

                    returnRobotToDock();

                }

            }
        );


        /* =================================================
           HOVER MESSAGE
        ================================================= */

        robot.addEventListener(
            "mouseenter",
            () => {

                if (
                    robotState ===
                    "docked"
                ) {

                    showMessage(
                        "Click me to launch! 🚀",
                        2000
                    );

                }

                else if (
                    robotState ===
                    "flying"
                ) {

                    showMessage(
                        "Hi! I'm Suraj's little coding assistant. 🤖",
                        2000
                    );

                }

                resetIdleTimer();

            }
        );


        /* =================================================
           DOUBLE CLICK BOOST
        ================================================= */

        robot.addEventListener(
            "dblclick",
            (event) => {

                event.preventDefault();
                event.stopPropagation();

                if (
                    robotState !==
                    "flying"
                ) {
                    return;
                }

                robot.classList.remove(
                    "boost"
                );

                void robot.offsetWidth;

                robot.classList.add(
                    "boost"
                );

                clearTimeout(
                    boostTimer
                );

                boostTimer =
                    setTimeout(() => {

                        robot.classList.remove(
                            "boost"
                        );

                    }, 1000);

            }
        );


        /* =================================================
           SECTION DETECTION
        ================================================= */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );

        function checkSection() {

            if (
                robotState ===
                "returning"
            ) {
                return;
            }

            if (
                robot.classList.contains(
                    "boost"
                )
            ) {
                return;
            }

            let currentSection =
                "home";

            sections.forEach(
                (section) => {

                    const rect =
                        section.getBoundingClientRect();

                    if (
                        rect.top <=
                        window.innerHeight * 0.45
                        &&
                        rect.bottom >=
                        window.innerHeight * 0.45
                    ) {

                        currentSection =
                            section.id;

                    }

                }
            );


            if (
                currentSection ===
                "home"
            ) {

                showMessage(
                    messages.home,
                    2500
                );

            }

            else if (
                currentSection ===
                "about"
            ) {

                showMessage(
                    messages.about,
                    2500
                );

            }

            else if (
                currentSection ===
                "skills"
            ) {

                showMessage(
                    messages.skills,
                    2500
                );

            }

            else if (
                currentSection ===
                "projects"
            ) {

                showMessage(
                    messages.projects,
                    2500
                );

            }

            else if (
                currentSection ===
                "contact"
            ) {

                showMessage(
                    messages.contact,
                    2500
                );

            }

        }


        /* =================================================
           SCROLL REACTION
        ================================================= */

        window.addEventListener(
            "scroll",
            () => {

                if (
                    robotState ===
                    "docked"
                ) {
                    return;
                }

                if (
                    robotState ===
                    "returning"
                ) {
                    return;
                }

               window.addEventListener(
    "scroll",
    () => {

        if (
            robotState ===
            "docked"
        ) {
            return;
        }

        if (
            robotState ===
            "returning"
        ) {
            return;
        }

        checkSection();

        resetIdleTimer();

    }
);

                checkSection();

                resetIdleTimer();

            }
        );


        /* =================================================
           IDLE MODE
        ================================================= */

        function resetIdleTimer() {

            clearTimeout(
                idleTimer
            );

            robot.classList.remove(
                "idle"
            );

            if (
                robotState !==
                "flying"
            ) {
                return;
            }

            if (
                robot.classList.contains(
                    "boost"
                )
            ) {
                return;
            }

            idleTimer =
                setTimeout(() => {

                    if (
                        robotState ===
                        "flying"
                        &&
                        !robot.classList.contains(
                            "boost"
                        )
                    ) {

                        robot.classList.add(
                            "idle"
                        );

                    }

                }, 8000);

        }


        /* =================================================
           USER ACTIVITY
        ================================================= */

        document.addEventListener(
            "mousemove",
            resetIdleTimer
        );

        document.addEventListener(
            "scroll",
            resetIdleTimer
        );

        document.addEventListener(
            "keydown",
            resetIdleTimer
        );

        document.addEventListener(
            "click",
            resetIdleTimer
        );


        /* =================================================
           WINDOW RESIZE
        ================================================= */

        window.addEventListener(
            "resize",
            () => {

                if (
                    robotState ===
                    "docked"
                ) {

                    dockRobot();

                }

            }
        );


        /* =================================================
           INITIAL DOCK
        ================================================= */

        setTimeout(() => {

            dockRobot();

        }, 100);


        /* =================================================
           INITIAL MESSAGE
        ================================================= */

        setTimeout(() => {

            if (
                robotState ===
                "docked"
            ) {

                showMessage(
                    "Click me to launch! 🚀",
                    4000
                );

            }

        }, 4500);

    }
);


/* =========================================================
   END OF SCRIPT
========================================================= */
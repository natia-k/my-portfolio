// nav.js - The central brain for your project navigation
const projects = [
    "kombucha.html",
    "oat-milk.html",
    "the-others.html",
    "feelings.html",
    "nurture.html",
    "go-left.html",
    "posters.html"
];

function injectNavigation() {
    const currentFile = window.location.pathname.split("/").pop();
    const currentIndex = projects.indexOf(currentFile);

    if (currentIndex === -1) return; // Exit if not a project page

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;

    const navHTML = `
        <nav class="project-navigation">
            <a href="${projects[prevIndex]}" class="nav-link">← PREV</a>
            <a href="index.html" class="nav-link index">ARCHIVE</a>
            <a href="${projects[nextIndex]}" class="nav-link">NEXT →</a>
        </nav>
        <style>
            .project-navigation {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 120px 8% 60px;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                margin-top: 100px;
                font-family: "Inter", sans-serif;
            }
            .nav-link {
                color: #f5f5f7;
                text-decoration: none;
                font-weight: 900;
                font-size: 11px;
                letter-spacing: 0.3em;
                text-transform: uppercase;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .nav-link:hover { color: #ff0000; transform: translateY(-2px); }
            .nav-link.index { opacity: 0.4; font-size: 9px; }
        </style>
    `;

    document.body.insertAdjacentHTML('beforeend', navHTML);
}

// Run the function
injectNavigation();

document.addEventListener("DOMContentLoaded", () => {
    const data = window.siteContent;
    const root = document.getElementById("resume-root");
    const title = document.getElementById("resume-page-title");

    if (!data || !root) {
        return;
    }

    document.title = `${data.profile.name} | Resume`;
    if (title) {
        title.textContent = `${data.profile.name} | Resume`;
    }

    const contactLinks = [
        `<a href="mailto:${data.profile.email}">${data.profile.email}</a>`,
        `<a href="${data.profile.linkedin}" target="_blank" rel="noreferrer">linkedin</a>`,
        `<a href="${data.profile.github}" target="_blank" rel="noreferrer">github</a>`
    ].join('<span class="resume-divider">/</span>');

    const quickInfo = data.profile.meta
        .map((item) => `<li>${item}</li>`)
        .join("");

    const skills = data.toolbox
        .map(
            (group) => `
                <div class="resume-skill-row">
                    <dt>${group.category}</dt>
                    <dd>${group.items.join(" • ")}</dd>
                </div>
            `
        )
        .join("");

    const experience = data.experience
        .map(
            (role) => `
                <article class="resume-role">
                    <div class="resume-role-header">
                        <div>
                            <h3>${role.title}</h3>
                            <p class="resume-company">${role.company}</p>
                        </div>
                        <p class="resume-period">${role.period} · ${role.mode}</p>
                    </div>
                    <ul class="resume-bullets">
                        ${role.bullets.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                </article>
            `
        )
        .join("");

    const certifications = data.certifications
        .map(
            (item) => `
                <li>
                    <strong>${item.name}</strong>
                    <span>${item.issuer} · ${item.year}</span>
                </li>
            `
        )
        .join("");

    root.innerHTML = `
        <section class="resume-sheet">
            <header class="resume-header">
                <div>
                    <h1>${data.profile.name}</h1>
                    <p class="resume-subtitle">${data.profile.role}</p>
                </div>
                <div class="resume-contact">
                    <p>${contactLinks}</p>
                </div>
            </header>

            <section class="resume-section">
                <h2>Profile</h2>
                <p>${data.profile.bio}</p>
                <ul class="resume-inline-list">${quickInfo}</ul>
            </section>

            <section class="resume-section">
                <h2>Core Skills</h2>
                <dl class="resume-skills">${skills}</dl>
            </section>

            <section class="resume-section">
                <h2>Experience</h2>
                <div class="resume-role-list">${experience}</div>
            </section>

            <section class="resume-section">
                <h2>Certifications</h2>
                <ul class="resume-certifications">${certifications}</ul>
            </section>
        </section>
    `;

    const printButton = document.getElementById("print-resume");
    if (printButton) {
        printButton.addEventListener("click", () => window.print());
    }
});

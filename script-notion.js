function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function renderSectionHead(label, note) {
    return `
        <div class="section-head">
            <p class="section-label">${escapeHtml(label)}</p>
            <p class="section-note">${escapeHtml(note)}</p>
        </div>
    `;
}

function renderHeader(data) {
    document.getElementById("header-nav").innerHTML = `
        <a href="#story">story</a>
        <a href="#experience">work</a>
        <a href="#impact">impact</a>
        <a href="#toolbox">toolbox</a>
        <a href="resume.html" class="nav-resume">resume</a>
    `;
}

function renderHero(data) {
    return `
        <section class="hero-shell section">
            <div class="hero-grid">
                <div class="hero-copy frame">
                    <h1 class="hero-name">${escapeHtml(data.profile.name)}</h1>
                    <p class="hero-bio">${escapeHtml(data.profile.bio)}</p>
                </div>
                <aside class="hero-panel frame">
                    <p class="panel-label">Profile</p>
                    <div class="panel-row">
                        <span class="panel-key">Based</span>
                        <strong class="panel-value">${escapeHtml(data.profile.meta[0] || "Bengaluru, India")}</strong>
                    </div>
                    <div class="panel-row">
                        <span class="panel-key">Focus</span>
                        <strong class="panel-value">${escapeHtml(data.profile.role)}</strong>
                    </div>
                    <div class="panel-row">
                        <span class="panel-key">Email</span>
                        <a class="panel-value panel-link" href="mailto:${escapeHtml(data.profile.email)}">${escapeHtml(data.profile.email)}</a>
                    </div>
                    <div class="panel-row">
                        <span class="panel-key">Links</span>
                        <div class="panel-links">
                            <a href="${escapeHtml(data.profile.linkedin)}" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="${escapeHtml(data.profile.github)}" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="resume.html">Resume</a>
                        </div>
                    </div>
                </aside>
            </div>
            <div class="signal-grid">
                ${data.signals.map((item) => `
                    <article class="signal-card">
                        <p class="signal-value">${escapeHtml(item.value)}</p>
                        <p class="signal-label">${escapeHtml(item.label)}</p>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}

function renderStory(data) {
    return `
        <section class="section" id="story">
            ${renderSectionHead("01 Story", "The path from support work to infrastructure ownership to reliability engineering.")}
            <div class="story-layout">
                <article class="story-prose frame">
                    <p class="story-lead">I care about the systems behind delivery, but also about the people who have to live with those systems every day.</p>
                    ${data.story.intro.map((paragraph) => `<p class="story-paragraph">${escapeHtml(paragraph)}</p>`).join("")}
                </article>
                <aside class="story-principles frame">
                    <p class="panel-label">How I work</p>
                    <div class="principle-list">
                        ${data.story.principles.map((principle) => `
                            <div class="principle-item">
                                <p class="principle-title">${escapeHtml(principle.title)}</p>
                                <p class="principle-body">${escapeHtml(principle.body)}</p>
                            </div>
                        `).join("")}
                    </div>
                </aside>
            </div>
            <div class="chapter-grid">
                ${data.story.chapters.map((chapter) => `
                    <article class="chapter-card frame">
                        <p class="chapter-step">${escapeHtml(chapter.step)}</p>
                        <h3 class="chapter-title">${escapeHtml(chapter.title)}</h3>
                        <p class="chapter-body">${escapeHtml(chapter.body)}</p>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}

function renderExperience(data) {
    return `
        <section class="section" id="experience">
            ${renderSectionHead("02 Experience", "Roles across reliability engineering, infrastructure, and operations ownership.")}
            ${data.experience.map(role => `
                <article class="job frame">
                    <div class="job-rail">
                        <span class="job-period">${escapeHtml(role.period)}</span>
                        <span class="job-mode">${escapeHtml(role.mode)}</span>
                    </div>
                    <div class="job-main">
                        <div class="job-header">
                            <div>
                                <h2 class="job-title">${escapeHtml(role.title)}</h2>
                                <p class="job-company">${escapeHtml(role.company)}</p>
                            </div>
                        </div>
                        <ul class="job-bullets">
                            ${role.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}
                        </ul>
                        <div class="job-stack">
                            ${role.stack.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join("")}
                        </div>
                    </div>
                </article>
            `).join("")}
        </section>
    `;
}

function renderImpact(data) {
    return `
        <section class="section" id="impact">
            ${renderSectionHead("03 Selected impact", "Representative infrastructure and delivery work with operational consequences.")}
            <div class="impact-grid">
                ${data.impact.map(item => `
                <div class="impact-item frame">
                    <p class="impact-context">${escapeHtml(item.context)}</p>
                    <p class="impact-title">${escapeHtml(item.title)}</p>
                    <p class="impact-body">${escapeHtml(item.body)}</p>
                </div>
                `).join("")}
            </div>
        </section>
    `;
}

function renderToolbox(data) {
    return `
        <section class="section" id="toolbox">
            ${renderSectionHead("04 Toolbox", "Core systems, platform, and operational technologies used in production." )}
            <div class="toolbox-grid">
                ${data.toolbox.map(row => `
                <div class="toolbox-card frame">
                    <span class="skill-category">${escapeHtml(row.category)}</span>
                    <div class="skill-items">
                        ${row.items.map(item => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
                    </div>
                </div>
                `).join("")}
            </div>
        </section>
    `;
}

function renderCerts(data) {
    return `
        <section class="section" id="credentials">
            ${renderSectionHead("05 Certifications", "Current credentials relevant to cloud administration and platform operations.")}
            <div class="cert-grid">
                ${data.certifications.map(cert => `
                <div class="cert-row frame">
                    <span class="cert-name">${escapeHtml(cert.name)}</span>
                    <span class="cert-year">${escapeHtml(cert.issuer)} · ${escapeHtml(cert.year)}</span>
                </div>
                `).join("")}
            </div>
        </section>
    `;
}

function renderFooter(data) {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    if (!data.footer) {
        footer.hidden = true;
        footer.textContent = "";
        return;
    }

    footer.hidden = false;
    footer.textContent = data.footer;
}

document.addEventListener("DOMContentLoaded", () => {
    const data = window.siteContent;
    if (!data) return;

    renderHeader(data);

    document.getElementById("app").innerHTML =
        renderHero(data) +
        renderStory(data) +
        renderExperience(data) +
        renderImpact(data) +
        renderToolbox(data) +
        renderCerts(data);

    renderFooter(data);
});



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

function renderMetaList(items) {
    return items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function renderHero(data) {
    return `
        <section class="hero-shell section">
            <div class="hero-copy">
                <h1 class="hero-name">${escapeHtml(data.profile.name)}</h1>
                <p class="hero-bio">${escapeHtml(data.profile.bio)}</p>
                <p class="hero-role">${escapeHtml(data.profile.role)}</p>
                <div class="hero-meta">${renderMetaList(data.profile.meta)}</div>
                <div class="hero-links">
                    <a href="mailto:${escapeHtml(data.profile.email)}">email</a>
                    <a href="${escapeHtml(data.profile.linkedin)}" target="_blank" rel="noreferrer">linkedin</a>
                    <a href="${escapeHtml(data.profile.github)}" target="_blank" rel="noreferrer">github</a>
                    <a href="resume.html">resume</a>
                </div>
                <ul class="signal-list">
                    ${data.signals.map((item) => `
                        <li>
                            <strong>${escapeHtml(item.value)}</strong>
                            <span>${escapeHtml(item.label)}</span>
                        </li>
                    `).join("")}
                </ul>
            </div>
        </section>
    `;
}

function renderStory(data) {
    return `
        <section class="section" id="story">
            ${renderSectionHead("01 Story", "The path from support work to infrastructure ownership to reliability engineering.")}
            <div class="story-prose">
                <p class="story-lead">I care about the systems behind delivery, but also about the people who have to live with those systems every day.</p>
                ${data.story.intro.map((paragraph) => `<p class="story-paragraph">${escapeHtml(paragraph)}</p>`).join("")}
            </div>
            <div class="chapter-list">
                ${data.story.chapters.map((chapter) => `
                    <article class="chapter-item">
                        <p class="chapter-step">${escapeHtml(chapter.step)}</p>
                        <div class="chapter-copy">
                            <h3 class="chapter-title">${escapeHtml(chapter.title)}</h3>
                            <p class="chapter-body">${escapeHtml(chapter.body)}</p>
                        </div>
                    </article>
                `).join("")}
            </div>
            <div class="principle-block">
                <p class="subhead">How I work</p>
                <div class="principle-list">
                    ${data.story.principles.map((principle) => `
                        <article class="principle-item">
                            <p class="principle-title">${escapeHtml(principle.title)}</p>
                            <p class="principle-body">${escapeHtml(principle.body)}</p>
                        </article>
                    `).join("")}
                </div>
            </div>
        </section>
    `;
}

function renderExperience(data) {
    return `
        <section class="section" id="experience">
            ${renderSectionHead("02 Experience", "Roles across reliability engineering, infrastructure, and operations ownership.")}
            ${data.experience.map(role => `
                <article class="job">
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
            <div class="impact-list">
                ${data.impact.map(item => `
                <article class="impact-item">
                    <p class="impact-context">${escapeHtml(item.context)}</p>
                    <p class="impact-title">${escapeHtml(item.title)}</p>
                    <p class="impact-body">${escapeHtml(item.body)}</p>
                </article>
                `).join("")}
            </div>
        </section>
    `;
}

function renderToolbox(data) {
    return `
        <section class="section" id="toolbox">
            ${renderSectionHead("04 Toolbox", "Core systems, platform, and operational technologies used in production." )}
            <div class="toolbox-list">
                ${data.toolbox.map(row => `
                <div class="toolbox-row">
                    <span class="skill-category">${escapeHtml(row.category)}</span>
                    <p class="skill-items">${row.items.map((item) => escapeHtml(item)).join(" / ")}</p>
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
            <div class="cert-list">
                ${data.certifications.map(cert => `
                <div class="cert-row">
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



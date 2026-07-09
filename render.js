function useTemplate(id) {
    return document.getElementById(id).content.cloneNode(true);
}

function useTemplateEl(id) {
    return useTemplate(id).firstElementChild;
}

function buildButton(tplId, label, url) {
    const btn = useTemplateEl(tplId);
    btn.value = label;
    btn.addEventListener('click', () => window.open(url, '_blank', 'noopener,noreferrer'));
    return btn;
}

function renderHeader() {
    document.getElementById('logo').src = SITE.header.logo;
    const menuGroup = document.getElementById('menu_group');
    SITE.header.menu.forEach((m) => {
        const a = document.createElement('a');
        a.href = m.href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        const img = document.createElement('img');
        img.className = 'menu';
        img.src = m.icon.startsWith('.') || m.icon.startsWith('http') ? m.icon : `https://skillicons.dev/icons?i=${m.icon}`;
        a.appendChild(img);
        menuGroup.appendChild(a);
    });
}

function renderProfile() {
    document.getElementById('profile').src = SITE.profile.img;
    const linksEl = document.getElementById('profile-links');
    SITE.profile.links.forEach((link, i) => {
        const a = document.createElement('a');
        a.href = link.href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = link.label;
        linksEl.appendChild(a);
        if (i < SITE.profile.links.length - 1) linksEl.appendChild(document.createTextNode('・'));
    });
}

function buildNavDot(navItem, currentId) {
    const dot = useTemplateEl('tpl-nav-dot');
    dot.setAttribute('href', `#${navItem.id}`);
    if (navItem.id === currentId) dot.style.zIndex = '2';
    return dot;
}

function buildSectionTitle(navItem) {
    const frag = useTemplate('tpl-section-title');
    frag.querySelector('.section_title').id = navItem.id;
    frag.querySelector('.sticky_inner h1').textContent = navItem.label;
    const dotGroup = frag.querySelector('.dot_group');
    SITE.nav.forEach((n) => dotGroup.appendChild(buildNavDot(n, navItem.id)));
    return frag;
}

function insertSectionTitles() {
    SITE.nav.forEach((navItem) => {
        const contentEl = document.getElementById(`${navItem.id}-content`);
        const anchor = contentEl.closest('.container_inner') || contentEl;
        anchor.parentNode.insertBefore(buildSectionTitle(navItem), anchor);
    });
}

function buildCoreGroup(groupData, prefix) {
    const wrap = document.createElement('div');
    wrap.className = `${prefix}_group`;
    wrap.id = groupData.id;

    const heading = document.createElement('h2');
    heading.innerHTML = groupData.headingHtml;
    wrap.appendChild(heading);

    const list = document.createElement('ul');
    list.className = 'career_list';
    groupData.bullets.forEach((b) => {
        const li = document.createElement('li');
        li.innerHTML = b;
        list.appendChild(li);
    });
    wrap.appendChild(list);

    return wrap;
}

function renderCore() {
    const container = document.getElementById('about-content');
    container.appendChild(buildCoreGroup(SITE.coreSystem, 'system'));
    container.appendChild(buildCoreGroup(SITE.coreCost, 'cost'));
}

function buildCareerLinks(links) {
    const wrap = document.createElement('div');
    wrap.className = 'career_links';
    links.forEach((l) => {
        const a = useTemplateEl('tpl-career-link');
        a.href = l.href;
        const img = a.querySelector('img');
        img.src = l.img;
        img.alt = l.alt || '';
        wrap.appendChild(a);
    });
    return wrap;
}

function buildEntryBlocks(blocks) {
    const fragment = document.createDocumentFragment();

    blocks.forEach((block) => {
        const headline = document.createElement('div');
        headline.className = 'career_headline';
        headline.textContent = block.headline;
        fragment.appendChild(headline);

        const blockEl = document.createElement('div');
        blockEl.className = 'career_block';
        block.groups.forEach((group, gi) => {
            if (gi > 0) blockEl.appendChild(document.createElement('br'));
            if (group.title) {
                const groupTitle = document.createElement('div');
                groupTitle.className = 'career_block_title';
                groupTitle.textContent = group.title;
                blockEl.appendChild(groupTitle);
            }
            const ul = document.createElement('ul');
            ul.className = 'career_list';
            group.items.forEach((html) => {
                const li = document.createElement('li');
                li.innerHTML = html;
                ul.appendChild(li);
            });
            blockEl.appendChild(ul);
        });
        fragment.appendChild(blockEl);
    });

    return fragment;
}

function buildCareerEntry(entry) {
    const wrapper = document.createElement('div');

    if (entry.title) {
        const titleBlock = useTemplateEl('tpl-career-title-block');
        titleBlock.querySelector('.career_title').textContent = entry.title;
        const linksWrap = titleBlock.querySelector('.career_title_links');
        if (entry.serviceUrl) linksWrap.appendChild(buildButton('tpl-text-button', '서비스 보기 ↗', entry.serviceUrl));
        if (entry.extraLinks) entry.extraLinks.forEach((l) => linksWrap.appendChild(buildButton('tpl-text-button', l.label, l.url)));
        wrapper.appendChild(titleBlock);
    }

    const summary = document.createElement('div');
    summary.className = 'career_summary_box';
    summary.innerHTML = entry.summaryHtml;
    wrapper.appendChild(summary);

    if (entry.tags && entry.tags.length) {
        const tagsWrap = document.createElement('div');
        tagsWrap.className = 'career_tags';
        entry.tags.forEach((t) => {
            const span = useTemplateEl('tpl-career-tag');
            span.textContent = t;
            tagsWrap.appendChild(span);
        });
        wrapper.appendChild(tagsWrap);
    }

    if (entry.blocks && entry.blocks.length) {
        const details = document.createElement('div');
        details.className = 'career_details is-open';
        details.appendChild(buildEntryBlocks(entry.blocks));
        wrapper.appendChild(details);
    }

    return wrapper;
}

function buildCareerItem(item) {
    const el = useTemplateEl('tpl-career-item');

    const logo = el.querySelector('.career_logo_wrap');
    logo.src = item.logo.src;
    logo.alt = item.logo.alt || '';

    el.querySelector('.career_company').textContent = item.company;

    const roleEl = el.querySelector('.career_role');
    if (item.role) roleEl.textContent = item.role;
    else roleEl.remove();

    el.querySelector('.career_period').textContent = item.period;

    const linksSlot = el.querySelector('.career_links');
    if (item.links && item.links.length) linksSlot.replaceWith(buildCareerLinks(item.links));
    else linksSlot.remove();

    const right = el.querySelector('.career_right');
    item.entries.forEach((entry, idx) => {
        const entryEl = buildCareerEntry(entry);
        if (idx > 0) entryEl.style.marginTop = '56px';
        right.appendChild(entryEl);
    });

    return el;
}

function renderCareer() {
    const container = document.getElementById('career-content');
    SITE.career.forEach((item) => container.appendChild(buildCareerItem(item)));
}

function renderProjects() {
    const container = document.getElementById('projects-content');
    SITE.projects.forEach((item) => container.appendChild(buildCareerItem(item)));
}

function buildActivityItem(activity) {
    const el = useTemplateEl('tpl-activity-item');
    el.querySelector('h1').textContent = activity.title;
    el.querySelector('.activity_period').textContent = activity.period;

    const desc = el.querySelector('.activity_desc');
    desc.innerHTML = activity.descHtml;
    if (activity.button) {
        desc.appendChild(document.createTextNode(' '));
        desc.appendChild(buildButton('tpl-text-button', activity.button.label, activity.button.url));
    }

    return el;
}

function renderActivities() {
    const container = document.getElementById('activities-content');
    SITE.activities.forEach((a) => container.appendChild(buildActivityItem(a)));
}

function initStickyObserver() {
    document.querySelectorAll('.section_title').forEach((title) => {
        const sentinel = title.previousElementSibling;
        if (!sentinel || !sentinel.classList || !sentinel.classList.contains('sticky_sentinel')) return;

        const observer = new IntersectionObserver(
            ([entry]) => { title.classList.toggle('is-stuck', !entry.isIntersecting); },
            { root: null, rootMargin: '0px 0px 0px 0px', threshold: 0 },
        );
        observer.observe(sentinel);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderProfile();
    insertSectionTitles();
    renderCore();
    renderCareer();
    renderProjects();
    renderActivities();
    initStickyObserver();
});

// ---------- helpers ----------
function mediaEl(item, isTile) {
  if (item.type === "video") {
    return `<video src="${item.src}" ${isTile ? "muted playsinline preload='metadata'" : "controls autoplay"} ${isTile ? "" : ""}></video>`;
  }
  return `<img src="${item.src}" alt="${item.caption || ''}" loading="lazy">`;
}

function placeholderBox(item) {
  return `<div class="ph-inner">${item.type === "video" ? "🎬 video" : "📷 photo"}<br><span style="opacity:.7">${item.src.split('/').pop()}</span></div>`;
}

// crude check: does src look like a real uploaded file or still the placeholder sample?
function isPlaceholder(src) {
  return /placeholder-\d+\.(jpg|jpeg|png|mp4)$/i.test(src);
}

// ---------- PAGE 1: timeline ----------
function renderTimeline() {
  const container = document.getElementById("timeline");
  if (!container || typeof STORY === "undefined") return;

  STORY.forEach((item, i) => {
    const entry = document.createElement("div");
    entry.className = "entry";

    const dayLabel = i === 0 ? "Day 1" : (i === STORY.length - 1 ? "Today" : item.date);

    const photoInner = isPlaceholder(item.src)
      ? `<div class="entry-photo placeholder">${placeholderBox(item)}</div>`
      : `<div class="entry-photo">${mediaEl(item, true)}</div>`;

    entry.innerHTML = `
      <div class="entry-card">
        <span class="day">${dayLabel}</span>
        <span class="cap">${item.caption}</span>
      </div>
      <div class="entry-node"></div>
      ${photoInner}
    `;
    container.appendChild(entry);
  });

  revealOnScroll(document.querySelectorAll(".entry"));
}

// ---------- PAGE 2: gallery ----------
function renderGallery() {
  const grid = document.getElementById("grid");
  if (!grid || typeof MEMORIES === "undefined") return;

  const newestFirst = [...MEMORIES].reverse();

  newestFirst.forEach((item) => {
    const tile = document.createElement("div");
    tile.className = "tile";

    if (isPlaceholder(item.src)) {
      tile.classList.add("placeholder");
      tile.innerHTML = `
        ${placeholderBox(item)}
        <div class="meta"><span class="d">${item.date}</span><span class="c">${item.caption}</span></div>
      `;
    } else {
      tile.innerHTML = `
        <div class="tile-inner">
          ${item.type === "video" ? '<span class="video-badge">▶ video</span>' : ""}
          ${mediaEl(item, true)}
        </div>
        <div class="meta"><span class="d">${item.date}</span><span class="c">${item.caption}</span></div>
      `;
      tile.addEventListener("click", () => openLightbox(item));
    }
    grid.appendChild(tile);
  });

  revealOnScroll(document.querySelectorAll(".tile"));
}

// ---------- lightbox ----------
function openLightbox(item) {
  const lb = document.getElementById("lightbox");
  const content = document.getElementById("lbContent");
  const cap = document.getElementById("lbCap");
  if (!lb) return;
  content.innerHTML = mediaEl(item, false);
  cap.textContent = `${item.date} — ${item.caption}`;
  lb.classList.add("open");
}
document.addEventListener("click", (e) => {
  if (e.target.id === "lbClose" || e.target.id === "lightbox") {
    document.getElementById("lightbox").classList.remove("open");
    document.getElementById("lbContent").innerHTML = "";
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const lb = document.getElementById("lightbox");
    if (lb) { lb.classList.remove("open"); document.getElementById("lbContent").innerHTML = ""; }
  }
});

// ---------- scroll reveal ----------
function revealOnScroll(nodes) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  nodes.forEach((n) => io.observe(n));
}

renderTimeline();
renderGallery();
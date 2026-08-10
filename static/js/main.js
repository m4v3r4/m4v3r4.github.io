(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const savedTheme = localStorage.getItem("theme");

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    themeButton?.setAttribute("aria-label", theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç");
    if (themeMeta) themeMeta.content = theme === "dark" ? "#0d100f" : "#f1efe8";
  };

  if (savedTheme === "dark" || savedTheme === "light") {
    setTheme(savedTheme);
  } else {
    setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  themeButton?.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  const asciiArt = document.querySelector("[data-ascii-art]");
  const asciiState = document.querySelector("[data-ascii-state]");
  const asciiFrame = document.querySelector("[data-ascii-frame]");
  if (asciiArt) {
    const frames = [
`      ·              *
  ·          o
         .---+---.
     fikir   |   soru
         '---+---'
             |
          [  ·  ]

       sinyal aranıyor`,
`      ·---------*
      |          |
  ·---+      o---+
      \\      /
       \\    /
        [ 01 ]
           |
       düşünce.tmp`,
`   [anı]       [soru]
      \\          /
       \\        /
        +--(o)--+
            |
        [ işleniyor ]
            |
         % 42`,
`   fikir_01  ─┐
   gözlem_07 ──┼──> [ yazı ]
   soru_12   ──┘         |
                         v
                   kayit.md

        bütünlük: % 87`,
`       ┌──────────────┐
       │   KAYDEDİLDİ  │
       └──────┬───────┘
              |
      ~/kayitlar/001.md

       değişime açık
       bağlantı kalıcı`,
`      *              ·
          yeni sinyal
              o
              |
         [ dinleniyor ]
              |
           _

      akış devam ediyor`
    ];
    const states = ["CAPTURING", "CONNECTING", "PROCESSING", "WRITING", "SAVED", "LISTENING"];
    let currentFrame = 0;
    const renderFrame = (index) => {
      asciiArt.textContent = frames[index];
      if (asciiState) asciiState.textContent = states[index];
      if (asciiFrame) asciiFrame.textContent = `FRAME ${String(index + 1).padStart(2, "0")}/${String(frames.length).padStart(2, "0")}`;
    };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      renderFrame(4);
    } else {
      renderFrame(0);
      window.setInterval(() => {
        if (document.visibilityState !== "visible") return;
        currentFrame = (currentFrame + 1) % frames.length;
        renderFrame(currentFrame);
      }, 900);
    }
  }

  const progressBar = document.querySelector(".reading-progress span");
  const article = document.querySelector(".article-content");
  if (progressBar && article) {
    const updateProgress = () => {
      const start = article.getBoundingClientRect().top + window.scrollY;
      const distance = article.offsetHeight - window.innerHeight;
      const percent = distance > 0 ? Math.min(100, Math.max(0, ((window.scrollY - start) / distance) * 100)) : 100;
      progressBar.style.width = `${percent}%`;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  document.querySelector("[data-scroll-top]")?.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const dialog = document.querySelector(".search-dialog");
  const input = dialog?.querySelector("[data-search-input]");
  const results = dialog?.querySelector("[data-search-results]");
  const info = dialog?.querySelector("[data-search-info]");
  let index = [];
  let activeIndex = -1;
  let loadingPromise;

  const normalize = (value = "") => value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const escapeHtml = (value = "") => value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);

  const loadIndex = () => {
    if (loadingPromise) return loadingPromise;
    const url = document.body.dataset.searchIndex;
    loadingPromise = fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Arama dizini yüklenemedi.");
        return response.json();
      })
      .then((data) => { index = data; })
      .catch(() => {
        if (info) info.textContent = "Arama şu anda kullanılamıyor.";
      });
    return loadingPromise;
  };

  const setActive = (next) => {
    const links = [...(results?.querySelectorAll(".search-result") || [])];
    if (!links.length) return;
    activeIndex = (next + links.length) % links.length;
    links.forEach((link, i) => link.classList.toggle("is-active", i === activeIndex));
    links[activeIndex].scrollIntoView({ block: "nearest" });
  };

  const renderResults = () => {
    if (!input || !results || !info) return;
    const query = normalize(input.value.trim());
    activeIndex = -1;
    if (!query) {
      results.innerHTML = "";
      info.textContent = `${index.length} yazı içinde arama yapın.`;
      return;
    }

    const terms = query.split(/\s+/).filter(Boolean);
    const matches = index.filter((item) => {
      const haystack = normalize([item.title, item.description, ...(item.tags || [])].join(" "));
      return terms.every((term) => haystack.includes(term));
    }).slice(0, 8);

    info.textContent = matches.length ? `${matches.length} sonuç bulundu.` : "Sonuç bulunamadı.";
    results.innerHTML = matches.length ? matches.map((item) => `
      <a class="search-result" href="${escapeHtml(item.url)}">
        <time>${escapeHtml(item.date)}</time>
        <span><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.description)}</p></span>
        <small>${item.readingTime} dk ↗</small>
      </a>
    `).join("") : '<div class="search-empty">eşleşen bir yazı yok :/</div>';
  };

  const openSearch = async () => {
    if (!dialog) return;
    dialog.showModal();
    if (info) info.textContent = "Arama dizini yükleniyor...";
    await loadIndex();
    renderResults();
    input?.focus();
  };

  document.querySelectorAll("[data-search-open]").forEach((button) => button.addEventListener("click", openSearch));
  dialog?.querySelector("[data-search-close]")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  input?.addEventListener("input", renderResults);
  input?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") { event.preventDefault(); setActive(activeIndex + 1); }
    if (event.key === "ArrowUp") { event.preventDefault(); setActive(activeIndex - 1); }
    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      results?.querySelectorAll(".search-result")[activeIndex]?.click();
    }
  });
  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable;
    if (event.key === "/" && !isTyping && !dialog?.open) {
      event.preventDefault();
      openSearch();
    }
  });
})();

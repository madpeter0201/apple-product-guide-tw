(() => {
  const catalog = window.CATALOG;
  const products = catalog.groups.flatMap(group => group.products.map(product => ({ ...product, series: group.name })));
  const picker = document.querySelector("#product-picker");
  const groupsRoot = document.querySelector("#product-groups");
  const search = document.querySelector("#product-search");
  const filters = document.querySelector("#series-filters");
  const emptyState = document.querySelector("#empty-state");
  let activeSeries = "全部系列";
  let query = "";

  document.title = `${catalog.title}｜展場銷售指南`;
  document.querySelector(".brand span:last-child").textContent = catalog.title;
  document.querySelector("#product-count").textContent = `${products.length}`;
  document.querySelector("#fine-print").textContent = catalog.finePrint;
  document.querySelector("#footer-note").textContent = `${catalog.updatedAt} 更新 · ${catalog.footerNote}`;

  const productArt = (product, compact = false) => {
    const image = catalog.options?.[product.id]?.image;
    if (image) return `<span class="product-photo-wrap${compact ? " compact" : ""}"><img class="product-photo" src="${image}" alt="${product.name} 商品圖片" loading="lazy"></span>`;
    return `
      <span class="product-art ${product.tone} device-${product.device || "display"}${compact ? " compact" : ""}" aria-hidden="true">
        <span class="art-glow"></span><span class="art-device"><span>${product.art}</span></span>
        ${compact ? "" : `<span class="art-caption">${product.shortName}</span>`}
      </span>`;
  };

  const matches = product => {
    const found = `${product.name} ${product.model} ${product.series}`.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    return found && (activeSeries === "全部系列" || activeSeries === product.series);
  };

  function renderFilters() {
    const names = ["全部系列", ...catalog.groups.map(group => group.name)];
    filters.innerHTML = names.map(name => `<button class="filter-chip${activeSeries === name ? " active" : ""}" type="button" data-series="${name}" aria-pressed="${activeSeries === name}">${name}</button>`).join("");
    filters.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
      activeSeries = button.dataset.series;
      renderFilters();
      renderCatalog();
    }));
  }

  function renderCatalog() {
    const shown = products.filter(matches);
    picker.innerHTML = shown.map((product, index) => `
      <a class="picker-card" href="#${product.id}" aria-label="跳到 ${product.name}，型號 ${product.model}">
        <span class="picker-art-wrap">${productArt(product, true)}</span>
        <span class="picker-meta"><span class="picker-series">${product.series}</span><strong>${product.shortName}</strong><span>${product.model}</span></span>
        <span class="picker-number">${String(index + 1).padStart(2, "0")}</span>
      </a>`).join("");

    groupsRoot.innerHTML = catalog.groups.map(group => {
      const groupProducts = group.products.map(product => ({ ...product, series: group.name })).filter(matches);
      if (!groupProducts.length) return "";
      return `
        <section class="series-group" aria-labelledby="series-${slug(group.name)}">
          <div class="series-heading"><div><h3 id="series-${slug(group.name)}">${group.name}</h3><p>${group.description}</p></div><span>${groupProducts.length} 款</span></div>
          <div class="sales-grid">${groupProducts.map(productCard).join("")}</div>
        </section>`;
    }).join("");
    emptyState.hidden = shown.length > 0;
  }

  function productCard(product) {
    const options = catalog.options?.[product.id] || {};
    return `
      <article class="sales-card" id="${product.id}">
        <div class="card-visual ${product.tone}">
          <span class="card-index">${String(products.indexOf(products.find(item => item.id === product.id)) + 1).padStart(2, "0")} / ${String(products.length).padStart(2, "0")}</span>
          ${productArt(product)}
          <span class="series-tag">${product.series}</span>
        </div>
        <div class="card-content">
          <div class="product-title-row"><div><p class="model-code">${product.model}</p><h4>${product.name}</h4></div><span class="price">${product.price || "洽詢現場"}</span></div>
          <div class="product-specs" aria-label="顏色、容量與價格">
            <div class="spec-row"><span class="spec-label">顏色</span><span>${options.colors || "依款式選擇"}</span></div>
            <div class="spec-row"><span class="spec-label">容量／規格</span><span>${options.capacity || "依機型選擇"}</span></div>
            <div class="spec-row"><span class="spec-label">價格</span><span>${options.prices || product.price || "請洽官方商店"}</span></div>
          </div>
          <div class="pitch-block"><span class="field-label">適合對象</span><p>${product.fit}</p></div>
          <div class="pitch-block question-block"><span class="field-label">第一句這樣問</span><p>${product.opener}</p></div>
          <div class="pitch-block"><span class="field-label">三個主要賣點</span><ol class="selling-points">${product.points.map((point, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span>${point}</li>`).join("")}</ol></div>
          ${product.note ? `<div class="caution"><span aria-hidden="true">i</span><p>${product.note}</p></div>` : ""}
          ${product.specUrl ? `<a class="spec-link" href="${product.specUrl}" target="_blank" rel="noopener noreferrer">查看 Apple 官方產品頁 <span aria-hidden="true">↗</span></a>` : `<span class="spec-link disabled">Apple 官方產品頁待補</span>`}
        </div>
      </article>`;
  }

  function slug(text) { return text.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-"); }

  document.querySelector("#highlight-grid").innerHTML = catalog.highlights.map(item => `
    <article class="highlight-card ${item.theme}">
      <p class="highlight-eyebrow">${item.eyebrow}</p><h3>${item.title}</h3><p class="highlight-body">${item.body}</p>
      ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.linkText} <span aria-hidden="true">↗</span></a>` : `<span class="highlight-link disabled">${item.linkText}</span>`}
    </article>`).join("");

  search.addEventListener("input", event => { query = event.target.value.trim(); renderCatalog(); });
  renderFilters();
  renderCatalog();
})();

(() => {
  'use strict';
  const matches = (variant, selection) => Object.entries(selection).every(([key, value]) => variant[key] === value);
  const cheapest = variants => variants.slice().sort((a, b) => a.price - b.price)[0];
  const base = (product, variant) => cheapest(product.variants.filter(item => matches(item, {
    size: variant.size, color: variant.color, glass: variant.glass, configurationId: variant.configurationId
  })));
  const configurations = (product, variant) => {
    const candidates = product.variants.filter(item => matches(item, {size: variant.size, color: variant.color, glass: variant.glass}));
    return [...new Set(candidates.map(item => item.configurationId))].map(id => cheapest(candidates.filter(item => item.configurationId === id))).sort((a, b) => a.price - b.price);
  };
  const choose = (product, current, changes) => {
    let candidates = product.variants.filter(item => matches(item, changes));
    for (const key of ['color', 'size', 'glass', 'configurationId', 'memory', 'storage']) {
      if (key in changes) continue;
      const retained = candidates.filter(item => item[key] === current[key]);
      if (retained.length) candidates = retained;
    }
    return cheapest(candidates) || current;
  };
  const capacities = (product, variant, key) => {
    const fixed = {size: variant.size, color: variant.color, glass: variant.glass, configurationId: variant.configurationId};
    fixed[key === 'memory' ? 'storage' : 'memory'] = variant[key === 'memory' ? 'storage' : 'memory'];
    return product.variants.filter(item => matches(item, fixed)).sort((a, b) => parseInt(a[key], 10) - parseInt(b[key], 10));
  };
  window.ProledConfigurator = {base, configurations, choose, capacities, matches};
})();

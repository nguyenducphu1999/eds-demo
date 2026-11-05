/*
 * Minimal EDS block loader.
 * For production, start from the current Adobe EDS boilerplate so you inherit
 * the latest accessibility, metadata, decoration and loading utilities.
 */
export function decorateBlocks(main) {
  main.querySelectorAll('div[class]').forEach((block) => {
    const name = [...block.classList].find((item) => item !== 'section');
    if (name) block.dataset.blockName = name;
  });
}

export async function loadBlocks(main) {
  const blocks = [...main.querySelectorAll('div[class]')];
  await Promise.all(blocks.map(async (block) => {
    const name = [...block.classList].find((item) => item !== 'section');
    if (!name || block.dataset.loaded) return;
    try {
      const mod = await import(`../blocks/${name}/${name}.js`);
      if (mod.default) await mod.default(block);
      block.dataset.loaded = 'true';
    } catch (error) {
      // A missing optional block should not prevent the rest of the page loading.
      console.warn(`Unable to load block: ${name}`, error);
    }
  }));
}

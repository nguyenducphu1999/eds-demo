import './aem.js';
import '../styles/styles.css';
import { decorateBlocks, loadBlocks } from './aem.js';

async function loadPage() {
  const regions = [...document.querySelectorAll('main, .page-header, .page-footer')];
  regions.forEach((region) => decorateBlocks(region));
  await Promise.all(regions.map((region) => loadBlocks(region)));
}

loadPage();

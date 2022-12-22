import './style.css';

export function Filter(onChange) {
  const getTemplate = () =>
  `
    <div class="header">
      Filter Your Selection
    </div>
    <div class="filter">
      <input checked="checked" class="filter-input" id="easy" type="checkbox" name="forSale">
      <label class="filter-button" for="easy">For sale</label>
      <input checked class="filter-input" id="medium" type="checkbox" name="sold">
      <label class="filter-button" for="medium">Sold</label>
    </div>
  `;

  const container = document.createElement('form');
  container.innerHTML = getTemplate();

  container.querySelectorAll('input').forEach((item) => {
    item.addEventListener('change', onChange);
  });

  return container;
}
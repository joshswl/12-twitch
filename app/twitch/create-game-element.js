export default function createGameElement(item) {
  const gridItem = document.createElement('div');

  gridItem.classList.add('grid__item');
  gridItem.innerHTML = `
  <div class="grid__item">
    <img src="" class="game__image">
    <h4 class="game__name"></h4>
    <h5 class="game__popularity"></h5>

  </div>`;

  gridItem.querySelector('.game__image').src = item.game.box.large;
  gridItem.querySelector('.game__name').innerText = item.game.name;
  gridItem.querySelector('.game__popularity').innerText = item.game.popularity;

  return gridItem;
}

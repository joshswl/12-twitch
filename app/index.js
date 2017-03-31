import 'whatwg-fetch';
import createGameElement from './twitch/create-game-element';
import gameList from './data';

const grid = document.querySelector('.grid');

grid.innerHTML = '';

gameList.top.forEach((game) => {
  const gameElement = createGameElement(game);

  grid.appendChild(gameElement);
});

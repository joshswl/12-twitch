import createGameElement from './create-game-element';

export default function addGamesToList(list, data) {
  const item = createGameElement(data);

  list.appendChild(item);
}

import {getRamdomArray} from './utils.js';

const repeatingDays = {
  'mo': true,
  'tu': false,
  'we': true,
  'th': false,
  'fr': false,
  'sa': true,
  'su': false,
};

const task = {
  title: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: getRamdomArray([...new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`
  ])], 4),
  picture: `//picsum.photos/100/100?r=${Math.random()}`,
  color: [...new Set([
    `black`, `yellow`, `blue`, `green`, `pink`
  ])][Math.floor(Math.random() * 4)],
  repeatingDays,
  isRepeat: [...Object.entries(repeatingDays)].some((it) => it[1]),
  isFavorite: false,
  isDone: false
};

export {task};

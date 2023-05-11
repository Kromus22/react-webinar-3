const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

/*Склонение слов. Конкретно тут именно под слово раз.
Потому что оно уникалньо, как и шаурма. у него лишь 2 формы (раз и раза) */
export const declOfNum = (number) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const titles = ['раз', 'раза', 'раз'];
  let wordForm;

  if (number === 0) {
    wordForm = titles[2];
  } else if (number % 100 > 4 && number % 100 < 20) {
    wordForm = titles[2];
  } else {
    wordForm = titles[cases[Math.min(number % 10, 5)]];
  }

  return wordForm;
}

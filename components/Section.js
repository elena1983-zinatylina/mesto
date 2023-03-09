  export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._items = items; //это массив данных
      this._renderer = renderer; //это функция, которая отвечает за создание и отрисовку данных на странице
      this._container = document.querySelector(containerSelector);
    }

  //метод, который отвечает за отрисовку всех элементов

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
// метод принимает DOM-элемент и добавляет его в контейнер.
  addItem(item) {
    this._container.prepend(item);
  }
}


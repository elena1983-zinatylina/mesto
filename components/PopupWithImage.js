import Popup from "./Popup.js";

 class PopupWithImage extends Popup {
  constructor(popupSelector, popupFigureImage, popupFigureCaption) {
		super(popupSelector);
		this._placeImage = popupFigureImage;
		this._titleImage = popupFigureCaption;
    
	}

open(name, link) {
		//передаем параметры карточки (картинка)
		this._placeImage.src = link;
		this._placeImage.alt = name;
		//передаем параметры карточки (название)
		this._titleImage.textContent = name;

		super.open();
	}
}

export default PopupWithImage


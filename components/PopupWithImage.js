import {Popup} from "./Popup.js";

 class PopupWithImage extends Popup {
  constructor(popupSelector, popupFigureImage, popupFigureCaption) {
		super(popupSelector);
		this._popupFigureImage = popupFigureImage;
		this._popupFigureCaption = popupFigureCaption;
    
	}

open(name, link) {
		//передаем параметры карточки (картинка)
		this._popupFigureImage.src = link;
		this._popupFigureImage.alt = name;
		//передаем параметры карточки (название)
		this._popupFigureCaption.textContent = name;

		super.open();
	}
}

export default PopupWithImage


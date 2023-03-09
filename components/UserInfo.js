 export default class UserInfo {
  constructor({dataNameSelector, dataDescriptionSelector}) {
		this._elementName = document.querySelector(dataNameSelector);
		this._elementDescription = document.querySelector(dataDescriptionSelector);
	}

	getUserInfo() {
		return {
			name: this._elementName.textContent,
			description: this._elementDescription.textContent
		  }
		}
	  

	setUserInfo({name, description}) {
		this._elementName.textContent = name;
		this._elementDescription.textContent = description;
	}
 }
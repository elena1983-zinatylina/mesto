export default class UserInfo {
	constructor({ dataName, dataDescription }) {
		this._elementName = document.querySelector(dataName);
		this._elementDescription = document.querySelector(dataDescription)
	}
	getUserInfo() {
		return {
			name: this._elementName.textContent,
			description: this._elementDescription.textContent
		}
	}

	setUserInfo(data) {
		this._elementName.textContent = data.name;
		this._elementDescription.textContent = data.description;
	}
}
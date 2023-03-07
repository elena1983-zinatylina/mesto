 class UserInfo {
  constructor({dataName, dataDescription}) {
		this._nameElement = document.querySelector(dataName);
		this._descriptionElement = document.querySelector(dataDescription);
	}

	getUserInfo() {
		const data = {
			name: this._nameElement.textContent,
			description: this._descriptionElement.textContent,
		}
		return data;
	}

	setUserInfo(data) {
		this._nameElement.textContent = data.name;
		this._descriptionElement.textContent = data.description;
	}
}
  export default UserInfo
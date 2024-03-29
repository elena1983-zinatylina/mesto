export default class UserInfo {
	constructor({ name, description, avatar }) {
		this._name = document.querySelector(name);
		this._description = document.querySelector(description);
		this._avatar = document.querySelector(avatar);
	}

	getUserInfo() {
		const userInfo = {
			name: this._name.textContent,
			description: this._description.textContent,
			avatar: this._avatar.src
		}

		return userInfo;
	}

	setUserInfo(data) {
		this._name.textContent = data.name;
		this._description.textContent = data.about;
		this._avatar.src = data.avatar;
	}

}

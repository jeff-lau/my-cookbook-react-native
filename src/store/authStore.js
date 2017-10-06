import { observable } from 'mobx'

class AuthStore {

	@observable authDetails = {
		data: {}
	}

	constructor() {
		this.setAuthDetails = this.setAuthDetails.bind(this)
		this.clearAuthDetails = this.clearAuthDetails.bind(this)
	}

	setAuthDetails(data) {
		this.authDetails.data = data
	}

	clearAuthDetails() {
		this.authDetails.data = {}
	}
}

export default AuthStore
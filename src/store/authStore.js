import mobx, { observable, action } from 'mobx'

mobx.useStrict(true)
var instance = null
class AuthStore {

	@observable authDetails = {
		data: {}
	}

	@action.bound
	setAuthDetails(data) {
		this.authDetails.data = data
	}

	@action.bound
	clearAuthDetails() {
		this.authDetails.data = {}
	}

	static getInstance() {
		if (instance == null) {
			instance = new AuthStore()
		}
		return instance
	}
}

export default AuthStore
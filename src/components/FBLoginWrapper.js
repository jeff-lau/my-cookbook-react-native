import React, { Component } from 'react'
import * as firebase from 'firebase'
var { FBLogin } = require('react-native-facebook-login');

class FBLoginWrapper extends Component {

	auth = firebase.auth()

	constructor(props) {
		super(props)
		this.facebookLogin = this.facebookLogin.bind(this)
		this.facebookLogout = this.facebookLogout.bind(this)
	}

	facebookLogin(data) {
		const { authStore } = this.props
		let token = firebase.auth.FacebookAuthProvider.credential(data.credentials.token)
		this.auth.signInWithCredential(token).then((data) => {
			authStore.setAuthDetails(data)
		}).catch((e) => {
			console.log("Login failed")
			console.log(e)
		})
	}

	facebookLogout() {
		const { authStore } = this.props
		this.auth.signOut().catch((e) => console.log(e))
	}

	render() {
		return (
			<FBLogin onLogin={this.facebookLogin} onLogout={this.facebookLogout} />
		)
	}
}

export default FBLoginWrapper
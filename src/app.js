import React, { Component } from 'react'
import * as firebase from 'firebase'
import Routes from './routes'
import AuthStore from './store/authStore'

const firebaseConfig = {
	apiKey: "AIzaSyBpDfBUSC5y41bn3FSIbIvy8_TmdL20PvE",
	authDomain: "my-cookbook-a5536.firebaseapp.com",
	databaseURL: "https://my-cookbook-a5536.firebaseio.com",
	storageBucket: "my-cookbook-a5536.appspot.com",
}

class App extends Component {

	constructor(props) {
		super(props)
		firebase.initializeApp(firebaseConfig)
		firebase.auth().onAuthStateChanged((function(user) {
			if (user) {
				AuthStore.getInstance().setAuthDetails(user)
			} else {
				AuthStore.getInstance().clearAuthDetails()
			}
		}).bind(this));
	}

	render() {
		return (<Routes />)
	}
}

export default App
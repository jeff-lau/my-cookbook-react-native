import React, { Component } from 'react'
import * as firebase from 'firebase'
import { View, StyleSheet } from 'react-native'
import Login from './components/login'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Home from './components/home'
import RecipeList from './components/recipeList'
import RecipesStore from './store/recipesStore'
import Settings from './components/settings'
import Recipe from './components/recipe'
import AuthStore from './store/authStore'
import { observer } from "mobx-react"

const firebaseConfig = {
	apiKey: "AIzaSyBpDfBUSC5y41bn3FSIbIvy8_TmdL20PvE",
	authDomain: "my-cookbook-a5536.firebaseapp.com",
	databaseURL: "https://my-cookbook-a5536.firebaseio.com",
	storageBucket: "my-cookbook-a5536.appspot.com",
}

@observer
class App extends Component {

	authStore = AuthStore.getInstance()
	recipesStore = RecipesStore.getInstance()

	recipesNavigator = StackNavigator({
		RecipeList: { screen: (props) => (<RecipeList {...props.navigation.state.params} navigation={props.navigation} recipesStore={this.recipesStore} />) },
		Recipe: {
			screen: (props) => (<Recipe navigation={props.navigation} {...props.navigation.state.params} recipesStore={this.recipesStore} />),
			path: '/recipe/:recipeKey'
		},
	})

	RoutedApp = TabNavigator({
		Home: { screen: Home },
		RecipeList: { screen: this.recipesNavigator },
		Settings: { screen: (props) => (<Settings authStore={this.authStore} />) }
	}, {
		tabBarPosition: 'bottom',
		animationEnabled: true,
		tabBarOptions: {
			activeTintColor: '#e91e63',
		}
	});

	constructor(props) {
		super(props)
		firebase.initializeApp(firebaseConfig)
		this.state = {
			authLoaded: false
		}

		firebase.auth().onAuthStateChanged((function(user) {
			if (user) {
				this.authStore.setAuthDetails(user)
			} else {
				this.authStore.clearAuthDetails()
			}
		}).bind(this));

	}

	render() {
		const { authDetails } = this.authStore
		const { RoutedApp : App} = this
		return (
			<View style={styles.container}>
				{
					authDetails.data.uid ? <App /> : <Login authStore={this.authStore} />
				}
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
})

export default App
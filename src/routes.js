import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Login from './components/login'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Home from './components/home'
import RecipeList from './components/recipeList'
import NewRecipe from './components/newRecipe'
import RecipesStore from './store/recipesStore'
import Settings from './components/settings'
import Recipe from './components/recipe'
import ImageBrowser from './components/imageSelector/imageBrowser'
import AuthStore from './store/authStore'
import { observer } from "mobx-react"

@observer
class AppRoutes extends Component {

	authStore = AuthStore.getInstance()
	recipesStore = RecipesStore.getInstance()

	Tabs = TabNavigator({
		Home: { screen: Home },
		RecipeList: { screen: (props) => (<RecipeList {...props.navigation.state.params} navigation={props.navigation} recipesStore={this.recipesStore} />) },
		NewRecipe: {
			screen: (props) => (<NewRecipe {...props.navigation.state.params} navigation={props.navigation} />)
		},
		Settings: { screen: (props) => (<Settings authStore={this.authStore} />) }
	}, {
		tabBarPosition: 'bottom',
		animationEnabled: true,
		tabBarOptions: {
			activeTintColor: '#e91e63',
		}
	});

	MainNavigator = StackNavigator({
		Home: { screen: this.Tabs },
		Recipe: {
			screen: (props) => (<Recipe navigation={props.navigation} {...props.navigation.state.params} recipesStore={this.recipesStore} />),
			path: '/recipe/:recipeKey'
		},
		ImageSelection: {
			screen: (props) => (<ImageBrowser {...props.navigation.state.params} navigation={props.navigation} />)
		}
	})

	constructor(props) {
		super(props)
	}

	render() {
		const { authDetails } = this.authStore
		const { MainNavigator : App} = this
		return (
				authDetails.data.uid ? <App /> :
				<View style={styles.container}>
					<Login authStore={this.authStore} />
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
		width: '100%',
		height: '100%',
	}
})

export default AppRoutes
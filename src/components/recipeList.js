import React, { Component } from 'react'
import {ScrollView, View, Text, StyleSheet } from 'react-native'
import { Icon, List, ListItem } from 'react-native-elements'
import { observer } from "mobx-react"

@observer
class RecipeList extends Component {

	static navigationOptions = {
		tabBarLabel: 'Recipes',
		tabBarIcon: <Icon name='list' type='feather' />
	}


	constructor(props) {
		super(props)
		this.onPress = this.onPress.bind(this)
	}

	componentDidMount() {
		this.props.recipesStore.loadRecipeSummaries()
	}

	onPress(recipekey) {
		this.props.navigation.navigate('Recipe', { recipekey })
	}

	render() {
		const { recipesStore } = this.props
		const { recipes } = recipesStore

		return(
			<ScrollView style={styles.container}>
				<Text>Hello this is Recipe List!</Text>

				<List containerStyle={{marginBottom: 20, marginTop: 20}}>
					{
						Array.from(recipes.values()).map((recipe) => {

							const {imageURL, dishName, dishDescription, recipeKey} = recipe

							return(
								<ListItem
									roundAvatar
									avatar={{uri:imageURL}}
									key={recipeKey}
									subtitle={dishDescription}
									title={dishName}
									onPress={() => (this.onPress(recipeKey))}
								/>
							)
						})
					}
				</List>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container : {
		paddingTop: 20
	}
})

export default RecipeList
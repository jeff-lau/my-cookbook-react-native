import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { observer } from 'mobx-react'
import mobx from 'mobx'

@observer
class Recipe extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { recipekey, recipesStore } = this.props
		recipesStore.loadRecipeDetails(recipekey)
	}

	render() {
		const { recipesStore } = this.props
		const recipe = recipesStore.selectedRecipe
		if (mobx.toJS(recipe)) {
			return (
				<ScrollView>
					<Text>{recipe.dishName}</Text>
					<Text>{recipe.dishDescription}</Text>
				</ScrollView>
			)
		} else {
			return ''
		}
	}

}
export default Recipe
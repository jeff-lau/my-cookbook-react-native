import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
	}

	componentDidMount() {

	}

	render() {

		const { recipesStore } = this.props
		const { recipes } = recipesStore

		return(
			<View style={styles.container}>
				<Text>Hello this is Recipe List!</Text>

				<List containerStyle={{marginBottom: 20, marginTop: 20}}>
					{
						recipes.slice().map((recipe) => {
							return(
								<ListItem
									roundAvatar
									avatar={{uri:recipe.imageURL}}
									key={recipe.key}
									title={recipe.dishName} />
							)
						})
					}
				</List>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container : {
	}
})

export default RecipeList
import React, { Component } from 'react'
import { View, ScrollView, ImageBackground, Text, StyleSheet, FlatList } from 'react-native'
import { List, ListItem } from 'react-native-elements'
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

		if (recipe) {
			const { ingredients, dishName, steps, imageURL, dishDescription } = recipe
			let ingredientsArray = []
			if (ingredients) {
				ingredients.forEach((ingredient, index) => (ingredientsArray.push({ key: index, value: ingredient})))
			}

			return (
				<ImageBackground source={{uri: imageURL}} style={styles.background}>
					<ScrollView style={styles.textPanel} >
						<Text style={styles.heading}>{dishName}</Text>

						<Text style={styles.heading}>Ingredients</Text>
						<View style={styles.viewSection}>
							<FlatList
								data={ingredientsArray}
								renderItem={({item}) => <Text style={styles.text}>{item.value}</Text>}
							/>
						</View>

						<View style={styles.viewSection}>
							<Text style={styles.heading}>Method</Text>
							<List containerStyle={{marginBottom: 20, backgroundColor: 'transparent'}}>
								{
									steps.map((step, index) => (
										<ListItem
											titleStyle={{ color: 'white'}}
											avatar={{uri:step.imageURL}}
											key={index}
											title={step.description}
										/>
									))
								}
							</List>
						</View>

					</ScrollView>
				</ImageBackground>
			)
		} else {
			return <View><Text>Loading..</Text></View>
		}
	}

}

const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%',
	},

	viewSection: {
		paddingBottom: 20
	},

	heading: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		paddingBottom: 10
	},
	text: {
		color: 'white'
	},
	textPanel: {
		backgroundColor: 'rgba(0,0,0,.6)',
		padding:20,
		//opacity: 0.3
	}
})
export default Recipe
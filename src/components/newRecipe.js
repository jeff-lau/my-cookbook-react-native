import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

class NewRecipe extends Component {

	constructor(props) {
		super(props)
		this.openPhotoBrowser = this.openPhotoBrowser.bind(this)
	}

	openPhotoBrowser() {
		this.props.navigation.navigate('ImageSelection')
	}

	render() {
		return(
			<ScrollView style={styles.container}>
				<Text>New recipe form here!</Text>
				<Icon name="add-a-photo" type="MaterialIcons" onPress={this.openPhotoBrowser} />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20
	}
})

export default NewRecipe
import React, { Component } from 'react'
import { View, ImageBackground, Text, StyleSheet } from 'react-native'
import FBLoginWrapper from './FBLoginWrapper'

class Login extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<ImageBackground source={require('../assets/images/food_background2.jpg')} style={styles.backgroundImage}>
				<Text style={styles.title}>My Cookbook</Text>
				<FBLoginWrapper />
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		position: 'absolute',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center'
	},

	title: {
		backgroundColor: 'transparent',
		color: 'white',
		marginBottom: 10,
		fontSize: 25,
		fontWeight: 'bold'
	},

	buttonContainer: {
		borderWidth: 2,
		borderColor: 'white',
		paddingLeft: 20,
		paddingRight: 20
	}
});

export default Login

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Button } from 'react-native-elements'

class Home extends Component {

	static navigationOptions = {
		tabBarLabel: 'Home',
		tabBarIcon: <Icon name='home' type='feather' />
	}

	constructor(props) {
		super(props)
	}

	render() {
		return(
			<Text style={{color: 'black'}}>Hello this is Home View!</Text>
		)
	}

}

export default Home
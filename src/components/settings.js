import React, { Component } from 'react'
import FBLoginWrapper from './FBLoginWrapper'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

class Settings extends Component {

	static navigationOptions = {
		tabBarLabel: 'Settings',
		tabBarIcon: <Icon name='settings' type='feather' />
	}

	render() {
		return (
			<View style={styles.container}>
				<FBLoginWrapper authStore={this.props.authStore}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
})
export default Settings
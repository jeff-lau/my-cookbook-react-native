import React, { Component } from 'react'
import ImageBrowser from './imageBrowser'
import { Icon } from 'react-native-elements'

class ImageSelector extends Component {

	constructor(props) {
		super(props)
		this.onPress = this.onPress.bind(this)
	}

	onPress() {
		this.props.navigation.navigate('ImageBrowser')
	}

	render() {
		return (
				<Icon name="add-a-photo" type="MaterialIcons" onPress={this.onPress} />
		)
	}
}

export default ImageSelector
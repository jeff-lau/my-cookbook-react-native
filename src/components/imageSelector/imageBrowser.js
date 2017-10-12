import React, { Component } from 'react'
import { Text, ScrollView, Image, StyleSheet, Dimensions, CameraRoll } from 'react-native'

class ImageBrowser extends Component {

	constructor(props) {
		super(props)
		this.state = {
			showPhotos: false,
			photos: []
		}

	}

	componentDidMount() {
		CameraRoll.getPhotos({ first: 50}).then(res => {
			this.setState({
				showPhotos: true,
				photos: res.edges
			})
		})
	}

	render() {
		const { showPhotos, photos } = this.state
		var {height, width} = Dimensions.get('window')
		return (

			showPhotos ?
			<ScrollView contentContainerStyle={styles.container}>
				{
					photos.map((photo) => (
						<Image source={{ uri: photo.node.image.uri}} style={{ width: width/4 , height: width / 4}}/>
					))
				}
			</ScrollView> : <Text>Loading photos...</Text>
		)
	}


}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		width: '100%',
		height: '100%'
	},

	cell: {

	}
})

export default ImageBrowser
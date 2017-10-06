import { observable } from 'mobx'

class recipesStore {
	@observable recipes = [
		{
			key: '-Kv651BDzbLgaI-39oTu',
			imageURL: 'https://firebasestorage.googleapis.com/v0/b/my-cookbook-a5536.appspot.com/o/images%2FQc2CXfqbCQNEzUm1JQAWCPiosw03%2F918470a9-0a89-4737-825d-991aa8041964%2F547e2c66-654f-4cfd-9d60-44b8539f8b70?alt=media&token=e7f689d1-8a30-479e-b1f2-3370745e102c',
			dishName: 'Pineapple Prawn Salad'
		}
	]

	addRecipe(key, recipe) {
		this.recipes[key] = recipe
	}

	getRecipes() {
		return this.recipes
	}

	loadRecipesFromFireBase() {

	}

}

export default recipesStore
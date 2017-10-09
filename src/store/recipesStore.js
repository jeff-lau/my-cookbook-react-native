import mobx, { observable, action } from 'mobx'
import * as firebase from 'firebase'
import AuthStore from './authStore'

mobx.useStrict(true)

var instance = null
class RecipesStore {
	@observable recipes = new Map()
	@observable selectedRecipe = {}

	addRecipe(key, recipe) {
		this.recipes[key] = recipe
	}

	getRecipes() {
		return this.recipes
	}

	@action.bound
	_loadRecipeSuccess(snapshots, recipeKeys) {
		snapshots.forEach((snapshot, index) => (this.recipes.set(recipeKeys[index], { ...snapshot.val(), recipeKey: recipeKeys[index] })))
	}

	@action.bound
	loadRecipeSummaries() {
		try {
			const db = firebase.database()
			const { uid } = AuthStore.getInstance().authDetails.data
			db.ref(`users`).child(uid).once('value').then(snapshot => {
				const user = snapshot.val()
				const recipeKeysObj = user.recipes
				const recipeKeys = Object.values(recipeKeysObj);
				Promise.all(recipeKeys.map( key => (db.ref(`recipes`).child(key).once('value')))).then(snapshot => (this._loadRecipeSuccess(snapshot, recipeKeys)))
			})
		} catch (e) {
			console.log(e)
		}
	}

	@action.bound
	loadRecipeDetails(key) {
		const db = firebase.database()
		db.ref(`recipeDetails`).child(key).once('value').then(snapshot => {
			this.loadRecipeDetailsSuccess(snapshot, key)
		})
	}

	@action.bound
	loadRecipeDetailsSuccess(snapshot, key) {
		this.selectedRecipe = {
			...this.recipes.get(key),
			...snapshot.val()
		}
	}

	static getInstance() {
		if (instance === null) {
			instance = new RecipesStore()
		}
		return instance
	}

}

export default RecipesStore
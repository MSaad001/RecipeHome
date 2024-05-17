import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('TestRecipe', 'This is a test recipe', 'https://images.freeimages.com/images/large-previews/4e6/food-1329024.jpg'),
    new Recipe('Chicken Pulao', 'The tasty adventure starts when you smell the great chicken pulao being cooked nearby', 'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/021d144c10c84d9b91fdfaf8068ce39e.png?resize=1000:*&output-format=auto&output-quality=auto')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
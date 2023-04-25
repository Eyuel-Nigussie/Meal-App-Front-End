<script>
  import FusionCharts from 'fusioncharts';
  import Charts from 'fusioncharts/fusioncharts.charts';
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
  import SvelteFC, {fcRoot} from 'svelte-fusioncharts';
  import Widgets from 'fusioncharts/fusioncharts.widgets';
  import dataSource from '../chart_data';

  // chart
  fcRoot(FusionCharts, Charts, FusionTheme);

  let chartConfig = {
    type: 'pie3d',
    width: '600',
    height: '400',
    renderAt: 'chart-container',
    dataSource
  };


export let params;
let recipe_row = params.recipe
let recipe = decodeURIComponent(recipe_row)
recipe = JSON.parse(recipe)
console.log('recipe ingredient is below')
console.log(recipe.ingredients[1].name)
</script>

<div class="pl-8 p-4 mx-auto">

  <div class="px-4 sm:px-0">
    <h3 class="text-base font-semibold leading-7 text-gray-900">Recipe Information</h3>
    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">nutrition details and application.</p>
  </div>
    <div class="mt-6 border-t border-gray-100">
      <div class="mb-4">
        <img
          src={recipe.picture}
          class="h-52 md:h-60 mx-auto max-w-full rounded-full"
          alt="" />
      </div>
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Recipe Name</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{recipe.name}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Recipe Description</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{recipe.description}</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Cooking Time</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{recipe.cooking_time} mins</dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Collection</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{recipe.collection}</dd>
        </div>
        
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">ingredients</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              {#each recipe.ingredients as ingredient}
                <li class="py-2">
                    {ingredient.name}
                </li>
              {/each}  
            </ul>  
          </dd>
       </div>
       <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Cooking Steps</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">            {#each recipe.steps as step}
              <li class="py-2">
                  {step.description}
              </li>
            {/each}  
          </ol>  
        </dd>
     </div>

        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"> 
            <SvelteFC {...chartConfig} />
        </div>

        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete Recipe</button>
        </div>
      </dl>
    </div>
  </div>
  
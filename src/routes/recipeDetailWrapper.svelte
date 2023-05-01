<script>
  import axios from 'axios';
  import { push } from 'svelte-spa-router';

  import FusionCharts from 'fusioncharts';
  import Charts from 'fusioncharts/fusioncharts.charts';
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
  import SvelteFC, {fcRoot} from 'svelte-fusioncharts';
  import Widgets from 'fusioncharts/fusioncharts.widgets';
  import dataSource from '../chart_data';
  import Modal from '../lib/Modal.svelte';

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
let message = '';
let messageLoading = true;

  $: addShopping = async (id) => {
      const token = localStorage.getItem('access_token')
      const user_id = localStorage.getItem('user_id');
      const res = await axios.post(`http://127.0.0.1:8000/recipes/shopping/${id}`, {
        
        }, {
          headers: {
              Authorization: `Bearer ${token}`
          },
        })
        .then((response) => {
            message = response.statusText
            messageLoading = false;
            console.log(response.statusText)
        })
        .catch((error) => {
            message = error
            messageLoading = false;
            console.log(error)
        });
  };

  addShopping = async (id) => {
  try {
    const token = localStorage.getItem('access_token')
    const user_id = localStorage.getItem('user_id');
    const res = await axios.post(`http://127.0.0.1:8000/recipes/shopping/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    message = res.statusText
    messageLoading = false;
    console.log(res.statusText)
  } catch (error) {
    message = error
    messageLoading = false;
  }
};





async function deleteRecipe(id) {
  const token = localStorage.getItem('access_token')
  const response = await fetch(`http://localhost:8000/recipes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });
  if (response.ok) {
    const data = await response.json();
    message = data;
    messageLoading = false;
    push('/recipes')
    message = data;
    messageLoading = false;
    console.log(response.statusText)
  } else {
    message = response.statusText;
    messageLoading = false;
    console.log(response.statusText)
  }
}

</script>

<div class="pl-8 p-4 mx-auto">
  {#if messageLoading}
{:else}
<Modal {message} />
{/if}
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
                <li class="container py-2 flex justify-between">
                    {ingredient.name}
                    <div on:click|preventDefault={addShopping(ingredient.id)} class="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
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
          <button on:click|preventDefault={deleteRecipe (recipe.id)} type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete Recipe</button>
        </div>
      </dl>
    </div>
  </div>
  
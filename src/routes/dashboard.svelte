<script>
<<<<<<< HEAD
// @ts-nocheck
  import {onMount} from 'svelte'
	import {createTodos} from '../store'
//  ========== chart ====================== 
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import SvelteFC, {fcRoot} from 'svelte-fusioncharts';
import dataSource from '../chart_data';

fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: '500',
  height: '500',
  dataFormat: 'json',
  dataSource
};

let chartObj,
    chartConfig = {
      id: 'column-chart',
      type: 'column2d',
      width: '600',
      height: '350',
      renderAt: 'chart-container',
      dataSource
    };
    let chartObjz,
    chartConfigz = {
      type: 'pie2d',
      width: '600',
      height: '400',
      renderAt: 'chart-container',
      dataSource 
    };

=======
  import {createTodos} from '../store'
  import { onMount } from 'svelte';

  let recipes;
  let recipesLoading = true;
  let recipeKeys;
  let ingredients;
  let ingredientsLoading = true;
>>>>>>> cdef76d (fetch shopping)

	let uid = 1;

	let initialTodos = [
		{ id: uid++, done: false, description: 'write some docs' },
		{ id: uid++, done: false, description: 'start writing blog post' },
		{ id: uid++, done: true,  description: 'buy some milk' },
		{ id: uid++, done: false, description: 'mow the lawn' },
		{ id: uid++, done: false, description: 'feed the turtle' },
		{ id: uid++, done: false, description: 'fix some bugs' },
	];


onMount(async () => {
  const token = localStorage.getItem('access_token');

  // Fetch ingredients

  try {
    ingredients = await fetch('http://127.0.0.1:8000/recipes/shopping', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
    }).then((response) => response.json());
      const updatedTodos = initialTodos.map(todo => {
      const matchingIngredient = ingredients.find(ingredient => ingredient.name.toLowerCase() === todo.description.toLowerCase());
      if (matchingIngredient) {
        return { ...todo, description: matchingIngredient.name };
      }
      return todo;
      ingredientsLoading = false;  });
    } catch (error) {
    console.log('Error fetching ingredients:', error);
    }

  // Fetch recipes

  try {
    recipes = await fetch('http://127.0.0.1:8000/recipes', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
    }).then((response) => response.json());
      recipeKeys = Object.keys(recipes);
      // console.log(recipes);
      recipesLoading = false;
  } catch (error) {
    console.log('Error fetching recipes:', error);
  }
});


  // onMount( async () => {
  //   let ingridients
  //   const token = localStorage.getItem('access_token') 
  //   let loading = true
  // try{
  //   ingridients = await fetch('http://127.0.0.1:8000/recipes/shopping',{
  //   method:  'GET',
  //   headers: {
  //    Authorization: `Bearer ${token}`
  //   },
  //   }).then((response) => { return response.json()})
  //       //  keys  =  Object.keys(recipes);
  //        console.log(ingridients)
  //        loading = false;
  //   }catch(e){
  //     console.log('error')
  //   }
  // })


	
const todos = createTodos(initialTodos)


<<<<<<< HEAD
//*********** recipes preferences ***********/**

let recipes   //store the recipes from db
let keys
let loading = true
const token = localStorage.getItem('access_token') 

onMount( async () => {
  try{
    recipes = await fetch('http://127.0.0.1:8000/recipes',{
    method:  'GET',
    headers: {
     Authorization: `Bearer ${token}`
    },
    }).then((response) => { return response.json()})
         keys  =  Object.keys(recipes);
         console.log(recipes)
         loading = false;
    }catch(e){
      console.log('error')
    }
})
=======
//*********** recipes preferences
// import {onMount} from 'svelte'
// onMount( async () => {
//   const token = localStorage.getItem('access_token') 
//   let recipes   //store the recipes from db
// let keys
// let loading = true
//   try{
//     recipes = await fetch('http://127.0.0.1:8000/recipes',{
//     method:  'GET',
//     headers: {
//      Authorization: `Bearer ${token}`
//     },
//     }).then((response) => { return response.json()})
//          keys  =  Object.keys(recipes);
//          console.log(recipes)
//          loading = false;
//     }catch(e){
//       console.log('error')
//     }
// })
>>>>>>> cdef76d (fetch shopping)

</script>

<div id="board p-5">
  <div class="max-w-[36em] mx-auto">
    <SvelteFC {...chartConfigs} />
    <SvelteFC {...chartConfig} bind:chart={chartObj} />
    <SvelteFC {...chartConfigz} bind:chart={chartObjz} />

  </div>
  
  
  <!-- ================================================== -->
  <div class='grid grid-cols-2 gap-2 md:gap-5 max-w-[44em] mx-auto p-5 bg-red-50'>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900  dark:text-white">Shopping <span class="text-red-600 dark:text-blue-500">List</span></h1>  
    <input
       class="text-lg col-span-2 py-4"
      placeholder=" What needs to be bought?"
      on:keydown={e => {
        const id = uid++
        e.key === 'Enter' && todos.add(e.target, id)
      }}
    >

    <div class='left'>
      <h2 class="text-2xl font-light select-none mb-2">To be bought</h2>
      {#each $todos.filter(t => !t.done) as todo (todo.id)}
        <label class="relative rounded-md select-none flex p-3 m-2 block w-full bg-white border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
          <input type=checkbox on:change={() => todos.toggle(todo, true)} class="absolute left-2 top-3">
          <div class="px-8">{todo.description}</div>
          <button on:click="{() => todos.remove(todo)}" style=" position: absolute;
            top: 0;
            right: 0.2em;
            width: 2em;
            height: 100%;
            background: no-repeat 50% 50% url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E');
            background-size: 1.4em 1.4em;
            border: none;
            opacity: 1;
            transition: opacity 0.2s;
            text-indent: -9999px;
            cursor: pointer;">remove</button>
        </label>
      {/each}
    </div>

    <div class='right'>
      <h2 class="text-2xl font-light select-none mb-2">Bought</h2>
      {#each $todos.filter(t => t.done) as todo (todo.id)}
        <label
        class="relative rounded-md select-none flex p-3 m-2 block w-full bg-white border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
          <input type=checkbox checked on:change={() => todos.toggle(todo, false)} class="absolute left-2 top-3">
          <div class="px-8">{todo.description}</div>  
          <button on:click="{() => todos.remove(todo)}">remove</button>
        </label>
      {/each}
    </div>
  </div>
</div>

<<<<<<< HEAD
  <!-- ================ recipes preference =============== -->
  <div class="md:hidden flex items-center justify-between p-4 font-large text-black">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">suggested <span class="text-red-600 dark:text-blue-500">Recipes</span></h1>  
  </div>
  <h1 class="hidden md:block mb-4 pl-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">suggested <span class="text-red-600 dark:text-blue-500">Recipes</span></h1>  
  
        {#if loading}
          <h1>Loading</h1>
        {:else}
          {#await recipes} 
            <h1>waiting...</h1>
          {:then recipes}
             {#each keys as recipe}
             
             <div class="md:hidden w-full hidden:lg rounded-xl border border-gray-200 bg-white py-4 px-2 shadow-md shadow-gray-100">
                <a href="/#/recipe/{encodeURIComponent(JSON.stringify(recipes[recipe]))}">       
                  <div class="flex max-h-[100vh] w-full flex-col overflow-y-scroll">
                    <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-red-100">
                      <div class="container bg-white flex row border border-gray-300 rounded-xl justify-between">
                        <div class="flex  overflow-hidden items-center justify-start" style="cursor: auto;">
                                                    
                                <div class="relative w-32 h-32 flex-shrink-0">
=======

<!-- ================ recipes preference =============== -->
<div class=" p-5">
      <div class="md:hidden flex items-center justify-between px-2  font-large text-black">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My <span class="text-red-600 dark:text-blue-500">Recipes</span></h1>  
      </div>
      <h1 class="hidden md:block mb-4 pl-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My <span class="text-red-600 dark:text-blue-500">Recipes</span></h1>  

            {#if recipesLoading}
              <h1>Loading</h1>
            {:else}
              {#await recipes} 
                <h1>waiting...</h1>
              {:then recipes}
                {#each recipeKeys as recipe}
                <div class="md:hidden w-full hidden:lg rounded-xl border border-gray-200 bg-white py-4 px-2 shadow-md shadow-gray-100">
                    <a href="/#/recipe/{encodeURIComponent(JSON.stringify(recipes[recipe]))}">       
                      <div class="flex max-h-[100vh] w-full flex-col overflow-y-scroll">
                        <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-red-100">
                          <div class="container bg-white flex row border border-gray-300 rounded-xl justify-between">
                            <div class="flex  overflow-hidden items-center justify-start" style="cursor: auto;">
                                                        
                                    <div class="relative w-32 h-32 flex-shrink-0">
                                                                  
                                      <div class="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                                                                      
                                        <img alt="Placeholder Photo" class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={recipes[recipe].picture}>
                                                                  
                                      </div>
>>>>>>> cdef76d (fetch shopping)
                                                              
                                  <div class="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                                    
                                    <img alt="Placeholder Photo" class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={recipes[recipe].picture}  >
                                                              
                                  </div>
                                                          
                                </div>
                                                          
                              <div class="p-4">
                                  <p class="text-sm line-clamp-1">{recipes[recipe].name}</p>
                                                          
                                    <p class="text-sm text-gray-500 mt-1 line-clamp-2">{recipes[recipe].description}</p>
                                                          
                                    <span class="flex items-center justify-start text-gray-500">
                                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
                                      </svg>
                                                                  Number of ingredient
                                    </span>                  
                              </div>
                        </div>
<<<<<<< HEAD
                        <div class="justify-self-end flex row pt-16">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="pr-4">{recipes[recipe].cooking_time} mins</p>
                        </div>
                     </div>
                   </button>
                 </div>
                </a>
             
  </div>
  {/each}
  <section class="hidden md:block bg-[#F3F4F6] pt-20 pb-10 mb-0 lg:pt-[120px] lg:pb-20">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        
  {#each keys as recipe}
  <!-- ====== Cards Section Start -->
  
        <div class="hidden md:block w-full px-4 md:w-1/2 xl:w-1/3 mb-8">
          <div class="mb-10 overflow-hidden rounded-lg bg-white">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
              src={recipes[recipe].picture}
              alt="image"
              class="w-full"
            />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
              <h3>
                <div
                  class="text-dark hover:text-primary mb-4 text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                >
                  {recipes[recipe].name}
=======
                      </button>
                    </div>
                    </a>
                
      </div>
      {/each}
      <section class="hidden md:block bg-[#F3F4F6] pt-20 pb-10 mb-0 lg:pt-[120px] lg:pb-20">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            
      {#each recipeKeys as recipe}
      <!-- ====== Cards Section Start -->
            <div class="w-full px-4 md:w-1/2 xl:w-1/3">
              <div class="mb-10 overflow-hidden rounded-lg bg-white">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img
                  src={recipes[recipe].picture}
                  alt="image"
                  class="w-full"
                />
                <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                    <div
                      class="text-dark hover:text-primary mb-4 text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                      {recipes[recipe].name}
                    </div>
                  </h3>
                  <p class="text-body-color mb-7 text-base leading-relaxed">
                    {recipes[recipe].description}
                  </p>
                  <a
                    href="/#/recipe/{recipes[recipe].id}"
                    class="text-body-color hover:border-primary hover:bg-red-600 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                  >
                    View Details
                  </a>
>>>>>>> cdef76d (fetch shopping)
                </div>
              </h3>
              <p class="text-body-color mb-7 text-base leading-relaxed">
                {recipes[recipe].description}
              </p>
              <a
                href="/#/recipe/{recipes[recipe].id}"
                class="text-body-color hover:border-primary hover:bg-red-600 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
       
  {/each}
       </div>
     </div>
  </section>
  
  
  
  {:catch error}
    <p>An error occurred!</p>
  {/await}
  {/if}
  
    

<!-- ================= End Preference ================================= -->

  <style>
    button {
      position: absolute;
      top: 0;
      right: 0.2em;
      width: 2em;
      height: 100%;
      background: no-repeat 50% 50% url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
      background-size: 1.4em 1.4em;
      border: none;
      opacity: 0;
      transition: opacity 0.2s;
      text-indent: -9999px;
      cursor: pointer;
    }

    label:hover button {
      opacity: 1;
    }
  </style>

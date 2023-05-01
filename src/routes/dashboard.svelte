<script>
// @ts-nocheck

  import {createTodos} from '../store'
  import { onMount } from 'svelte';

  import FusionCharts from 'fusioncharts';
  import Charts from 'fusioncharts/fusioncharts.charts';
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
  import SvelteFC, {fcRoot} from 'svelte-fusioncharts';
  import dataSource from '../chart_data.js';
  
  import Modal from '../lib/Modal.svelte';
  //============ chart ==================
  fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: '600',
  height: '400',
  dataFormat: 'json',
  dataSource
};

let chartConfig = {
    type: 'pie3d',
    width: '600',
    height: '400',
    renderAt: 'chart-container',
    dataSource
  };
  //========= end chart ===================

  let recipes;
  let recipesLoading = true;
  let recipeKeys;
  let ingredients;
  let ingredientsLoading = true;

//suggested
let keys
let loading = true
const token = localStorage.getItem('access_token') 




//========   shopping      ================

	let uid = 1;

	let initialTodos = [
		{ id: uid++, done: false, description: 'Onion' },
		{ id: uid++, done: false, description: 'Meat' },
		{ id: uid++, done: true,  description: 'Oil' },
		{ id: uid++, done: false, description: 'Sugar' },
		{ id: uid++, done: false, description: 'Apple' },
		{ id: uid++, done: false, description: 'Shero' },
	];

  
  const todos = createTodos(initialTodos)

//=========== end shopping  ===============

 
  let message = '';
  let messageLoading = true;
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
      ingredientsLoading = false;  
      return todo;});
    } catch (error) {
    console.log('Error fetching ingredients:', error);
    }

 // Fetch suggested recipes
    try{
    recipes = await fetch('http://127.0.0.1:8000/recipes/suggestion',{
    method:  'GET',
    headers: {
     Authorization: `Bearer ${token}`
    },
    }).then((response) => { return response.json()})
         keys  =  Object.keys(recipes);
         message = 'success'
         messageLoading = false
         loading = false;
    }catch(e){
      message = e
      messageLoading = false
    }


// fetch shopping list
     try{
         // Use a WebSocket to receive updates from the server
	       const socket = new WebSocket("ws://127.0.0.1:8000/ws/shopping");
	       socket.addEventListener("message", (event) => {
          console.log('shopping ingredients are')
	        console.log(JSON.parse(event.data));
         });
         console.log('shopping ingredients are')
         console.log(ingredients)
      }
      catch(error){
         message = error.message;
         messageLoading = false;
     }
});


</script>
<!-- ================================================== -->
{#if messageLoading}

{:else}
<Modal {message} />
{/if}
<div id="container" class="md:ml-48 lg:ml-[420PX] pb-12">
  <SvelteFC {...chartConfigs} class="mx-auto"/>  
  <SvelteFC {...chartConfig} />
</div>
<!-- <div class='board p-5 bg-red-100'>
  <h2>Shopping List</h2>
	<input
		placeholder=" What needs to be bought?"
		on:keydown={e => {
			const id = uid++
			e.key === 'Enter' && todos.add(e.target, id)
		}}
	>

	<div class='left'>
		<h2>To be bought</h2>
		{#each $todos.filter(t => !t.done) as todo (todo.id)}
			<label class="flex p-3 block w-full bg-white border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
				<input type=checkbox on:change={() => todos.toggle(todo, true)} class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
				<div class="px-8">{todo.description}</div>
				<button on:click="{() => todos.remove(todo)}">remove</button>
			</label>
		{/each}
	</div>

	<div class='right'>
		<h2>Bought</h2>
		{#each $todos.filter(t => t.done) as todo (todo.id)}
			<label
				class="flex p-3 block w-full bg-white border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 done"
			>
				<input type=checkbox checked on:change={() => todos.toggle(todo, false)}>
				<div class="px-8">{todo.description}</div>  
				<button on:click="{() => todos.remove(todo)}">remove</button>
			</label>
		{/each}
	</div>
</div> -->
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
        <button on:click="{() => todos.remove(todo) }" class="bg-red-50 ml-32" >X</button>
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
        <button on:click="{() => todos.remove(todo)}" class="bg-red-50 ml-32">X</button>
      </label>
    {/each}
  </div>
</div>

<!-- ================ recipes preference =============== -->
<div class=" p-5">
      <div class="md:hidden flex items-center justify-between px-2  font-large text-black">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Suggested <span class="text-red-600 dark:text-red-500">Recipes</span></h1>  
      </div>
      <h1 class="hidden md:block mb-4 pl-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Suggested <span class="text-red-600 dark:text-red-500">Recipes</span></h1>  

            <!-- svelte-ignore empty-block -->
  
            {#if loading}
 
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
                                                                
                                    <div class="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                                                                    
                                      <img alt="Placeholder Photo" class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={recipes[recipe].picture}>
                                                                
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
                  href="/#/recipe/{encodeURIComponent(JSON.stringify(recipes[recipe]))}"
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
    
      
              
</div>


<script>
     import axios from 'axios';
    import { onMount } from 'svelte'; 
	  import MultiSelect from './MultiSelect.svelte';
    import Dropzone from "svelte-file-dropzone";

    let name = '', description = '', cooking_time = '', collection = '', picture= ''

  let files = {
    accepted: [],
    rejected: []
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }

	let value;
    let ing = [
        {id: 1, name: 'flour'},
        {id: 2, name: 'sugar'},
        {id: 3, name: 'egg'},
        {id: 4, name: 'oil'},
        {id: 5, name: 'shiro'},
        {id: 6, name: 'salad'},
        {id: 7, name: 'fish'},
        {id: 8, name: 'meser'},
        {id: 9, name: 'shiro'},
        {id: 10, name: 'ater'},
        {id: 11, name: 'injera'},
        {id: 12, name: 'brocolli'},
        {id: 13, name: 'onion'},
        {id: 14, name: 'venigar'},
        {id: 15, name: 'milk'}
    ]
    let ingredients = []
    
//     onMount(async (message) => {
//     const token = localStorage.getItem('access_token')
//     const response = await axios.get('http://127.0.0.1:8000/ingredients', {
//         headers: {
//              Authorization: `Bearer ${token}`
//         },
//     });

//     // const content = await response.json();

//     ingredients = response.data
//     alert(ingredients);
// })

let values=[{
			"step": ""
		}];

		const addField = () => {
			values = [...values, { step: ''}]
		};

		const removeField = () => {
			values = values.slice(0, values.length-1)
		};


//------------------- saving the recipe first ---------------
$: addRecipe = async () => {
    const token = localStorage.getItem('access_token')
    // await axios.post("http://127.0.0.1:8000/recipes", {
    //   name,
    //   description,
    //   cooking_time,
    //   collection,
    //   picture
    // })
      // if successful redirect to login page
      // await push("/login");
    const res = await axios.post('http://127.0.0.1:8000/recipes', {
        name,
        description,
        cooking_time,
        collection,
        picture
      }, {
        headers: {
             Authorization: `Bearer ${token}`
        },
      });
      // const token_is = res.data.headers['Content-Type']; // text/json
      const recipe_is = res.data
      console.log(recipe_is.id)
};
</script>


<div class="mb-20">
<form class="w-full mx-auto max-w-lg mb-10" on:submit|preventDefault={addRecipe}>
    <div class="flex flex-wrap -mx-3 mb-6">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Add <span class="text-red-600 dark:text-blue-500">Recipes</span></h1>  
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Recipe Name
        </label>    
        <input bind:value={name} class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="dr. abiy ( ye emama fishka)">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Description
        </label>
        <input bind:value={description} class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="dr. abiy ( ye emama fishka)">
        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
      </div>
    </div>
    
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Ingredients<br/>
            </label>    
            <MultiSelect id='lang' bind:value>
            {#each ing as ingredient, i}
              <!-- {console.log(ingredient.id)} -->{i}
              <option value={ingredient.id}>{ingredient.name}</option>
            {/each}
            </MultiSelect> 
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 ">
      {#each values as v, i}
      <div class="w-full px-3">
        <p class="text-gray-600 text-xs italic">Step {i+1}</p>       
        <input  bind:value={values[i].url} placeholder="write your step to cook your meal" class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="large_size" type="text"> 
      </div>
      {/each}
    </div>
    <!--{#if values.length >= 6}
      <input type="button" value="Remove" on:click={removeField}>
      {/if}-->
      <div class="mb-6">
        <button
         on:click|preventDefault={addField}
         type="button"
         class="inline-block rounded-full border-2 border-success px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        data-te-ripple-init>
          Add
      </button> 
      <button
        on:click|preventDefault={removeField}
        type="button"
        class="inline-block rounded-full border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        data-te-ripple-init>
          Remove  
      </button>
   </div>
   
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          Cooking Time
        </label>
        <input bind:value={cooking_time} class="appearance-none block w-full  text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
      </div>
      <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-state">
          State
        </label>
        <div class="relative">
          <select class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div> -->
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
          Collection
        </label>
        <input bind:value={collection} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="recipe collection catagory">
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
          Picture Link
        </label>
        <input bind:value={picture} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Picture Link">
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="large_size">Large file input</label>
          <input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file">        
          </div>
      </div>
    </div>
   
    <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
      save
    </button>
  </form>
  <!-- <p>
	Let's read the <code>value</code> of the MultiSelect:
</p>
{#if value && value.length}
	<ul>
		{#each value as val}
			<li>
				{val}
			</li>
		{/each}
	</ul>
{:else}
	<div>
		Nothing selected
	</div>
{/if} -->
    <!-- //   <label for="underline_select" class="sr-only">Underline select</label>
    //     <select id="underline_select" class="block py-2.5 px-0 mb-6 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
    //       <option selected>Choose a Collection</option>
    //       <option value="Traditional">Traditional</option>
    //       <option value="Breakfast">Breakfast</option>
    //       <o<p>
	Let's read the <code>value</code> of the MultiSelect:
</p>
{#if value && value.length}
	<ul>
		{#each value as val}
			<li>
				{val}
			</li>
		{/each}
	</ul>
{:else}
	<div>
		Nothing selected
	</div>ption value="Lunch">Lunch</option>
    //       <option value="Dinner">Dinner</option>
    //       <option value="Supper">Supper</option>
    //       <option value="kids">kids</option>
    //       <option value="Fasting">Fasting</option>
    //       <option value="Holiday">Holiday</option>
    //     </select>  -->


  <!-- component -->
</div>
<style>
  .top-100 {top: 100%}
  .bottom-100 {bottom: 100%}
  .max-h-select {
      max-height: 300px;
  }
</style>
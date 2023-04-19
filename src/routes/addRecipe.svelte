<script>
	import MultiSelect from './MultiSelect.svelte';
	let value;
    let ingredients = ['egg', 'cabage', 'flour', 'butter', 'vanilla', 'royal', 'fanta', 'juice', 'melon', 'drink',]
</script>



<form class="w-full mx-auto max-w-lg mb-10">
    <div class="flex flex-wrap -mx-3 mb-6">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Add <span class="text-red-600 dark:text-blue-500">Recipes</span></h1>  
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Recipe Name
        </label>    
        <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="dr. abiy ( ye emama fishka)">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Description
        </label>
        <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="dr. abiy ( ye emama fishka)">
        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Recipe Name
            </label>    
        
            <MultiSelect id='lang' bind:value>
            {#each ingredients as ingredient}
            <option value="{ingredient}">{ingredient}</option>
            {/each}
            </MultiSelect> 
        </div>
    </div>
    


     
<!-- <div class="w-full md:w-1/2 flex flex-col items-center h-64 mx-auto">
  <div class="w-full px-4">
      <div class="flex flex-col items-center relative">
          <div class="w-full  svelte-1l8159u">
              <div class="my-2 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u">
                  <div class="flex flex-auto flex-wrap">
                      <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                          <div class="text-xs font-normal leading-none max-w-full flex-initial">HTML</div>
                          <div class="flex flex-auto flex-row-reverse">
                              <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2">
                                      <line x1="18" y1="6" x2="6" y2="18"></line>
                                      <line x1="6" y1="6" x2="18" y2="18"></line>
                                  </svg>
                              </div>
                          </div>
                      </div>
                      <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                          <div class="text-xs font-normal leading-none max-w-full flex-initial">Ruby</div>
                          <div class="flex flex-auto flex-row-reverse">
                              <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2">
                                      <line x1="18" y1="6" x2="6" y2="18"></line>
                                      <line x1="6" y1="6" x2="18" y2="18"></line>
                                  </svg>
                              </div>
                          </div>
                      </div>
                      <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                          <div class="text-xs font-normal leading-none max-w-full flex-initial">Javascript</div>
                          <div class="flex flex-auto flex-row-reverse">
                              <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2">
                                      <line x1="18" y1="6" x2="6" y2="18"></line>
                                      <line x1="6" y1="6" x2="18" y2="18"></line>
                                  </svg>
                              </div>
                          </div>
                      </div>
                      <div class="flex-1">
                          <input placeholder="" class="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800">
                      </div>
                  </div>
                  <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                      <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4">
                              <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
          <div class="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
              <div class="flex flex-col w-full">
                  <div class="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                      <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                          <div class="w-full items-center flex">
                              <div class="mx-2 leading-6  ">Python </div>
                          </div>
                      </div>
                  </div>
                  <div class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                      <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-teal-600">
                          <div class="w-full items-center flex">
                              <div class="mx-2 leading-6  ">Javascript </div>
                          </div>
                      </div>
                  </div>
                  <div class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                      <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-teal-600">
                          <div class="w-full items-center flex">
                              <div class="mx-2 leading-6  ">Ruby </div>
                          </div>
                      </div>
                  </div>
                  <div class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                      <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                          <div class="w-full items-center flex">
                              <div class="mx-2 leading-6  ">JAVA </div>
                          </div>
                      </div>
                  </div>
                  <div class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                      <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                          <div class="w-full items-center flex">
                              <div class="mx-2 leading-6  ">ASP.Net </div>
                          </div>
                      </div>
                  </div>
                  <div class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                      <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                          <div class="w-full items-center flex">
                              <div class="mx-2 leading-6  ">C++ </div>
                          </div>
                      </div>
                  </div>
                  <div class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                      <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                          <div class="w-full items-center flex">
                              <div class="mx-2 leading-6  ">SQL </div>
                          </div>
                      </div>
                  </div>
                  <div class="cursor-pointer w-full border-gray-100 rounded-b hover:bg-teal-100">
                      <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative border-teal-600">
                          <div class="w-full items-center flex">
                              <div class="mx-2 leading-6  ">HTML </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div> -->

    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          Cooking Time
        </label>
        <input class="appearance-none block w-full  text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
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
          Zip
        </label>
        <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
      </div>        
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload multiple files</label>
     <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple>
    </div>
  </form>
  <p>
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
{/if}
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
<style>
  .top-100 {top: 100%}
  .bottom-100 {bottom: 100%}
  .max-h-select {
      max-height: 300px;
  }
</style>
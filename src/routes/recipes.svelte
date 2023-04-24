<script>
// @ts-nocheck
import {onMount} from 'svelte'
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



// 


// onMount(async () => {
//     const token = localStorage.getItem('access_token')
//     const response = await axios.get(' http://127.0.0.1:8000/recipes', {
//         headers: {
//              Authorization: `Bearer ${token}`
//         },
//     });

//     // const content = await response.json();

//     recipes = response.data;
//     console.log(recipes.json());
// })

</script>	
<div class="md:hidden flex items-center justify-between px-2  font-large text-black">
  <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My <span class="text-red-600 dark:text-blue-500">Recipes</span></h1>  
</div>
<h1 class="hidden md:block mb-4 pl-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My <span class="text-red-600 dark:text-blue-500">Recipes</span></h1>  

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
              href="/#/recipe/{recipes[recipe].id}"
              class="text-body-color hover:border-primary hover:bg-red-600 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src={recipes[recipe].picture}
            alt="image"
            class="w-full"
          />
          <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href="javascript:void(0)"
                class="text-dark hover:text-primary mb-4 bloc text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
              {recipes[recipe].name}
              </a>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
              Lorem consectetur adipiscing elit.
            </p>
            <a
              href="javascript:void(0)"
              class="text-body-color hover:border-primary hover:bg-slate-800 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-743c8bb884248984a26db5eea6df3756-pjlq"
            alt="image"
            class="w-full"
          />
          <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href="/#/recipe/23"
                class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                Kurt sega
              </a>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
              Lorem consectetur adipiscing elit.
            </p>
            <a
              href="/#/recipe/22"   
              class="text-body-color hover:border-primary hover:bg-slate-800 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/German-food-Potato-Salad.jpg"
            alt="image"
            class="w-full"
          />
          <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href="javascript:void(0)"
                class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                Creative Card Component designs graphic elements
              </a>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
              Lorem consectetur adipiscing elit.
            </p>
            <a
              href="/#/recipe/25"
              class="text-body-color hover:border-primary hover:bg-red-500 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-520dc22ab50d48efc30ba0e2e1df8fb5-pjlq"
            alt="image"
            class="w-full"
          />
          <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href="javascript:void(0)"
                class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                Creative Card Component designs graphic elements
              </a>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
              Lorem consectetur adipiscing elit.
            </p>
            <a
              href="javascript:void(0)"
              class="text-body-color hover:border-primary hover:bg-slate-800 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
            >
              View Details
            </a>
          </div>
        </div>
      </div>       -->
{/each}
     </div>
   </div>
</section>



{:catch error}
  <p>An error occurred!</p>
{/await}
{/if}

	

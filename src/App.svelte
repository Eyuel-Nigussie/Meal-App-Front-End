<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Navbar from './lib/navbar.svelte'
  import TailwindCss from './TailwindCSS.svelte'
  import Home from './routes/home.svelte'
  import Recipes from './routes/recipes.svelte'
  // import Recipe fromx` './routes/recipe.svelte'
  import RecipeDetial from './routes/recipeDetailWrapper.svelte'
  import AddRecipe from './routes/addRecipe.svelte'
  import Login from './routes/login.svelte'
  import Dashboard from './routes/dashboard.svelte'
  import Preference from './routes/preference.svelte'
  import Restrictioins from './routes/restrictions.svelte'
  import Profile from './routes/profile.svelte'
  import Register from './routes/registration.svelte'
  import Planner from './routes/planner.svelte'
  import About from './routes/about.svelte'
  import NotFound from './routes/notfound.svelte'
  import Fetch from './routes/fetchPractice.svelte'
  import Router from 'svelte-spa-router' 
  
let routes = {
  "/": Login,
  "/recipes": Recipes,
  "/addrecipe": AddRecipe,
  // "/recipe": Recipe,
  "/recipe/:recipe": RecipeDetial,
  "/login": Login,
  '/register': Register,
  "/dashboard": Dashboard,
  "/preference": Preference,
  "/restirctions": Restrictioins,
  "/profile": Profile,
  "/planner": Planner,
  "/fetch": Fetch,
  "/about": About,
  "*": NotFound
}


</script>
<TailwindCss />

  <section class="mb-3">
    <Navbar />
  </section>

<main class="w-full w-full">
  <Router {routes} />
</main>

<footer class="footer p-10 bg-neutral text-neutral-content mb-8">
  <div>
    <img src="https://www.linkpicture.com/q/Meal_Planner-removebg-preview_1.png" class="h-20 w-20 mr-" alt="Amref Logo" />
    <p>AMREF HEALTH AFRICA<br/>Providing health care across africa</p>
  </div> 
  <div>
    <!-- <span class="footer-title">Social</span>  -->
    <div class="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</footer>
<footer class="md:hidden">
   <div class="fixed mb-[-18px] p-0 z-50 w-full h-16 max-w-xl -translate-x-1/2 bg-gradient-to-r from-white  from-1% via-red-500 via-50% to-red-3 00 to-1% border border-gray-200 rounded-lg bottom-4 left-1/2">
        <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
            
          <button data-tooltip-target="tooltip-home" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-l-full  group">
              <a href="/#/dashboard">
                <svg class="w-6 h-6 mb-1 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span class="sr-only">Home</span>
              </a>
            </button>
            <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                Home
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <button data-tooltip-target="tooltip-wallet" type="button" class="inline-flex flex-col items-center justify-center px-5  group">
                <a href="/#/recipes">
                  <svg class="w-6 h-6 mb-1 text-white group-hover:text-black " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1  1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                  </svg>
                  <span class="sr-only">Wallet</span>
                </a>
            </button>
            <div id="tooltip-wallet" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                Wallet
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div class="flex items-center justify-center">
                <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-black rounded-full hover:bg-black group focus:ring-4 focus:ring-blue-300 focus:outline-none">
                    <a href="/#/addrecipe">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path>
                      </svg>
                      <span class="sr-only">New item</span>
                    </a>
                </button>
            </div>
            <div id="tooltip-new" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                  Create new item
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            
            <button data-tooltip-target="tooltip-settings" type="button" class="inline-flex flex-col items-center justify-center group">
              <a href="/#/planner"> 
                  <svg class="w-6 h-6 mb-1 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  <span class="sr-only">Settings</span>
              </a> 
            </button>
            
            <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                Settings
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

            <button data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-r-full  group">
                <a href="/#/profile">
                  <svg class="w-6 h-6 mb-1 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                  </svg>
                  <span class="sr-only">Profile</span>
                </a>
            </button>
            <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                Profile
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

        </div>
    </div>
</footer>


<style>
  
</style>

<!-- <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></svg> -->
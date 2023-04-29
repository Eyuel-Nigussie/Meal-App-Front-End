<script>
    let selectedPreferences = [];
  
    function togglePreference(preference) {
      if (selectedPreferences.includes(preference)) {
        selectedPreferences = selectedPreferences.filter(p => p !== preference);
        console.log(selectedPreferences)
      } else {
        selectedPreferences = [...selectedPreferences, preference];
        console.log(selectedPreferences)
      }
    }
  </script>

    <!-- Features Section -->
    <section id="features">
        <!-- Flex Container -->
        <div class="container flex flex-col px-4 mx-auto mt-10 mb-10 space-y-12 md:space-y-0 md:flex-row">
                <!-- What's Different -->
            <div class="flex flex-col space-y-12  md:w-1/2 ">
                <img class="object-cover w-full rounded-t-lg w-72 mx-auto md:w-96  md:rounded-none md:rounded-l-lg" src="https://www.linkpicture.com/q/pref.png" alt="">  
            </div>

                            <!-- Numbered List -->
            <div class="flex flex-col space-y-8 md:w-1/2">
                <div class="">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Select your <span class="text-red-600 dark:text-red-500">meal preference</span></h5>
                    <div class="space-x-4 mb-96 py-8">
                        <button class:selected={selectedPreferences.includes('vegetarian')} on:click={() => togglePreference('vegetarian')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Vegetarian</button>
                        <button class:selected={selectedPreferences.includes('gluten-free')} on:click={() => togglePreference('gluten-free')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Gluten-free</button>
                        <button class:selected={selectedPreferences.includes('low-carb')} on:click={() => togglePreference('low-carb')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Low-carb</button>
                        <button class:selected={selectedPreferences.includes('vegan')} on:click={() => togglePreference('vegan')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Vegan</button>
                        <button class:selected={selectedPreferences.includes('vegetarian')} on:click={() => togglePreference('vegetarian')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Vegetarian</button>
                        <button class:selected={selectedPreferences.includes('gluten-free')} on:click={() => togglePreference('gluten-free')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Gluten-free</button>
                        <button class:selected={selectedPreferences.includes('low-carb')} on:click={() => togglePreference('low-carb')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Low-carb</button>
                        <button class:selected={selectedPreferences.includes('vegetarian')} on:click={() => togglePreference('vegetarian')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Vegetarian</button>
                        <button class:selected={selectedPreferences.includes('gluten-free')} on:click={() => togglePreference('gluten-free')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Gluten-free</button>
                        <button class:selected={selectedPreferences.includes('low-carb')} on:click={() => togglePreference('low-carb')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Low-carb</button>
                      </div>
                </div>
            </div>
        </div> 
    </section> s



  <style>
    .selected {
      background-color: #d46161; /* Change this to the desired color */
      color: white;
    }
  </style>
  
  
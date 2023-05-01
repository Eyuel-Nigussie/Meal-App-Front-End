<script>
    import axios from 'axios';
    import { push } from 'svelte-spa-router';
    import Modal from '../lib/Modal.svelte';
    let selectedPreferences = [];
  
    let message = '';
    let messageLoading = true;

    function togglePreference(preference) {
      if (selectedPreferences.includes(preference)) {
        selectedPreferences = selectedPreferences.filter(p => p !== preference);
        console.log(selectedPreferences)
      } else {
        selectedPreferences = [...selectedPreferences, preference];
        console.log(selectedPreferences)
      }
    }

    const token = localStorage.getItem('access_token');
    
    $:  addPreference = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/recipes/preferences", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(selectedPreferences),
        });
        const data = await response.json();
        console.log(data)
        push('/restriction')
      } catch (error) {
        console.log(error)
        message = error
        messageLoading = false
      }
    };

</script>

    <!-- Features Section -->
    <section id="features">
      <!-- svelte-ignore empty-block -->
      {#if messageLoading}

      {:else}
          <Modal {message} />
      {/if}
        <!-- Flex Container -->
        <div class="container flex flex-col px-4 mx-auto md:space-y-0 md:flex-row">
                <!-- What's Different -->
            <div class="flex flex-col space-y-12  md:w-1/2">
                <img class="object-cover w-full rounded-t-lg w-56 mx-auto md:w-96  md:rounded-none md:rounded-l-lg" src="https://www.linkpicture.com/q/pref.png" alt="">  
            </div>

                            <!-- Numbered List -->
            <div class="flex flex-col space-y-8 md:w-1/2">
                <div class="">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Select your <span class="text-red-600 dark:text-red-500">meal preference</span></h5>
                    <div class="space-x-4 mb-96 py-8">
                        <button class:selected={selectedPreferences.includes('Breakfast')} on:click={() => togglePreference('Breakfast')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Breakfast</button>
                        <button class:selected={selectedPreferences.includes('Lunch')} on:click={() => togglePreference('Lunch')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Lunch</button>
                        <button class:selected={selectedPreferences.includes('Supper')} on:click={() => togglePreference('Supper')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Supper</button>
                        <button class:selected={selectedPreferences.includes('Dinner')} on:click={() => togglePreference('Dinner')} class="m-2 bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 active:bg-gray-400">Dinner</button>
                      </div>
                </div>
            </div>
            <button on:click|preventDefault={addPreference} type="button" class="md:hidden text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">CONTINUE</button>
        </div> 
        <button on:click|preventDefault={addPreference} type="button" class="hidden md:block mx-auto mt-[-100px] text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">CONTINUE</button>

    </section> 



  <style>
    .selected {
      background-color: #d46161; /* Change this to the desired color */
      color: white;
    }
  </style>
  
  
<script>
  import axios from 'axios';
  import {push} from 'svelte-spa-router'
  import Cookies from 'js-cookie'

  Cookies.set('auth', 'my-auth-token', { sameSite: "None", secure: true})

  let myusername = '', mypassword = '';

  const submit = async () => {
    const formData = new FormData(); 
    formData.append('username', myusername); 
     formData.append('password', mypassword);
    await axios.post('http://127.0.0.1:8000/login', formData, {
     headers: {
       'Content-Type': 'multipart/form-data' 
      } 
    })
       .then(
        (response) => { 
                        localStorage.setItem('access_token', response.data.access_token);
                        push('/profile');
                      }
        
       ) 
       .catch((error) => { console.error(error); });
  }
</script>


<div class="flex min-h-full items-center justify-center px-4 py-6 sm:px-6 lg:px-8 mb-20 -mt-20">
   <div class="w-full max-w-md">
     <div>
       <img class="-mt-10 mx-auto h-18 w-auto" src="https://www.linkpicture.com/q/Meal_Planner-removebg-preview_1.png" alt="Your Company">
       <h2 class="text-center text-3xl font-bold tracking-tight text-gray-900">Sign In to your account</h2>
       <p class="mt-2 text-center text-sm text-gray-600">
         Or
              <!-- svelte-ignore a11y-invalid-attribute -->
         <a href="/#/register" class="font-medium text-red-600 hover:text-red-500">Click here to Sign UP</a>
       </p>
     </div>
     <form class="space-y-6" on:submit|preventDefault={submit}>
       <input type="hidden" name="remember" value="true">
       <div class="rounded-md shadow-sm">
         <div class="my-4">
               <label for="email-address" class="sr-only">Email address</label>
               <input bind:value={myusername} id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-1.5 my-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address">
               <h2>email</h2>
               <h2>{myusername}</h2>
        </div>
         <div class="my-4">
               <label for="password" class="sr-only">Password</label>
               <input bind:value={mypassword} id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password">
               <h2>Password</h2>
               <h2>{mypassword}</h2>
         </div>
         
       </div>
 
       <div class="flex items-center justify-between">
         <div class="flex items-center">
           <input bind:value={mypassword} id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
           <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
         </div>
 
         <div class="text-sm">
           <!-- svelte-ignore a11y-invalid-attribute -->
           <a href="#" class="font-medium text-red-600 hover:text-red-500">Forgot your password?</a>
         </div>
       </div>
 
       <div class="bg-red-500">
         <button type="submit" class="group-* relative flex w-full justify-center rounded-md  px-3 py-2  font-semibold text-white bg-red-500 hover:bg-red-300">
           <span class="absolute inset-y-0 left-0 flex items-center pl-3">
             <svg class="h-5 w-5 text-red-500 group-hover:text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
             </svg>
           </span>
           Sign IN
         </button>
       </div>
     </form>
   </div>
 </div>
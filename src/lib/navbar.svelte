<script>
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }
</script>


<!-- mobile hamburger menu-->
<section class="md:hidden">
    <div id="mySidenav" class="sidenav">
      <ul class="space-y-2 font-medium">
        <a href="javascript:void(0)" class="closebtn" on:click={closeNav}>&times;</a> 
        <!-- <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a> -->  
        <li class="sidebar-list">
          <a href="#" class="items-center text-gray-900 hover:text-black rounded-lg dark:text-white  flex row">
            
              <span class="flex row"> <svg aria-hidden="true" class="w-8 h-8  pt-2  pr-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>DASHBOARD</span>
          </a>
        </li>
        <li class="sidebar-list">
          <a href="#" class="items-center text-gray-900 hover:text-black rounded-lg dark:text-white flex row">
  
              <span class="flex row"> <svg aria-hidden="true" class="w-8 h-8  pt-2  pr-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>RECIPE</span>
          </a>
        </li>
        <li class="sidebar-list">
          <a href="#/about" class="items-center text-gray-900 hover:text-black rounded-lg dark:text-white flex row">
            
              <span class="flex row"> <svg aria-hidden="true" class="w-8 h-8  pt-2  pr-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg> ADD RECIPE</span>
          </a>
        </li>
        <li class="sidebar-list">
          <a href="#/about" class="items-center text-gray-900 hover:text-black rounded-lg dark:text-white flex row">
            
              <span class="flex row"> <svg aria-hidden="true" class="w-8 h-8  pt-2  pr-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>PROFILE</span>
          </a>
        </li>
        <li class="sidebar-list">
          <a href="#/about" class="items-center text-gray-900 hover:text-black rounded-lg dark:text-white flex row">
            
              <span class="flex row"> <svg aria-hidden="true" class="w-8 h-8  pt-2  pr-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>ABOUT</span>
          </a>
        </li>
    </ul>
    </div>
      <div id="main">
        <div class="navy py-[-20px] mt-0 h-30" style="font-size:30px;cursor:pointer" on:click={openNav}>
            <div class="hamburger m-0 mt-4 p-0 "> &#9776; </div>
            <img class="logo m-0" src="https://www.linkpicture.com/q/Meal_Planner-removebg-preview_1.png" width="150" height="80">
        </div>
      </div>
</section> 

<!-- nav for big size -->
<section class="hidden md:block">
<nav class="bg-white border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/#/download" class="flex items-center">
    <img
    src="https://www.linkpicture.com/q/Meal_Planner-removebg-preview_1.png"
    alt="image"
    class="h-36 w-full"/>
      <span class="self-center text-md px-2 font-semibold whitespace-nowrap dark:text-white"> Amref Meal Planner</span>
  </a>
  <div class="flex md:order-2">
    <!-- <div class="relative hidden md:block">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
    </div> -->
    <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">LOGIN</button>
  </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <!-- <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
      </div> -->
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  dark:border-gray-700 text-white dark:text-white">
        <li>
          <a href="/#/dashboard" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">DASHBOARD</a>
        </li>
        <li>
          <a href="/#/recipes/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">RECIPE</a>
        </li>
        <li>
          <a href="/#/addrecipe" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-black md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">ADD RECIPE</a>
        </li>
        <li>
          <a href="/#/profile" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-black md:dark:hover:text-bred500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">PROFILE</a>
        </li>
        <li>
          <a href="/#/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-black md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">ABOUT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</section> 


<style>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #27000088;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}
.navmain{
  background-color: #6e000015;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #ffffff;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding-left: 16px;
  padding-top: 0px;
  padding-bottom: 0px;
  /* background: black; */
}

@media screen and (max-height: 450px) {
  .sidenav a {font-size: 18px;}
}

.navy{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    /* background-color: rgba(224, 128, 128, 0.419); */
}

.hamburger{
  /* background-color: bisque; */
  height: 60px;
}

.logo{
  /* background-color: azure; */
  height: 100px
}

.sidebar-list{
  background-color: rgba(44, 0, 0, 0.583);
  border-radius: 15px;
}
</style> 
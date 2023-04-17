<script >
    import { createEventDispatcher} from 'svelte'
    import Appointment from './Appointment.svelte'
    export let dateID;
    export let dateHeading;
    export let appointments = [];
    
    const dispatch = createEventDispatcher();   

    let apptDetails = {
        mealType: "fo",
        meal: "kit",
        hour: "3",
        amOrPM: "am",
        completed: false   
    }

    const submitAppt = () => {
        dispatch('addAppt', apptDetails)
        //reset 
        apptDetails = {
            mealType: "",
            meal: "",
            hour: "",
            amOrPM: "",
            completed: false   
        }
    }

    
</script>

<section>
  <form id={dateID} on:submit|preventDefault={submitAppt}>
    <div>
        <span class="close" title="Close Modal" on:click={() => dispatch('modalClose')}>
            &times;
        </span>
    </div>
    <div id="myDIV" class="header">
        <h2>Meal Planner</h2>
        <h2>{dateHeading}</h2>
        
            <label for="small" class="block mb-2 text-sm font-large text-gray-900 dark:text-white">Small select</label>
            <select bind:value={apptDetails.mealType} id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose Meal Type</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Supper">Supper</option>
            </select>
            {apptDetails.mealType}
            <label for="large" class="block mb-2 text-base font-medium text-gray-900 dark:text-white">Large select</label>
            <select bind:value={apptDetails.meal} id="large" class="block w-full px-4 py-3 mb-6 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a country</option>
            <option value="Kitfo">Kitfo</option>
            <option value="Tibes">Tibes</option>
            <option value="Burger">Burger</option>
            <option value="choma">choma</option>
            </select>

            <div>
				<button class="addBtn">Add</button>
			</div>	
    </div>
      
     <!-- component -->
<div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-white rounded shadow p-6 m-4 w-full">
        <div> 
          {#if appointments.length == 0}
            <h1>No meal planed</h1>
          {:else}
            {#each appointments as appt}
              <Appointment mealType={appt.mealType}, meal={appt.meal} time='Null' completed={appt.completed}  />
            {/each}
          {/if}
            <!-- <Appointment /> -->
        </div>
    </div>
</div>
  </form>
</section>

<style>
    /* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

section{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: white;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #f44336;
  padding: 80px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}

.close{
    position: absolute;
    font-size: 2rem;
    color: white;
    right: 0;
    top: 0;
    padding: 0px 16px 12px 16px;
    cursor: pointer;
 }
 .close:hover{
    background-color: hsla(0, 85%, 66%, 0.234);
 }
</style>
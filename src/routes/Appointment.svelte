<script>
    import {scheduleStore} from "../schedule-store"
    export let mealType, meal, time, completed = false;
    export let apptID, dateID
    // function completedToggle() {
    //     completed = !completed
    // }

    const deleteMeal = () => {
        scheduleStore.update(currDataState => {
            currDataState[dateID] = currDataState[dateID].filter(appt => appt.id !== apptID)
            return currDataState;
        })
    }

    const updateAppt = (e, key) => {
        let newValue;
        console.log(e.target.nodeName)
        e.target.nodeName === "P" ? newValue = e.target.textContent : newValue = e.target.checked
        scheduleStore.update(currDataState => {
            let i = currDataState[dateID].findIndex(appt => appt.id == apptID)
            currDataState[dateID][i][key] = newValue    
            return currDataState;
        })
    }
</script>


<div class="flex mb-4 items-center">
    <input type="checkbox" class="w-full accent-red-600" class:completed bind:checked={completed} on:change={(e) => updateAppt(e, "completed")}>
    <p class="w-full text-grey-darkest" contenteditable class:completed on:blur={(e) => updateAppt(e, "mealType")}>{mealType}</p>
    <p class="w-full text-grey-darkest" contenteditable class:completed on:blur={(e) => updateAppt(e, "time")}>{meal}</p>
    <!-- <p class="flex-no-shrink p-2 ml-4 mr-2 rounded hover:text-white text-green">{time}</p> -->
    <!-- <button  class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-400">Done</button> -->
    <button on:click={deleteMeal} class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-500">Remove</button>
</div>
<!-- <div class="flex mb-4 items-center">
    <p class="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
    <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
    <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
</div> -->
<style>
    .completed{
        text-decoration: line-through;
        color: #aaa;
    }
</style>
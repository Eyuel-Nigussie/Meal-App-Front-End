<script>
    export let mealType, meal, time, completed = false;

    function completedToggle() {
        completed = !completed
    }
</script>


<div class="flex mb-4 items-center" class:completed>
    <p class="w-full text-grey-darkest">{mealType}</p>
    <p class="w-full text-grey-darkest">{meal}</p>
    <p class="flex-no-shrink p-2 ml-4 mr-2 rounded hover:text-white text-green">{time}</p>
    <button on:click={completed = !completed} class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-400">Done</button>
    <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-500">Remove</button>
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
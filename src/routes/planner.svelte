<script>
    import Calendar from  './calendar.svelte'
    import Schedule from './scheduler.svelte'

    let schedulerShowing = false;
</script>

<section>
    <Calendar on:click={() => schedulerShowing = true}/>
    {#if schedulerShowing}
       <Schedule on:click={() => schedulerShowing = false }/>
    {/if}
</section>

<style>

</style>
<script>
    import Calendar from  './calendar.svelte'
    import Schedule from './scheduler.svelte'

    let schedulerShowing = false;
    let dateID; // to store the id of the date
    let dateHeading;

    const makeDateHeading = () => {
        let dateAsHeading = dateID.replace(/_/g, " "); 
        const date = new Date(dateAsHeading)
        return dateHeading = date.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric'});
    }

    const handleScheduler = (e) =>{
        schedulerShowing = true; 
        dateID = e.target.dataset.dateid
        makeDateHeading()
    }
</script>

<section>
    <Calendar on:click={handleScheduler}/>
    {#if schedulerShowing}
       <Schedule on:click={() => schedulerShowing = false } {dateID} {dateHeading}/>
    {/if}
</section>

<style>

</style>
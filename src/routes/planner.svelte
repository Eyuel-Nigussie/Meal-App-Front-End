<script>
    import Calendar from  './calendar.svelte'
    import Schedule from './scheduler.svelte'

    let schedule = {};

    let schedulerShowing = false;
    let dateID; // to store the id of the date
    let dateHeading;

    $: appointments = schedule[dateID]
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

    const setApptToSch = (e) =>{
        // console.log(e.detail)
        let time = `${e.detail.hour}:${e.detail.minutes < 10 ? '0' + e.detail.minutes : e.detail.minutes}${e.detail.amOrPM}`
        // console.log(time)

        let newAppt = {
            id: Math.floor(Math.random() * 1000000),
            mealType: e.detail.mealType,
            meal: e.detail.meal,
            time,
            complete: e.detail.completed
        }

        if (!schedule[dateID]){
            schedule[dateID] = [newAppt]
        }
        else{
            let currSchedAppts = schedule[dateID];
            schedule[dateID] = [...currSchedAppts, newAppt]
        }

    }
$: console.log(schedule)
</script>

<section>
    <Calendar on:click={handleScheduler}/>
    {#if schedulerShowing}
       <Schedule on:modalClose  ={() => schedulerShowing = false }
        on:addAppt={setApptToSch}
         {dateID}
         {dateHeading}
         {appointments} />
    {/if}
</section>

<style>

</style>
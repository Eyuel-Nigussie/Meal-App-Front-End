<script>
  import { link } from "svelte-spa-router";

  const date = new Date();

  const today = {
    dayNumber: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  }

  const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let monthIndex = date.getMonth();

  $: month = monthNames[monthIndex];
  let year = date.getFullYear();

  $: firstDayIndex = new Date(year, monthIndex,1).getDay();
  $: numberOfDays = new Date(year, monthIndex+1, 0).getDate()

  let currentDay =  date.getDate();

  let calendarCellsQty = firstDayIndex <= 4 ? 35 : 42;

  const goToNextMonth = () => {
    if(monthIndex >= 11){
      year++;
      return monthIndex = 0
    }
    monthIndex++
  }
  const goToPrevMonth = () => {
    if(monthIndex <= 1){
      year--;
      return monthIndex = 11
    }
    monthIndex--
  } 
  $: console.log(monthIndex);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div>
  <!-- <h1>CSS Calendar</h1> -->
  <div class="month">      
    <ul>
      <li class="prev" on:click={goToPrevMonth}>&#10094;</li>
      <li class="next" on:click={goToNextMonth}>&#10095;</li>
      <li>
        {month}<br>
        <span style="font-size:18px">{year}</span>
      </li>
    </ul>
  </div>
  
  <ul class="weekdays">
    <li>Su</li>
    <li>Mo</li>
    <li>Tu</li>
    <li>We</li>
    <li>Th</li>
    <li>Fr</li>
    <li>Sa</li>
  </ul>
  
  <ul class="days">  
    {#each Array(calendarCellsQty) as _, i}
      {#if i < firstDayIndex || i >= numberOfDays+firstDayIndex}
        <li>&nbsp;</li>
      {:else}
        <li class:active={ i == today.dayNumber+(firstDayIndex-1) && monthIndex === today.month &&
        year === today.year} >{(i-firstDayIndex+1)}</li>
      {/if}
    <!-- <li><span class="active">10</span></li>  -->
    {/each}
  </ul>
</div>

<style>
  * {box-sizing: border-box;}
  ul {list-style-type: none;}
  
  .month {
    padding: 70px 25px;
    width: 100%;
    background: #e92020;
    text-align: center;
  }
  
  .month ul {
    margin: 0;
    padding: 0;
  }
  
  .month ul li {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  
  .month .prev {
    float: left;
    padding-top: 10px;
    cursor: pointer;
  }
  
  .month .next {
    float: right;
    padding-top: 10px;
    cursor: pointer;
  }
  
  .weekdays {
    margin: 0;
    padding: 10px 0;
    background-color: #ddd;
  }
  
  .weekdays li {
    display: inline-block;
    width: 13.6%;
    color: #666;
    text-align: center;
  }
  
  .days {
    padding: 20px 0;
    background: #eee;
    margin: 0;
  }
  
  .days li {
    /* list-style-type: none;
    display: inline-block;
    width: 13.6%;
    text-align: center;
    margin-bottom: 5px;
    font-size:15px;
    color: #777;
    padding-top: 10px;
    padding-bottom: 10px; */
    list-style-type: none;
    display: inline-block;
    border: 1px solid black;
    padding: 9px;
    width: 11.6%;
    text-align: center;
    margin-bottom: 1px;
    font-size: 1.2rem;
    color: #777;
    cursor: pointer;
  }
  
  .active {
    padding: 5px;
    background: #e01f1f;
    color: white !important
  }
  
  /* Add media queries for smaller screens */
  @media screen and (max-width:720px) {
    .weekdays li, .days li {width: 13.1%;}
  }
  
  @media screen and (max-width: 420px) {
    .weekdays li, .days li {width: 12.5%;}
    .days li .active {padding: 2px;}
  }
  
  @media screen and (max-width: 290px) {
    .weekdays li, .days li {width: 12.2%;}
  }
  </style>

import {writable} from 'svelte/store'

const storeInBrowser = (key, data) => {
   const dataAsString = localStorage.getItem(key)
   const dataAsObj = dataAsString ? JSON.parse(dataAsString) : data;

   const svelteStore = writable(dataAsObj, () =>{
    const unsubscribe = svelteStore.subscribe(currDataState => {
        localStorage.setItem(key, JSON.stringify(currDataState))
    })
    return unsubscribe()
   })
   return svelteStore
}
    
const scheduleData ={
    May_31_2023:[
        {id: 23234, mealType: 'Kurs', meal: 'bulla', completed: false},
    ]
}

export const scheduleStore = storeInBrowser('mySchedule', scheduleData);
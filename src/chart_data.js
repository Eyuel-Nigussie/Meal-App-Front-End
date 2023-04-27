const chartConfig = {
  "chart": {
    "caption": "Recipe Meal Types",
    "subCaption": "Divides recipes by the meal type category they were given",
    "xAxisName": "Meal Type",
    "yAxisName": "Number of Recipes",
    "numberSuffix": "",
    "theme": "fusion"
  },
  "data": [
    {
      "label": "Breakfast",
      "value": "0", 
    },
    {
      "label": "Lunch",
      "value": "0"
    },
    {
      "label": "Supper",
      "value": "0"
    },
    {
      "label": "Dinner",
      "value": "0"
    }
  ]
};

const token = localStorage.getItem('access_token');

async function fetchChartConfig() {
  try {
    const response = await fetch('http://127.0.0.1:8000/recipes/count', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    chartConfig.data[0].value = data.breakfast_count.toString();
    chartConfig.data[1].value = data.lunch_count.toString();
    chartConfig.data[2].value = data.supper_count.toString();
    chartConfig.data[3].value = data.dinner_count.toString();
    return chartConfig;
  } catch (error) {
    console.error(error);
  }
}

export default await fetchChartConfig();

// const chartConfig = {
//   "chart": {
//     "caption": "Recipe Meal Types",
//     "subCaption": "Divides recipes by the meal type category they were given",
//     "xAxisName": "Meal Type",
//     "yAxisName": "Number of Recipes",
//     "numberSuffix": "",
//     "theme": "fusion"
//   },
//   "data": [
//     {
//       "label": "Breakfast",
//       "value": "0", 
//     },
//     {
//       "label": "Lunch",
//       "value": "0"
//     },
//     {
//       "label": "Supper",
//       "value": "0"
//     },
//     {
//       "label": "Dinner",
//       "value": "0"
//     }
//   ]
// };

// const token = localStorage.getItem('access_token') 

// fetch('http://127.0.0.1:8000/recipes/count', {
//   headers: {
//     'Authorization': `Bearer ${token}`
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     chartConfig.data[0].value = data.breakfast_count.toString();
//     chartConfig.data[1].value = data.lunch_count.toString();
//     chartConfig.data[2].value = data.supper_count.toString();
//     console.log(chartConfig.data[2].value)
//     chartConfig.data[3].value = data.dinner_count.toString();
//   })
//   .catch(error => console.error(error));

// export default chartConfig;

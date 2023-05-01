<script>
import axios from 'axios';
import {onMount} from 'svelte'

import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
import dataSource from '../gauge'
let message = ''
let profile = ''


fcRoot(FusionCharts, Widgets, FusionTheme);


let     
  chartConfig = {
    type: 'angulargauge',
    width: '600',
    height: '400',
    renderAt: 'chart-container',
    dataSource
  };



onMount(async (message) => {
    const token = localStorage.getItem('access_token')
    const user = localStorage.getItem('user_id')
    console.log(user)
    const response = await axios.get(`http://127.0.0.1:8000/users/${user}`, {
        headers: {
             Authorization: `Bearer ${token}`
        },
    });

    // const content = await response.json();

    profile = response.data;
    console.log(profile);
})
</script>

<div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg mx-auto">
    <div class="px-profile4 py-5 sm:px-6">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">User <span class="text-red-600">Info</span></h1>  

        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Details and informations about you
        </p>
    </div>
    <!-- <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="https://static.vecteezy.com/system/resources/previews/019/896/012/large_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="Avatar" style="width:300px;height:300px;">
          </div>    
          <div class="flip-card-back">
            <h1>{profile.name}</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
    </div> -->
    <div class="border-t border-gray-200">
        <dl>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    User ID
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {profile.id}
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {profile.name}
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {profile.email}
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    something
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    something about user
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    About
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis excepturi accusamus assumenda.
                </dd>
            </div>
        </dl>
    </div>
    <div id="chart-container" class="mb-8">
        <SvelteFC {...chartConfig} />
    </div>
</div>

<style>
    .flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  /* box-shadow: 0 4px 8px 0 rgba(47, 47, 47, 0); */
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #490000d3;
  color: white;
  transform: rotateY(180deg);
}
</style>
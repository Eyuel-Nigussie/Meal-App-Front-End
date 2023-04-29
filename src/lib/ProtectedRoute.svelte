<script>
    import { onMount } from 'svelte';
   
    export let component;
    export let params;
  
    onMount(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      }
    });
  </script>
  
  <svelte:component this={component} {...params} />
  
<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div>
    <metainfo>
      <template></template> 
    </metainfo>
    <Layout>
      <RouterView/>
    </Layout>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue';
import Layout from '@/layout/Index.vue';

onMounted(()=>{
  //console.log('>> NODE_ENV >>', import.meta.env.VITE_USER_NODE_ENV);
  console.log('>> NODE_ENV >>', import.meta.env);
})


</script>
<template>
  <div>
    <!-- <Layout></Layout> 레이아웃--> 
    <router-view></router-view>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import Layout from '@/components/layout/Index.vue';
import Home from '@/views/sample/Home.vue';
onMounted(()=>{
  //console.log('>> NODE_ENV >>', import.meta.env.VITE_USER_NODE_ENV);
  console.log('>> NODE_ENV >>', import.meta.env);
})


</script>
<style scoped></style>
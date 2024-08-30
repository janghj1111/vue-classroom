<template>
  <div>
    <!-- 레이아웃--> 
    <Layout></Layout> 
    <!-- <router-view></router-view> -->
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import Layout from '@/components/layout/Layout.vue';
import Home from '@/views/sample/Home.vue';
onMounted(()=>{
  //console.log('>> NODE_ENV >>', import.meta.env.VITE_USER_NODE_ENV);
  console.log('>> NODE_ENV >>', import.meta.env);
})


</script>
<style scoped></style>
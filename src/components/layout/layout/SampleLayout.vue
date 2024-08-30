<template>
  <!-- <q-layout view="hHh lpR fFf">
    Sample layout
  </q-layout> -->
  <q-layout view="hHh lpR fFf">
    <SampleHeader title="SampleHeader" class="bg-secondary" />
    <SampleNav />

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <SampleFooter />
  </q-layout>
</template>
<script setup>
import SampleHeader from '@/components/layout/header/SampleHeader.vue';
import SampleFooter from '@/components/layout/footer/SampleFooter.vue';
import SampleNav from '@/components/layout/nav/SampleNav.vue';

import { onMounted, ref } from 'vue'

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


</script>

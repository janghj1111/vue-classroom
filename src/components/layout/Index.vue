<template>
  <component :is="components[layout]"> <router-view></router-view> </component>
</template>

<script setup>
import { computed } from 'vue'
import AdminLayout from './layout/AdminLayout.vue'
// import SampleLayout from './layout/SampleLayout.vue'
// import DefaultLayout from './layout/DefaultLayout.vue'
// import ErrorLayout from './layout/ErrorLayout.vue'
import { useRoute } from 'vue-router'

const components = {
  AdminLayout: AdminLayout,
  // SampleLayout: SampleLayout,
  // DefaultLayout: DefaultLayout,
  // ErrorLayout: ErrorLayout,
}

const route = useRoute()
const layout = computed(() => route.meta.layout || 'AdminLayout')

</script>

<style scoped></style>
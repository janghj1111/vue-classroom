<template>
    <!-- Navigation -->
    <q-header elevated class="text-white">
      <q-toolbar>
        <q-btn flat dense round @click="toggleLeftDrawer" icon="menu" aria-label="Menu"> </q-btn>
  
        <q-toolbar-title>
          {{ title }}
        </q-toolbar-title>
        <q-btn :label="btnDarkLabel" @click="onChangeMode"></q-btn>
        <q-btn label="Logout" @click="onLogout"></q-btn>
      </q-toolbar>
    </q-header>
  </template>
  <script setup>
  import useStore from '@/stores'
  import { useQuasar } from 'quasar'
  import { computed } from 'vue'
  import { ref } from 'vue'
  
  defineProps(['title'])
  const emits = defineEmits(['navOpen'])
  
  const $q = useQuasar()
  //const store = useStore()
  const leftDrawerOpen = ref(true)
  const isDark = ref(false)
  
  const toggleLeftDrawer = () => {
    store.drawerOpen.changeDrawerOpen()
  }
  
  const onChangeMode = () => {
    isDark.value = !isDark.value
    $q.dark.set(isDark.value)
  }
  
  const btnDarkLabel = computed(() => {
    return isDark.value ? 'Dark off' : 'Dark on'
  })
  
  const onLogout = () => {
    store.auth.logout()
  }
  </script>
  
  <style></style>
  
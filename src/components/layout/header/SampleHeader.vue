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
  <!-- <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"> 
        </q-avatar>
        Sample Title
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs align="left">
      <q-route-tab to="/page1" label="Page One" />
      <q-route-tab to="/page2" label="Page Two" />
      <q-route-tab to="/page3" label="Page Three" />
    </q-tabs>
  </q-header> -->
</template>
<script setup>
import useStore from '@/stores'
import { useQuasar } from 'quasar'
import { computed } from 'vue'
import { ref } from 'vue'

const props = defineProps({
  title : {
    type : String
  },
})
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
  
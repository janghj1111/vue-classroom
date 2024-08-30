<template>
   <!-- <q-drawer v-model="store.drawerOpen.isDrawerOpen" show-if-above bordered> -->
   <q-drawer :v-model="true" show-if-above bordered>
      <div class="q-pa-md" style="max-width: 350px">
         <q-list bordered separator>
            <q-item clickable v-ripple to="/sample/dashboard">
               <q-item-section>
                  <q-item-label>Dashboard</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/Report">
               <q-item-section>
                  <q-item-label>Report</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/pdf-download">
               <q-item-section>
                  <q-item-label>PDF Download</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/grid-layout">
               <q-item-section>
                  <q-item-label>Grid Layout</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/echart">
               <q-item-section>
                  <q-item-label>ECHART</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/table">
               <q-item-section>
                  <q-item-label>Table </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/pagination">
               <q-item-section>
                  <q-item-label>Pagination </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/editor">
               <q-item-section>
                  <q-item-label>Quasar Editor </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
               <q-item-section>
                  <q-item-label>Form </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/form">
               <q-item-section>
                  <q-item-label style="padding-left: 10px"> - validatiion </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/form-component">
               <q-item-section>
                  <q-item-label style="padding-left: 10px"> - radio & checkbox & select </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/calendar">
               <q-item-section>
                  <q-item-label>Calendar </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/date">
               <q-item-section>
                  <q-item-label>Date Picker</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/message">
               <q-item-section>
                  <q-item-label>Message </q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/i18n">
               <q-item-section>
                  <q-item-label>다국어</q-item-label>
               </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/sample/treeview">
               <q-item-section>
                  <q-item-label>TreeView</q-item-label>
               </q-item-section>
            </q-item>
         </q-list>
      </div>
   </q-drawer>
</template>
<script setup>
import useStore from '@/stores'

const store = useStore()
</script>
<style scoped></style>

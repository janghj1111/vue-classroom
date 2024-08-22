<template>
    <div> getSampleList : </div>
    <div> {{getSampleList}} </div>
    <div> sampleList : </div>
    <div> {{sampleList}} </div>
</template>

<style>

</style>

<script setup>
import { onMounted, ref, inject } from "vue";
import { getSampleApi } from "@/api/sampleApi.js";

const $api = inject('$axios');
const serverUrl = inject('$serverUrl');
const sampleList = ref([]);
const getSampleList = ref([]);

/* 리스트 가져오기 */
const getList = async () => {
  try {
    const params = {
      keyword: '',
      page: 1,
      size: 10
    }
    await getSampleApi(params).then((res) => {
      console.log(res);
      getSampleList.value = res;
    })
  } catch (e) {
    console.log('Error : ', e)
    if(e?.response?.status != 500 ) {
      console.log('네트워크가 원활하지 않습니다. 잠시 후 다시 시도해주세요.')      
    }
  }
}

/* 리스트 가져오기 */
const getList2 = async () => {
  try {
    const params = {
      keyword: '',
      page: 1,
      size: 10
    }
    await $api.get(`${serverUrl}/board/list`,{ // ${serverUrl}
      params : params//,headers : {}
    }).then((res) => {
      console.log(res);
      if(res?.data != undefined || res.data.length != 0){
        sampleList.value = res.data;
      } 
    })
  } catch (e) {
    console.log('Error : ', e)
    if(e?.response?.status != 500 ) {
      console.log('네트워크가 원활하지 않습니다. 잠시 후 다시 시도해주세요.')      
    }
  }
}

/* 페이지 진입 */
const init = () => {
  getList();  
  getList2();
}

onMounted(()=>{
    init();
});
</script>
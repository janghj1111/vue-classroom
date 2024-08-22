<template>
  <div>
    <h1 class="form-title">Classroom</h1>
    <div class="input-wrap">
        <!-- <label for="email">이메일</label> -->
        <input placeholder="아이디" type="email" id="email" v-model="loginId" class="input-text"/>
    </div>
    <div class="input-wrap">
        <!-- <label for="password">패스워드</label> -->
        <input placeholder="비밀번호" type="password" id="password" v-model="loginPw" class="input-text"/>
    </div>
    <div style="max-width: 350px; margin: 0 auto;">
        <button @click="loginSubmit()" class="form-btn my-shadow">로그인</button>
    </div>
  </div>
</template>

<style>

</style>

<script setup>
import { onMounted, ref, inject } from "vue";
import { useRouter } from 'vue-router';

const $api = inject('$axios');
const serverUrl = inject('$serverUrl');
const router = useRouter();

const loginId = ref();
const loginPw = ref();

const loginSubmit = () => {
    try{
        const params = {};
        params.loginId = loginId.value;
        params.loginPw = loginPw.value;
        $api.get(`${serverUrl}/login`, params
        ).then((res)=>{
            console.log(res);
            const token = res.data.access_token
            //localStorage.setItem('')

        });
    } catch (e) {
        console.log(`Error : ${e}`);
        if(e?.response?.status != 500 ) {
            console.log('네트워크가 원활하지 않습니다. 잠시 후 다시 시도해주세요.')      
        }
    }
}

onMounted(()=>{

})

</script>

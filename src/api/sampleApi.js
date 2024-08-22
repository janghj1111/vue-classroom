import $api from '@/core/request';

export const getSampleApi = async (param) => {
    console.log($api);
    return await $api.get(`/board/list`,{ // ${serverUrl}/board/list
        params : param//,headers : {}
      }).then((res) => {
        console.log(res);
        if(res?.data != undefined || res.data.length != 0){
            const resData = res.data;
            return resData; 
        } 
      })
}
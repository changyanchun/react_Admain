/*
通用的能发送任何ajax请求的函数模块
封装axios库
函数返回一个promise对象

优化: 
  1. 统一处理请求异常  ===> 发任意ajax请求不再需要另外处理请求异常
  2. 异步请求成功的数据不再是response, 而是response.data的值  ==> 请求成功得到就是data数据

路由的path: /user, 请求的路径: /user?id=3         query参数
路由的path: /user/:id, 请求的路径: /user/2        params参数
*/

import axios from 'axios'


export default function Ajax(url,data={},method="GET"){

    return new Promise ((resolve,reject)=>{
          
        let promise
        if(method === 'GET'){
            promise = axios.get(url,{
                params:data
            })
        }else{
            promise = axios.post(url,data)
        }
         //指定axios返回的promise对象的成功或者失败
        promise.then(
            response=>{resolve(response.data)},
            error=>{alert('请求出错:'+error.message)}
        )
    })
}
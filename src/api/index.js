/*
包含n个接口请求函数的模块
根据接口文档编写
调用自定义ajax请求函数发请求
每个函数的返回值都是promise对象
*/

import Ajax from './ajax'
import { resolve } from 'upath';

const Base=''

export const reqLogin=(username,password)=>Ajax(Base+'/login',{username,password},'POST')

export const reqAddUser=(user)=>Ajax(Base+'/manage/user/add',user,'POST')


reqLogin('admin','admin').then(
    result=>{resolve('请求成功了'+result)}
)

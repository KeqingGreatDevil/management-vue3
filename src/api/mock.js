import Mock from 'mockjs'
import homeApi from './mockData/home'
// 拦截请求
Mock.mock('/home/getHomeData', homeApi.getHomeData)
Mock.mock('/home/getCountData', homeApi.getCountData)
import { request } from "./request";

// 首页封面
export function getBannerdata() {
  return request({
    url: '/banner?type=2'

  })
}

// 首页MV列表
export function getMvdata() {
  return request({
    url: '/mv/first?limit=10'
  })
}

//MV视频地址
export function getvideodata(id, r = 1080) {
  return request({
    url: '/mv/url',
    params: {
      id, r
    }
  })
}

//MV详情
export function mvDetail(mvid) {
  return request({
    url: '/mv/detail',
    params: {
      mvid
    }
  })
}

//MV评论
export function getMvcomment(id) {
  return request({
    url: '/comment/mv',
    params: {
      id
    }
  })
}

//搜索MV
export function searchMv(keywords, type = 1004) {
  return request({
    url: '/search',
    params: {
      keywords, type
    }
  })
}

//推荐MV
export function recommendMv() {
  return request({
    url: '/personalized/mv',
  })
}

//最新MV
export function newestMv() {
  return request({
    url: '/mv/first?limit=10',
  })
}

//MV排行
export function topMv() {
  return request({
    url: '/top/mv?limit=20',
  })
}

//相似MV
export function similarMv() {
  return request({
    url: '/simi/mv?mvid=28005'
  })
}

import request from "./http";
// http://localhost:3000:3000/banner?type=3


// 获取轮播图数据
export function getBanner(){
    return request({
        url:'/banner?type=3',
        method:"get"
    })
}

// 获取推荐歌单接口
export function getPersonalized(){
    return request({
        url:'/personalized?limit=15',
        method:"get"
    })
}

export function getNewsong(){
    return request({
        url:'/personalized/newsong?limit=12',
        method:"get"
    })
}


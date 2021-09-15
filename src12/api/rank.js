import request from "./http";


// 获取排行版类型
export function getTopList(){
    return request({
        url:'/toplist',
        method:"get"
    })
}

// 获取排行榜数据
export function getPlaylistDetail(params){
    return request({
        url:'/playlist/detail',
        method:"get",
        params
    })
}
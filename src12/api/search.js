import request from "./http";

export function getSearch(){
    return request({
        url:'/search',
        method:"get"
    })
}
export function getHotSearch(){
    return request({
        url:'/search/hot',
        method:"get"
    })
}
//搜索建议
export function getSuggest(){
    return request({
        url:'/search/suggest',
        method:"get"
    })
}

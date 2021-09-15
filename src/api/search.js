import request from "./http";

export function getSearch(params){
    return request({
        url:'/search',
        method:"get",
        params
    })
}
export function getHotSearch(){
    return request({
        url:'/search/hot',
        method:"get"
    })
}
//搜索建议
export function getSuggest(params){
    return request({
        url:'/search/suggest',
        method:"get",
        params
    })
}


//搜索建议
export function getArtistSongs(params){
    return request({
        url:'/artist/songs',
        method:"get",
        params
    })
}



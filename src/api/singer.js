import request from "./http";

// 获取热门歌手
// /top/artists?offset=0&limit=30
export function getTopArtists(){
    return request({
        url:'/top/artists',
        method:"get",
        params:{
            limit:10
        }
    })
}

// /artist/list?type=1&area=96&initial=b
// 获取歌手分类
export function getArtistList(params){
    return request({
        url:'/artist/list',
        method:"get",
        params
    })
}

//获取歌手详情
export function getArtistdetail(params){
    return request({
        url:'/artist/detail',
        method:"get",
        params
    })
}
// 获取歌手全部歌曲
export function getArtistSong(params){
    return request({
        url:'/artist/songs',
        method:"get",
        params
    })
}


import request from "./http";

export function getMenun(){
    return request({
        url:'/toplist',
        method:"get"
    })
}
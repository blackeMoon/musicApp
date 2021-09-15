import request from "./http";

// 通过id 获取歌曲url
// /song/url?id=1854142292
export function getSongUrl(params){
    return request({
        url:'/song/url',
        method:"get",
        params
    })
}
// 通过id 获取歌曲详情
// /song/detail?ids=1854142292
export function getSongDetail(params){
    return request({
        url:'/song/detail',
        method:"get",
        params
    })
}


// 通过id 获取歌词
// http://localhost:3000/lyric?id=33894312
export function getLyric(params){
    return request({
        url:'/lyric',
        method:"get",
        params
    })
}

// 通过id 手机验证码
export function getCaptcha(params){
    return request({
        url:'/captcha/sent',
        method:"get",
        params
    })
}

// 通过id 手机验证码验证
export function getCaptchaVerify(params){
    return request({
        url:'/captcha/verify',
        method:"get",
        params
    })
}
// 手机登录
export function getPhoneLogin(params){
    return request({
        url:'/login/cellphone',
        method:"get",
        params
    })
}

// 退出登录
export function getLogout(){
    return request({
        url:'/logout',
        method:"get",
    })
}
// 获取登录状态
export function getLoginStatus(){
    return request({
        url:'/login/status',
        method:"get",
    })
}

// 获取账号信息
export function getUseAccount(){
    return request({
        url:'/user/account',
        method:"get",
    })
}

// 获取用户信息
export function getUserSubcount(){
    return request({
        url:'/user/subcount',
        method:"get",
    })
}

// 获取用户详情
export function getUserDetail(params){
    return request({
        url:'/user/detail',
        method:"get",
        params
    })
}
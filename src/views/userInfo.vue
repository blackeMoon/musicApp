<template>
    <div>
        <div class="user_center_cont">
            <div class="user_header">
                <!-- <router-link class="iconfont icon-fanhui" tag="i" to="/"></router-link> -->
                <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
                <i class="iconfont icon-search"></i>
            </div>
            <!-- 用户 -->
            <div class="user_data">
                <img :src="this.userImg" alt="">
                <div>
                    <span>{{this.userName}}</span>
                    <b>VIP开通</b><b class="level">lv.1</b>
                </div>
                <i class="iconfont"></i>
            </div>
            <!-- 分类 -->
            <div class="user_nav">
                <ul>
                    <li>
                        <img src="../assets/img/logo1.png" alt="">
                        <p>本地/下载</p>
                    </li>
                    <li>
                        <img src="../assets/img/logo2.png" alt="">
                        <p>云盘</p>
                    </li>
                    <li>
                        <img src="../assets/img/logo3.png" alt="">
                        <p>已购</p>
                    </li>
                    <li>
                        <img src="../assets/img/logo4.png" alt="">
                        <p>最近播放</p>
                    </li>
                    <li>
                        <img src="../assets/img/logo5.png" alt="">
                        <p>我的好友</p>
                    </li>
                    <li>
                        <img src="../assets/img/logo6.png" alt="">
                        <p>收藏和赞</p>
                    </li>
                    <li>
                        <img src="../assets/img/logo7.png" alt="">
                        <p>我的播客</p>
                    </li>
                    <li>
                        <img src="../assets/img/logo8.png" alt="">
                        <p>音乐应用</p>
                    </li>
                </ul>
            </div>
            <!-- 喜欢的音乐 -->
            <div class="mymusic">
                <div class="xin">
                    <i class="iconfont icon-aixin"></i>
                </div>
                <div>
                    <p>我喜欢的音乐</p>
                    <span>4首</span>
                </div>
                <div class="xindong">
                    <i class="iconfont icon-aixin"></i>
                    心动模式
                </div>
            </div>

            <!-- 歌单 -->
            <div class="user_songlist">
                <div class="active">
                    <p class="active">创建歌单</p>
                </div>
                <div>
                    <p>收藏歌单</p>
                </div>
            </div>

            <!-- 共享 -->
            <div class="create_share">
                <div class="top">
                    创建共享歌单，和你的好友一同管理 <i class="iconfont icon-youjiantou"></i>
                </div>
                <div class="buttom">
                    <div class="create_songlist">
                        <p>创建歌单</p>
                        <i class="iconfont icon-tianjiajiahaowubiankuang"></i>
                        <i class="iconfont icon-diandiandianshu"></i>
                    </div>
                    <div class="daoru">
                        <div>
                            <i class="iconfont icon-shangchuanjingzhi"></i>
                        </div>
                        <span>一键导入外部音乐</span>  
                    </div>
                </div>
                <div class="shoucang_box">
                    <div class="shoucang">
                        <p>收藏歌单</p>
                        <i class="iconfont icon-diandiandianshu"></i>
                    </div>
                    <div class="gedanlist">
                        <p>暂无收藏歌单</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {getUserDetail} from "../api/base"
    export default {
        data() {
            return {
                uid:window.localStorage.getItem("uid"),
                userImg:"",
                userName:"",
            }
        },
        methods: {
            getUserDetailFun(){
                getUserDetail({uid:this.uid}).then(data=>{
                console.log(data);
                this.userImg = data.profile.avatarUrl
                this.userName = data.profile.nickname
                })  
            }
        },
        created(){
            this.getUserDetailFun()
        }
    }
    
</script>

<style lang="less">
    .user_center_cont{
        width: 100%;
        background-color: #F4F4F4;
        padding: 0px 15px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        bottom: 0;
        min-width: 375px;
        max-width: 750px;
        .user_header{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-between;
            i{
                flex: 0 0 40px;
                font-size: 20px;
                text-align: center;
                line-height: 40px;
            }
        }
        .user_data{
            height: 65px;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-right: 10px;
            }
            .iconfont{
                font-size: 50px;
                color: #FDDCD5;
                margin-right: 10px;
            }
            div{
                width: 100px;
                flex-wrap: wrap;
                font-size: 12px;
                box-sizing: border-box;
                span{
                    display: block;
                    width: 200px;
                    font-size: 25px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                b{
                    padding: 2px 5px;
                    border-radius: 10px;
                    background-color: #BBBBBB;
                    margin-right: 5px;
                    color: white;
                    &.level{
                        background-color: white;
                        color: rgb(49, 46, 46);
                    }
                }
            }
        }
        .user_nav{
            width: 100%;
            background-color: #fff;
            border-radius: 20px;
            height: 168px;
            margin-bottom: 15px;
            ul{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                li{
                    flex: 0 0 25%;
                    height: 84px;
                    text-align: center;
                    font-size: 12px;
                    // line-height: 42px;
                    img{
                        height: 30px;
                        width: 30px;
                        margin: 20px auto 5px auto ;
                    }
                    // i{
                    //     display: block;
                    //     font-size: 30px;
                    //     color: red;
                    //     margin-top: 20px;
                    //     &.icon-icon--{
                    //         font-size: 32px;
                    //     }
                    // }
                }
            }
        }
        .mymusic{
            width: 100%;
            height: 78px;
            border-radius: 15px;
            background-color: white;
            display: flex;
            align-items: center;
            padding: 0px 15px;
            box-sizing: border-box;
            margin-bottom: 20px;
            div{
                margin-right: 10px;
                font-weight: bold;
                border-radius: 10px;
                span{
                    font-size: 12px;
                    color: #C1C1C1;
                }
                &.xin{
                    width: 50px;
                    height: 50px;
                    background-color: black;
                    text-align: center;
                    line-height: 50px;
                    i{
                        color: white;
                        font-size: 23px;
                    }
                }
                &.xindong{
                    border: 1px solid #F3F3F3;
                    border-radius: 20px;
                    padding: 5px 10px;
                    margin-left: 32px;
                    font-size: 14px;
                    color: #212121;
                }
            }
        }

        .user_songlist{
            width: 100%;
            color: #404040;
            font-weight: bold;
            display: flex;
            margin-bottom: 10px;
            div{
                flex: 0 0 50%;
                height: 35px;
                line-height: 35px;
                display: flex;
                justify-content: center;
                p{  
                    text-align: center;
                    height: 25px;
                    &.active{
                        border-bottom: 5px solid red;
                    }
                }
            }
        }
        .create_share{
            // height: 635px;
            border-radius: 10px;
            // background-color: white;
            .top{
                height: 35px;
                line-height: 35px;
                color: #FDB48F;
                font-size: 12px;
                background-color: #FFF2EA;
                text-align: center;
            }
            .buttom{
                height: 100px;
                background-color: white;
                .create_songlist{
                    height: 35px;
                    display: flex;
                    font-size: 12px;
                    color: #C1C1C1;
                    padding: 0px 15px;
                    align-items: center;
                    p{
                        flex: 1;
                        height: 35px;
                        line-height: 35px;

                    }
                    i{
                        flex: 0 0 35px;
                    }
                }
                .daoru{
                    height: 50px;
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    div{
                        width: 50px;
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                        margin-left: 15px;
                        margin-right: 20px;
                        background-color: #F3F3F3;
                        border-radius: 10px;
                        .iconfont{
                            font-size: 20px;
                        }
                    }
                }
            }
            .shoucang_box{
                margin: 15px 0px;
                height: 110px;
                background-color: white;
                border-radius: 10px;
                color: #A0A0A0;
                box-sizing: border-box;
                margin-bottom: 200px;
                .shoucang{
                    height: 35px;
                    display: flex;
                    font-size: 12px;
                    color: #C1C1C1;
                    padding: 0px 15px;
                    align-items: center;
                    justify-content: space-between;
                    i{
                        flex: 0 0 35px;
                    }
                }
                .gedanlist{
                    height: 75px;  
                    p{
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
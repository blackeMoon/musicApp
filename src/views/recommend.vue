<template>
    <div>
        <div class="banner">
            <div class="imgs">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(item,index) in imgs" :key="index">
                        <img :src="item.pic" alt="">
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>

        <div class="remLists">
            <div class="title">
                推荐歌单
            </div>
            <div class="content">
                <ul>
                    <li v-for="(item,index) in personalized" :key="index">
                        <router-link :to="'/rank/ranklist?id='+item.id" class="img">
                            <img :src="item.picUrl" alt="">
                        </router-link>
                        <span><i class="iconfont icon-icon-"></i>{{item.playCount | playCountNum}}</span>
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 最新音乐 -->
        <div class="newSong">
            <div class="title">
                推荐新音乐
            </div>
            <div class="content">
            <ul>
                <li v-for="(item,index) in newsong"  @click="setId(item.id)" :key="index">
                    <p>{{item.name}}<span class="yanse">{{item.song.album.alias[0]}}</span></p>
                    <p class="font_sty"><i></i>{{item.song.artists[0].name}}-{{item.name}}</p>
                        <span class="iconfont icon-bofang"></span>
                </li>
            </ul>
            </div>
        </div>


        <!-- 最新专辑 -->
        <!-- <div class="newZhuanji">
            <div class="zhuanji_title">
                推荐专辑
            </div>
            <div class="zhuanji_box">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>
        </div> -->

    </div>
</template>

<script>
import {getBanner,getPersonalized,getNewsong} from "../api/recommend";

    export default {
        data() {
            return {
                imgs:null,
                personalized:null,
                newsong:null
            }
        },
        methods:{
            setId(id){
                this.$emit("get-player-id",id);
            },
            getBannerFun(){
                // 轮播图数据
                getBanner().then(data=>{
                    if(data.code == 200){
                        this.imgs = data.banners;
                    }
                })
            },
            getPersonalizedFun(){
                // 热门歌单数据
                getPersonalized().then(data=>{
                    if(data.code == 200){
                        // console.log(data);
                        this.personalized = data.result
                    }
                })
            },
            getNewsongFun(){
                // 推荐新歌
                getNewsong().then(data=>{
                    if(data.code == 200){
                        this.newsong = data.result
                        // console.log(data);
                        // console.log(data.result[0].id);
                        // console.log(id);
                    }
            })
        }
        },
        created(){
            this.getBannerFun();
            this.getPersonalizedFun();
            this.getNewsongFun()
        },
        filters:{
            playCountNum(value){
                let w = value > 10000 ? value/10000 : value; //万计算
                let y = w > 10000 ? parseInt(w/10000) + "亿" : parseInt(w) + "万";//亿计算
                return y;
            }
        },
       
    }
    
   
</script>

<style lang="less">
    .banner{
        width: 100%;
        text-align: center;
        position: relative;
        &::after{
            background-color: #D4473C;
            position: absolute;
            top:0px;
            left:0px;
            z-index: -1;
            width: 100%;
            height: 132px;
            content: "";
            display: block;
        }
        .imgs{
            margin: auto;
            min-height: 100px;
            background: turquoise;
            width: 96%;
            border-radius: 5px;
            .my-swipe{
                min-height: 100px;
                img{
                    width: 100%;
                    border-radius: 5px;
                }
            }
        }
    }

    .remLists{
        .title{
            height: 60px;
            line-height: 60px;
            text-indent: 5px;
            font-size: 16px;
            color:#000;
            font-weight: bold;
        }
        .content{
            ul{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                li{
                    flex: 0 0 33%;
                    position: relative;
                    span{
                        position: absolute;
                        top:0px;
                        right: 0px;
                        color:#fff;
                        font-size: 10px;
                        i{
                            font-size: 15px;
                            vertical-align: middle;
                        }

                    }
                    .img{
                        background-color: aqua;
                        min-height: 50px;
                        width: 100%;
                        border-radius: 3px;
                        img{
                            width: 100%;
                            border-radius: 3px;
                        }
                    }
                    p{
                        font-size: 12px;
                        color:#565658;
                        line-height: 15px;
                        padding:5px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }


    .newSong{
        width: 100%;
        .title{
            width: 100%;
            height: 16px;
            line-height: 16px;
            font-weight: bold;
            text-indent: 5px;
            border-left: 2px solid red;
            box-sizing: border-box;
            margin-bottom: 14px;
        }
        .content{
            width: 100%;
            ul{
                li{
                    width: 100%;
                    height: 55px;
                    padding: 6px 0;
                    position: relative;
                    border-bottom: 1px solid #F2F2F3;
                    p{
                        width: 85%;
                        padding:0px 40px 0px 10px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        box-sizing: border-box;
                        height: 25px;
                        line-height: 25px;
                        margin-top: 3px;
                        .yanse{
                            color: #AAAAAA;
                        }
                    }
                    .iconfont{
                        position: absolute;
                        top: 17px;
                        right: 15px;
                        font-size: 25px;
                        color: #AAAAAA;
                     }
                     .font_sty{
                         font-size: 12px;
                         height: 18px;
                         line-height: 18px;
                         color: #AAAAAA;
                     }
                }
            }
        }
    }
    
    .newZhuanji{
        width: 100%;
        height: 100px;
        .zhuanji_box{
            width: 100%;
            height: 100px;
            ul{
                width: 100%;
                display: flex;
                li{
                    width: 33.3%;
                }
            }
        }

    
    }
    // .newzhuanji{
    //     width: 100%;
    //     overflow-x: scroll;
    //     .swiper-slide {
    //         text-align: center;
    //         font-size: 18px;
    //         background: #fff;
    //         // width: 50%;
    //         height: 100px;
    //         /* Center slide text vertically */
    //         display: -webkit-box;
    //         display: -ms-flexbox;
    //         display: -webkit-flex;
    //         display: flex;
    //         -webkit-box-pack: center;
    //         -ms-flex-pack: center;
    //         -webkit-justify-content: center;
    //         justify-content: center;
    //         -webkit-box-align: center;
    //         -ms-flex-align: center;
    //         -webkit-align-items: center;
    //         align-items: center;
    //     }
    // }
    

    
</style>
<template>
  <div>
    <div class="banner">
        <div class="imgs">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in imgs" :key="index">
                <!-- <img src="../assets/img/1.jpg" alt=""> -->
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
                    <div class="img">
                        <img :src="item.picUrl" >
                    </div>
                    <span><i class="iconfont icon-icon-"></i>{{item.playCount | palyCountNum }}</span>
                    <p>{{item.name}}</p>
                </li>
            
            </ul>
        </div>
    </div>

    <!-- 最新音乐 -->
    <div class="newSong">
        <div class="title">
            最新音乐
        </div>
        <div class="content">
           <ul>
               <li v-for="(item,index) in newsong" :key="index">
                   <p>{{item.name}}<span class="yanse">{{item.song.album.alias[0]}}</span></p>
                   <p class="font_sty"><i></i>{{item.song.artists[0].name}}-{{item.name}}</p>
                    <span class="iconfont icon-bofang"></span>
               </li>
           </ul>
        </div>
    </div>
  </div>
</template>

<script>
import {getBanner,getPersonalized,getNewsong,getNew} from "../api/recommend";
export default {
    data() {
        return {
            // imgs:"../assets/img/1.jpg"
            imgs:null,
            personalized:null,
            newsong:null
        }
    },
    methods:{
            getBanerFun(){
                getBanner().then(data=>{
                    if( data.code == 200){
                    this.imgs = data.banners;
                    }
            // console.log(data);
                 })
            },
            getPersonalizedFun() {
                getPersonalized().then(data=>{
                    if(data.code == 200){
                        this.personalized = data.result
                    }
                    // console.log(data);
                })
            },
            getNewsongFun(){
                getNewsong().then(data=>{
                    if(data.code == 200){
                        this.newsong = data.result
                        console.log(data);
                    }
                })
            },
            getNewFun(){
                getNew().then(data=>{
                    if(data.code == 200){
                        this.newsong = data.result
                        console.log(data);
                    }
                })
            }
        },
    created(){
        this.getBanerFun(),
        this.getPersonalizedFun(),
        this.getNewsongFun(),
        this.getNewFun()
    },
    filters:{
        palyCountNum(value){
            let w = value > 10000 ? value/10000 : value;
            let y = w > 10000 ? parseInt(w/10000) + "亿" : parseInt(w) + "万";
            return y;
        }
    }
};
</script>

<style lang="less">
    .banner{
        width: 100%;
        position: relative;
        text-align: center;
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
            background-color: pink;
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
            color: black;
            font-weight: bold;
        }
        .content{
             ul{
                 display: flex;
                 flex-wrap: wrap;
                 justify-content: space-between;
                 li{
                     flex:0 0 33%;
                     position: relative;
                     span{
                         position: absolute;
                         top: 0px;
                         right: 0px;
                         font-size: 10px;
                         color: white;
                         font-size: 10px;
                         i{
                             font-size: 15px;
                             vertical-align: middle;
                         }
                     }
                     .img{
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
                         color: #565658;
                         line-height: 15px;
                         padding: 5px;
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


</style>
<template>
    <div>
        <div class="mvbox">
            <div class="iconfont icon-fanhui" @click="$router.go(-1)">返回</div>
            <div class="mv" >
                    <video :src="this.mvurl" controls   @loadeddata="loadeddataFun"></video>
            </div>
            <div class="desc" ref="desc">
                视频简介：{{this.desc}}
                <div class="moredata">
                    <span class="iconfont icon-arrow-down" v-show="flag == false" @click="changge"></span>
                    <span class="iconfont icon-arrow-up-bold" v-show="flag == true" @click="changeback"></span>
                </div>
            </div>
            <div class="publishTime">
                上传时间：{{this.publishTime}}
            </div>
            <div class="pinglun_box">
                <div class="pingluncount">
                    全部评论({{this.commentCount}})
                </div>
                <ul>
                    <li v-for="(item,index) in userDet"  :key="index">
                        <div class="left">
                            <div class="img">
                                <img :src="item.src" >
                            </div>
                        </div>
                        <div class="center">
                            <p class="name">{{item.userName}}</p>
                            <p class="cont">{{item.cont}}</p>
                            <p class="time">昨天 00:16</p>
                            <button>回复</button>
                        </div>
                        <div class="right">
                            <i class="iconfont icon-dianzan" @click="add(item.index)"><span></span></i>
                            <i class="iconfont icon-gengduo"></i>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li v-for="(item,index) in comment" :key="index">
                        <div class="left">
                            <div class="img">
                                <img :src="item.user.avatarUrl" >
                            </div>
                        </div>
                        <div class="center">
                            <p class="name">{{item.user.nickname}}</p>
                            <p class="cont">{{item.content}}</p>
                            <p class="time">昨天 00:16</p>
                            <button>回复</button>
                        </div>
                        <div class="right">
                            <i class="iconfont icon-dianzan" @click="add()"><span></span></i>
                            <i class="iconfont icon-gengduo"></i>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="comment_input">
                <div>
                    <input type="text" placeholder="友善发言，温暖评论区" v-model="cont">
                    <div class="sent" @click="sent()">发送</div>
                </div>
                    <i class="iconfont icon-pinglun"></i>
                </div>

        </div>
    </div>
</template>

<script>
import {getPingLun,getMvdeta,getMvUrl} from "../../api/mv.js"

    export default {
        data() {
            return {
                comment:[],
                mvImg:null,
                datalist:null,
                commentCount:null,
                desc:null,
                publishTime:null,
                mvurl:null,
                flag:false,
                flagNu:true,
                // num:20,
                cont:"",
                userDet:[
                    // { src:"http://p1.music.126.net/jnUMEe8hQUwIzG2gjpnJCQ==/109951166246109714.jpg",
                    // userName:"张三",
                    // cont:666}
                ]
            }
        },
        methods: {
            loadeddataFun(event){
                event.target.play();
            },
            changge(){
                var oDiv = document.querySelector(".desc");
                console.log(oDiv);
                oDiv.style.whiteSpace = "normal";
                this.flag = true
            },
            changeback(){
                var oDiv = document.querySelector(".desc");
                oDiv.style.whiteSpace = "nowrap";
                this.flag = false
            },
            add(){
                var oDianzan = document.querySelectorAll(".icon-dianzan")
                for (let index = 0; index < oDianzan.length; index++) {
                    oDianzan[index].onclick = function () {
                        if ( this.flagNu == true) {
                            this.flagNu = false
                            this.style.color = "red";
                        }else{
                            this.flagNu = true
                            this.style.color = "rgb(77, 74, 74)";
                        }
                    }                    
                }
                // for (let index = 0; index < this.comment.length; index++) {
                    
                // }
                    
            },
            sent(){
                this.userDet.unshift({
                    src:"http://p1.music.126.net/jnUMEe8hQUwIzG2gjpnJCQ==/109951166246109714.jpg",
                    userName:"夜猫",
                    cont:this.cont
                })
                this.cont = "";
            }
            
        },
        created() {
           getPingLun({id:this.$route.query.id}).then(data=>{
                        this.content = data.comments;
                        console.log(data);
                        // console.log(data.comments);
                        this.comment = data.comments;
            }),
            // getMvList({id:this.$route.query.id}).then(data=>{
            //     // console.log(data.data);
            //     // console.log(data.data[0].cover);
            //     // console.log(this.$route.query.id);
            //     this.mvImg = data.data.cover;
            // }),
            getMvdeta({mvid:this.$route.query.id}).then(data=>{
                // console.log(data);
                this.datalist = data.data.cover;
                this.commentCount = data.data.commentCount;
                this.desc = data.data.desc;
                this.publishTime = data.data.publishTime
            }),
            getMvUrl({id:this.$route.query.id}).then(data=>{
                    // console.log(data);
                    this.mvurl = data.data.url;
                    // this.mvList[index].mvurl = data.data.url;
                    // 数据没有通过视图
                })
        }
    }
</script>

<style lang="less">
    .mvbox{
        width: 100%;
        position: relative;
        .icon-fanhui{
            position: absolute;
            top: 5px;
            left: 0;
            color: white;
            opacity: 0.5;
            font-size: 18px;
            z-index: 999;
        }
        
        .desc{
            padding: 0px 20px 0px 10px;
            line-height: 30px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: rgba(100, 94, 94, 0.781);
            position: relative;
            .moredata{
                position: absolute;
                top: 0;
                right: 5px;
                color: #807F80;
            }
        }
        .publishTime{
            color: rgba(100, 94, 94, 0.781);
            text-align: right;
            font-size: 14px;
            padding: 0px 10px;
        }
        .mv{
            width: 100%;
            height: 211px;
            // background-color: tomato;
            background-size: 375px 211px;
            background-repeat: no-repeat;
            position: relative;
            span{
                position: absolute;
                top:0px;
                left:0px;
                right: 0px;
                bottom: 0px;
                margin: auto;
                width:40px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                background: rgba(0,0,0,0.5);
                border-radius: 50%;
                color:#fff;
                font-size: 24px;
            }
            video{
                height: 211px;
                margin: 0 auto;
                display: block;
            }
        }
        .pinglun_box{
            height: 100px;
            padding: 0px 15px;
            background-color: white;
            .pingluncount{
                height: 25px;
                font-size: 16px;
                color: #807F80;
                line-height: 25px;
            }
            ul{
                background-color: #DADBDC;
                li{
                    display: flex;
                    margin-bottom: 1px;
                    background-color: white;
                    .left{
                        width: 40px;
                        height: 100px;
                        padding-top: 15px;
                        box-sizing: border-box;
                .img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: white;
                    img{
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }
                }
                    }
                    .center{
                        padding: 10px 0px;
                        width: 240px;
                        display: flex;
                        flex-wrap: wrap;
                        position: relative;
                        p{  
                            width: 100%;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            text-indent: 10px;
                            margin-bottom: 5px;
                            &.name{
                            color: #C2CEDE;
                            font-size: 14px;
                            }
                            &.cont{
                                font-size: 16px;
                                color: #292929;
                            }
                            &.time{
                                margin-top: 10px;
                                font-size: 12px;
                                color: #292929  ;
                            }

                        }
                        button{
                            border: none;
                            border: 1px solid gray;
                            border-radius: 5px;
                            padding: 0px 3px;
                            background-color: transparent;
                            position: absolute;
                            bottom: 13px;
                            left: 80px;
                            font-size: 12px;
                            color: #292929 ;

                        }
                    }
                    .right{
                        flex:0 0 1;
                        display: flex;
                        flex-wrap: wrap;
                        i{
                            text-align: center;
                            width: 100%;
                            line-height: 50px;
                            display: block;
                            &.icon-dianzan{
                                color: gray;
                            }
                            span{
                                color: rgb(77, 74, 74);
                            }
                        }
                    }
                }
            }
            
        }
        .comment_input{
            width: 100%;
            height: 40px;
            background-color: rgb(245, 236, 236);
            // border-top: 1px solid #918491;
            position: fixed;
            bottom: 0;
            display: flex;
            // justify-content: center;
            align-items: center;
            i{
                position: absolute;
                left: 45px;
                color: gray;
            }
            div{
                input{
                    border: none;
                    width: 250px;
                    height: 30px;
                    text-indent: 25px;
                    border-radius: 15px 0px 0px 15px;
                    color: white;
                    background-color: rgba(219, 200, 200, 0.589);
                    margin-left: 40px;
                    vertical-align: bottom;
                }
                .sent{
                    // float: right;
                    display: inline-block;
                    height: 28px;
                    line-height: 28px;
                    padding: 0px 5px;
                    font-size: 15px;
                    border-radius: 0px 15px 15px 0px;
                    color: rgb(168, 118, 126);
                    border: 1px solid rgba(219, 200, 200, 0.589);
                }
            }
        }
    }
</style>
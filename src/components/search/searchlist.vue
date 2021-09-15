<template>
    <div>
        <div class="hearder">           
            <router-link tag="div" to="/search" class="iconfont icon-arrow-left-bold"></router-link>
            <div class="searchbox">
                
            </div>
            <div class="del iconfont icon-shanchu"></div>
        </div>

        <!-- <div class="men_cont">
            <h3>最佳匹配</h3>
            <div class="singername">
                <div class="img"> 
                        <img src="">
                </div>
                <p>歌手:Charlie Puth</p>
            </div>
            <div class="songlist">
                <div class="img"> 
                    <img src="">
                </div>
                <div class="left">
                    <p>歌单:断眉Charlie Puth入坑必听系列,持续更新</p>
                    <p>Charlie Puth</p>
                </div>
            </div>
            <ul class="morelist">
                <li v-for="(item,index) in artistSong" :key="index">
                    <p>The Way I Am</p>
                    <span>Charlie Puth</span>
                </li>
            </ul>
        </div> -->
        <!-- 搜索结果 -->
        <div class="result_box">
            <h3>搜索结果</h3>
            <ul class="search_resultlist">
                <li v-for="(item,index) in list" :key="index" @click='setId(item.id)'>
                    <div>{{item.name}}</div>
                    <div>
                        <i class="SQ"></i>
                        <span>{{item.artists[0].name}}</span>
                    </div>
                    <div class="iconfont icon-bofang"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getSearch} from "../../api/search";
    export default {
        data() {
            return {
                list:[]
            }
        },
        methods: {
            setId(id){
                this.$emit("get-player-id",id);
            },
        },
        created() {
             getSearch({keywords:this.$route.query.keywords}).then(data=>{
                if( data.code == 200){
                    // console.log(this);
                    // console.log(data);
                    this.list = data.result.songs;
                    // this.list = data.result.song
                    console.log(this.list);
                }
            })
        },
    }
</script>

<style lang="less">
    .hearder{ 
        width: 100%;
        height: 40px;
        background-color: #D4473C;
        display: flex;
        .iconfont{
            flex: 0 0 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 16px;
            color: white;
        }
        .searchbox{
            flex: 1;
            height: 100%;
            display: flex;
            // padding: 13px 0px;
            // box-sizing: border-box;
            input{
                border: none;
                outline: none;
                width: 100%;
                height: 22px;
                background-color: #D4473C;
                margin-top: 9px;
                border-bottom: 1px solid #E19893;
            }
            input::placeholder{
                color: #E5908A;
            }
        }
        .del{
            flex: 0 0 40px;
            text-align: center;
            line-height: 40px;
            font-size: 20px;
            color: white;
        }
    }

    // 搜索结果
    .result_box{
        padding: 0px 15px;
        box-sizing: border-box;
        h3{
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #AAAAAA;
            font-size: 15px;
            color: #AAAAAA;
            box-sizing: border-box;
        }
        .search_resultlist{
            li{
                height: 55px;
                color: #7E6697;
                border-bottom: 1px solid #AAAAAA;
                box-sizing: border-box;
                position: relative;
                padding-top: 10px;
                div{

                    .SQ{
                        display: inline-block;
                        width: 12px;
                        height: 8px;
                        background-image: url(../../assets/img/logo.png) ;
                        background-size: 166px 97px;
                        margin: 0px 4px 0px 0px;
                    }
                    span{
                        font-size: 12px;
                    }
                }
                .iconfont{
                    font-size: 25px;
                    color: #AAAAAA;
                    position: absolute;
                    top: 15px;
                    right: 0;
                }
                
            }
        }
    }


    // .men_cont{
    //     padding-top: 8px;
    //     width: 100%;
    //     // padding-left: 20px;
    //     background-color: #F2F3F4;
    //     position: absolute;
    //     top: 40px;
    //     bottom: 0;
    //     box-sizing: border-box;
    //     h3{
    //         font-size: 14px;
    //         color: #EEBFBB;
    //         margin-bottom: 10px;
    //         text-indent: 20px;
    //     }
    //     .singername,.songlist{
    //         height: 58px;
    //         // line-height: 58px;
    //         display: flex;
    //         align-items: center;
    //         font-size: 14px;
    //         color: #111213;
    //         border-bottom: 2px solid #4AFFFF;
    //         .img{
    //              width: 45px;
    //              height: 45px;
    //             //  background-color: yellow;
    //              margin:6px 9px 6px 20px;
    //              img{
    //                  width: 45px;
    //                  height: 45px;
    //              }
    //         }
    //     }
    //     .morelist{
    //         li{ 
    //             width: 100%;
    //             height: 50px;
    //             display: flex;
    //             flex-wrap: wrap;
    //             align-content: center;
    //             text-indent: 20px;
    //             border-bottom: 1px solid #E3E3E3;
    //             p{
    //                 width: 90%;
    //             }
    //             span{
    //                 font-size: 12px;
    //                 line-height: 18px;
    //                 color: #808181;
    //             }
    //         }
    //     }
    // }
</style>
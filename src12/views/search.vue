<template>
    <div>
        <div class="hearder">
            <router-link tag="div" to="/recommend" class="iconfont icon-shangyiye"></router-link>
            <div class="searchbox">
                <input type="text" placeholder="搜索歌曲、歌手"  @keyup.enter="add">
            </div>
        </div>
        <div class="cont">
            <div class="hot">
                <h3>热门搜索</h3>
                <div class="hot_con">
                    <ul class="hot_b">
                        <li v-for="(item,index) in hots" :key="index">{{item.first}}</li>
                    </ul>
                </div>
            </div>
            <div class="history">
                <h3>
                    搜索历史
                    <div class="iconfont icon-shanchu" @click="delAll()"></div>
                </h3>
                <ul>
                    <li v-for="(item,index) in historyList" :key="index">
                        <p>{{item.content}}</p>
                        <button class="icon_del" @click="del(index)">x</button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 搜索关键词 -->
        <!-- <div class="search_suggest">
            <ul>
                <li>薛之谦</li>
                <li>薛之谦</li>
                <li>薛之谦</li>
                <li>薛之谦</li>
            </ul>
        </div> -->
    </div>

</template>

<script>
import {getSearch,getHotSearch} from "../api/search";
    export default {
        data() {
            return {
                hots:null,
                historyList:[
                    { content:"薛之谦"},
                    { content:"李志"},
                    { content:"渺小却伟大"},

                ]
            }
        },
        methods: {
            add(event){
                console.log(event.target.value);
                var name = event.target.value
                if (!name) {
                    return
                }
                this.historyList.push({content:name})
                event.target.value ="";
            },
            del(index){
                this.historyList.splice(index,1)
            },
            delAll(){
                this.historyList=[];
            },
            getSearchFun(){
                 getSearch().then(data=>{
                    if( data.code == 200){
                    // this.imgs = data.banners;
                    }
                    // console.log(data);
                 })
            },
            getHotSearchFun(){
                 getHotSearch().then(data=>{
                    if( data.code == 200){
                    this.hots = data.result.hots;
                    }
                    console.log(data);
                 })
            }
        },
        created() {
            this.getSearchFun();
            this.getHotSearchFun();
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
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 18px;
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
                width: 305px;
                height: 22px;
                background-color: #D4473C;
                margin-top: 9px;
                border-bottom: 1px solid #E19893;
            }
            input::placeholder{
                color: #E5908A;
            }
        }
    }
   .cont{
       width: 100%;
       padding-left: 20px;
       box-sizing: border-box;
       padding-top: 20px;
       background-color: #F2F3F4;
       position: absolute;
       top: 40px;
       bottom: 0;
       .hot{
           margin-bottom: 18px;
           h3{
               font-size: 14px;
               color: #A1A2A3;
               margin-bottom: 10px;
           }    
            .hot_con{
                .hot_b{
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        border: 1px solid #E3E4E5;
                        padding: 5px 4px;
                        font-size: 13px;
                        border-radius: 5px;
                        margin-right: 8px;
                        margin-bottom: 6px;
                        color: #555657;
                        box-sizing: border-box;
                    }
                }
            }
       }
       .history{
              h3{   
                   font-size: 14px;
                   color: #ABACAD;
                   position: relative;
                   .iconfont{
                        float: right;
                        margin-right: 10px;
                   }
              }
              ul{
                  li{
                      height: 37px;
                      position: relative;
                      p{
                          height: 37px;
                          color: #4D4F50     ;
                          line-height: 37px;
                      }
                      button{
                          position: absolute;
                          top: 10px;
                          right: 15px;
                          border: none;
                          outline: none;
                          color: #37393A;
                      }
                  }
              }
       }
   } 
   .search_suggest{
       position: absolute;
       width: 100%;
       top: 40px;
       bottom: 0;
       z-index: 111;
    //    background-color: yellow;
       ul{
           li{
               height: 40px;
               line-height: 40px;
               text-indent: 20px;
               border-bottom: 1px solid gray;
               background-color: white ;
           }
       }
   }

</style>
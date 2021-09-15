<template>
    <div>
        <div class="mvlists" ref="mvlists">
            <ul>
                <li v-for="(item,index) in mvList" :key="index">
                    <div class="imgs" v-show="playNum != index" @click="getUrlShow(index,item.id)" :style="{'background-image':'url('+item.cover+')'}">
                        <span class="iconfont icon-arrow-right-filling"></span>
                    </div>
                    <div class="imgs" v-show="playNum == index"  @click="mvPlayend" >
                        <video :src="item.mvurl" controls :ref="'video'+index"  @loadeddata="loadeddataFun"></video>
                    </div>
                    <p>
                        {{item.name}}
                    </p>
                    <div class="comments">
                        <div>
                            {{item.artists[0].name}}
                            <span>+ 关注</span>
                        </div>
                        <div>
                            <router-link tag="i" :to="'/pinglun/pinglundata?id='+item.id" class="iconfont icon-xinxi"><b></b></router-link>
                            <i class="iconfont icon-dianzanaixin" @click="changeColor"><b></b></i>
                            <i class="iconfont icon-fenxiang1"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getMvList,getMvUrl} from "../api/mv.js"
    export default {
        data() {
            return {
                mvList:[],
                playNum:null,
                offset:0, //偏移数量 , 用于分页
                flag:true,
                contNum:null,
                dianzanNum:null,
            }
        },
        created(){
            getMvList({
                limit:5,
                offset:this.offset
            }).then(data=>{
                console.log(data);
                // for(let i = 1 ; i<data.data.length;i++){

                //     if (data.data[i].artists.length == 3 ) {
                //         data.data[i].artists.splice(1,0)
                //     }
                // }
                this.mvList = data.data;
            })
        },
        methods:{
            getUrlShow(index,id){
                if(this.playNum || this.playNum == 0){
                   this.$refs['video' + this.playNum][0].pause();
                }
                this.playNum = index;
                getMvUrl({id}).then(data=>{
                    console.log(data);
                    // this.mvList[index].mvurl = data.data.url;
                    // 数据没有通过视图
                    this.$set(this.mvList[index],"mvurl",data.data.url)
                })
                
            },
            loadeddataFun(event){
                event.target.play();
            },
            mvPlayend(){
                // console.log(this.$refs['video' + this.playNum]);
                this.$refs['video' + this.playNum][0].pause();
                this.playNum = null;
            },
            // 添加数据
            addData(){
                // 防抖
                if(this.flag){
                    this.flag = false;
                    this.offset += 5; //第五条数据后添加五条数据
                    getMvList({
                        limit:5,
                        offset:this.offset
                    }).then(data=>{
                        console.log(data);
                        this.mvList = this.mvList.concat(data.data);
                        this.flag = true;
                    })
                }
            },
            // 滚动条监听
            handleScroll(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;//滚动条偏移量
                let lis = this.$refs.mvlists.getElementsByTagName("li");
                let num = lis.length;
                let liHeight = lis[num-3].offsetTop;
                if(scrollTop > liHeight){ //触发添加数据
                   this.addData();
                }
            },
            changeColor(){
                var Oi = document.querySelectorAll(".icon-dianzanaixin")
                var flag = true;
                for (let index = 0; index < Oi.length; index++) {
                    
                    if(flag == true){
                        Oi[index].style.color = "red" 
                        flag = false         
                    }else{
                        Oi[index].style.color = "#444444"    
                        flag = true      
                    }         
                }
            }
        },
        mounted(){
            this.$nextTick(()=>{
                // 监听滚动事件
                window.addEventListener("scroll",this.handleScroll)
            })
        },
        beforeDestroy() {
            window.removeEventListener("scroll",this.handleScroll)
        },
    }
</script>

<style lang="less" scoped>
.mvlists{
    width:100%;
    li{
        height: 261px;
        position: relative;
        .imgs{
            width: 100%;
            height: 211px;
            background-repeat: no-repeat;
            background-size:contain;
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
        p{  
            position: absolute;
            top: 0;
            font-size: 14px;
            padding:10px;
            color: white;
        }
        .comments{
            height: 50px;
            line-height: 50px;
            padding: 0px 10px;
            color: #444444;
            display: flex;
            justify-content: space-between;
            div{
                font-weight: bold;
                font-size: 16px;
                display: flex;
                align-items: center;
                span{
                    display: inline-block;
                    width: 40px;
                    height: 18px;
                    font-size: 12px;
                    background-color: #0054E6;
                    color: white;
                    margin-left: 10px;
                    line-height: 18px;
                    text-align: center;
                    border-radius: 10px;
                    padding: 3px;
                }
                .iconfont{
                    display: inline-block;
                    font-size: 16px;
                    margin-left: 10px;
                    text-align: center;
                    width: 50px;
                    b{
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
</style>
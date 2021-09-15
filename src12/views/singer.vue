<template>
    <div>
        <van-loading v-if="!flag" type="spinner" color="#D4473C" />
        <b-scroll v-if="flag" :top="'90px'" :left="leftList" :right="rightList"></b-scroll>
    </div>
</template>

<script>
import BScroll from '../components/base/BScroll.vue';
import {getTopArtists,getArtistList,getSingerList} from '../api/singer'
    export default {
        data() {
            return {
                leftList:["热","A","B","C","E","F","G","H","I","J","k","L","M","N","O","P","X","Y","Z"],
                rightList:[],
                flag:false
            }
        },
        // beforeRouteEnter (to, from, next) {
        //     getNew
        // }
        methods: {
            // 热门歌手
            getTopArtistsFun(){
                getTopArtists().then(data =>{
                    this.rightList.unshift({
                        name:"热",
                        data:data.artists
                    })
                    // console.log(data);
                })
            },
            getArtistListFun(){
                let num = 1;
                for(let i =1;i <this.leftList.length;i++){
                    getArtistList({
                        type:1,
                        area:96,
                        initial:this.leftList[i],
                        limit:10
                    }).then(data=>{
                        this.rightList.push({
                            name:this.leftList[i],
                            data:data.artists
                        })
                        console.log(data);
                        num++;
                        if(num == this.leftList.length){
                            this.flag = true;
                        }
                    })
                }
            },
            getSingerListFun(){
                getSingerList({id:this.$route.query.id}).then(data=>{
                    console.log(data);
                })
            }

        },
        created() {
            this.getTopArtistsFun();
            this.getArtistListFun();
            this.getSingerListFun()
        },
        
        components:{
            BScroll
        }
    }
</script>

<style lang="less">
.van-loading {
    margin-top: 50px;
    text-align: center;
}
</style>
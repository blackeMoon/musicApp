<template>
    <div>
        <div class="guidePage">
              <!-- Swiper -->
            <div class="swiper-container guidePage-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="guidePageslide">
                            <img src="../../assets/img/guide1.png" alt="">
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="guidePageslide">
                            <img src="../../assets/img/guide2.png" alt="">
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="guidePageslide">
                            <img src="../../assets/img/guide3.png" alt="">
                            <van-button type="primary" @click="gogo" size="mini" class="in_btn">开始体验</van-button>
                        </div>
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination guidePage-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script>
    // https://www.swiper.com.cn/
    // $cnpm install swiper@5.3.6 -S
    import Swiper from "swiper";
    export default {
        mounted(){
            new Swiper('.guidePage-container', {
                pagination: {
                    el: '.guidePage-pagination',
                },
            });
        },
        methods: {
            gogo(){
                this.$router.push("/")
                window.localStorage.setItem("guidePage",true)
            }
        },

    }
</script>

<style lang="less" >

    .swiper-container {
        position: fixed !important; 
        top:0px;
        left:0px;
      width: 100%;
      height: 100%;
    }

    .guidePageslide{
        text-align: center;
        img{
            position: absolute;

            width: 100%;
            height: auto;
        }
        h3{
            color:#595959;
        }
        .in_btn{
            position: absolute;
            width: 175px;
            height: 44px;
            bottom: 117px;
            left: 100px;
            // visibility: hidden;
            font-size: 20px;
            background-color: #0076FE;
            border-radius: 10px;
        }

    }
</style>
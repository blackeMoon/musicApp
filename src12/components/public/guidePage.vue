<template>
    <div>
        <div class="guidePage">
            <!-- Swiper -->
            <div class="swiper-container guidePage-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="guidePageslide">
                            <h2>欢迎来到本APP!!!</h2>
                            <img src="../../assets/img/1.jpg">
                            <h3>导航页1</h3>
                        </div>
                    </div>                   
                    <div class="swiper-slide">
                        <div class="guidePageslide">
                            <h2>在这您可以发现不一样的的美丽</h2>
                            <img src="../../assets/img/2.jpg">
                            <h3>导航页2</h3>
                        </div>
                    </div>          
                    <div class="swiper-slide">
                        <div class="guidePageslide">
                            <h2>请点击下面按钮进入本APP</h2>
                            <img src="../../assets/img/3.jpg">
                            <h3>导航页3</h3>
                            <van-button type="primary" to="/" size="mini">进入音乐首页</van-button>
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
    import Swiper from "swiper";
    export default {
        mounted() {
            new Swiper('.guidePage-container',{
                pagination:{
                    el:'.guidePage-pagination',
                },
            });
        },
    }
</script>

<style lang="less">
    .swiper-container {
        position: fixed !important; 
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
        background-color: pink;
    }

    .guidePageslide{
        text-align: center;
        img{
            margin:0 auto;
            width: 100%;
            height: auto;
            margin-bottom: 30px;
        }
        h2{
            color: white;
            text-align: center;
            margin-top: 50px;
            margin-bottom: 80px;
            font-style: italic;
        }
        h3{
            color:#595959;
            margin-bottom: 20px;
        }
    }
</style>
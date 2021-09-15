<template>
    <div>
        <div class="hearder">           
            <router-link tag="div" to="/recommend" class="iconfont icon-shangyiye"></router-link>
            <div class="searchbox">
                <input type="text" placeholder="Charlie Puth">
            </div>
            <div class="del">X</div>
        </div>
        <div class="men_cont">
            <h3>最佳匹配</h3>
            <div class="singername">
                <div class="img"> <!-- w46 -->
                        <img src="">
                </div>
                <p>歌手:Charlie Puth</p>
            </div>
            <div class="songlist">
                <div class="img"> <!-- w46 -->
                    <img src="">
                </div>
                <div class="left">
                    <p>歌单:断眉Charlie Puth入坑必听系列,持续更新</p>
                    <p>Charlie Puth</p>
                </div>
            </div>
            <ul>
                <li>
                    <p>The Way I Am</p>
                    <span>Charlie Puth</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
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

    .men_cont{
        padding-top: 8px;
        width: 100%;
        // padding-left: 20px;
        background-color: #F2F3F4;
        position: absolute;
        top: 40px;
        bottom: 0;
        box-sizing: border-box;
        h3{
            font-size: 14px;
            color: #EEBFBB;
            margin-bottom: 10px;
            text-indent: 20px;
        }
        .singername,.songlist{
            height: 58px;
            // line-height: 58px;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #111213;
            border-bottom: 2px solid #4AFFFF;
            .img{
                 width: 45px;
                 height: 45px;
                //  background-color: yellow;
                 margin:6px 9px 6px 20px;
                 img{
                     width: 45px;
                     height: 45px;
                 }
            }
        }
        ul{
            li{ 
                width: 100%;
                height: 50px;
                display: flex;
                flex-wrap: wrap;
                align-content: center;
                text-indent: 20px;
                border-bottom: 1px solid #E3E3E3;
                p{
                    width: 90%;
                }
                span{
                    font-size: 12px;
                    line-height: 18px;
                    color: #808181;
                }
            }
        }
    }
</style>
<template>
    <div>
        <div class="header">
           <div class="left iconfont icon-zujian-icon-32" @click="change"></div>
           <div class="center">
             MUSIC-VUE
           </div>
           <div class="right iconfont icon-search" @click="$router.push('/search')"></div>
        </div>

        <div class="navs">
            <router-link to="/recommend" class="item"><span>推荐</span></router-link>
            <router-link to="/rank" class="item"><span>排行</span></router-link>
            <router-link to="/singer" class="item"><span>歌手</span></router-link>
            <router-link to="/newmv" class="item"><span>MV</span></router-link>
        </div>

        <!-- 侧栏 -->
        <div class="chelan" v-show="flag == true" @mouseout="change">
            <div class="user" v-if="changeLogin == false" >
              <router-link tag="div"  to="/login" class="login" @click="getloginstatueFun()">登录</router-link>
              <i class="iconfont icon-hanhan-01-01"></i>
            </div>
            <div class="user" v-if="changeLogin == true">
              <router-link tag="div" to="/userInfo" class="userIMG" @click="changeBtn">
                  <img :src="this.userImg">
              </router-link>
              <span> {{this.userName}} </span>
              <span class="iconfont icon-youjiantou"></span>
              <i class="iconfont icon-hanhan-01-01"></i>
            </div>
            <div class="vip">
              <div class="top">
                <p>开通黑胶VIP</p>
                <span>立享超17项专属特权&gt;</span>
                <button>会员中心</button>
              </div>
              <div class="buttom">
                <span>受邀专享，黑胶VIP低至0.03元/天! </span>
                <i class="disco">受邀专享</i>
              </div>
            </div>
            <div class="user_center">
              <p>
                <span class="iconfont icon-youjian"></span>
                我的信息
                <span class="scir">1</span>
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-huaban"></span>
                风贝中心
                <i class="button">签到</i>
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-dengpao"></span>
                创作者中心
                <span class="iconfont icon-youjiantou"></span>
              </p>
            </div>
            <!-- 音乐服务 -->
            <div class="user_center">
              <h6>音乐服务</h6>
              <p>
                <span class="iconfont icon-huopiaotongxing"></span>
                风村有票
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-icon--"></span>
                商城
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-xinbaniconshangchuan-"></span>
                游戏专区
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-lingdang"></span>
                口袋彩铃
                <span class="iconfont icon-youjiantou"></span>
              </p>
            </div>
            <!-- 其它 -->
            <div class="user_center">
              <h6>其它</h6>
              <p>
                <span class="iconfont icon-shezhi"></span>
                设置
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-yueduye-yejianmoshi"></span>
                夜间模式
              </p>
              <p>
                <span class="iconfont icon-04"></span>
                定时关闭
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-yifu"></span>
                个性装扮
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-V"></span>
                边听边存
                <b>未开启</b>
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-yinyuetai"></span>
                在线听歌免流量
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-stop"></span>
                音乐黑名单
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-baohu"></span>
                青少年模式
                <b>未开启</b>
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-naozhong"></span>
                音乐闹钟
                <span class="iconfont icon-youjiantou"></span>
              </p>
            </div>


            <div class="user_center">
              <p>
                <span class="iconfont icon-dingdan"></span>
                我的订单
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-youhuiquan"></span>
                优惠卷
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-icon_kefu"></span>
                我的客服
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-fenxiang"></span>
                分享网易云音乐
                <span class="iconfont icon-youjiantou"></span>
              </p>
              <p>
                <span class="iconfont icon-guanyu"></span>
                关于
                <span class="iconfont icon-youjiantou"></span>
              </p>
            </div>
            <div class="exit" v-if="changeLogin==true"  @click="getLogoutFun()">
                退出登录/关闭
            </div>
          </div>
    </div>
</template>

<script>
// ,getUserSubcount
import {getLogout,getUseAccount,getUserDetail} from "../../api/base"
    export default {
        data() {
          return {
            flag:false,
            changeLogin:false,
            uid:window.localStorage.getItem("uid"),
            userImg:"",
            userName:"",
          }
        },
        
        methods: {
          change(){
            this.flag = !this.flag;
          },
          changeBtn(){
            // window.localStorage.setItem("login",true)
            this.changeLogin = true;
          },
          // 退出登录
          getLogoutFun(){
            window.localStorage.setItem("login",false)
              getLogout().then(data=>{
              console.log(data);
              })
              this.flag = !this.flag;
          },
          getloginstatueFun(){
            let login = window.localStorage.getItem("login",true)
            if(login){
              this.changeLogin = true
            }else{
              this.changeLogin = false
            }
          },
          // 获取登陆后的信息的方法
          getUserDetailFun(){
            getUserDetail({uid:this.uid}).then(data=>{
              console.log(data);
              // this.userImg = data.profile.avatarUrl
              // this.userName = data.profile.nickname
            })  
          }
          
        },
        watch:{
          // get(){
            
          // }
        },
        // 调用获取用户登录信息的方法
        created() {
          getUseAccount().then(data=>{
                console.log(data);
            }),
          this.getloginstatueFun()
          this.getUserDetailFun()
          // getUserSubcount().then(data=>{
          //   console.log(data);
          // })
        }
    }
</script>

<style lang="less">

.header{
  height: 40px;
  display: flex;
  background-color: #D4473C !important;
  color:#fff;
  text-align: center;
  .left,.right{
    flex:0 0 40px;
    line-height: 40px;
  }
  .center{
    flex:1;
    line-height: 40px;
  }
}

.navs{
  height: 40px;
  display: flex;
  background-color: #D4473C;
  .item{
    flex:1;
    width: 33.33%;
    text-align: center;
    font-size: 15px;
    span{
      margin-top: 9px;
      display: inline-block;
      height: 21px;
      line-height: 21px;
      border-bottom: 1px solid transparent;
      color:#fff;
    }
    &.router-link-active span{
      font-weight: bold;
      border-color: #fff;
    }
  }
}
.chelan{
  position: fixed;
  top: 0;
  left: 0;
  width: 85%;
  height: 667px;
  background-color: #F5F5F5;
  z-index: 99999;
  padding: 0px 15px;
  box-sizing: border-box;
  overflow-y: scroll;
  .user{
    height: 40px;
    margin-top: 10px;
    color: #1D1D1D;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .login{
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      // background-color: white;
      border: 2px solid white;
      border-radius: 20px;
      // font-size: 20px;
      color: red;
      box-sizing: border-box;
    }
    i{
      font-size: 25px;
      color: #F4DBD7;
      margin: 10px 10px 10px 0px;
      &.icon-hanhan-01-01{
        position: absolute;
        color: #2E2E2E;
        right: 15px;
      }
    }
    span{
      margin-left: 15px;
      font-size: 20px;
      font-style: italic;
      color: rgb(56, 46, 46);
    }
    .userIMG{
      img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }
  }
  .vip{
    height: 108px;
    background-color: #A2A2A2;
    border-radius: 10px;
    padding: 10px 15px;
    box-sizing: border-box;
    div{
      width: 100%;
      position: relative;
      &.top{
        border-bottom: 1px solid #bbb5b546;
        padding-bottom: 10px;
      }
      &.buttom{
        padding-top: 10px;
      }
      p{
        font-size: 18px;
        color: #FFFFFF;
      }
      span{
        font-size: 13px;
        color: #BDBDBD;
      }
      button{
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 7px 10px;
        border: 2px solid white;
        background-color: transparent;
        border-radius: 20px;
        font-size: 12px;
        color: #FFFFFF;
      }
      .disco{
        display: inline-block;
        width: 27px;
        font-size: 12px;
        background-color: red;
        border-radius: 3px;
        color: white;
        position: absolute;
        right: 0px;
        top: 7px;
        line-height: 13px;
      }
    }
  }
  .user_center{
      width: 100%;
      margin-top: 15px;
      margin-bottom: 15px;
      border-radius: 10px;
      overflow: hidden;
      box-sizing: border-box;
      h6{
        color: #B2B2B2;
        height: 35px;
        background-color: white;
        line-height: 35px;
        text-indent: 15px;
        margin-bottom: 1px;
      }
      p{
        position: relative;
        height: 48px;
        line-height: 48px;
        background-color: white;
        margin-bottom: 1px;
        padding-left: 15px;
        font-weight: bold;
        color: #4F4F4F;
        .iconfont{
          font-size: 16px;
          margin-right: 10px;
        }
        .button{
          display: inline-block;
          font-size: 12px;
          font-style: normal;
          color: red;
          border: 1px solid red;
          border-radius: 20px;
          height: 20px;
          line-height: 20px;
          padding: 3px 10px;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 30px;
          margin:  auto;
        }
        .icon-youjiantou{
          position: absolute;
          right: 0;
        }
        .scir{
          position: absolute;
          top: 0;
          bottom: 0;
          right: 30px;
          margin: auto;
          display: inline-block;
          width: 15px;
          height: 15px;
          border-radius: 15px;
          background-color: red;
          text-align: center;
          line-height: 15px;
          font-size: 12px;
          color: white;
        }
        b{
          position: absolute;
          right: 30px;
          font-size: 12px;
          color:#B5B5B5;
        }
      }
  }
  .exit{
    width: 100%;
    height: 48px;
    text-align: center;
    line-height: 48px;
    color: red;
    font-weight: bold;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 30px;
  }
}
</style>
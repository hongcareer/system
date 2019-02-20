<template>
    <el-header :style="{'height':headerHeight+'px'}" :class="{active:nowWidth<=1069}">
      <el-card>
        <h1 class="header-left">教育数据综合分析系统</h1>
        <div class="header-right-one" v-if="nowWidth>1069">
          <div class="search" @click="$router.replace('/search')">
            <i class="el-icon-search"></i>
            <a>搜索</a>
          </div>
          <div class="home" @click="$router.replace('/home')">
            <i class="iconfont icon-shouye"></i>
            <a>首页</a>
          </div>
          <div class="login" @click="$router.replace('/login')" v-if="!userName">
            <i class="iconfont icon-denglu"></i>
            <a>登录</a>
          </div>
        </div>
        <div class="header-right-two" v-else>
          <div class="choose" @click="isShow = !isShow" v-if="!isShow">
            <i class="iconfont icon-xuanxiang"></i>
          </div>
          <div class="choose-option" v-else>
            <div class="search" @click="$router.replace('/search')">
              <i class="el-icon-search"></i>
              <a>搜索</a>
            </div>
            <div class="home" @click="$router.replace('/home')">
              <i class="iconfont icon-shouye"></i>
              <a>首页</a>
            </div>
            <div class="login" @click="$router.replace('/login')" v-if="!userName">
              <i class="iconfont icon-denglu"></i>
              <a>登录</a>
            </div>
          </div>
        </div>
      </el-card>
    </el-header>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
      name: "homeHeader",
      data(){
        return {
          isShow:false
        }
      },
      mounted(){
        if(this.nowWidth>=1069){
          this.isShow = false
        };
      },
      props:{
        nowWidth:Number,
        nowHeight:Number
      },
      watch:{
        nowWidth(val){
          if(val>=1069){
            this.isShow = false
          }
        }
      },
      computed:{
        ...mapState({
          userName:state => state.login.username
        }),

        headerHeight(){
          let {nowHeight} = this;
          return  nowHeight*0.3
        },
      }
    }
</script>

<style lang="less" scoped>
  .el-header{
    padding: 144px;
    padding-bottom:0;
    padding-top:50px;
    &.active{
      padding: 0px;
    }
    .el-card{
      border-radius: 0;
      height: 100%;
      background-color: #3A86F9;
      position: relative;
      .header-left{
        float: left;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        color: #ffe;
        font-weight: 700;
        font-size: 60px;
      }
      .header-right-one{
        float: right;
        display: flex;
        div{
          margin-right: 10px;
          color: #ffe;
          font-size: 30px;
          .iconfont{
            font-size: 30px;
          }
          a{
            color: #ffe;
          }
        }
      }
      .header-right-two{
        float: right;
        div{
          margin-bottom: 10px;
          color: #ffe;
          font-size: 30px;
          .iconfont{
            font-size: 30px;
          }
          a{
            color: #ffe;
          }
        }
      }
    }
  }
</style>


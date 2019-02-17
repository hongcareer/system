<template>
    <el-header>
      <el-card>
        <h1 class="header-left">教育数据综合分析系统</h1>
        <div class="header-right-one" v-if="nowWidth>1069">
          <div>
            <i class="el-icon-search"></i>
            <span>搜索</span>
          </div>
          <div>
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
          </div>
          <div class="login" @click="$router.replace('/login')">
            <i class="iconfont icon-denglu"></i>
            <span>登录</span>
          </div>
        </div>
        <div class="header-right-two" v-else>
          <div class="choose" @click="isShow = !isShow" v-if="!isShow">
            <i class="iconfont icon-xuanxiang"></i>
          </div>
          <div class="choose-option" v-else>
            <div>
              <i class="el-icon-search"></i>
              <span>搜索</span>
            </div>
            <div>
              <i class="iconfont icon-shouye"></i>
              <span>首页</span>
            </div>
            <div @click="$router.replace('/login')">
              <i class="iconfont icon-denglu"></i>
              <span>登录</span>
            </div>
          </div>
        </div>
      </el-card>
    </el-header>
</template>

<script>
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
        }
      },
      props:{
        nowWidth:Number
      },
      watch:{
        nowWidth(val){
          if(val>=1069){
            this.isShow = false
          }
        }
      }
    }
</script>

<style lang="less" scoped>
  .el-card{
    border-radius: 0;
    height: 100%;
    /*background-color: cornflowerblue;*/
  }
  .el-header{
    background-color: cornflowerblue;
    height: 150px!important;
    box-sizing: border-box;
    padding: 6px;
  }
  .header-left{
    float: left;
  }
  .header-right-one{
    float: right;
    display: flex;
    div{
      margin-right: 5px;
    }
  }
  .header-right-two{
    float: right;
  }
</style>

<!--var url = window.location.href;-->
<!--var typeNumber = url.substr(url.length-1,1);//1：视导员 0：专家-->
<!--if(typeNumber == 0){-->
<!--$("#zjdp").css('display','block')-->
<!--$("#zjdp").html("<option>"+decodeURI(xxname)+"</option>")-->
<!--}else if(typeNumber == 1){-->
<!--$("#xxmc").html("<font size=3 style='color:white;'>"+decodeURI(xxname)+"</font>");-->
<!--}-->

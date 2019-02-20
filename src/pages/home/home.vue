<template>
    <div class="home">
      <el-container direction="vertical">
        <HomeHeader :nowWidth="nowWidth" :nowHeight="nowHeight"/>
        <el-main :style="nowWidth>=1069?{'height':mainHeight+'px'}:{'height':'auto','padding':0}">
          <el-row :gutter="12">
            <el-col >
              <el-card shadow="never" class="home-top" :class="{active:nowWidth<1069}" >
                <el-row :gutter="16" :class="{active:nowWidth<1069}">
                  <el-col :span="nowWidth<1069?24:8" :class="{active:nowWidth<1069}">
                    <el-card shadow="hover" class="base-data all" :class="{active:nowWidth<1069}" @click.native="$router.push('/database')">
                      <span>基础数据</span>
                      <i class="iconfont icon-jichushuju"></i>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6">
                    <el-card shadow="hover" class="data-watch all" :class="{active:nowWidth<1069}">
                      <span>数据监测</span>
                      <i class="iconfont icon-Location"></i>
                    </el-card>
                    <el-card shadow="hover" class="targ-eva all" :class="{active:nowWidth<1069}">
                      <span>指标评价</span>
                      <i class="iconfont icon-shangshengtubiao"></i>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6">
                    <el-card shadow="hover" class="production all" :class="{active:nowWidth<1069}">
                      <span>信息产品</span>
                      <i class="iconfont icon-qiantai"></i>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:4">
                    <el-card shadow="hover" class="timer all" :class="{active:nowWidth<1069}">
                      <span>时间</span>
                    </el-card>
                    <el-card shadow="hover" class="manage all" :class="{active:nowWidth<1069}">
                      <span>系统管理</span>
                      <i class="iconfont icon-shezhi"></i>
                    </el-card>
                  </el-col>

                  <el-col :span="nowWidth<1069?24:4" v-if="nowWidth<1069">
                    <el-card shadow="hover" class="analyse all" :class="{active:nowWidth<1069}">
                      <span>自定义分析</span>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:4" v-if="nowWidth<1069" >
                    <el-card shadow="hover" class="chart-all all" :class="{active:nowWidth<1069}">
                      <span>报表汇总</span>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6" v-if="nowWidth<1069">
                    <el-card shadow="hover" class="school all" :class="{active:nowWidth<1069}">
                      <span>学校主题</span>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6" v-if="nowWidth<1069">
                    <el-card shadow="hover" class="student all" :class="{active:nowWidth<1069}">
                      <span>学生主题</span>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:4" v-if="nowWidth<1069">
                    <el-card shadow="hover" class="teacher all" :class="{active:nowWidth<1069}">
                      <span>教师主题</span>
                    </el-card>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col v-if="nowWidth>=1069">
              <el-card shadow="never" class="home-bottom">
                <el-row :gutter="16">
                  <el-col :span="4">
                    <el-card shadow="hover" class="analyse all" >
                      <span>自定义分析</span>
                      <i class="iconfont icon-fenxi"></i>
                    </el-card>
                  </el-col>
                  <el-col :span="4" >
                    <el-card shadow="hover" class="chart-all all">
                      <span>报表汇总</span>
                      <i class="iconfont icon-baobiao"></i>
                    </el-card>
                  </el-col>
                  <el-col :span="6">
                    <el-card shadow="hover" class="school all">
                      <span>学校主题</span>
                      <i class="iconfont icon-xuexiao"></i>
                    </el-card>
                  </el-col>
                  <el-col :span="6">
                    <el-card shadow="hover" class="student all">
                      <span>学生主题</span>
                      <i class="iconfont icon-xuesheng"></i>
                    </el-card>
                  </el-col>
                  <el-col :span="4">
                    <el-card shadow="hover" class="teacher all">
                      <span>教师主题</span>
                      <i class="iconfont icon-laoshi"></i>
                    </el-card>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
</template>

<script>
    import HomeHeader from '../../components/homeHeader/homeHeader'
    export default {
      data(){
        return {
          nowWidth:document.body.clientWidth,
          nowHeight:document.body.clientHeight,
        }
      },
      components:{
        HomeHeader
      },
      mounted(){
        window.onresize = () => {
          this.nowWidth = document.documentElement.clientWidth;
          this.nowHeight = document.documentElement.clientHeight;
        }
      },
      methods:{

      },
      computed:{
        mainHeight(){
          let {nowHeight} = this;
          return  nowHeight*0.8
        }
      },
      watch: {
        //监视页面的onresize事件
        nowHeight(val) {
          if (!this.timer) {
            this.nowHeight = val;
            this.timer = true;
            setTimeout(() => {
              this.timer = false;
            }, 1000)
          }
        },
        nowWidth(val) {
          if (!this.timer) {
            this.nowWidth = val;
            this.timer = true;
            setTimeout(() => {
              this.timer = false;
            }, 1000)
          }
        }
      }
    }
</script>

<style lang="less" scoped>
  .home{
    background-color: cornflowerblue;
    padding-bottom: 0px;
    box-sizing: border-box;
    .el-container{
      height: 100%;
      .el-row{
        background-color: rgba(255,255,255,0);
        .el-col{
          padding: 0px;
          background-color: rgba(255,255,255,0);
        }
      }
      .el-main {
        color: #333;
        text-align: center;
        height: 80%;
        padding: 144px;
        padding-top: 15px;
        overflow-x: hidden;
        &.active{
          padding: 0px;
        }
        .home-top{
          background-color: transparent;
          border: none;
          height: 410px;
          margin-bottom: -29px;
          &.active{
            height: auto;
            margin-bottom: 0px;
          }
          .el-row{
            margin-top: 15px;
            &.active{
              margin-top: 0px;
            }
            .el-col{
              &:nth-child(1){
                &.active{
                  margin-top: 20px;
                }
              }
            }
          }
          .all{
            &:hover{
              box-shadow: 0px 0px 36px 3px blue;
              transform: scale(1.01);
              transition: all 1s;
            }
            &.active{
              height: 800px;
              margin-top: 60px;
            }
            font-size: 30px;
            color: #ffe;
            font-weight: 100;
          }
          .base-data{
            height: 366px;
            background: #6BA4FA;
            padding: 30px;
            text-align: left;
            box-sizing: border-box;
            .icon-jichushuju{
              font-size: 200px;
              color: white;
            }
          }
          .data-watch{
            height: 176px;
            margin-bottom:9.12px;
            background: linear-gradient(top,#E68080,#DB4747);
            .icon-Location{
              color: #fff;
              font-size: 100px;
            }
          }
          .targ-eva{
            background-color: transparent;
            color: #41ABF1;
            height: 176px;
            .icon-shangshengtubiao{
              color: #41ABF1;
              font-size: 100px;
            }
          }
          .production{
            background: linear-gradient(top,#DABBEE,#F8F1FC);
            height: 366px;
            box-sizing: border-box;
            .icon-qiantai{
              color: #CBA0E7;
            }
          }
          .timer{
            height: 111px;
            margin-bottom:16.13px;
          }
          .manage{
            height: 233px;
            margin-bottom: -10px;
            background: #77DDC9;
          }
          .analyse{
            background-color: #6BA4FA;
            .icon-fenxi{

            }
          }
          .chart-all{
            background-color: #FFAEB9;
            .icon-baobiao{

            }
          }
          .school{
            background: linear-gradient(top,#5DC487,#A8DFBE);
            .icon-xuexiao{

            }
          }
          .student{
            background-color: #6BA4FA;
          }
          .teacher{
            background: linear-gradient(top,#6BA4FA,#BD80E6);
          }
        }
        .home-bottom{
          background-color: transparent;
          border: none;
          height: 320px;
          .el-row{
            margin-top: 20px;
            &.active{
              margin-top: 0px;
            }
          }
          .all{
            height: 266px;
            font-size: 30px;
            color: #ffe;
            &:hover{
              box-shadow:  0px 0px 36px 3px blue;
              transform: scale(1.01);
              transition: all 1s;
            }
            &.active{
              height: 150px;
              margin-bottom: 10px;
            }
          }
          .analyse{
            background-color: #6BA4FA;
            .icon-fenxi{

            }
          }
          .chart-all{
            background-color: #FFAEB9;
            .icon-baobiao{

            }
          }
          .school{
            background: linear-gradient(top,#5DC487,#A8DFBE);
            .icon-xuexiao{

            }
          }
          .student{
            background-color: #6BA4FA;
          }
          .teacher{
            background: linear-gradient(top,#6BA4FA,#BD80E6);
          }
        }
      }
      .el-card {
        border-radius: 0;
        /*border: 0;*/
        .el-card__body{
          padding: 0 !important;
        }
      }
      .el-scrollbar__wrap{overflow:hidden;}
      .el-scrollbar__bar{
        overflow: hidden;
      }
    }
  }


</style>

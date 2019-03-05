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
                      <div class="base-data-center">
                        <span>基础数据</span>
                        <i class="iconfont icon-jichushuju"></i>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6">
                    <el-card shadow="hover" class="data-watch all" :class="{active:nowWidth<1069}">
                      <div class="data-watch-center" :class="{active:nowWidth<1069}" v-if="nowWidth<1069">
                        <span>数据监测</span>
                        <i class="iconfont icon-Location"></i>
                      </div>
                      <div class="data-watch-center" :class="{active:nowWidth<1069}" v-else>
                        <i class="iconfont icon-Location"></i>
                        <span>数据监测</span>
                      </div>
                    </el-card>
                    <el-card shadow="hover" class="targ-eva all" :class="{active:nowWidth<1069}">
                      <div class="targ-eva-center" :class="{active:nowWidth<1069}" v-if="nowWidth<1069">
                        <span>指标评价</span>
                        <i class="iconfont icon-shangshengtubiao" ></i>
                      </div>
                      <div class="targ-eva-center" :class="{active:nowWidth<1069}" v-else>
                        <i class="iconfont icon-shangshengtubiao" ></i>
                        <span>指标评价</span>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6">
                    <el-card shadow="hover" class="production all" :class="{active:nowWidth<1069}">
                      <div class="production-center">
                        <span>信息产品</span>
                        <i class="iconfont icon-qiantai"></i>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:4">
                    <el-card shadow="hover" class="timer all" :class="{active:nowWidth<1069}">
                      <div class="timer-center" :class="{active:nowWidth<1069}">
                        <div class="one">
                          <i class="iconfont icon-shijian"></i>
                          <span>{{nowTime}}</span>
                        </div>
                        <span class="two">{{nowYear}}</span>
                      </div>
                    </el-card>
                    <el-card shadow="hover" class="manage all" :class="{active:nowWidth<1069}">
                      <div class="manage-center" v-if="nowHeight<1069">
                        <span>系统管理</span>
                        <i class="iconfont icon-shezhi"></i>
                      </div>
                      <div class="manage-center" v-else>
                        <i class="iconfont icon-shezhi"></i>
                        <span>系统管理</span>
                      </div>
                    </el-card>
                  </el-col>

                  <el-col :span="nowWidth<1069?24:4" v-if="nowWidth<1069">
                    <el-card shadow="hover" class="analyse all" :class="{active:nowWidth<1069}">
                      <div class="analyse-center">
                        <span>自定义分析</span>
                        <i class="iconfont icon-fenxi"></i>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:4" v-if="nowWidth<1069" >
                    <el-card shadow="hover" class="chart-all all" :class="{active:nowWidth<1069}">
                      <div class="chart-all-center">
                        <span>报表汇总</span>
                        <i class="iconfont icon-baobiao"></i>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6" v-if="nowWidth<1069">
                    <el-card shadow="hover" class="school all" :class="{active:nowWidth<1069}">
                      <div class="school-center">
                        <span>学校主题</span>
                        <i class="iconfont icon-xuexiao"></i>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6" v-if="nowWidth<1069">
                    <el-card shadow="hover" class="student all" :class="{active:nowWidth<1069}">
                      <div class="student-center">
                        <span>学生主题</span>
                        <i class="iconfont icon-xuesheng"></i>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:4" v-if="nowWidth<1069">
                    <el-card shadow="hover" class="teacher all" :class="{active:nowWidth<1069}">
                      <div class="teacher-center">
                        <span>教师主题</span>
                        <i class="iconfont icon-laoshi"></i>
                      </div>
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
                      <div class="analyse-center">
                        <i class="iconfont icon-fenxi"></i>
                        <span>自定义分析</span>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="4" >
                    <el-card shadow="hover" class="chart-all all">
                      <div class="chart-all-center">
                        <i class="iconfont icon-baobiao"></i>
                        <span>报表汇总</span>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="6">
                    <el-card shadow="hover" class="school all">
                      <div class="school-center">
                        <span>学校主题</span>
                        <i class="iconfont icon-xuexiao"></i>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="6">
                    <el-card shadow="hover" class="student all">
                      <div class="student-center">
                        <span>学生主题</span>
                        <i class="iconfont icon-xuesheng"></i>
                      </div>
                    </el-card>
                  </el-col>
                  <el-col :span="4">
                    <el-card shadow="hover" class="teacher all">
                      <div class="teacher-center">
                        <i class="iconfont icon-laoshi"></i>
                        <span>教师主题</span>
                      </div>
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
          nowWidth:document.body.clientWidth,//屏宽
          nowHeight:document.body.clientHeight,//屏幕高度
          nowTime:'',//时间格式
          nowYear:'',//年格式
        }
      },
      components:{
        HomeHeader
      },
      mounted(){
        window.onresize = () => {
          this.nowWidth = document.documentElement.clientWidth;
          this.nowHeight = document.documentElement.clientHeight;
        };
        this.nowTimes();
      },
      methods:{
        //get now time
        getNowTime(timeStamp){
          let year = new Date(timeStamp).getFullYear();
          let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
          let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
          let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
          let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
          let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
          this.nowTime = hh+":"+mm+":"+ss;
          this.nowYear = year+"年"+month+"月"+date+"日";
        },
        nowTimes(){
          this.getNowTime(new Date());
          setInterval(this.nowTimes,1000);
        },

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
        padding: 126px;
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
            margin: 15px 10px 0 !important;
            &.active{
              margin: 0px;
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
            box-sizing: border-box;
            font-size: 40px;
            color: #ffe;
            font-weight: 100;
            &:hover{
              box-shadow: 0px 0px 36px 3px blue;
              transform: scale(1.02);
              transition: all 0.5s;
            }
            &.active{
              height: 900px;
              margin-top: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              &>div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                span{
                  margin: 0;
                  margin-bottom: 60px;
                  margin-top: 60px;
                  font-size: 140px;
                }
                .iconfont{
                  font-size: 500px;
                  color: white;
                  margin: 0;
                }
              }
            }
          }
          .base-data{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 366px;
            background: #6BA4FA;
            font-size: 50px;
            .base-data-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              vertical-align: middle;
              span{
                margin-right: 200px;
                margin-top: 30px;
              }
              .icon-jichushuju{
                font-size: 200px;
                color: white;
                margin-left: 150px;
                margin-top: 60px;
              }
            }
          }
          .data-watch{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 176px;
            margin-bottom:14px;
            background: linear-gradient(top,#E68080,#DB4747);
            .data-watch-center{
              display: flex;
              justify-content: center;
              align-items: center;
              vertical-align: middle;
              .icon-Location{
                margin-right:30px;
                color: #fff;
                font-size: 100px;
              }
              &.active{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                span{
                  margin: 0;
                  margin-bottom: 60px;
                  margin-top: 60px;
                  font-size: 140px;
                }
                .iconfont{
                  font-size: 560px;
                  color: white;
                  margin: 0;
                }
              }
            }
          }
          .targ-eva{
            display: flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            background-color: transparent;
            color: #41ABF1;
            height: 176px;
            .targ-eva-center{
              display: flex;
              justify-content: center;
              align-items: center;
              vertical-align: middle;
              .icon-shangshengtubiao{
                margin-right:30px;
                color: #41ABF1;
                font-size: 80px;
              }
              &.active{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                span{
                  margin: 0;
                  margin-bottom: 60px;
                  margin-top: 60px;
                  font-size: 140px;
                }
                .iconfont{
                  font-size: 500px;
                  margin: 0;
                }
              }
            }
            &.active{
              height: 900px;
              margin-top: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              &>div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                span{
                  margin: 0;
                  margin-bottom: 60px;
                  margin-top: 60px;
                  font-size: 140px;
                }
                .iconfont{
                  font-size: 560px;
                  color: white;
                  margin: 0;
                }
              }
            }
          }
          .production{
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(top,#DABBEE,#F8F1FC);
            height: 366px;
            box-sizing: border-box;
            .production-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .icon-qiantai{
                margin-top:25px;
                color: #CBA0E7;
                font-size: 174px;
              }
            }
          }
          .timer{
            height: 111px;
            margin-bottom:22px;
            background: transparent;
            color: #fff;
            .timer-center{
              .one{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 22px;
                .icon-shijian{
                  font-size: 55px;
                  margin-right: 15px;
                }
              }
              .two{
                font-size: 26px;
              }
              &.active{
                .one{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 22px;
                  .icon-shijian{
                    font-size: 200px;
                    margin-right: 15px;
                  }
                }
                .two{
                  font-size: 120px;
                }
              }
            }
          }
          .manage{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 233px;
            background: #77DDC9;
            .manage-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .icon-shezhi{
                margin-top: 25px;
                font-size: 80px;
              }
            }
          }

          .analyse{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #6BA4FA;
            .analyse-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .icon-fenxi{
                margin-bottom: 25px;
                font-size: 130px;
              }
            }
          }
          .chart-all{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #FFAEB9;
            .chart-all-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .icon-baobiao{
                margin-bottom: 25px;
                font-size: 130px;
              }
            }
          }
          .school{
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(top,#5DC487,#A8DFBE);
            .school-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              span{
                margin-left: 113px;
              }
              .icon-xuexiao{
                margin-top: 25px;
                font-size: 130px;
                margin-right: 170px;
              }
            }
          }
          .student{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #6BA4FA;
            .student-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              span{
                margin-right: 170px;
              }
              .icon-xuesheng{
                margin-top: 25px;
                font-size: 130px;
                margin-left: 113px;
              }
            }
          }
          .teacher{
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(top,#6BA4FA,#BD80E6);
            .teacher-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .icon-laoshi{
                margin-bottom: 25px;
                font-size: 110px;
              }
            }
          }
        }
        .home-bottom{
          background-color: transparent;
          border: none;
          height: 320px;
          .el-row{
            margin: 20px 10px 0 !important;
            &.active{
              margin: 0px;
            }
          }
          .all{
            height: 266px;
            font-size: 40px;
            color: #ffe;
            &:hover{
              box-shadow:  0px 0px 36px 3px blue;
              transform: scale(1.02);
              transition: all 0.5s;
            }
            &.active{
              height: 150px;
              margin-bottom: 10px;
            }
          }
          .analyse{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #6BA4FA;
            .analyse-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .icon-fenxi{
                margin-bottom: 25px;
                font-size: 130px;
              }
            }
          }
          .chart-all{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #FFAEB9;
            .chart-all-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .icon-baobiao{
                margin-bottom: 25px;
                font-size: 130px;
              }
            }
          }
          .school{
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(top,#5DC487,#A8DFBE);
            .school-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              span{
                margin-left: 113px;
              }
              .icon-xuexiao{
                margin-top: 25px;
                font-size: 130px;
                margin-right: 170px;
              }
            }
          }
          .student{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #6BA4FA;
            .student-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              span{
                margin-right: 170px;
              }
              .icon-xuesheng{
                margin-top: 25px;
                font-size: 130px;
                margin-left: 113px;
              }
            }
          }
          .teacher{
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(top,#6BA4FA,#BD80E6);
            .teacher-center{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .icon-laoshi{
                margin-bottom: 25px;
                font-size: 110px;
              }
            }
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

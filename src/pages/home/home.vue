<template>
    <div class="home">
      <el-container direction="vertical">
        <HomeHeader :nowWidth="nowWidth" :nowHeight="nowHeight"/>
        <el-main :style="{'height':mainHeight+'px'}">
          <el-row :gutter="12">
            <el-col >
              <el-card shadow="never" class="home-top" :class="{active:nowWidth<1069}" >
                <el-row :gutter="16" :class="{active:nowWidth<1069}">
                  <el-col :span="nowWidth<1069?24:8">
                    <el-card shadow="hover" class="base-data all" :class="{active:nowWidth<1069}" @click.native="$router.push('/database')">
                      <span>基础数据</span>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6">
                    <el-card shadow="hover" class="data-watch all" :class="{active:nowWidth<1069}">
                      <span>数据监测</span>
                    </el-card>
                    <el-card shadow="hover" class="targ-eva all" :class="{active:nowWidth<1069}">
                      <span>指标评价</span>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6">
                    <el-card shadow="hover" class="production all" :class="{active:nowWidth<1069}">信息产品</el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:4">
                    <el-card shadow="hover" class="timer all" :class="{active:nowWidth<1069}">
                      <span>时间</span>
                    </el-card>
                    <el-card shadow="hover" class="manage all" :class="{active:nowWidth<1069}">
                      <span>系统管理</span>
                    </el-card>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col >
              <el-card shadow="never" class="home-bottom" :class="{active:nowWidth<1069}">
                <el-row :gutter="16" :class="{active:nowWidth<1069}">
                  <el-col :span="nowWidth<1069?24:4">
                    <el-card shadow="hover" class="analyse all" :class="{active:nowWidth<1069}">
                      <span>自定义分析</span>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:4" >
                    <el-card shadow="hover" class="chart-all all" :class="{active:nowWidth<1069}">
                      <span>报表汇总</span>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6">
                    <el-card shadow="hover" class="school all" :class="{active:nowWidth<1069}">
                      <span>学校主题</span>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:6">
                    <el-card shadow="hover" class="student all" :class="{active:nowWidth<1069}">
                      <span>学生主题</span>
                    </el-card>
                  </el-col>
                  <el-col :span="nowWidth<1069?24:4">
                    <el-card shadow="hover" class="teacher all" :class="{active:nowWidth<1069}">
                      <span>教师主题</span>
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
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
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
        /*background-color: blueviolet;*/
        color: #333;
        text-align: center;
        height: 80%;
        padding: 6px;
        overflow-x: hidden;
        .home-top{
          height: 320px;
          background-color: transparent;
          margin-bottom: -22px;
          border: none;
          &.active{
            height: auto;
            margin-bottom: 0px;
          }
          .el-row{
            margin-top: 20px;
            &.active{
              margin-top: 0px;
            }
          }
          .all{
            &:hover{
              box-shadow: 0px 0px 36px 3px blue;
              transform: scale(1.01);
              transition: all 1s;
            }
            &.active{
              height: 150px;
              margin-bottom: 10px;
              margin-top: 0;
            }
          }
          .base-data{
            height: 278px;
          }
          .data-watch{
            height: 133px;
            margin-bottom:10px;
          }
          .targ-eva{
            height: 133px;
          }
          .production{
            height: 278px;
          }
          .timer{
            height: 69px;
            margin-bottom:10px;
          }
          .manage{
            height: 197px;
            margin-bottom: -10px;
          }
        }
        .home-bottom{
          background-color: transparent;
          border: none;
          height: 220px;
          &.active{
            height: auto;
          }
          .el-row{
            margin-top: 20px;
            &.active{
              margin-top: 0px;
            }
          }
          .all{
            &:hover{
              box-shadow:  0px 0px 36px 3px blue;
              transform: scale(1.01);
              transition: all 1s;
            }
            &.active{
              height: 150px;
              margin-bottom: 10px;
              /*margin-top: 0;*/
            }
          }
          .analyse{
            height: 150px;
          }
          .chart-all{
            height: 150px;
          }
          .school{
            height: 150px;
          }
          .student{
            height: 150px;
          }
          .teacher{
            height: 150px;
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

<template>
    <div class="home">
      <el-container direction="vertical">
        <HomeHeader :nowWidth="nowWidth"/>
        <el-main>
          <el-row :gutter="12">
            <el-col >
              <el-card shadow="never" class="home-top" :class="{active:nowWidth<1069}" >
                <el-row :gutter="12">
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
              <el-card shadow="never" class="home-bottom" >
                <el-row :gutter="12">
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
          nowWidth:document.body.clientWidth
        }
      },
      components:{
        HomeHeader
      },
      mounted(){
        window.onresize = () => {
          this.nowWidth = document.documentElement.clientWidth;
          console.log(this.nowWidth);
        }
      },
      methods:{

      },
      watch:{
        nowWidth(val){
          if(!this.timer){
            this.nowWidth = val;
            this.timer = true;
            setTimeout(() => {
              this.timer = false;
            },1000)
          }
        }
      }
    }
</script>

<style lang="less" scoped>
  .el-col{
    padding: 0px;
  }
  .el-main {
    background-color: blueviolet;
    color: #333;
    text-align: center;
    height: 500px;
    padding: 6px;
    overflow-x: hidden;
    .home-top{
      background-color: cornflowerblue;
      margin-bottom: 10px;
      &.active{
        margin-bottom: 0px;
      }
      .all{
        /*margin: -20px;*/
        &:hover{
          box-shadow: 0px 0px 29px -5px grey;
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
      background-color: cornflowerblue;
      .all{
        &:hover{
          box-shadow: 0px 0px 29px -5px grey;
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
</style>

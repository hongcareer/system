<template>
  <div>
    <el-input class="phone"
      placeholder="请输入用户名"
      v-model="name">
    </el-input>
    <br>
    <div class="code">
      <el-input class="codeNum"
                placeholder="请输入密码"
                v-model="code">
      </el-input>
      <!--<el-button class="getCode">获取验证码</el-button>-->
    </div>
    <el-button type="primary"
               :plain="true" class="login"
               @click="allowLogin">登录</el-button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        name:'',
        code:'',
        message:''
      }
    },
    mounted(){

    },
    methods:{
      allowLogin(){
        let {name,code,message} = this
        if(!name.trim()){
          message='请输入用户名';
          this.$message({
            message: message,
            duration:1000,
            type: 'warning'
          });
          return;
        }else if(!code.trim()){
          message='请输入密码';
          this.$message({
            message: message,
            duration:1000,
            type: 'warning'
          });
          return;
        };
        this.$store.dispatch('saveUser',name);//保存用户信息
        this.$router.replace('/home')
      }
    },
    computed:{

    },
    beforeRouteEnter(to,from,next){
      next((component) => {
        const userName = component.$store.state.login.username;
        if(userName === 'admin'){
          next('/home')
        }else{
          next()
        }
      })
    }
  }
</script>

<style lang="less" scoped>
  .edit{
    font-size: 40px;
    color: red;
  }
  .phone{
    width: 100%;
  }
  .code{
    position: relative;
    .codeNum{
      width: 100%;
    }
    .getCode{
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }
  .login{
    width: 100%;
  }
  .el-input{
    outline: none;
    /*padding: 100px;*/
    border: none;
  }
</style>

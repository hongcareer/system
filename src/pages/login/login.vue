<template>
  <div>
    <input class="phone"
      placeholder="请输入用户名"
      v-model="name">
    </input>
    <br>
    <div class="code">
      <input class="codeNum"
                placeholder="请输入密码"
                :type="isShowCode?'password':'string'"
                v-model="code">
      </input>
      <el-switch class="show-code"
                    v-model="isShowCode"
                    active-color="#dcdfe6"
                    inactive-color="#409EFF">
      </el-switch>
      <!--<el-button class="getCode">获取验证码</el-button>-->
    </div>
    <el-button type="primary"
               :plain="true" class="login-login"
               @click="allowLogin" >登录</el-button>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    data(){
      return {
        name:'',
        code:'',
        message:'',
        isShowCode:true
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
        }else if(name.trim() !== 'admin'){
          message='用户名错误';
          this.$message({
            message: message,
            duration:1000,
            type: 'warning'
          });
          return;
        }else if(code.trim() !== 'admin'){
          message='密码错误';
          this.$message({
            message: message,
            duration:1000,
            type: 'warning'
          });
          return;
        };
        this.$store.dispatch('saveUser',name);//保存用户信息
        this.$router.push('/home')
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
  .phone{
    width: 100%;
  }
  .code{
    .codeNum{
      width: 100%;
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

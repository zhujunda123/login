<template>
  <div> 
    <div class="main">
  
    <div class="title-msg">
        <span>请输入登录账户和密码</span>
    </div>
 
    <form class="login-form" method="post"  >
        <!--输入框-->
        <div class="input-content">
            <!--autoFocus-->
            <div>
                <input type="text" autocomplete="off"
                       placeholder="用户名" name="userName" v-model="userName" required />
            </div>
            <div style="margin-top: 16px">
                <input type="password"
                       autocomplete="off" placeholder="登录密码" v-model="password" name="password" required maxlength="32"/>
            </div>
        </div>
        <div class="foor">
            <div class="left"><span>忘记密码 ?</span></div>
 
            <div class="right"><span>注册账户</span></div>
        </div>
    </form>
     <!--登入按钮-->
        <div style="text-align: center">
            <button class="enter-btn" @click="login" >登录</button>
        </div>
    </div>
  </div>

</template>

 
<script>
import axios from 'axios';

  export default {
    data() {
      return {
        userName: '',
        password: '',
      }
    },methods:{
        login:function(){
            axios.post("http://localhost:8081",
    {user:this.userName,password:this.password})
            .then(
                data => {
                    console.log(data.data.data.status)
        if (data.data.data.status != "200") {
          //iViewUi的友好提示
          console.log("1111111s")
        //   this.$Message.error(data.data.message);
        //登录成功
        } else {
            console.log("ssssssssss")
          //设置Vuex登录标志为true，默认userLogin为false
        this.$store.dispatch("userLogin", true);
          //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
          //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
          localStorage.setItem("Flag", "isLogin");
          localStorage.setItem("lastTime",new Date().getTime());
          //iViewUi的友好提示
        //   this.$Message.success(data.data.message);
          //登录成功后跳转到指定页面
          this.$router.push("/home");
        }
 });
        }
    }
    }
</script>
<style scoped>
    body{
        background: #353f42;
    }
 
    *{
        padding: 0;
        margin: 0;
    }
 
    .main {
        margin: 0 auto;
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 15px;
        width: 350px;
        height: 350px;
        background: #FFFFFF;
        /*以下css用于让登录表单垂直居中在界面,可删除*/
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -175px;
        margin-left: -175px;
    }
 
    .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
 
    .title span {
        font-size: 18px;
        color: #353f42;
    }
 
    .title-msg {
        width: 100%;
        height: 64px;
        line-height: 64px;
    }
 
    .title:hover{
        cursor: default	;
    }
 
    .title-msg:hover{
        cursor: default	;
    }
 
    .title-msg span {
        font-size: 12px;
        color: #707472;
    }
 
    .input-content {
        width: 100%;
        height: 120px;
    }
 
    .input-content input {
        width: 330px;
        height: 40px;
        border: 1px solid #dad9d6;
        background: #ffffff;
        padding-left: 10px;
        padding-right: 10px;
    }
 
    .enter-btn {
        width: 350px;
        height: 40px;
        color: #fff;
        background: #0bc5de;
        line-height: 40px;
        text-align: center;
        border: 0px;
    }
 
    .foor{
        width: 100%;
        height: auto;
        color: #9b9c98;
        font-size: 12px;
        margin-top: 20px;
    }
 
    .enter-btn:hover {
        cursor:pointer;
        background: #1db5c9;
    }
 
    .foor div:hover {
        cursor:pointer;
        color: #484847;
        font-weight: 600;
    }
 
    .left{
        float: left;
    }
    .right{
        float: right;
    }
</style>
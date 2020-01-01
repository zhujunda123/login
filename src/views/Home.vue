<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>213234324</div>
  <div>这是我们的sss</div>
    <div>这是我们的1111</div>
  <div>这是我们的222主页</div>
    <el-button @click="ss">登出</el-button>
       <div>222222222</div>
        <div>这是我们的222</div>
  </div>
   

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    ss:function(){
      localStorage.removeItem("Flag")
      localStorage.removeItem("lastTime")
       this.$router.push("/login");
    }
  }
}
</script>

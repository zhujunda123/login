<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <el-button @click="ss">登出</el-button>
    <div>i love zjd111</div>
  
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

<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
export default{
    name: 'App',
    data (){
        return {
            lTime: localStorage.getItem('lastTime'), // 最后一次点击的时间
            ctTime: new Date().getTime(), //当前时间
  
        } 
    },
    mounted () {
      window.setInterval(this.tTime, 2000)
    },
 
    methods:{
        tTime() {
            this.cTime = new Date().getTime()
            this.lTime=localStorage.getItem('lastTime')
            console.log(this.cTime)
            console.log(this.lTime)
            console.log(this.ctTime-this.lTime )
            if (this.ctTime-this.lTime > 60 * 1000 ) {
                  localStorage.removeItem("Flag")
            
                }
            }
        }
    }


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

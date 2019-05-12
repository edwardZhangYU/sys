<template>
  <div class="container">
    <el-container style="height: 100%;">
      <el-aside width="256px" style="background-color: #001529;">
        <el-header style="background: #002140;color:#fff;">vue+elementUI</el-header>
        <el-main >
          <el-menu :default-active="menuObj.active" background-color="#001529" text-color="#ddd" @select="handleSelect">
            <el-submenu :index="submenu.index" v-for="submenu in menuObj.menuList" :key="submenu.index">
              <template slot="title"><i :class="submenu.icon"></i>{{submenu.title}}</template>
              <el-menu-item-group>
                  <router-link :to="item.url" v-for="item in submenu.items" :key="item.index">
                    <el-menu-item :index="item.index">{{item.title}}</el-menu-item>
                  </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-main>
      </el-aside>
      <el-main>
        <el-container>
          <el-header>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{menuNow[0]}}</el-breadcrumb-item>
              <el-breadcrumb-item>{{menuNow[1]}}</el-breadcrumb-item>
            </el-breadcrumb>
            <div>{{menuNow[1]}}</div>
          </el-header>
          <el-main>
            <div class="main-wrap">
              <transition>
                <router-view></router-view>
              </transition>
            </div>
          </el-main>
        </el-container>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      menuObj:{},
      menuNow:['Dashboard','分析页']
    }
  },
  created(){
    this.axios.get('http://localhost:8080/static/data/menu.json').then((res) =>{
      if(res.status == 200){
        this.menuObj = res.data.menuObj
      }
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      let menuNow = []
      this.menuObj.menuList.forEach(element => {
        if(element.index === keyPath[0]){
          menuNow.push(element.title)
          element.items.forEach(e=>{
            if(e.index === keyPath[1]){
              menuNow.push(e.title)
            }
          })
        }
      });
      this.menuNow = menuNow
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    width: 100%;
    height: 100%;
    background-color: #f0f2f5;
  }
  .my-header{
    display: flex;
    justify-content: space-between;
  }
  .title{
    font-size: 24px;
    line-height: 60px;
    color: coral;
  }
  ul.el-menu{
    border-right: none;
  }
  .main-wrap{
    margin: 20px;
    margin-bottom: 0;
    padding: 20px;
    background-color: #fff;
  }
</style>

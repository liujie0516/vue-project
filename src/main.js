// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Customers from './components/Customers'
import About from './components/About'

Vue.config.productionTip = false

Vue.use(VueRouter)

//设置路由
const router=new VueRouter({
  mode:"history",
  bses:__dirname,
  routers:[
    {path:'/',component:Customers},
    {path:'/about',component:About}
  ]
})

/* eslint-disable no-new */
new Vue({
  router:router,
  template:`
    <div id="app">
    <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">用户管理系统</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to='/'>主页</router-link></li>
              <li><router-link to='/about'>关于我们</router-link></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </nav>
      <router-view>111</router-view>
    </div>
  `
}).$mount("#app")
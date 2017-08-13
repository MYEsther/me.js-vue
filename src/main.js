// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import common from './common.js'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.http=axios.create({
  baseURL:'../../static/',
  headers:{
    Authorization:'Bearer {token}'
  }
})
/* eslint-disable no-new */
var port = location.port;
var baseUrl = port=='8080'?'http://localhost:5000/pages/':'/static/api/pages/';
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{    
    baseUrl:baseUrl,
    iframHeight:'',
    toAim:0
    
  },
  methods:{
    scrollTop(){
      return Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    },
    documentHeight(){//可视区高度
      return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
    },
    windowHeight(){//文档高度
      return (document.compatMode == "CSS1Compat")?document.documentElement.clientHeight:document.body.clientHeight;
    }
    
  }
})

<template>
  <div>
    
    <div class="content clearfix">
      <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-menu-item index="1">引用指南</el-menu-item>
        <el-menu-item index="2"><router-link to="/api">API Docs</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/component">组件</router-link></el-menu-item>
      </el-menu>
      <div class="intro">
          <section>
              <h2 id="index_介绍">介绍</h2>
              <p>由于每次项目很多功能都是通用的,而我们又不需要太多功能,引用angular、react等框架并不合适,那样需要很多额外的学习时间,对新人的技术能力要求也比较高.所以我们自己做个一个包含大量常用功能,学习起来也更快捷的框架.如果您有任何建议,欢迎再github上给我们提交issue</p>
              <h2 id="index_安装">nodejs</h2>
              <p><a href="http://www.runoob.com/nodejs/nodejs-install-setup.html" target="_blank">安装nodejs教程</a></p>
              <h2>webpack</h2>
              <p>安装好nodejs，安装webpack为全局工具：</p>
              <p>这会使webpack命令生效</p>
              <pre class="prettyprint"><code><span class="pln">$ npm install webpack </span><span class="pun">-</span><span
                            class="pln">g</span></code></pre>
              <h2>meJS svn地址</h2>
              <pre class="prettyprint"><code><span class="pln">svn://10.10.21.16/minxin/Repositories/Projects2.0/MeJinRongAPP/code/dev/minxin-me-pc-h5-code/MeJs</span></code></pre>
              <h2 id="index_Installation" >安装项目依赖包</h2>
              <p>npm install：</p>
              <pre class="prettyprint"><code><span class="pln">npm install</span></code></pre>
              <h2 id="index_运行" >运行webpack</h2>
              <p><a href="http://www.jianshu.com/p/1c4fd72b84e8" target="_blank">webpack入门教程</a></p>
              <p>webpack命令：</p>
              <p>编译不压缩代码，执行webpack</p>
              <pre class="prettyprint"><code><span class="pln">webpack</span></code></pre>
              <p>编译并压缩代码，执行webpack -p</p>
              <pre class="prettyprint"><code><span class="pln">webpack -p</span></code></pre>
              <p>执行完webpack命令</p>
              <p>会在meJS根目录生成dist文件夹</p>
              <h2 id="index_开始" >开始</h2>
              <pre>&lt;script src="https://teststatic.mejinrong.com/MeAssest/MeJS2.0/me.js">&lt;/script></pre>
            </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      showTopBtn:false,
      topBtnClass:false
    }
  },
  methods:{
    
  },
  
}
</script>

<style lang="less">
  .content{
    width:1200px;
    color:#000;
    background:#fff;
    .el-menu{
      width:16%;
      float:left;
      color: rgba(0,0,0,.65);
      background:#fff;
      border-right: 1px solid #e9e9e9;
      .el-menu-item:hover{
        a{
          text-decoration:none;
        }
      }
      .el-menu-item:not(.is-active):hover{
        color:#20a0ff;
        background:#fff;
      }
      .is-active{
        background-color: #ecf6fd;
        color: #108ee9;
        &:after{
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            border-right: 3px solid #108ee9;
            transition: all .2s;
        }
      }
    }
    .intro{
      width:75%;
      float:right;
      text-align:left;
      h2{
        font-weight:400;
        color:#1f2f3d;
        font-size:28px;
        margin: 45px 0 15px;
        &:first-child{
          margin-top:0;
        }
      }
    }
  }
  .el-menu-item a{
    display:block;
  }
</style>

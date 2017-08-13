<template>
    <div class="api clearfix">
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="loadIframe($event)">
            <el-submenu v-for="(item,index) in datas" :key="item" :index="index.toString()">
                <template slot = "title"><i :class="item.cls"></i>{{item.name}}</template>
                <el-menu-item v-for="sub_item in item.children" :key="sub_item" :index="sub_item.curIndex.toString()">{{sub_item.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-for="(itemAlone,index) in menuAlone" :key="itemAlone" :index="itemAlone.name.replace(/me./,'')"><i :class="itemAlone.cls"></i>{{itemAlone.name}}</el-menu-item>
        </el-menu>
        <div class="api-content">
             <iframe v-show="src" scrolling="no" :style="{height:iframHeightApi+'px'}" :src="src"></iframe>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                datas:[],
                menuAlone:[],
                src:'',
                iframHeightApi:'1',
                activeIndex:'',
                toAim:0
            }
        },
        mounted(){
            var _this = this;
            _this.http.get('api.json').then(res=>{
                var list = res.data.config;
                for (var i=0;i<list.length;i++){
                    if(list[i].children.length<1){
                        _this.menuAlone = list.splice(i,1);
                    }
                }
                 _this.datas = _this.datas.concat(list);
                 _this.$nextTick(() => {
                     _this.activeIndex = _this.datas[0].children.length?_this.datas[0].children[0].curIndex:_this.menuAlone[0].name.replace(/me./,'');
                     _this.src=_this.$root.baseUrl+_this.activeIndex+'.html';
                      window.addEventListener('message', function(e){
                        if(location.hash === '#/api'){
                            _this.iframHeightApi = e.data.height;
                            _this.toAim = e.data.toAim;
                            window.scrollTo(0,_this.toAim)
                        }
                    })
                 })
            })
            
             

        },
        methods:{
            loadIframe(l){
                this.src=this.$root.baseUrl+l+'.html';
            }
        }
    }
</script>

<style lang="less">
.api{
    >.el-menu{
        width:25%;
        background:#f9f9f9;
        .el-menu-item,.el-submenu__title{
            >i{
                margin-right:10px;
                font-size:14px;
                color:#48576a;
            }
        }
        .el-submenu.is-opened{
            >.el-menu{
                .el-menu-item{
                    background:#f6f5f6;
                    &.is-active{
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
            }
        }
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
        .el-menu-item.is-active{
            i{
                color:#20a0ff;
            }
        }
    }
    .el-menu-item{
        background:#f6f5f6;
        &.is-active{
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
    >.el-menu>.el-menu-item{
        background-color:#fff;
    }
    .api-content{
        float:right;
        width:75%;
        iframe{
            width:100%;
            border:none;
            height:100%;
        }
    }
}
 
</style>
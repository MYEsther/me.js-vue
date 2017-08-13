<template>
    <div class="header">
        <div class="container clearfix">
            <h1>
                <router-link to='/'>MeJs</router-link>
            </h1>
            <nav>
                <router-link to='/'>指南</router-link>
                <router-link to='/api'>API Docs</router-link>
                <router-link to='/component'>组件</router-link>
                <a href="https://github.com/bingbao" target="_blank">Github</a>
            </nav>
            
        </div>
    </div>
</template>

<style lang="less">
.header{
    position: fixed;
    z-index: 999;
    left:0;
    top:0;
    background-color: rgb(32, 160, 255);
    height: 80px;
    margin-bottom: 24px;
    padding: 0 48px;
    width: 100%;
    color:#fff;
    .container{
        width:1200px;
        height:80px;
        line-height:80px;
        text-align:left;
        margin:0 auto;
        h1{
            float:left;
            a{
                font-size:32px;
                color:#fff;
                text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
                text-decoration:none;
            }
        }
        nav{
            float:right;
            a{
                padding:0 15px ;
                color:#fff;
                text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
                font-size:14px;
                text-decoration:none;
                position:relative;
                display:block;
                float:left;
            }
            .router-link-exact-active{
                font-weight:700;
                &:after{
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: #99d2fc;
                }
            }
        }
    }
}
@media (max-width: 1200px){
    .header{
        .container{
            width:80%;
            margin:0 auto;
        }
    }
}
@media (max-width: 1000px){
    .header{
        .container{
            width:80%;
            margin:0 auto;
        }
    }
}
</style>
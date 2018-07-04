<template>
  <div class="footer">
  	<router-link to="/home"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
    <router-link to="/list"><i class="iconfont icon-yewubaobiao"></i><span>列表</span></router-link>
  	<router-link to="/collect"><i class="iconfont icon-shoucang"></i><span>收藏</span></router-link>
  	<router-link to="/add"><i class="iconfont icon-icon--"></i><span>添加</span></router-link>
  </div>
</template>
<style scoped>
  .footer{
  	display: flex;
  	position: fixed;
  	left: 0;
  	bottom: 0;
  	width: 100%;
  	height: 50px;
    background-color: #fff;
  }
  .footer a{
  	display: flex;
  	flex-direction: column;
  	flex: 1;
  	align-items: center;
  	justify-content: center;
  }
  .footer a.router-link-active{
  	color: #f60;
  }
</style>
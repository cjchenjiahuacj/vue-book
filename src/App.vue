<template>
  <div id="app">
  	<!-- 需要缓存 -->
  	<transition name="fadeIn">
  		<keep-alive>
	  		<router-view v-if="$route.meta.keepAlice"></router-view>
	  	</keep-alive>
  	</transition>
  	<!-- 不需要缓存 -->
  	<transition name="fadeIn">
  		<router-view v-if="!$route.meta.keepAlice"></router-view>
  	</transition>
  	<Tab></Tab>
  </div>
</template>

<script>
import Tab from './base/Tab.vue'
export default {
  name: 'App',
  components: {
  	Tab
  }
}
</script>

<!-- 公共样式不用加scoped -->
<style>
    /*样式重构*/
	body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}
	table{border-collapse:collapse;border-spacing:0}
	fieldset,img{border:0}
	address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}
	ol,ul{list-style:none}
	caption,th{text-align:left}
	h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
	q:before,q:after{content:''}
	abbr,acronym{border:0;font-variant:normal}
	sup{vertical-align:text-top}
	sub{vertical-align:text-bottom}
	input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit}
	input,textarea,select{*font-size:100%}
	input,button{--webkit-appearance:none;}
	body{color: #ccc;}
	a{
		color: #a8a8a8;
		text-decoration: none;
	}
	img{
		display: block;
		width: 100%;
		height: 100%;
	}
	ul,li{
		width: 100%;
		height: 100%;
	}
	input{
		border: 1px solid #999;
	}
	/*容器*/
	.container{
		width: 90%;
		margin: 0 auto;
	}
	/*浮动处理 子元素外边距处理*/
	.clear:before{
		display: table;
		clear: both;
		width: 100%;
		height: 0;
		content: "";
	}
	.clear:after{
		display: table;
		width: 100%;
		height: 0;
		content: "";
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.fadeIn-enter{
		opacity: 0;
	}
	.fadeIn-enter-active{
		transition: all 0.3s linear;
	}
	.fadeIn-leave-active{
		transition: all 0.3s linear;
	}
</style>
<template>
  <div class="header">
  	<slot></slot><i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
  </div>
</template>

<script>
 export default {
 	props: {
 		back: {
 			type: Boolean,
 			default: false
 		}
 	},
 	methods: {
 		goBack(){
 			this.$router.go(-1)
 		}
 	}
 }
</script>

<style scoped>
  .header{
    position: relative;
  	width: 100%;
  	height: 40px;
  	background-color: rgb(51,51,51);
  	font-weight: bold;
  	text-align: center;
  	line-height: 40px;
  }
  .header i{
  	position: absolute;
  	left: 10px;
  	font-size: 20px;
  }
</style>
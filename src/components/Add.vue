<template>
  <div>
  	<div class="add">
      <MHeader :back="false">添加页</MHeader>
      <ul>
        <li><label for="book.bookName">书名</label><input type="text" id="book.bookName" v-model="book.bookName"></li>
        <li><label for="book.bookInfo">信息</label><input type="text" id="book.bookInfo" v-model="book.bookInfo"></li>
        <li><label for="book.bookPrice">价格</label><input type="text" id="book.bookPrice" v-model="book.bookPrice"></li>
        <li><label for="book.bookCover">封面</label><input type="text" id="book.bookCover" v-model="book.bookCover"></li>
        <li><a @click="add" class="btn">添加</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
	import MHeader from '../base/Mheader.vue'
	import {addBook} from '../api/index.js'
	export default {
		data(){
			return{
				book: {}
			}
		},
		components: {
	      MHeader
	    },
	    methods: {
	    	async add(){
	    		await addBook(this.book);
	    		// 跳转列表页
	    		this.$router.push('/list');
	    	}
	    }
	}
</script>

<style scoped>
  .add ul li{
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  .btn{
  	display: inline-block;background: pink;width: 15%;
  	text-align: center;
  }
</style>
<template>
  <div>
  	<Mheader>列表</Mheader>
  	<div class="container">
  		<ul>
  			<li>
	  			<router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" class="clear">
	  				<div class="fl img">
	  					<img :src="book.bookCover">
	  				</div>
	  				<div class="fl detail">
	  					<p>{{book.bookName}}</p>
	  					<p>{{book.bookInfo}}</p>
	  					<span>{{book.bookPrice}}</span>
	  					<!-- 阻止冒泡 为了防止点li时跳转页面触发删除事件 -->
	  					<a @click.stop="remove(book.bookId)">删除</a>
	  				</div>
	  			</router-link>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
  import Mheader from '../base/Mheader.vue'
  import {getBooks,removeBook,pagitation} from '../api/index.js'
  export default {
  	created(){
  		// 获取数据
  		this.getData()
  		// 删除数据
  		this.remove()
  	},
  	data(){
  		return {
  			books: [],
        offset: 0
  		}
  	},
  	methods: {
  		// 删除图书
  		async remove(id){
  			// 删除后台数据
  			await removeBook(id)
  			// 更新页面
  			this.books = this.books.filter(item => item.bookId !== id)
  		},
  		// 获取全部
  		async getData(){
  			// 将获取的数据赋值给books
  			this.books = await pagitation(this.offset)
  		}
  	},
  	components: {
  		Mheader
  	}
  }
</script>

<style scoped>
  .img{
  	width: 25%;
  }
  .detail{
  	width: 75%;
  }
  .detail p{
  	padding: 0 0 0 10px;
  	margin-bottom: 9px;
  }
  .detail p:nth-child(2){
  	font-size: 12px;
  }
  .detail span{
  	padding-left: 10px;
  	color: #f60;
  	font-size: 18px;
  }
  .detail a{
  	margin-left: 10px;
  	color: red;
  }
  .container ul li{
  	margin-bottom: 5px;
  }
</style>
<template>
  <div>
  	<Mheader :back="false">首页</Mheader>
  	<div class="banner">
  		<Swiper :swiperSlides="sliders"></Swiper>
  	</div>
    <!-- 展示列表 -->
    <div class="book-list">
      <h1>热门图书</h1>
      <ul>
        <li v-for="hot in hotBooks">
          <img :src="hot.bookCover">
          <p>{{hot.bookName}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Mheader from '../base/Mheader.vue'
  import Swiper from '../base/Swiper.vue'
  import {getAll} from '../api/index.js'
  export default {
  	created(){
  		// 获取轮播图
      // 获取热门图书
      this.getData()
  	},
  	data(){
  		return{
  			sliders: [],
        hotBooks: [],
        loading: true
  		}
  	},
    methods: {
      // 获取轮播图
      // 获取热门图书
      async getData() {
        let [sliders,hotBooks] = await getAll();
        this.sliders = sliders;
        this.hotBooks = hotBooks;
        this.loading = false;
      }
    },
  	components: {
  		Mheader,Swiper
  	}
  }
</script>

<style scoped>
  .banner{
  	width: 100%;
  	height: 100%;
  }
  .book-list{
    width: 90%;
    margin: 0 auto;
  }
  .book-list h1{
    font-size: 16px;
  }
  .book-list ul{
    display: flex;
    /*默认不换行*/
    flex-wrap: wrap;
  }
  .book-list ul li{
    width: 50%;
    height: 100%;
  }
  .book-list ul li{
    margin-bottom: 5px;
  }
</style>
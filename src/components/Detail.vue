<template>
  <div>
    <div class="detail">
      <MHeader :back="true">详情页</MHeader>
      <ul>
        <li><label for="book.bookName">书名</label><input type="text" id="book.bookName" v-model="book.bookName"></li>
        <li><label for="book.bookInfo">信息</label><input type="text" id="book.bookInfo" v-model="book.bookInfo"></li>
        <li><label for="book.bookPrice">价格</label><input type="text" id="book.bookPrice" v-model="book.bookPrice"></li>
        <li><a @click="update">确定</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/Mheader.vue'
  import {findOneBook,updateBook} from '../api'
  export default {
    data(){
      return {
        book: {}
      }
    },
    // 想要修改路径按回车更新页面
    watch: {
      $route(){
        this.getData()
      }
    },
    created(){
      // 页面一加载需要请求数据
      this.getData()
    },
    methods: { // 获取数据的方法
      async update(){
        await updateBook(this.bid)
        // 修改完成后跳转列表
        this.$router.push('/list')
      },
      async getData(){
        this.book = await findOneBook(this.bid) //await表明只有后台响应后才继续往下走
        // 如果是空对象 需要跳转到列表
        Object.keys(this.book).length>0?void 0:this.$router.push('/list')
      }
    },
  	// 计算属性
  	computed: {
  		bid(){
  			return this.$route.params.bid
  		}
  	},
    components: {
      MHeader
    }
  }
</script>

<style scoped>
  .detail{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 100;
  }
  .detail ul li{
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
  }
</style>
<template>
  <b-container>
    <h2 class="d-flex justify-content-between my-3 page-header">
      <span>最新课程</span>
      <router-link :to="{name:'course',query:{curPage:1,typeId:0}}">更多</router-link>
    </h2>
    <b-row>
      <b-col md="3" sm="6" v-for="(item,index) in list" :key="index">
        <router-link :to="{name:'course_detail',query:{cid:item.cid}}">
          <img :src="require(`@/assets/images/${item.pic}`)" alt="" class="my-3 img-fluid">
        </router-link>
        <router-link :to="{name:'course_detail',query:{cid:item.cid}}">{{item.title}}</router-link>
        <div>讲师:{{item.tname}}</div>
        <h5 class="text-danger">￥{{item.price}}</h5>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "HomeCourse",
  data() {
    return {
      countNum: 4, // 返回课程的数量
      list: []
    }
  },
  methods: {
    getNewestCourse() {
      this.$axios.get('/course/newest',{
        params: {
          countNum: this.countNum
        }
      }).then(res => {
        console.log(res);
        // 给变量list赋值
        if (res.data.code == 200) {
          this.list = res.data.data
        }
      }).catch(err => {
        console.error(err);
      });
    }
  },
  mounted() {
    this.getNewestCourse();
  },
}
</script>

<style>
.page-header {
  border-bottom: 2px solid #DDD;
}
</style>
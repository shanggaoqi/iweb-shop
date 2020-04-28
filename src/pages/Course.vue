<template>
  <b-container>
    <!-- 面包屑导航 -->
    <b-breadcrumb :items="items" class="bg-transparent"></b-breadcrumb>

    <!-- 课程等级导航 -->
    <TypeNav></TypeNav>
    <div class="mb-3" style="border: 1px solid green;"></div>

    <b-row class="mb-5" v-for="(item, index) in list" :key="index">
      <b-col cols="3">
        <router-link :to="{name:'course_detail',query:{cid:item.cid}}">
          <img :src="require(`../assets/images/${item.pic}`)" alt="" class="img-fluid">
        </router-link>
      </b-col>
      <b-col cols="5" class="course-desc">
        <router-link :to="{name:'course_detail',query:{cid:item.cid}}">
        <h3>{{item.title}}</h3>
        </router-link>
        <p>讲师：{{item.tname}}</p>
        <p>课时：{{item.cLength}}</p>
        <p>开课时间：{{item.startTime}}</p>
        <p>上课地点：{{item.address}}<a href="">查看各校区地址</a></p>
      </b-col>
      <b-col cols="2">
        <h2 class="text-danger my-5">¥ {{item.price}}</h2>
      </b-col>
      <b-col cols="2">
        <router-link :to="{name:'course_detail',query:{cid:item.cid}}" class="btn btn-success my-5">
          查看详情
        </router-link>
      </b-col>
    </b-row>

    <!-- 分页导航 -->
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="pageTotal" use-router></b-pagination-nav>
    
  </b-container>
</template>

<script>
import TypeNav from '../components/TypeNav';
export default {
  name: "Course",
  components: {
    TypeNav
  },
  data() {
    return {
      list:[],
      curPage: 1,   // 当前页码
      pageSize: 3,  // 单页记录数
      total: 0,     // 总的记录数
      pageTotal: 1, // 总页数
      typeId: 0,    // 课程分类id
      items: [
          {
            text: '首页',
            to: {name: 'home'}
          },
          {
            text: '全部课程',
            active: true
          }
      ]
    }
  },
  methods: {
    // 获取课程列表
    getCourses(){
      console.log(this.$route);
      this.$axios.get("/course/list",{
        params:{
          // curPage:this.$route.query.curPage
          curPage: this.curPage,
          typeId: this.typeId
        }
      }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.list = res.data.data.list;
          // this.pageSize = res.data.data.pageSize;
          this.total = res.data.data.total;
          this.pageTotal = res.data.data.pageTotal;
        }
      }).catch(err => {
        console.error(err);
      });
    },
    // 生成分页链接(pageNum是当前页码)
    linkGen(pageNum) {
        // 请求地址: /course?curPage=1&typeId=1
        // 在Vue中如何做页面跳转???
        return {path: `/course?curPage=${pageNum}&typeId=${this.typeId}`}
    }
  },
  mounted() {
    // 组件挂载完成后,给参数赋值
    this.curPage = this.$route.query.curPage;
    this.typeId = this.$route.query.typeId;
    this.getCourses();
  },
}
</script>

<style>
.course-desc > p {
  margin: 0;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: ">" !important;
}
</style>
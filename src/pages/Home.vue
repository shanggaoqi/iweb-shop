<template>
  <b-container fluid class="bg-faded px-0">
    <!-- 轮播图 -->
    <Carousel></Carousel>
    <!-- 最新课程 -->
    <home-course></home-course>
  </b-container>
</template>

<script>
import Carousel from "../components/Carousel"
import HomeCourse from "../components/HomeCourse"
export default {
  name: "Home",
  components: {
    Carousel,
    HomeCourse
  }
}
</script>

<style>
  
</style>
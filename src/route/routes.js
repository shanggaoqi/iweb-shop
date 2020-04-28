// 当前文件是  routes.js
import Home from "../pages/Home"
import Teacher from "../pages/Teacher"
import Address from "../pages/Address"
import Course from "../pages/Course"
import CourseDetail from "../pages/CourseDetail"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Cart from "../pages/Cart"
import OrderConfirm from "../pages/OrderConfirm"
import UserCenter from "../pages/user/Center"

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/course",
    name: "course",
    component: Course
  },
  {
    path: "/course_detail",
    name: "course_detail",
    component: CourseDetail
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/user_center",
    name: "user_center",
    component: UserCenter
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/order_confirm",
    name: "order_confirm",
    component: OrderConfirm
  },
  {
    path: "/address",
    name: "address",
    component: Address
  },
  {
    path: "/teacher",
    name: "teacher",
    component: Teacher
  }
];
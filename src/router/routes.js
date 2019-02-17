import Login from '../pages/login/login'
import Home from '../pages/home/home'
import Search from '../pages/search/search'
import BaseData from '../pages/baseData/baseData'
import DataWatch from '../pages/dataWatch/dataWatch'
import TargetEva from '../pages/targetEvaluation/targetEvalution'
import Production from '../pages/production/production'
import Manage from '../pages/manage/manage'
import Analyse from '../pages/analyse/analyse'
import Chart from '../pages/chart/chart'
import School from '../pages/schoolTheme/schoolTheme'
import Student from '../pages/studentTheme/studentTheme'
import Teacher from '../pages/teacherTheme/teacherTheme'
export default [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/database',
    component:BaseData
  },
  {
    path:'/',
    redirect:'/home'
  }

]

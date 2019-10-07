// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//入口文件
import Vue from '../node_modules/vue/dist/vue.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


// import jQuery from '../node_modules/jquery/dist/jquery'
// Vue.use(jQuery);

// import 'mint-ui/lib/style.css'
//
// //导入mui样式
// import './assets/mui/dist/css/mui.min.css'
// import './assets/mui/dist/css/icons-extra.css'


//导入mint-ui组件
// import {Header,Swipe,SwipeItem} from 'mint-ui'
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name,SwipeItem);

//导入antd ui组件
import { Button,
  Menu,
  Icon,
  Switch ,
  Avatar, Layout,
  Form ,
  Select ,
  DatePicker,
  Input,
  Dropdown,
  Tabs,
  Calendar,
  Table,
  Row,
  Col,
  List
} from 'ant-design-vue';
import ref from 'vue-ref';
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Switch);
Vue.use(Button);
Vue.use(Avatar);
Vue.use(Layout);
Vue.use(Form);
Vue.use(Select);
Vue.use(DatePicker);
Vue.use(Input);
Vue.use(Dropdown);
Vue.use(Tabs);
Vue.use(Calendar);
Vue.use(Table);
Vue.use(Row);
Vue.use(Col);
Vue.use(List);
Vue.use(ref,{name:'ant-ref'});
import "ant-design-vue/dist/antd.css"
import 'ant-design-vue/dist/antd'

import { Decorators } from 'v-decorators'
Vue.use(Decorators);

Vue.config.productionTip = false;

//导入自己的路由模块
import router from './router/router.js'

import VueResource from '../node_modules/vue-resource/dist/vue-resource'
Vue.use(VueResource);




//设置请求的根路径
// Vue.http.options.root = 'http://www.escook.cn:3000';

// import axios from 'axios'
// Vue.use(axios);

//导入app根组件
import  app from './App.vue'

import './assets/css/common.less'

import moment from 'moment'
import "moment/locale/zh-cn";
moment.locale("zh-cn");


var vm = new Vue({
  el:'#app',
  render: h => h(app),
  router //挂载路由对象到vm实例上
});


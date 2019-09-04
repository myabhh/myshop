<template>
  <div id="app">

    <a-layout id="components-layout-demo">
      <!--侧边栏-->
      <a-layout-sider width="120">
        <div class="logo">
          <a-avatar style="backgroundColor:#e99a54" icon="user" />
        </div>
          <a-menu
            theme="dark"
            mode="inline"
            :defaultSelectedKeys="['1']"
            :inlineCollapsed="collapsed"
          >
            <a-menu-item key="1">
              <a-icon type="home" />
              <router-link to="/index">概况</router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="setting" />
              <span>设置</span>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="shop" />
              <span>商品</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="profile" /><span>订单</span></span>
              <a-menu-item key="5">
                <router-link to="/order/list">订单查询</router-link>
              </a-menu-item>
              <a-menu-item key="6">
                <router-link to="">售后工单</router-link>
              </a-menu-item>
              <a-menu-item key="7">运费管理</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="8">
              <a-icon type="dollar" />
              <span>资产</span>
            </a-menu-item>
          </a-menu>
      </a-layout-sider>
      <!--主要页面-->
      <a-layout style="margin-left: 120px;">
        <!--顶部头栏-->
        <a-layout-header>
          <span class="f16">{{username}}</span>
          <span class="ant-button">
            <a-button icon="poweroff" class="pr10">退出登录</a-button>
            <a-button icon="redo">清除缓存</a-button>
          </span>
        </a-layout-header>
        <!--中间路由区-->
        <a-layout :style="{ margin: '20px 20px 0 20px' }">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
        username:"nike品牌供应商",
      }
    },
  }
</script>

<style lang="less" scoped>

</style>

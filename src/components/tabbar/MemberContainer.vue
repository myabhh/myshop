<template>
  <div>
    <a-button type="primary">button</a-button>
    <a-menu
      mode="inline"
      theme="dark"
      style="width: 256px"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>概况</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>设置</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="inbox" />
        <span>商品</span>
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="inbox" />
        <span>订单</span>
      </a-menu-item>
      <a-menu-item key="5">
        <a-icon type="inbox" />
        <span>资产</span>
      </a-menu-item>

      <!--下拉菜单样式-->
      <!--<a-sub-menu key="sub1">-->
        <!--<span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>-->
        <!--<a-menu-item key="1">Option 1</a-menu-item>-->
        <!--<a-menu-item key="2">Option 2</a-menu-item>-->
        <!--<a-menu-item key="3">Option 3</a-menu-item>-->
        <!--<a-menu-item key="4">Option 4</a-menu-item>-->
      <!--</a-sub-menu>-->
    </a-menu>
  </div>
</template>
<script>
  export default {
    name:'membercontiner',
    data () {
      console.log(hhhhhhh)
    },
    // methods: {
    // },
  }

</script>

<style scoped>

</style>

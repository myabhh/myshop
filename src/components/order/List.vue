<template>
<a-layout-content>
  <a-form
    layout="inline"
    :form="form"
    @submit="handleSearch"
    :loading="loading"
    class="searchForm"
  >
    <a-form-item label="订单搜索">
      <a-select v-model="searchStatus" showSearch>
        <!-- showSearch
        @change="handleChange" -->
        <!--<a-select-option v-for="(value,index) in values" :key="index">{{value}}</a-select-option>-->
        <a-select-option value="orderId">订单号</a-select-option>
        <a-select-option value="consignee">收货人姓名</a-select-option>
        <a-select-option value="consigneeTel">收货人手机号</a-select-option>
      </a-select>
      <a-input
        v-if="searchStatus === 'orderId'"
        v-decorator="['orderId']"
        placeholder="请输入订单号"/>
      <a-input
        v-if="searchStatus === 'consignee'"
        v-decorator="['consignee']"
        placeholder="请输入收货人姓名"/>
      <a-input
        v-if="searchStatus === 'consigneeTel'"
        v-decorator="['consigneeTel']"
        placeholder="请输入收货人手机号"/>
    </a-form-item>
    <a-form-item label="下单时间">
      <a-range-picker
      v-decorator="[
      'range-time-picker',
      {
        initialValue: [
          moment(
            new Date(new Date().getTime() - 144 * 60 * 60 * 1000),
            dateTimeFormat
          ),
          moment(new Date(), dateTimeFormat)
        ]
      }
      ]"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
        :placeholder="['开始日期','结束日期']"
      />
    </a-form-item>
    <a-form-item label="订单状态">
      <a-select
        showSearch
        v-decorator="['orderStatus',{initialValue:'0'}]"
        has-feedback
        placeholder="请选择"
        style="width: 170px"
        @change="changesOrder"
      >
        <a-select-option value="0">全部</a-select-option>
        <a-select-option value="1001">待付款</a-select-option>
        <a-select-option value="2001">待发货</a-select-option>
        <a-select-option value="3001">待收货</a-select-option>
        <a-select-option value="4001">已取消</a-select-option>
        <a-select-option value="5001">已退款</a-select-option>
        <a-select-option value="6001">已完成</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="退款状态">
      <a-select
        v-decorator="['refundStatus', { initialValue: 0 }]"
        placeholder="请选择"
        style="width: 170px;"
      >
        <a-select-option :value="0">全部</a-select-option>
        <a-select-option :value="1">退款处理中</a-select-option>
        <a-select-option :value="2">退款结束</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="付款方式">
      <a-select
        v-decorator="['payWay', { initialValue: 0 }]"
        placeholder="请选择"
        style="width: 170px;"
      >
        <a-select-option :value="0">全部</a-select-option>
        <a-select-option :value="5">支付宝支付</a-select-option>
        <a-select-option :value="3">微信支付</a-select-option>
        <a-select-option :value="30">云闪付</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="handleSearch()">
        查询
      </a-button>
      <a-button @click="exportOrder">
        导出报表
      </a-button>
      <a-button @click="handleReset">
        重置
      </a-button>
      <a-button @click="printTest">
        测试打印面单
      </a-button>
    </a-form-item>
  </a-form>
  <div style="margin:10px 0">
    <a-form
      layout="inline"
      :form="form1"
      @submit="handleSearch"
      :loading="loading"
      class="searchForm"
    >
      <a-form-item label="付款时间（仅用来筛选导出）: ">
        <a-range-picker
          v-decorator="[
          'range-time-picker',
          {
            initialValue: [
              moment(
                new Date(new Date().getTime() - 144 * 60 * 60 * 1000),
                dateTimeFormat
              ),
              moment(new Date(), dateTimeFormat)
            ]
          }
        ]"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
          :placeholder="['开始日期','结束日期']"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary">导出京东仓库发货订单</a-button>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="margin-right:10px">
          导入京东仓库发货订单
        </a-button>
        <span class="error">仅限于商品入仓京东仓库</span>
      </a-form-item>
    </a-form>
  </div>
  <div style="margin:10px 0">
    <a-form
      layout="inline"
      class="searchForm">
      <a-form-item>
        <a-button style="margin-right: 10px" class="primary">导出批量发货模板</a-button>
      </a-form-item>
      <a-form-item>
        <a-button class="primary">批量发货</a-button>
      </a-form-item>
    </a-form>
  </div>
  <a-tabs defaultActiveKey="0" v-model="activeTab">
    <a-tab-pane tab="全部" key="0"></a-tab-pane>
    <a-tab-pane tab="待付款" key="1" forceRender></a-tab-pane>
    <a-tab-pane tab="待发货" key="2"></a-tab-pane>
    <a-tab-pane tab="已发货" key="3"></a-tab-pane>
    <a-tab-pane tab="已完成" key="4"></a-tab-pane>
    <a-tab-pane tab="已关闭" key="5"></a-tab-pane>
    <a-tab-pane tab="退款中" key="6"></a-tab-pane>
  </a-tabs>
  <div class="ant-search-result-list">
    <a-row class="refund-header">
      <a-col :span="7">商品</a-col>
      <a-col :span="2">单价/数量</a-col>
      <a-col :span="3">售后</a-col>
      <a-col :span="3">买家</a-col>
      <a-col :span="4">下单时间</a-col>
      <a-col :span="3">订单状态</a-col>
      <a-col :span="2">实付金额</a-col>
    </a-row>

    <div class="list" v-for="(item, index) in tableData" :key="item.orderId" >
      <a-table
        class="orderTable"
        style="margin-bottom: 10px"
        rowKey="skuCode"
        :loading="tableLoading"
        :columns="columns[index]"
        :dataSource="item.goodsList"
        :pagination="false"
        bordered
      >
        <template slot="title">
          <div style="overflow: hidden">
            <span style="float:left; margin-right: 30px;">
              订单号：{{item.orderId}}
            </span>
            <span
              style="cursor: pointer;"
              class="primary"
              @click="viewDetail(item.orderId)"
            >
              查看详情
            </span>
          </div>
        </template>
        <template slot="goodsName" slot-scope="text,record">
<!--这是新加的一行-->
        </template>
        <template slot="salePrice" slot-scope="text,record">

        </template>
        <template slot="refundStatus" slot-scope="text,record">

        </template>
        <template slot="consignee">

        </template>
        <template slot="createTime">

        </template>
        <template slot="orderStatus">

        </template>
        <template slot="goodsAmount">

        </template>

      </a-table>
    </div>
  </div>



</a-layout-content>
</template>

<script>
  import moment from 'moment'
  import AFormItem from "ant-design-vue/es/form/FormItem";
    export default {
      name: "List",
      components: {AFormItem},
      data(){
        return{
          searchStatus:"consigneeTel",
          values:['订单号','收货人姓名','收货人手机号'],
          dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
          monthFormat: 'YYYY-MM',
          form: this.$form.createForm(this),
          form1: this.$form.createForm(this),
          loading:false,
          tableLoading:false,
          tableData:[],
          activeTab:"0",
        }
      },
      created(){
        this.handleSearch();
      },
      methods:{
        moment,
        onChange(dates, dateStrings) {
          console.log('From: ', dates[0], ', to: ', dates[1]);
          console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
        },
        handleSearch(){
        },
        handleChange(value){
          console.log(`selected ${value}`);
        },
        changesOrder(){
        },
        exportOrder(){
        },
        handleReset(){
        },
        printTest(){
        },
        viewDetail(orderId){

        }
      }
    }
</script>

<style scoped>

</style>

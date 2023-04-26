<template>
  <div id="ProductTable">
    <Table  :columns="columns1" :data="data" :row-class-name="rowClassName" highlight-row height="460" class="table">
    </Table>
  </div>
</template>

<script>
export default {
  name: 'ProductTable',
  props: {
    ProductTableData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      columns1: [
        {
          title: '设备名称',
          key: '设备名称',
          className: 'demo-table-info-column2'
        },
        {
          title: '设定产量',
          key: '设定产量',
          className: 'demo-table-info-column1'
        },
        {
          title: '进料数量',
          key: '进料数量',
          className: 'demo-table-info-column2'
        },
        {
          title: '良品数',
          key: '良品数',
          className: 'demo-table-info-column2'
        },
        {
          title: 'NG数量',
          key: 'NG数量',
          className: 'demo-table-info-column2'
        },
        {
          title: '良率',
          key: '良率',
          className: 'demo-table-info-column2'
        }
      ],
      data: [
        {
          设备名称: '定子1# ',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '定子2# ',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '定子3# ',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '定子4# ',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '定子5# ',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '定子6# ',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '定子7# ',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '转子1# ',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '转子2# ',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '转子3#',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '转子4#',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '总成1#',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '总成2#',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        },
        {
          设备名称: '总成3#',
          设定产量: 18,
          进料数量: 'New York No. 1 Lake Park',
          良品数: '2016-10-03',
          NG数量: '2016-10-03',
          良率: '2016-10-03'
        }
      ]
    }
  },
  watch: {
    ProductTableData (newValue) {
      this.data = newValue
      console.log(this.data)
    }
  },
  mounted () {

  },
  methods: {
    rowClassName (row, index) {
      if (index % 2 === 0) {
        return 'ivu-table-stripe-evenp'
      } else return 'ivu-table-stripe-oddp'
    }
  }
}
</script>

<style lang="less">
#ProductTable {
  background: #2467f7;

  /*rgb(55, 109, 208);*/
  .table{
    border: 1px solid rgba(44, 96, 227, 0.5);
    color: #f4f6f9;
  }

  .ivu-table td.demo-table-info-column1{
    color: #f4f6f9;
    font-size: 12px !important;
    font-weight: 150 !important;
    background-color: #1981f6;
  }
  .ivu-table td.demo-table-info-column2{
    color: #f4f6f9;
    font-size: 12px !important;
    font-weight: 100 !important;

  }
.ivu-table-overflowY{
  overflow-x:hidden;
  overflow-y:scroll
}
.ivu-table-overflowX{
  overflow-y:scroll;
  overflow-x:hidden;
}
.ivu-table {
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-size: 12px;
  margin-right: -50px;
  /* box-sizing: border-box;
  background-color: #0A2361;
  */
}
  /* color: aliceblue;*/
  .ivu-table th{
    color: #f4f6f9;
    background-color: #1981f6;
    border: 1px solid rgba(44, 96, 227, 0.5);
    font-size: 12px !important;
    font-weight: 350 !important;
    height: 100%;
  }

  .ivu-table td{
    height: 95%;
    border: 1px solid rgba(44, 96, 227, 0.5);
    font-size: 12px !important;
    font-weight: 200 !important;
  }

  /*偶数行*/
  .ivu-table-stripe-evenp td{
    background-color: #0A2361!important;
    height: 43px;

  }
  /*奇数行*/
  .ivu-table-stripe-oddp td{
    background: #0A2361!important;
    height: 43px;
  }
  /*选中某一行高亮*/
  .ivu-table-row-highlightp td {
    background-color: #4181ea!important;
  }
  /*浮在某行*/
  .ivu-table-row-hoverp td {
    background-color: #4572ba!important;
  }
}
</style>

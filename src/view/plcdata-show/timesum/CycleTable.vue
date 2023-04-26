<template>
  <div id="CycleTable">
    <Table  :columns="columns1" :data="data1" :row-class-name="rowClassName" highlight-row height="430" class="table">
    </Table>
  </div>
</template>

<script>
export default {
  name: 'CycleTable',
  props: {
    CycleTableData: {
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
          title: '当前周期',
          key: '当前周期',
          className: 'demo-table-info-column1'
        },
        {
          title: '平均周期',
          key: '平均周期',
          className: 'demo-table-info-column2'
        },
        {
          title: '运行时间',
          key: '运行时间',
          className: 'demo-table-info-column2'
        },
        {
          title: '停机时间',
          key: '停机时间',
          className: 'demo-table-info-column2'
        },
        {
          title: '报警时间',
          key: '报警时间',
          className: 'demo-table-info-column2'
        }
      ],
      data1: [
        {
          设备名称: '定子1# ',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '定子#2 ',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '定子3# ',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '定子4# ',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '定子5# ',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '定子6# ',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '定子7# ',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '转子1#',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '转子2# ',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '转子3#',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '转子4#',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '总成1#',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '总成2#',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        },
        {
          设备名称: '总成3#',
          当前周期: '36',
          平均周期: '35',
          运行时间: '36',
          停机时间: '65',
          报警时间: '66'
        }
      ]
    }
  },
  watch: {
    CycleTableData (newValue) {
      this.data1 = newValue
    }
  },
  mounted () {

  },
  methods: {
    rowClassName (row, index) {
      if (index % 2 === 0) {
        return 'ivu-table-stripe-even'
      } else return 'ivu-table-stripe-odd'
    }
  }
}
</script>

<style >
#CycleTable {
  background: #2467f7;
}
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
  .ivu-table-stripe-even td{
    background-color: #0A2361!important;
    height: 43px;

  }
  /*奇数行*/
  .ivu-table-stripe-odd td{
    background: #0A2361!important;
    height: 43px;
  }
  /*选中某一行高亮*/
  .ivu-table-row-highlight td {
    background-color: #4181ea!important;
  }
  /*浮在某行*/
  .ivu-table-row-hover td {
    background-color: #4572ba!important;
  }

</style>

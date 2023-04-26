<template>
  <div id="ProductTable">
  <Table border :columns="columns" :data="data" :row-class-name="rowClass" height="460"></Table>
  </div>
</template>
<script>
export default {
  name: 'ProductTable',
  props: {
    ProductTableData: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      columns: [
        {
          title: '设备名称',
          key: '设备名称'
        },
        {
          title: '设定产量',
          key: '设定产量'
        },
        {
          title: '进料数量',
          key: '进料数量'
        },
        {
          title: '良品数',
          key: '良品数'
        },
        {
          title: 'NG数量',
          key: 'NG数量'
        },
        {
          title: '良率',
          key: '良率'
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
      let data = []
      for (const newValueKey in newValue) {
        data.push(newValue[newValueKey])
      }
      /*for (const Key in data[0]) {
        this.columns1.push({
          title: Key,
          key: Key
        })
      }*/
      if (this.data.length === 19) {
        this.data.shift()
      }
      this.data = newValue
    }
  },
  methods: {
    rowClass (row, index) {
      if (index % 2 === 0) {
        return 'ivu-table-stripe-even1'
      } else return 'ivu-table-stripe-odd1'
    }
  }
}
</script>
<style>
#ProductTable{
  background: #2467f7;
}

/*偶数行*/
.ivu-table-stripe-even1 td{
  background-color: #0A2361!important;
  height: 43px;
  color: #f4f6f9;
}
/*奇数行*/
.ivu-table-stripe-odd1 td{
  background-color: #0A2361!important;
  height: 43px;
  color: #f4f6f9;
}
</style>

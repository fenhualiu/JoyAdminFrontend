<template>
  <div id="GongyYiShiJian">
    <dv-scroll-board :config="config" style="height: 100%" />
  </div>
</template>

<script>
export default {
  name: 'PZshijian',
  props: {
    PZshijianData: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    PZshijianData (newValue) {
      this.createConfig(newValue)
    }
  },
  data () {
    return {
      config: {
        header: ['时间', '不良率', '不良数', '良品数', '工站'],
        data: [
          ['2019-07-01 19:25:00', '路面危害-松散', '5', '5', 'xxxxxxx'],
          ['2019-07-02 17:25:00', '路面危害-路面油污清理', '13', '5', 'xxxxxxx'],
          ['2019-07-03 16:25:00', '交安设施-交通标志牌结构', '6', '5', 'xxxxxxx'],
          ['2019-07-04 15:25:00', '路基危害-防尘网', '2', '5', 'xxxxxxx'],
          ['2019-07-05 14:25:00', '交安设施-交通标志牌结构', '1', '5', 'xxxxxxx'],
          ['2019-07-06 13:25:00', '路面危害-松散', '3', '5', 'xxxxxxx'],
          ['2019-07-07 12:25:00', '路基危害-防尘网', '4', '5', 'xxxxxxx'],
          ['2019-07-08 11:25:00', '路面危害-路面油污清理', '2', '5', 'xxxxxxx'],
          ['2019-07-09 10:25:00', '交安设施-交通标志牌结构', '5', '5', 'xxxxxxx'],
          ['2019-07-10 09:25:00', '路基危害-防尘网', '3', '5', 'xxxxxxx']
        ],
        index: true,
        columnWidth: [200, 300, 300, 300],
        align: ['center'],
        rowNum: 10,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: '#0A2361',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
    }
  },
  methods: {
    createConfig (newData) {
      let config = {
        // header: ['报警站位', '报警信息', '开始时间', '持续时间'],
        header: ['所属设备', '不良名称', '发生次数'],
        data: [],
        index: true,
        columnWidth: [50],
        align: ['center'],
        rowNum: 10,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: '#0A2361',
        evenRowBGC: 'rgba(10, 29, 50, 0.8)'
      }
      let data = newData || []
      if (Array.isArray(data)) {
        if (data.length > 0) {
          // let firstData = data[0]
          // let header = Object.keys(firstData)
          // config.header = header
        }
        let dataArray = []

        for (const item of data) {
          dataArray.push(Object.values(item))
        }
        config.data = dataArray
      } else {
        config.data = []
      }
      this.config = config
    }
  }
}
</script>

<style lang="less">
#GongyYiShiJian{
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}
</style>

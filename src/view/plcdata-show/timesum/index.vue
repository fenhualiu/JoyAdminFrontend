<template>
  <div class="timesum" >
    <Button type="text" @click="goback" ghost>《=</Button>
    <div align="left" class="timesumhead">
      设备生产平均周期
    </div>
    <CycleChart class="timesumchart" :cycle-chart-data="CycleChartData"/>
    <div align="left" class="timesumhead">
      设备生产时间统计
    </div>
    <div class="timesumbordinary">
      <CycleTable :cycle-table-data="CycleTableData"/>
    </div>
  </div>

</template>
<script>
import CycleChart from './CycleChart.vue'
import CycleTable from './CycleTable.vue'
export default {
  name: 'timesum',
  components: {
    CycleChart,
    CycleTable
  },
  data () {
    return {
      CycleChartData: [],
      CycleTableData: []
    }
  },
  mounted () {
    this.timer = setInterval(() => { this.InjectedTime() }, 5000)
  },
  methods: {
    InjectedTime () {
      const { randomExtend } = this
      let tte = []
      for (let i = 0; i < 14; i++) {
        tte.push(randomExtend(0.9, 8))
      }
      console.log('@@@@@--TimeSum--@@@@@')
      let TimeText = this.$store.datadeal.timesum.chart
      this.CycleChartData = TimeText
      console.log(this.CycleChartData)

      let CycleText = this.$store.datadeal.timesum.cycletime
      this.CycleTableData = CycleText
    },
    randomExtend (minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10)
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      }
    },
    goback () {
      this.$router.push({ path: '/home' })
    }
  },
  beforeDestroy () {
    // 页面关闭（路由跳转）时清除定时器
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

<style >
.timesum{
  width: 100%;
  height: 100%;
  background-color: #0A2361;
}
/*
background:#0A2361;
*/
.timesumhead{
  margin: 10px 0px 10px 5px; /*上，右，下，左*/
  padding: 0px;
  text-align: left;
  font-size: 24px;
  font-weight: 500;
  color: white;
}
.timesumchart{
  height:35%;
  margin-left:10px;
  width:99%;
  border: 2px solid rgba(44, 96, 227, 0.5);
}

.timesumbordinary{
  margin: 0px;
  margin-left:10px;
  width:99%;
  border: 2px solid rgba(44, 96, 227, 0.5);
}

</style>

<template>
    <div class="Achart_view" >
        <div ref="achart" id="achart" class="Achart-view-4"></div>
    </div>
</template>
<script>
var that
export default {
  name: 'AlarmChart',
  props: {
    AlarmChartData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      timer: null, // 定时器
      chart1_title: '柱图测试',
      chart1_dataName: '销量',
      chart1_name: null,
      chart1_data: null,
      // eslint-disable-next-line standard/array-bracket-even-spacing
      chartData1: [ 4.3, 5.1, 7.6, 5.2, 3.7, 6.2, 5.8, 5.2, 6.8, 7.2, 5.3, 3.1, 4.5, 6.7, 6.9, 7.8],
      myChart1: document.getElementById('achart'),
      option1: {
        grid: {
          // bottom: '1%',
          x: '4%',
          y: '20%',
          x2: '2%',
          y2: '6%',
          borderWidth: 5
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#da1b21'
            },
            Label: {
              color: '#b9c2cc'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['设备报警总次数', 'Precipitation', 'Temperature'],
          textStyle: {
            color: '#f2f2f4'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisPointer: {
              type: 'shadow'
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#c2cfdc'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '设备报警总次数',
            min: 0,
            max: 8,
            interval: 2,
            axisLabel: {
              formatter: '{value} '
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#c2cfdc'
              }
            }
          }
        ],
        series: [
          {
            name: '设备报警总次数',
            type: 'bar',
            markLine: {
              data: [
                [
                  { name: 'MAX', xAxis: 0, yAxis: 6, symbol: 'circle' },
                  { name: 'MAX', xAxis: '总成3#', yAxis: 6, symbol: 'circle' }
                ]
              ],
              lineStyle: {// 标注线样式
                normal: {
                  type: 'solid',
                  color: 'red'// 标注线颜色
                }
              }
            },
            itemStyle: {
              normal: {
                // 这里是重点
                color: '#1981F6'
              }
            },
            yAxisIndex: 0,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml'
              }
            }
          }
        ]
      }
    }
  },
  watch: {
    AlarmChartData (newValue) {
      alert(JSON.stringify(newValue))
      this.optionData(newValue)
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    that = this
  },
  mounted () {
    // 页面加载完成后,才执行
    that.showChart3()
    // 定时器，刷新
    // this.timer = setInterval(() => { this.changedata() }, 5000)
    // 页面一直更新
    //     window.setTimeout(()=>{
    //     window.location.reload();
    // },5000);
  },
  methods: {
    optionData (ChartData) {
      // console.log('***alarm-chart***')
      // console.dir(ChartData)
      /* let xAxisdata = []
      let seriesdata = []
      for (const ChartDatakey in ChartData) {
        // xAxisdata.push(ChartDatakey)
        seriesdata.push(ChartData(ChartDatakey))
      }
       */
       let chartDom = document.getElementById('achart')
      that.myChart1 = that.$echarts.init(chartDom)
      that.option1.series[0].data = ChartData
      that.option1 && that.myChart1.setOption(that.option1)
    },
    showChart3 () {
      let chartDom = document.getElementById('achart')
      that.myChart1 = that.$echarts.init(chartDom)
      that.option1.series[0].data = this.chartData1
      that.option1.xAxis[0].data = ['定子1#', '定子2# ', '定子3# ', '定子4# ', '定子5# ', '定子6# ', '定子7# ', '转子1#', '转子2#', '转子3#', '转子4# ', '总成1# ', '总成2# ', '总成3#']
      that.option1 && that.myChart1.setOption(that.option1)
    },
    changedata () {
      const { randomExtend } = this
      // eslint-disable-next-line standard/array-bracket-even-spacing
      var ttt = [ 0, 0, 0, 0, 0, 0, 5.8, 5.2, 6.8, 7.2, 5.3, 3.1, 4.5, 6.7]
      that.option1.series[0].data = ttt
      console.log('**************')
      console.dir(that.option1.series[0].data)
      that.$set(ttt, 1, randomExtend(0.9, 8))
      that.$set(ttt, 2, randomExtend(0.9, 8))
      that.option1.series[0].data = ttt
      console.dir(that.option1.series[0].data)
      that.option1 && that.myChart1.setOption(that.option1)
    },
    randomExtend (minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10)
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      }
    }
  },
  beforeDestroy () {
    // 页面关闭（路由跳转）时清除定时器
    clearInterval(this.timer)
    this.timer = null
  }
}

</script>

<style>

.Achart_view
{
  width: 99%;
  height: 100%;
  text-align: center;
  background: rgba(6, 30, 93,0.5);

  border-style:solid;
  border-width: 1px;
  border-color: rgba(163, 175, 206, 0.5);
}

.title{
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 0px;
  color: white;
}

/* <!--
.chart-view{
  margin: 20px auto;
  width: 400px;
  height: 400px;
} --> */

.Achart-view-4{
  margin: 0px auto;
  width: auto;
  height: 320px;
}
</style>

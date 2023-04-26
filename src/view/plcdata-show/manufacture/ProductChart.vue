<template>
  <div class="Pchart_view" >
    <div id="pchart" class="Pchart-view-4"></div>
  </div>
</template>
<script>
var that
export default {
  name: 'ProductChart',
  props: {
    ProductChartData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      chart1_title: '柱图测试',
      chart1_dataName: '销量',
      chart1_name: null,
      chart1_data: null,
      // eslint-disable-next-line standard/array-bracket-even-spacing
      chartData1: [ 4.3, 5.1, 7.6, 5.2, 3.7, 6.2, 5.8, 5.2, 6.8],
      ProductChart: {},
      option1: {
        grid: {
          x: '9%',
          y: '20%',
          //  x2: '1%',
          y2: '15%',
          borderWidth: 5
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#1981F6'
            },
            Label: {
              color: '#1981F6'
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
          data: ['下料数量', 'Precipitation', 'Temperature'],
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
                color: '#f2f2f4'
              }
            }

          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '下料数量',
            min: 0,
            max: 8,
            interval: 2,
            axisLabel: {
              formatter: '{value} '
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#f2f2f4'
              }
            }
          }
        ],
        series: [
          {
            name: '下料数量',
            type: 'bar',
            markLine: {
              data: [
                [
                  { name: 'MAX', xAxis: 0, yAxis: 6, symbol: 'circle' },
                  { name: 'MAX', xAxis: '总成线', yAxis: 6, symbol: 'circle' }
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
            },
            data: []
          }
        ]
      }
    }
  },
  watch: {
    ProductChartData (newValue) {
      this.optionData(newValue)
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    that = this
  },
  mounted () {
    // 页面加载完成后,才执行
    that.showChart4()
  },
  methods: {
    optionData (ChartData) {
      that.option1.series[0].data = ChartData
      that.ProductChart.setOption(that.option1)
    },
    showChart4 () {
      var chartDom = document.getElementById('pchart')
      that.ProductChart = that.$echarts.init(chartDom)
      that.option1.series[0].data = this.chartData1
      that.option1.xAxis[0].data = ['定子线', '转子线', '总成线']
      that.option1 && that.ProductChart.setOption(that.option1)
    }
  }
}

</script>

<style>

.Pchart_view
{
  width: 100%;
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

/* <!-- .chart-view{
  margin: 20px auto;
  width: 400px;
  height: 400px;
} --> */

.Pchart-view-4{
  margin: 0px auto;
  width: 100%;
  height: 275px;
}
</style>

<template>
    <div class="chart_view" >
        <div id="ichart" class="chart-view-4"></div>
    </div>
</template>
<script>
let that
export default {
  name: 'ProductNumer',
  props: {
    LineEquipData: {
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
      chartData: [1, 17, 3, 9, 1, 31, 28, 16, 22, 15, 39, 21, 33, 11, 17],
      myChart: {},
      option: {
        // backgroundColor: 'transparent', // 背景色
        grid: {
          x: '9%',
          y: '20%',
          // x2: '1%',
          y2: '8%',
          borderWidth: 5
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#e70317'
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
          data: ['不良品数量', 'Precipitation', 'Temperature'],
          textStyle: {
            color: '#dcd1d1'
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
                color: '#e1dada'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '不良品数量',
            min: 0,
            max: 40,
            interval: 10,
            axisLabel: {
              formatter: '{value} '
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#e1dada'// '#f2f2f4'
              }
            }
          }
        ],
        series: [
          {
            name: '不良品数量',
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
    LineEquipData (newValue) {
      alert(JSON.stringify('--lineEquip--'))
      console.log(JSON.stringify(newValue))
      this.ConfigData(newValue)
      // alert(newValue)
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    that = this
  },
  mounted () {
    // 页面加载完成后,才执行
    that.showChart4()
    // that.ConfigData();
  },
  methods: {
    ConfigData (LineEquipData) {
      that.option.series[0].data = LineEquipData
      that.myChart.setOption(that.option)
    },
    showChart4 () {
      var chartDom = document.getElementById('ichart')
      that.myChart = that.$echarts.init(chartDom)
      that.option.series[0].data = this.chartData
      that.option.xAxis[0].data = ['定子1#', '定子2# ', '定子3# ', '定子4# ', '定子5# ', '定子6# ', '定子7# ', '转子1#', '转子2#', '转子3#', '转子4# ', '总成1# ', '总成2# ', '总成3#']
      that.option && that.myChart.setOption(that.option)
    }
  }

}

</script>

<style>

.chart_view
{

    width: 100%;
    height: 100%;
  text-align: center;

  border-style:solid;
  border-width: 1px;
  border-color: rgba(163, 175, 206, 0.5);
}
/*
  background: #07184b;
    //background: #031966;
*/

.title{
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 0;
  color: white;
}
.chart-view-4{
  margin: 0 auto;
  width: 100%;
  height: 275px;
}
</style>

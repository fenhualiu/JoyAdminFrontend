<template>
    <div id="oneOne">
      <Button type="text" @click="goback" ghost>《=</Button>
      <div align="left" class="charthead">
        不良品统计
        <Button @click="SetChartDay()" style="margin: 0px 15px 0px 0px;" type="warning">Day</Button>
        <Button @click="SetChart()" style="margin: 0px 15px 0px 0px;">Week</Button>
        <Button type="success" @click="SetChartMonth()">Month</Button>
       </div>
        <LineEquip   :line-equip-data="LineEquipData" class="linechart"/>
       <div  class="charthead1" >
        <div>
          <span style="margin: 0px 10px 0px 0px;">不良品信息</span>
          <RadioGroup v-model="border" @on-change="changeModel">
        <Radio label="定子1#" border></Radio>
        <Radio label="定子2#" border></Radio>
        <Radio label="定子3#" border></Radio>
        <Radio label="定子4#" border></Radio>
        <Radio label="定子5#" border></Radio>
        <Radio label="定子6#" border></Radio>
        <Radio label="定子7#" border></Radio>
          <Radio label="转子1#" border></Radio>
          <Radio label="转子2#" border></Radio>
        <Radio label="转子3#" border></Radio>
        <Radio label="转子4#" border></Radio>
        <Radio label="总成1#" border></Radio>
        <Radio label="总成2#" border></Radio>
        <Radio label="总成3#" border></Radio>
        <Button @click="NgCountsDay()" style="margin: 0px 15px 0px 0px;" type="warning">Day</Button>
        <Button @click=" NgCounts ()" style="margin: 0px 15px 0px 0px;">Week</Button>
            <Button @click=" NgCountsMon ()" type="success">Month</Button>

    </RadioGroup>
        </div>
       </div>
       <div class="pzsj">
        <PZshijian :p-zshijian-data="PZshijianData" />
        </div>
    </div>

</template>
<script>
import LineEquip from './LineEquip'
import PZshijian from './PZshijian'

import {
  GetNgCounts,
  GetPassRates
} from '@/api/statistic'

export default {
  name: 'One',
  components: {
    LineEquip,
    PZshijian
  },
  data () {
    return {
      PZshijianData: [],
      LineEquipData: [],
      XNData: [],
      DateTimeNow: '',
      DayStart: '',
      Weekstart: '',
      MonthStart: '',
      border: '定子1#',
      Station: '定子1#',
      PictureData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  mounted () {
    // this.GetAttributes()
    // this.GetCurrentNodeValue()
    this.timer = setInterval(() => { this.Injectedinferior() }, 90000)
  },
  methods: {
    changeModel (newval) {
      this.Station = newval
    },
    Injectedinferior () {
      this.SetChart()
      this.PictureData = this.$store.state.datadeal.NGcontext
      console.log(' @@@@inferior@@@@@ ')
      this.LineEquipData = this.PictureData
      console.log(this.LineEquipData)
      this.NgCounts()
      let text = [
        ['定子4#', '定子焊接焊缝检测不良', '1'],
        ['定子4#', '定子内外径检测不良', '1'],
        ['定子7#', '定子汇流排焊锡检测不良', '1'],
        ['定子7#', '定子性能测试仪检测不良', '1'],
        ['转子1#', '转子磁通量检测不良', '1'],
        ['转子2#', '转子推脱力检测不良', '1'],
        ['转子3#', '转子铁芯压轴压机曲线不良', '1'],
        ['转子3#', '转子压大轴承压机曲线不良', '1'],
        ['转子3#', '转子压小轴承压机曲线不良', '1'],
        ['总成1#', '总成定子入壳压机曲线不良', '1'],
        ['总成1#', '总成定子入壳高度检测不良', '1'],
        ['总成3#', '总成螺丝安装高度检测不良', '1'],
        ['总成3#', '总成反电动势不良', '1'],
        ['总成3#', '总成电机性能不良', '1']
      ]
      // this.PZshijianData = text
      // this.$store.state.datadeal.inferior.chart
    },
    randomExtend (minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10)
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      }
    },
    NgCounts () {
      this.getNowDate()
      return new Promise((resolve, reject) => {
        let info = {
          'Start': this.Weekstart.toString(), // "2023-04-18T02:16:17",
          'End': this.DateTimeNow.toString(), // "2023-04-21T02:16:57",
          'Device': this.Station.toString(),
          'Aggregation': 2,
          'Limit': 10
        }
        console.dir((info))
        console.dir(JSON.stringify(info))
        //  "Start": "2023-04-18T20:16:32.625Z",
        // "End": "2023-04-20T20:16:32.625Z",
        let GetData = GetNgCounts((info))
          .then((res) => {
            var thisdata = res.data
            if (thisdata.StatusCode === 200) {
              console.log('*****当前NgCounts属性值*****')
              console.log(thisdata.Data)
              const array = []
              for (let yy in thisdata.Data) {
                let dadtxt = thisdata.Data[yy]
                if (Object.prototype.isPrototypeOf(dadtxt) && Object.keys(dadtxt).length !== 0) {
                  for (var i in dadtxt) {
                    array[i] = [dadtxt[i].Device, dadtxt[i].Reason, dadtxt[i].Count]
                  }
                  this.PZshijianData = array
                  console.log(array)
                }
              }
            }
            resolve(thisdata)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetData)
        // alert(GetData)
      })
    },
    NgCountsDay () {
      this.getNowDate()
      return new Promise((resolve, reject) => {
        let info = {
          'Start': this.DayStart.toString(), // "2023-04-18T02:16:17",
          'End': this.DateTimeNow.toString(), // "2023-04-21T02:16:57",
          'Device': this.Station.toString(),
          'Aggregation': 2,
          'Limit': 10
        }
        console.dir((info))
        console.dir(JSON.stringify(info))
        //          "Start": "2023-04-18T20:16:32.625Z",
        // "End": "2023-04-20T20:16:32.625Z",
        let GetData = GetNgCounts((info))
          .then((res) => {
            var thisdata = res.data
            console.log('*****当前DayNgCounts属性值*****')
            if (thisdata.StatusCode === 200) {
              console.log(thisdata.Data)
              const array = []
              if (Object.prototype.isPrototypeOf(thisdata.Data) && Object.keys(thisdata.Data).length !== 0) {
                for (let yy in thisdata.Data) {
                  let dadtxt = thisdata.Data[yy]
                  if (Object.prototype.isPrototypeOf(dadtxt) && Object.keys(dadtxt).length !== 0) {
                    for (var i in dadtxt) {
                      array[i] = [dadtxt[i].Device, dadtxt[i].Reason, dadtxt[i].Count]
                    }
                    this.PZshijianData = array
                    console.log(array)
                  }
                }
              } else {
                alert('NO INFERIOR!')
              }
              if (Object.keys(array).length === 0) {
                alert('NO INFERIOR!')
              }
            }
            resolve(thisdata)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetData)
        // alert(GetData)
      })
    },
    NgCountsMon () {
      this.getNowDate()
      return new Promise((resolve, reject) => {
        let info = {
          'Start': this.MonthStart.toString(), // "2023-04-18T02:16:17",
          'End': this.DateTimeNow.toString(), // "2023-04-21T02:16:57",
          'Device': this.Station.toString(),
          'Aggregation': 3,
          'Limit': 10
        }
        console.dir((info))
        console.dir(JSON.stringify(info))
        //          "Start": "2023-04-18T20:16:32.625Z",
        // "End": "2023-04-20T20:16:32.625Z",
        let GetData = GetNgCounts((info))
          .then((res) => {
            var thisdata = res.data
            console.log('*****当前MonthNgCounts属性值*****')
            if (thisdata.StatusCode === 200) {
              console.log(thisdata.Data)
              const array = []
              for (let yy in thisdata.Data) {
                let dadtxt = thisdata.Data[yy]
                if (Object.prototype.isPrototypeOf(dadtxt) && Object.keys(dadtxt).length !== 0) {
                  for (var i in dadtxt) {
                    array[i] = [dadtxt[i].Device, dadtxt[i].Reason, dadtxt[i].Count]
                  }
                  this.PZshijianData = array
                  console.log(array)
                }
              }
            }
            resolve(thisdata)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetData)
        // alert(GetData)
      })
    },
    PassRates () {
      this.getNowDate()
      return new Promise((resolve, reject) => {
        var input = {
          'Start': this.Weekstart.toString(), // "2023-04-18T02:16:17", //this.DateTimeNow.toString(),
          'End': this.DateTimeNow.toString(), // "2023-04-21T02:16:57", //
          'Device': this.Station.toString(),
          'Aggregation': 2
        }
        alert(this.DateTimeNow.toString())
        alert(this.Weekstart.toString())
        alert(this.Station)
        console.dir((input))
        console.dir(JSON.stringify(input))
        console.log('@--PassRates--@')
        GetPassRates((input))
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@PassRates@-@@@-@')
              console.dir(res.data.Data)

              resolve(res.data)
            } else {
              alert(res.data.StatusCode)
            }
            console.log(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetChart () {
      // this.$store.commit('ReceivedDingRun')
      this.getNowDate()
      try {
        this.$store.commit('ReceivePassRate', this.Weekstart.toString() + '/' + this.DateTimeNow.toString())
        setTimeout(() => {
          let chartItem = this.$store.state.datadeal.NGcontext
          for (let i in chartItem) {
          // #region
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子1#') {
              this.PictureData[0] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子2#') {
              this.PictureData[1] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子3#') {
              this.PictureData[2] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子4#') {
              this.PictureData[3] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子5#') {
              this.PictureData[4] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子6#') {
              this.PictureData[5] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子7#') {
              this.PictureData[6] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子1#') {
              this.PictureData[7] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子2#') {
              this.PictureData[8] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子3#') {
              this.PictureData[9] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子4#') {
              this.PictureData[10] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '总成1#') {
              this.PictureData[11] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '总成2#') {
              this.PictureData[12] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '总成3#') {
              this.PictureData[13] = chartItem[i].Ng
            }
          // #endregion
          }
          this.LineEquipData = this.PictureData
          console.log(' @---SetChart---@ ')
          console.dir(this.PictureData)
        })
      } catch (res) {
        alert('SetChart报错啦！')
        alert(res.Message)
      }
    },
    SetChartDay () {
      // this.$store.commit('ReceivedDingRun')
      this.getNowDate()
      try {
        this.$store.commit('ReceivePassRate', this.DayStart.toString() + '/' + this.DateTimeNow.toString())
        setTimeout(() => {
          let chartItem = this.$store.state.datadeal.NGcontext
          for (let i in chartItem) {
          // #region
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子1#') {
              this.PictureData[0] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子2#') {
              this.PictureData[1] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子3#') {
              this.PictureData[2] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子4#') {
              this.PictureData[3] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子5#') {
              this.PictureData[4] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子6#') {
              this.PictureData[5] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子7#') {
              this.PictureData[6] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子1#') {
              this.PictureData[7] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子2#') {
              this.PictureData[8] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子3#') {
              this.PictureData[9] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子4#') {
              this.PictureData[10] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '总成1#') {
              this.PictureData[11] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '总成2#') {
              this.PictureData[12] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '总成3#') {
              this.PictureData[13] = chartItem[i].Ng
            }
          // #endregion
          }
          this.LineEquipData = this.PictureData
          console.log(' @---SetDayChart---@ ')
          console.dir(this.PictureData)
        }, 1000)
      } catch (res) {
        alert('SetDayChart报错啦！')
        alert(res.Message)
      }
    },
    SetChartMonth () {
      // this.$store.commit('ReceivedDingRun')
      this.getNowDate()
      try {
        this.$store.commit('ReceivePassRate', this.MonthStart.toString() + '/' + this.DateTimeNow.toString())
        setTimeout(() => {
          let chartItem = this.$store.state.datadeal.NGcontext
          for (let i in chartItem) {
          // #region
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子1#') {
              this.PictureData[0] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子2#') {
              this.PictureData[1] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子3#') {
              this.PictureData[2] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子4#') {
              this.PictureData[3] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子5#') {
              this.PictureData[4] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子6#') {
              this.PictureData[5] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '定子7#') {
              this.PictureData[6] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子1#') {
              this.PictureData[7] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子2#') {
              this.PictureData[8] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子3#') {
              this.PictureData[9] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '转子4#') {
              this.PictureData[10] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '总成1#') {
              this.PictureData[11] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '总成2#') {
              this.PictureData[12] = chartItem[i].Ng
            }
            if (chartItem[i].Device.replace(/\s+/g, '') === '总成3#') {
              this.PictureData[13] = chartItem[i].Ng
            }
          // #endregion
          }
          this.LineEquipData = this.PictureData
          console.log(' @---SetChartMonth---@ ')
          console.dir(this.PictureData)
        }, 1000)
      } catch (res) {
        alert('SetChartMonth报错啦！')
        alert(res.Message)
      }
    },
    goback () {
      this.$router.push({ path: '/home' })
    },
    getNowDate () {
      let myDate = new Date()
      let year = myDate.getFullYear() // 获取当前年
      let mon = (myDate.getMonth() + 1).toString() // 获取当前月
      let date = (myDate.getDate()).toString() // 获取当前日
      // console.log('!!!!!!!时间获取!!!!!!!!!!')
      if (mon.length === 1) {
        mon = '0' + mon
      }
      if (date.length === 1) {
        date = '0' + date
      }
      let hours = myDate.getHours().toString() // 获取当前小时
      if (hours.length === 1) {
        hours = '0' + hours
      }
      let minutes = myDate.getMinutes().toString() // 获取当前分钟
      if (minutes.length === 1) {
        minutes = '0' + minutes
      }
      let seconds = myDate.getSeconds().toString() // 获取当前秒
      if (seconds.length === 1) {
        seconds = '0' + seconds
      }
      this.DateTimeNow = year + '-' + mon + '-' + date + 'T' + hours + ':' + minutes + ':' + seconds
      this.DayStart = year + '-' + mon + '-' + (date - 1) + 'T' + hours + ':' + minutes + ':' + seconds
      this.Weekstart = year + '-' + mon + '-' + (date - 7) + 'T' + hours + ':' + minutes + ':' + seconds
      this.MonthStart = year + '-' + (mon - 1) + '-' + date + 'T' + hours + ':' + minutes + ':' + seconds
      return this.DateTimeNow
    }
  },
  beforeDestroy () {
    // 页面关闭（路由跳转）时清除定时器
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>
<style lang="less">
#oneOne{
    width: 100%;
    height: 100%;
    background: #0A2361;
  .jianju{
    grid-row-gap:90px;
}
.linechart{
  // margin-top: -760px;
  margin-left:10px;
  height:33%;
  padding: 0%;
  width: 99%;
  border: 2px solid rgba(44, 96, 227, 0.5);
   // border:2px solid #232b38;
 }
.charthead{
  margin: 10px 0px 10px 5px;//上，右，下，左
  padding: 0px;
    text-align: left;
     font-size: 20px;
     font-weight: 500;
    color: #f3ecec;
    //line-height: calc(20vh - 65px);

}
.charthead1{
  margin: 10px 0px 10px 5px;//上，右，下，左
  padding: 0px;
    text-align: left;
     font-size: 20px;
     font-weight: 500;
    color: #f3ecec;
    //line-height: calc(20vh - 65px);

}
.xnjc{
  margin-left:10px;
  border: 2px solid rgba(44, 96, 227, 0.5);
  //background: #051C58;
  width: 99%;
  //border:2px solid #232b38;
}
.pzsj{
  margin-left:10px;
  border: 2px solid rgba(44, 96, 227, 0.5);
  width: 99%;
  height: 46%;
 //margin: 0px 10px 0px 10px;
}

}

</style>

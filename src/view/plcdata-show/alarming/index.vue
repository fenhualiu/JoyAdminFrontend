<template>
    <div class="twomore1" id="Alarm" >
      <Button type="text" @click="goback" ghost>《=</Button>
        <div align="left" class="alarmhead">
         设备报警信息
         <Button @click="GetDayAlarm()" style="margin: 0px 15px 0px 0px;" type="warning">Day</Button>
         <Button @click="GetPastAlarm()" style="margin: 0px 15px 0px 0px;">Week</Button>
        <Button type="success" @click="GetMonPast()">Month</Button>
       </div>
        <div class="Alarmbordinary">
        <AlarmTable1 :alarm-table-data1="AlarmTableData1" />
        <AlarmTable2 :alarm-table-data2="AlarmTableData2" />
      </div>
        <div align="left" class="alarmhead">
         设备报警数量
         <Button @click="GetDayPast()" style="margin: 0px 15px 0px 0px;" type="warning">Day</Button>
         <Button @click="GetAlarmSum()" style="margin: 0px 15px 0px 0px;">Week</Button>
        <Button type="success" @click="GetMonAlarm()">Month</Button>
       </div>
       <AlarmChart :alarm-chart-data="AlarmChartData" ref="dom" class="alarmchart" />
    </div>
</template>

<script>
import AlarmTable1 from './AlarmTable1.vue'
import AlarmTable2 from './AlarmTable2.vue'
import AlarmChart from './AlarmChart.vue'

import { GetCurrentAlarm } from '@/api/opcua'

export default {
  name: 'alarming',
  components: {
    AlarmTable1,
    AlarmTable2,
    AlarmChart
  },
  data () {
    return {
      AlarmTableData1: [],
      AlarmTableData2: [],
      AlarmChartData: [],
      Currentime: '',
      DayQuery: '',
      WeekQuery: '',
      MonthQuery: '',
      Assembly: '定子7',
      Position: '定子7',
      AlarmASSY: [],
      CurrentAlarm: null
    }
  },
  computed: {
  },
  mounted () {
    // this.GetInfoData()
    // this.PostData()
    // this.$store.commit('ReceivedDingRun')
    // this.$store.commit('ReceivedZhuanRun')
    // this.$store.commit('ReceivedZongRun')
    this.Injected()
    // this.timer = setInterval(() => { this.GetCurrentAlarm() }, 3000)
  },
  methods: {
    Injected () {
      this.getTime()
      this.GetAlarmSum()
      this.GetPastAlarm()
      /*
      const { randomExtend } = this
      let tte = []
      for (let i = 0; i < 14; i++) {
        tte.push(randomExtend(0.9, 8))
      }
      // console.log(this.AlarmChartData)
      let text = []
      for (let i = 0; i < 7; i++) {
        text.push({
          title: '定子' + (i + 1).toString() + '#',
          number1: '报警.上框振动盘阻挡上/下报警',
          number2: randomExtend(10, 100),
          number3: '报警.上框振动盘阻挡上/下报警',
          pastnumber: randomExtend(0, 10).toString()
        })
      }
      // console.log('text')
      // console.log(JSON.stringify(text))
      */
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
    },
    GetCurrentAlarm () {
      let AlarmPromise = new Promise((resolve, reject) => {
        let GetDing1 = GetCurrentAlarm()
          .then((res) => {
            let AlarmNow = res.data
            if (AlarmNow.StatusCode === 200) {
              console.log('---AlarmNow.Data---')
              console.log(AlarmNow.Data)
              this.CurrentAlarm = AlarmNow.Data
            }
            resolve(AlarmNow.Data)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetDing1)
      })
      return AlarmPromise
    },
    GetAlarmSum () {
      try {
        this.getTime()
        let test = [{
          'Station': '定子1',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子2',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子3',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子4',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子5',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子6',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子7',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '转子1',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '转子2',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '转子3',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '转子4',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '总成1',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '总成2',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '总成3',
          'Start': this.WeekQuery.toString(),
          'End': this.Currentime.toString()
        }]
        this.$store.commit('SetAlarmD1', test[0])
        this.$store.commit('SetAlarmD2', test[1])
        this.$store.commit('SetAlarmD3', test[2])
        this.$store.commit('SetAlarmD4', test[3])
        this.$store.commit('SetAlarmD5', test[4])
        this.$store.commit('SetAlarmD6', test[5])
        this.$store.commit('SetAlarmD7', test[6])
        this.$store.commit('SetAlarmZ1', test[7])
        this.$store.commit('SetAlarmZ2', test[8])
        this.$store.commit('SetAlarmZ3', test[9])
        this.$store.commit('SetAlarmZ4', test[10])
        this.$store.commit('SetAlarmC1', test[11])
        this.$store.commit('SetAlarmC2', test[12])
        this.$store.commit('SetAlarmC3', test[13])

        setTimeout(() => {
          this.AlarmASSY = this.$store.state.alarmTrans.AlamrSum
          this.AlarmChartData = this.AlarmASSY
          console.log('AlarmASSY')
          console.log(JSON.stringify(this.AlarmChartData))
        }, 1000)
      // console.log(this.AlarmChartData)
      } catch (res) {
        alert('报错啦！')
        alert(res.Message)
      }
    },
    GetDayAlarm () {
      try {
        this.getTime()
        let test = [{
          'Station': '定子1',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子2',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子3',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子4',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子5',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子6',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '定子7',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '转子1',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '转子2',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '转子3',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '转子4',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '总成1',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '总成2',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        },
        {
          'Station': '总成3',
          'Start': this.DayQuery.toString(),
          'End': this.Currentime.toString()
        }]
        this.$store.commit('SetAlarmD1', test[0])
        this.$store.commit('SetAlarmD2', test[1])
        this.$store.commit('SetAlarmD3', test[2])
        this.$store.commit('SetAlarmD4', test[3])
        this.$store.commit('SetAlarmD5', test[4])
        this.$store.commit('SetAlarmD6', test[5])
        this.$store.commit('SetAlarmD7', test[6])
        this.$store.commit('SetAlarmZ1', test[7])
        this.$store.commit('SetAlarmZ2', test[8])
        this.$store.commit('SetAlarmZ3', test[9])
        this.$store.commit('SetAlarmZ4', test[10])
        this.$store.commit('SetAlarmC1', test[11])
        this.$store.commit('SetAlarmC2', test[12])
        this.$store.commit('SetAlarmC3', test[13])

        this.AlarmASSY = this.$store.state.alarmTrans.AlamrSum
        this.AlarmChartData = this.AlarmASSY
        console.log('DayAlarmASSY')
        console.log(JSON.stringify(this.AlarmChartData))
      // console.log(this.AlarmChartData)
      } catch (res) {
        alert('报错啦！')
        alert(res.Message)
      }
    },
    GetMonAlarm () {
      this.getTime()
      let test = [{
        'Station': '定子1',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '定子2',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '定子3',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '定子4',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '定子5',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '定子6',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '定子7',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '转子1',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '转子2',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '转子3',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '转子4',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '总成1',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '总成2',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      },
      {
        'Station': '总成3',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString()
      }]

      this.$store.commit('SetAlarmD1', test[0])
      this.$store.commit('SetAlarmD2', test[1])
      this.$store.commit('SetAlarmD3', test[2])
      this.$store.commit('SetAlarmD4', test[3])
      this.$store.commit('SetAlarmD5', test[4])
      this.$store.commit('SetAlarmD6', test[5])
      this.$store.commit('SetAlarmD7', test[6])
      this.$store.commit('SetAlarmZ1', test[7])
      this.$store.commit('SetAlarmZ2', test[8])
      this.$store.commit('SetAlarmZ3', test[9])
      this.$store.commit('SetAlarmZ4', test[10])
      this.$store.commit('SetAlarmC1', test[11])
      this.$store.commit('SetAlarmC2', test[12])
      this.$store.commit('SetAlarmC3', test[13])
      this.AlarmASSY = this.$store.state.alarmTrans.AlamrSum
      console.log('MonthAlarmASSY')
      console.log(this.AlarmASSY)
      this.AlarmChartData = this.AlarmASSY
      // alert(JSON.stringify(this.AlarmChartData))
    },
    GetPastAlarm () {
      this.getTime()
      let PastAlarmBody = [{
        'Station': '定子1',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子2',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子3',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子4',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子5',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子6',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子7',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子1',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子2',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子3',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子4',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '总成1',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '总成2',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '总成3',
        'Start': this.WeekQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      }]

      this.$store.commit('SetPastD1', PastAlarmBody[0])
      this.$store.commit('SetPastD2', PastAlarmBody[1])
      this.$store.commit('SetPastD3', PastAlarmBody[2])
      this.$store.commit('SetPastD4', PastAlarmBody[3])
      this.$store.commit('SetPastD5', PastAlarmBody[4])
      this.$store.commit('SetPastD6', PastAlarmBody[5])
      this.$store.commit('SetPastD7', PastAlarmBody[6])
      this.$store.commit('SetPastZ1', PastAlarmBody[7])
      this.$store.commit('SetPastZ2', PastAlarmBody[8])
      this.$store.commit('SetPastZ3', PastAlarmBody[9])
      this.$store.commit('SetPastZ4', PastAlarmBody[10])
      this.$store.commit('SetPastC1', PastAlarmBody[11])
      this.$store.commit('SetPastC2', PastAlarmBody[12])
      this.$store.commit('SetPastC3', PastAlarmBody[13])

      this.GetAlarmSum()

      setTimeout(() => {
        let PAlarmASSY = this.$store.state.alarmTrans.PastAlarm
        console.log('PAlarmASSY')
        console.log(JSON.stringify(PAlarmASSY))
        let pastalarm1 = []
        let pastalarm2 = []
        for (let i = 0; i < PAlarmASSY.length; i++) {
          if (i < 7) {
            pastalarm1.push({
              title: PastAlarmBody[i].Station,
              number1: '报警.上框振动盘阻挡上/下报警',
              number2: this.AlarmASSY[i],
              number3: PAlarmASSY[i].Message,
              pastnumber: PAlarmASSY[i].Count
            })
          } else {
            pastalarm2.push({
              title: PastAlarmBody[i].Station,
              number1: '报警.上框振动盘阻挡上/下报警',
              number2: this.AlarmASSY[i],
              number3: PAlarmASSY[i].Message,
              pastnumber: PAlarmASSY[i].Count
            })
          }
        }
        this.AlarmTableData1 = pastalarm1
        this.AlarmTableData2 = pastalarm2
      }, 2000)
    },
    GetDayPast () {
      this.getTime()
      let PastAlarmBody = [{
        'Station': '定子1',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子2',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子3',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子4',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子5',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子6',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子7',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子1',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子2',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子3',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子4',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '总成1',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '总成2',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '总成3',
        'Start': this.DayQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      }]

      this.GetDayAlarm()
      this.$store.commit('SetPastD1', PastAlarmBody[0])
      this.$store.commit('SetPastD2', PastAlarmBody[1])
      this.$store.commit('SetPastD3', PastAlarmBody[2])
      this.$store.commit('SetPastD4', PastAlarmBody[3])
      this.$store.commit('SetPastD5', PastAlarmBody[4])
      this.$store.commit('SetPastD6', PastAlarmBody[5])
      this.$store.commit('SetPastD7', PastAlarmBody[6])
      this.$store.commit('SetPastZ1', PastAlarmBody[7])
      this.$store.commit('SetPastZ2', PastAlarmBody[8])
      this.$store.commit('SetPastZ3', PastAlarmBody[9])
      this.$store.commit('SetPastZ4', PastAlarmBody[10])
      this.$store.commit('SetPastC1', PastAlarmBody[11])
      this.$store.commit('SetPastC2', PastAlarmBody[12])
      this.$store.commit('SetPastC3', PastAlarmBody[13])
      let PAlarmASSY = this.$store.state.alarmTrans.PastAlarm
      console.log('---------DayPAlarmASSY')
      console.log(PAlarmASSY)
      let pastalarm1 = []
      let pastalarm2 = []
      for (let i = 0; i < PAlarmASSY.length; i++) {
        if (i < 7) {
          pastalarm1.push({
            title: PastAlarmBody[i].Station,
            number1: '报警.上框振动盘阻挡上/下报警',
            number2: this.AlarmASSY[i],
            number3: PAlarmASSY[i].Message,
            pastnumber: PAlarmASSY[i].Count
          })
        } else {
          pastalarm2.push({
            title: PastAlarmBody[i].Station,
            number1: '报警.上框振动盘阻挡上/下报警',
            number2: this.AlarmASSY[i],
            number3: PAlarmASSY[i].Message,
            pastnumber: PAlarmASSY[i].Count
          })
        }
      }
      this.AlarmTableData1 = pastalarm1
      this.AlarmTableData2 = pastalarm2
    },
    GetMonPast () {
      this.getTime()
      let PastAlarmBody = [{
        'Station': '定子1',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子2',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子3',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子4',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子5',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子6',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '定子7',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子1',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子2',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子3',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '转子4',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '总成1',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '总成2',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      },
      {
        'Station': '总成3',
        'Start': this.MonthQuery.toString(),
        'End': this.Currentime.toString(),
        'TopN': 1,
        'OrderMode': 2
      }]

      this.$store.commit('SetPastD1', PastAlarmBody[0])
      this.$store.commit('SetPastD2', PastAlarmBody[1])
      this.$store.commit('SetPastD3', PastAlarmBody[2])
      this.$store.commit('SetPastD4', PastAlarmBody[3])
      this.$store.commit('SetPastD5', PastAlarmBody[4])
      this.$store.commit('SetPastD6', PastAlarmBody[5])
      this.$store.commit('SetPastD7', PastAlarmBody[6])
      this.$store.commit('SetPastZ1', PastAlarmBody[7])
      this.$store.commit('SetPastZ2', PastAlarmBody[8])
      this.$store.commit('SetPastZ3', PastAlarmBody[9])
      this.$store.commit('SetPastZ4', PastAlarmBody[10])
      this.$store.commit('SetPastC1', PastAlarmBody[11])
      this.$store.commit('SetPastC2', PastAlarmBody[12])
      this.$store.commit('SetPastC3', PastAlarmBody[13])

      this.GetMonAlarm()
      let PAlarmASSY = this.$store.state.alarmTrans.PastAlarm
      console.log('---------MonPAlarmASSY')
      console.log(PAlarmASSY)
      let pastalarm1 = []
      let pastalarm2 = []
      for (let i = 0; i < PAlarmASSY.length; i++) {
        if (i < 7) {
          pastalarm1.push({
            title: PastAlarmBody[i].Station,
            number1: '报警.上框振动盘阻挡上/下报警',
            number2: this.AlarmASSY[i],
            number3: PAlarmASSY[i].Message,
            pastnumber: PAlarmASSY[i].Count
          })
        } else {
          pastalarm2.push({
            title: PastAlarmBody[i].Station,
            number1: '报警.上框振动盘阻挡上/下报警',
            number2: this.AlarmASSY[i],
            number3: PAlarmASSY[i].Message,
            pastnumber: PAlarmASSY[i].Count
          })
        }
      }
      this.AlarmTableData1 = pastalarm1
      this.AlarmTableData2 = pastalarm2
    },
    getTime () {
      let myDate = new Date()
      let year = myDate.getFullYear() // 获取当前年
      let mon = (myDate.getMonth() + 1).toString() // 获取当前月
      let date = (myDate.getDate()).toString() // 获取当前日
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
      this.Currentime = year + '-' + mon + '-' + date + 'T' + hours + ':' + minutes + ':' + seconds
      this.DayQuery = year + '-' + mon + '-' + (date - 1) + 'T' + hours + ':' + minutes + ':' + seconds
      this.WeekQuery = year + '-' + mon + '-' + (date - 6) + 'T' + hours + ':' + minutes + ':' + seconds
      this.MonthQuery = year + '-' + (mon - 1) + '-' + date + 'T' + hours + ':' + minutes + ':' + seconds
      return this.Currentime
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
.twomore1{
    width: 100%;
    height: 100%;
    background-color: #0A2361;
}
/*
background:#0A2361;
*/
.alarmhead{
  margin: 10px 0px 10px 5px; /*上，右，下，左*/
    text-align: left;
     font-size: 24px;
     font-weight: 500;
    color: #fcf8f8;
}
.alarmchart{
     height:35%;
     margin-left:10px;
     width:99%;
     border: 2px solid rgba(44, 96, 227, 0.5);
 }

 .Alarmbordinary{
    margin: 0px;
    margin-left:10px;
    width:99%;
    border: 2px solid rgba(44, 96, 227, 0.5);
  }

</style>

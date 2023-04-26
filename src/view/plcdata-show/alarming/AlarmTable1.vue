<template>
  <div id="GongYeCanShu">
         <div
    class="GongYeCanShu-item"
    v-for="item in EquipFlopData"
    :key="item.title"
  >

  <div class="EquGongYeCanShuip-title" style="height:30px;">{{ item.title }}</div>
           <div class="GongYiCan1-context" style="height:20%;">
             <div>当前报警：</div>
             <div style=" color: #f46827;">
               {{ item.number1 }}
             </div>
           </div>

           <div class="GongYiCan1-context" style="height:20%;">
             <div>总报警次数：</div>
             <div style=" color: #40faee;">
               {{ item.number2 }}
             </div>
           </div>
           <div class="GongYiCan1-context" style="height:20%;">
             <div>历史最高报警次数：</div>
             <div style=" color: #4d99fc;">
               {{ item.number3 }}<br>{{ item.pastnumber }}
             </div>
           </div>
</div>

</div>

</template>

<script>

export default {
  name: 'GongYeCanShu',
  data () {
    return {
      EquipFlopData: []
    }
  },
  props: {
    AlarmTableData1: {
      type: Array,
      default: () => {}
    }
  },
  watch: {
    AlarmTableData1 (newValue, oldValue) {
      let Equipdata = []
      for (const newValuekey in newValue) {
        let option = newValue[newValuekey]
        Equipdata.push({
          title: option.title,
          number1: option.number1,
          number2: option.number2,
          number3: option.number3,
          pastnumber: option.pastnumber
        })
      }
      this.EquipFlopData = Equipdata
    }
  },
  methods: {
    createData () {
      const { randomExtend } = this
      this.EquipFlopData = [
        {
          title: '定子1# ',
          number1: '报警.上框振动盘阻挡上/下报警',
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '定子2# ',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '定子3# ',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '定子4# ',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '定子5# ',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '定子6# ',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '定子7# ',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        }
      ]
    },
    randomExtend (minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10)
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      }
    }
  },
  mounted () {
    const { createData } = this
    createData()
    setInterval(createData, 30000)
  },
  components: {}
}
</script>

  <style lang="less">
#GongYeCanShu {
  width: 100%;
  flex-shrink: 0;
  //justify-content: start;
  display: flex;

  background: rgba(6, 30, 93,0.5);

  border-bottom: 2px solid rgba(44, 96, 227, 0.5);
  //line-height: calc(20vh - 45px);

  //11%
  .GongYeCanShu-item {
    width: 16%;
    height:45%;
    position: relative;
    margin: 5px;
    font-size:15px;

    display: flex;
    flex-direction: column;
    align-items: start;  /*这种情况是垂直居中*/
    justify-content: left;/*这种情况是水平居中*/

    border: 2px solid rgba(44, 96, 227, 0.5);
  }

  .EquGongYeCanShuip-title {
    background-color: #1981F6;
    width: 100%;
    font-size: 19px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: #f8f8fb;
  }
  .GongYeCanShu-context{
    text-align:left;
    color: #f8f8fb;
    margin:2% 0px 2% 1%;
  }
  .Equip-flopp {
    width: 111px !important;
    display: flex;
    margin-top: 10px;
  }

}
</style>

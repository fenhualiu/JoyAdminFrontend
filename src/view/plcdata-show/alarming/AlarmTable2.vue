<template>
  <div id="GongYiCan1">
         <div
    class="GongYiCan1-item"
    v-for="item in EquipFlopData1"
    :key="item.title"
    style=""
  >

  <div class="GongYiCan1-title" style="height:30px;">{{ item.title }}</div>
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
  name: 'AlarmTable2',
  data () {
    return {
      EquipFlopData1: []
    }
  },
  props: {
    AlarmTableData2: {
      type: Array,
      default: () => {}
    }
  },
  watch: {
    AlarmTableData2 (newValue, oldValue) {
      //console.log('newValue')
       // console.log(JSON.stringify(newValue))
      let Equipdata = []
      for (const newValuekey in newValue) {
        let option = newValue[newValuekey]
        Equipdata[newValuekey] = ({
          title: option.title,
          number1: option.number1,
          number2: option.number2,
          number3: option.number3,
          pastnumber: option.pastnumber
        })
      }
      //console.log("^^^-^^^")
      //console.dir(Equipdata)
      this.EquipFlopData1 = Equipdata
    }
  },
  methods: {
    createData (EquipFlopData1) {
      const { randomExtend } = this
      EquipFlopData1 = [
        {
          title: '转子1#',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '转子2#',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '转子3#',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '转子4#',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '总成1#',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '总成2#',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        },
        {
          title: '总成3#',
          number1: randomExtend(20, 30),
          number2: randomExtend(20, 30),
          number3: randomExtend(20, 30)
        }
      ]
      this.EquipFlopData1 = EquipFlopData1
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
    // setInterval(createData, 3000)
  },
  components: {}
}
</script>

  <style lang="less" >
#GongYiCan1 {
 // all:initial;

  height: 100%;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: start;  /*这种情况是垂直居中*/
  justify-content: left;/*这种情况是水平居中*/
  background: rgba(6, 30, 93,0.5);

  //line-height: calc(20vh - 45px);

  //11%
  .GongYiCan1-item {
    width: 15.98%;
    //height:30%;
    height:45%;
    position: relative;
    margin: 5px;
    font-size: 15px;

    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;

    border: 2px solid rgba(44, 96, 227, 0.5);
  }

  .GongYiCan1-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    font-size: 19px;
    background-color: #1981F6;
    text-align:center;
    color: #f8f8fb;
  }

}
.GongYiCan1-context{
    text-align:left;
    color: #f8f8fb;
  margin:2% 0px 2% 1%;
  }
</style>

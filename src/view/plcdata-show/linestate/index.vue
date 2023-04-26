<template>
  <div id="data-view">
    <Button type="text" @click="goback" ghost>《=</Button>
      <Map justify="space-around" class="main-content2" :mapconfig="Mapconfig" />
  </div>
</template>

<script >
import Map from './Map'
// eslint-disable-next-line no-unused-vars
var that
export default {
  name: 'DataView',
  components: {
    Map
  },
  data () {
    return {
      Mapconfig: [],
      messages: [],
      subscription: {
        topic: 'TZMES/#'
      },
      client: null
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    that = this
  },
  mounted () {
    // 页面加载完成后,才执行
    // console.log('————————————————————————————————————————————————————————————')
    // console.dir(this.messages)
    this.timer = setInterval(() => { this.Injectedinferior() }, 3000)
  },
  methods: {
    Injectedinferior () {
      const { randomExtend } = this
      let text = []
      let LinestateData = this.$store.state.datadeal.linestate
      let  Mapdata = [
        {
          运行状态: '🟢',
          工站: '定子1#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '总成固化',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '总成灌胶',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '总成2#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '总成1#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '总成3#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '总成反电动势',
          当前停机时间: '200s'
        },      
        {
          运行状态: '🟢',
          工站: '定子6#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '定子5#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '定子4#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '定子7#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '定子3#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '定子2#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '转子4#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '转子固化2#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '转子3#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '转子2#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '转子1#',
          当前停机时间: '200s'
        },
        {
          运行状态: '🟢',
          工站: '转子固化1#',
          当前停机时间: '200s'
        }
      ]
      for (let info in Mapdata) {
        text.push({
          运行状态: -1,
          工站: Mapdata[info].工站,
          当前停机时间: randomExtend(20, 50)
        })
      }
      this.Mapconfig = LinestateData
      console.log(" ??? ")
      console.log(LinestateData)
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
  }
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #1981F6;//#00A2E8;
  color: #fff;

  #dv-full-screen-container {
    background-size: 100% 100%;
    box-shadow: 0 0 3px rgb(102, 255, 0);
    display: flex;
    flex-direction: column;
  }

  .main-content1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    //grid-row-gap:90px;
  }
  .Row{

  }
  .main-content2 {
    height: 100%;
    width: 100%;
  }

  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 120px;
  }

  .block-top-content {
    height: 55%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }
}
</style>

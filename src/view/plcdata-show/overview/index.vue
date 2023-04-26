<template>
  <div id="data-view">
    <Button type="text" @click="goback" ghost>《=</Button>
      <Map justify="space-around" class="main-content2" />
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
    this.$store.commit('ReceivedDingRun')
    this.$store.commit('ReceivedZhuanRun')
    this.$store.commit('ReceivedZongRun')
  },
  methods: {
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

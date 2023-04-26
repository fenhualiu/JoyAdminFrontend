<template>
  <div class="twomore1" >
    <Button type="text" @click="goback" ghost>《=</Button>
    <div align="left" class="producthead">
      各设备生产数量
    </div>
    <div class="productbordinary">
     <ProductTable :product-table-data="ProductTableData"  />
    </div>
    <div align="left" class="producthead">
      设备生产数据汇总
    </div>
    <ProductChart class="productchart" :product-chart-data="ProductChartData"/>
  </div>

</template>
<script>
import ProductChart from './ProductChart'
import ProductTable from './ProductTable'
export default {
  name: 'manufacture',
  components: {
    ProductChart,
    ProductTable
  },
  data () {
    return {
      ProductTableData: [],
      ProductChartData: []
    }
  },
  mounted () {
    this.timer = setInterval(() => { this.Injectedmanu() }, 3000)
  },
  methods: {
    Injectedmanu () {
      const { randomExtend } = this
      let tte = []
      for (let i = 0; i < 3; i++) {
        tte.push(randomExtend(0.9, 8))
      }
      console.log('@---eedQuality---@')
      let ProductCut = this.$store.state.datadeal.manufacture.CutQuantity
      this.ProductChartData = ProductCut
      console.log(this.ProductChartData)

      let text = []
      let ManuData = this.$store.state.datadeal.manufacture.chart
      for (let i = 0; i < 14; i++) {
        text.push({
          设备名称: '定子' + (i + 1).toString() + '#',
          设定产量: randomExtend(0.9, 8),
          进料数量: randomExtend(0.9, 8),
          良品数: randomExtend(0.9, 8),
          NG数量: randomExtend(0.9, 8),
          良率: randomExtend(10, 100) + '%'
        })
      }
      this.ProductTableData = text
      console.log(this.ProductTableData)
      // console.log(ManuData)
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
.twomore1{
  width: 100%;
  height: 100%;
  background-color: #0A2361;
}
/*
background:#0A2361;
*/
.producthead{
  margin: 10px 0px 10px 5px; /*上，右，下，左*/
  padding: 0px;
  text-align: left;
  font-size: 24px;
  font-weight: 500;
  color: white;
}
.productchart{
  height:35%;
  margin-left:10px;
  width:99%;
  border: 2px solid rgba(44, 96, 227, 0.5);
}

.productbordinary{
  height:48%;
  margin: 0px;
  margin-left:10px;
  width:99%;
  border: 2px solid rgba(44, 96, 227, 0.5);
}

</style>

<template>
  <div id="map">
    <svg ref="box" class="box" width="100%" height="100%">
      <g>
        <rect
          height="50"
          width="125"
          :x="domX[0]"
          :y="domY[0]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
          @mousedown="mousedown"
          @mouseup="mouseup"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="firstRect" :x="TextdomX[0]" :y="TextdomY[0]">
            {{ Mapdata[0].运行状态 }}
          </tspan>
          <tspan id="textRect" :x="TextdomX[0]" :y="TextdomY[0] + 18">
            {{ Mapdata[0].工站  }}{{ Mapdata[0]. 当前停机时间 }}
          </tspan>
        </text>
      </g>

      <text
        id="textRect1"
        :x="50"
        :y="35"
        font-size="16"
        text-anchor="middle"
        fill="black"
      >
        🟢正常运行
      </text>
      <text
        id="textRect2"
        :x="50"
        :y="65"
        font-size="16"
        text-anchor="middle"
        fill="black"
      >
        🟡设备待机
      </text>
      <text
        id="textRect3"
        :x="50"
        :y="95"
        font-size="16"
        text-anchor="middle"
        fill="black"
      >
        🔴故障报警
      </text>
      <text
        id="textRect4"
        :x="50"
        :y="125"
        font-size="16"
        text-anchor="middle"
        fill="black"
      >
        ⚪网络离线
      </text>

      <g>
        <rect
          height="50"
          width="125"
          :x="domX[1]"
          :y="domY[1]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="firstRect1" :x="TextdomX[1]" :y="TextdomY[1]">
            {{ Mapdata[1].运行状态 }}
          </tspan>
          <tspan id="textRect11" :x="TextdomX[1]" :y="TextdomY[1] + 18">
            当前停机：0s
          </tspan>
        </text>

        <rect
          height="50"
          width="123"
          :x="domX[2]"
          :y="domY[2]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="firstRect2" :x="TextdomX[2]" :y="TextdomY[2]">
            总成灌胶：
          </tspan>
          <tspan id="textRect12" :x="TextdomX[2]" :y="TextdomY[2] + 18">
            当前停机：0s
          </tspan>
        </text>
      </g>

      <g>
        <rect
          height="50"
          width="123"
          :x="domX[3]"
          :y="domY[3]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="firstRect3" :x="TextdomX[3]" :y="TextdomY[3]">
            总成2：
          </tspan>
          <tspan id="textRect13" :x="TextdomX[3]" :y="TextdomY[3] + 18">
            当前停机：0s
          </tspan>
        </text>

        <rect
          height="45"
          width="123"
          :x="domX[4]"
          :y="domY[4]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="firstRect4" :x="TextdomX[4]" :y="TextdomY[4]">
            总成3#：
          </tspan>
          <tspan id="textRect14" :x="TextdomX[4]" :y="TextdomY[4] + 18">
            当前停机：0s
          </tspan>
        </text>
      </g>

      <g>
        <rect
          height="48"
          width="132"
          :x="domX[5]"
          :y="domY[5]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="firstRect5" :x="TextdomX[5] + 3" :y="TextdomY[5]">
            总成反电动势：
          </tspan>
          <tspan id="textRect15" :x="TextdomX[5]" :y="TextdomY[5] + 18">
            当前停机：0s
          </tspan>
        </text>

        <rect
          height="50"
          width="123"
          :x="domX1[0]"
          :y="domY1[0]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="secondRect" :x="TextdomX1[0]" :y="TextdomY1[0]">
            定子7#：
          </tspan>
          <tspan id="secondtext" :x="TextdomX1[0]" :y="TextdomY1[0] + 18">
            当前停机：0s
          </tspan>
        </text>
      </g>

      <g>
        <rect
          height="27"
          width="210"
          :x="domX1[1]"
          :y="domY1[1]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="secondtext1" :x="TextdomX1[1] + 18" :y="TextdomY1[1] + 18">
            🟢定子6#当前停机：30s
          </tspan>
        </text>

        <rect
          height="26"
          width="210"
          :x="domX1[2]"
          :y="domY1[2]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="secondtext2" :x="TextdomX1[2] + 18" :y="TextdomY1[2] + 18">
            🟢定子5#当前停机：30s
          </tspan>
        </text>
      </g>

      <g>
        <rect
          height="26"
          width="210"
          :x="domX1[3]"
          :y="domY1[3]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="secondtext3" :x="TextdomX1[3] + 18" :y="TextdomY1[3] + 18">
           🟢定子4#当前停机：30s
          </tspan>
        </text>

        <rect
          height="26"
          width="210"
          :x="domX1[4]"
          :y="domY1[4]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="secondtext4" :x="TextdomX1[4] + 23" :y="TextdomY1[4] + 16">
            🟢定子3#当前停机：300s
          </tspan>
        </text>
        <line
          x1="735"
          y1="450"
          x2="880"
          y2="530"
          style="stroke:rgb(229,50,26);stroke-width:2"
        />
      </g>

      <g>
        <rect
          height="26"
          width="200"
          :x="domX1[5]"
          :y="domY1[5]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="secondtext5" :x="TextdomX1[5] + 18" :y="TextdomY1[5] + 15">
            🟢定子2#当前停机：0s
          </tspan>
        </text>
        <line
          x1="825"
          y1="410"
          x2="970"
          y2="486"
          style="stroke:rgb(229,50,26);stroke-width:2"
        />

        <rect
          height="26"
          width="200"
          :x="domX1[6]+30"
          :y="domY1[6]+0"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="secondtext6" :x="TextdomX1[6] + 53" :y="TextdomY1[6] + 16">
            🟢定子1#当前停机：0s
          </tspan>
        </text>
        <line
          x1="1000"
          y1="395"
          x2="1100"
          y2="411"
          style="stroke:rgb(229,50,26);stroke-width:2"
        />
      </g>

      <g>
        <rect
          height="26"
          width="200"
          :x="domX1[7]"
          :y="domY1[7]+5"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="secondtext7" :x="TextdomX1[7] + 20" :y="TextdomY1[7] + 21">
            转子4#当前停机：0s
          </tspan>
        </text>
        <line
          x1="1275"
          y1="275"
          x2="1390"
          y2="335"
          style="stroke:rgb(229,50,26);stroke-width:2"
        />

        <rect
          height="26"
          width="235"
          :x="domX1[8]"
          :y="domY1[8]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="secondtext8" :x="TextdomX1[8] + 19" :y="TextdomY1[8] + 16">
            🟢转子固化2#当前停机：000s
          </tspan>
        </text>
        <line
          x1="1330"
          y1="230"
          x2="1435"
          y2="285"
          style="stroke:rgb(229,50,26);stroke-width:2"
        />
      </g>

      <g>
        <rect
          height="26"
          width="200"
          :x="domX1[9]"
          :y="domY1[9]+5"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="secondtext9" :x="TextdomX1[9] + 14" :y="TextdomY1[9] + 20">
            转子3#当前停机：00s
          </tspan>
        </text>
        <line
          x1="1520"
          y1="215"
          x2="1590"
          y2="250"
          style="stroke:rgb(229,50,26);stroke-width:2"
        />

        <rect
          height="26"
          width="200"
          :x="domX1[10] - 18"
          :y="domY1[10]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan
            id="secondtext10"
            :x="TextdomX1[10] - 13"
            :y="TextdomY1[10] + 16"
          >
            转子2#当前停机：30s
          </tspan>
        </text>
        <line
          x1="1570"
          y1="170"
          x2="1640"
          y2="206"
          style="stroke:rgb(229,50,26);stroke-width:2"
        />
      </g>

      <g>
        <rect
          height="26"
          width="200"
          :x="domX1[11] - 5"
          :y="domY1[11]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan id="secondtext11" :x="TextdomX1[11]" :y="TextdomY1[11] + 16">
            转子1#当前停机：300s
          </tspan>
        </text>
        <line
          x1="1738"
          y1="80"
          x2="1740"
          y2="155"
          style="stroke:rgb(229,50,26);stroke-width:2"
        />

        <rect
          height="26"
          width="233"
          :x="domX1[12]"
          :y="domY1[12]"
          rx="10px"
          ry="10px"
          fill="white"
          stroke="black"
        ></rect>
        <text font-size="16" text-anchor="middle" fill="black">
          <tspan
            id="secondtext12"
            :x="TextdomX1[12] + 25"
            :y="TextdomY1[12] + 13"
          >
            转子固化1#当前停机：0s
          </tspan>
        </text>
        <line
          x1="1610"
          y1="56"
          x2="1620"
          y2="110"
          style="stroke:rgb(229,50,26);stroke-width:2"
        />
      </g>
    </svg>
  </div>
</template>
<script>
var that

export default {
  name: 'Map',
  props: {
    Mapconfig: {
      type: Array,
      default: function () {
        return {}
      }
    }
  },
  components: {},
  watch: {
    Mapconfig (newValue) {
      var reg = /[\t\r\f\n\s]*/g;
      if (typeof str === 'string') {
        var trimStr = str.replace(reg,'');
      }
      let testdata = []
      let testdata1 = []
      for (const key in newValue) {
        let runstate
        if (newValue[key].运行状态 === 1) {
          runstate = '🟢'
        }
        if (newValue[key].运行状态 === undefined) {
          runstate = '🟡'
        }
        if (newValue[key].运行状态 === -1) {
          runstate = '🔴'
        }
        if (newValue[key].运行状态 === 2) {
          runstate = '⚪'
        }
        // console.log(typeof (newValue[key].工站))
        // #region
        if (newValue[key].工站.replace(reg, '') === '总成1#') {
          testdata[0] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '总成固化') {
          testdata[1] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '总成2#') {
          testdata[2] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '总成3#') {
          testdata[3] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '总成灌胶') {
          testdata[4] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }    
        if (newValue[key].工站.replace(reg, '') === '总成反电动势') {
          testdata[5] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '定子1#') {
          testdata[12] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '定子2#') {
          testdata[11] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '定子3#') {
          testdata[10] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '定子4#') {
          testdata[9] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '定子5#') {
          testdata[8] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '定子6#') {
          testdata[7] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '定子7#') {
          testdata[6] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '转子固化1#') {
          testdata[18] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '转子1#') {
          testdata[17] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '转子2#') {
          testdata[16] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '转子3#') {
          testdata[15] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '转子固化2#') {
          testdata[14] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        if (newValue[key].工站.replace(reg, '') === '转子4#') {
          testdata[13] = {
            运行状态: runstate,
            工站: newValue[key].工站,
            当前停机时间: newValue[key].当前停机时间
          }
        }
        // #endregion
      
      }
      console.log(' *********Map********** ')
      console.dir(newValue)
      console.dir(this.Mapdata)
      this.Mapdata = testdata
      document.getElementById('firstRect').innerHTML =
        this.Mapdata[0].运行状态 + this.Mapdata[0].工站 + '：'
      document.getElementById('firstRect1').innerHTML =
        this.Mapdata[1].运行状态 + this.Mapdata[1].工站 + '：'
      document.getElementById('firstRect2').innerHTML =
        this.Mapdata[2].运行状态 + this.Mapdata[2].工站 + '：'
      document.getElementById('firstRect3').innerHTML =
        this.Mapdata[3].运行状态 + this.Mapdata[3].工站 + '：'
      document.getElementById('firstRect4').innerHTML =
        this.Mapdata[4].运行状态 + this.Mapdata[4].工站 + '：'
      document.getElementById('firstRect5').innerHTML =
        this.Mapdata[5].运行状态 + this.Mapdata[5].工站 + '：'
      document.getElementById('secondRect').innerHTML =
        this.Mapdata[6].运行状态 + this.Mapdata[6].工站 + '：'

      document.getElementById('textRect').innerHTML =
        '当前停机：' + this.Mapdata[0].当前停机时间
      document.getElementById('textRect11').innerHTML =
        '当前停机：' + this.Mapdata[1].当前停机时间
      document.getElementById('textRect12').innerHTML =
        '当前停机：' + this.Mapdata[2].当前停机时间
      document.getElementById('textRect13').innerHTML =
        '当前停机：' + this.Mapdata[3].当前停机时间
      document.getElementById('textRect14').innerHTML =
        '当前停机：' + this.Mapdata[4].当前停机时间
      document.getElementById('textRect15').innerHTML =
        '当前停机：' + this.Mapdata[5].当前停机时间
      document.getElementById('secondtext').innerHTML =
        '当前停机：' + this.Mapdata[6].当前停机时间

      document.getElementById('secondtext1').innerHTML =
        this.Mapdata[7].运行状态 +
        this.Mapdata[7].工站 +
        '当前停机：' +
        this.Mapdata[7].当前停机时间
      document.getElementById('secondtext2').innerHTML =
        this.Mapdata[8].运行状态 +
        this.Mapdata[8].工站 +
        '当前停机：' +
        this.Mapdata[8].当前停机时间
      document.getElementById('secondtext3').innerHTML =
        this.Mapdata[9].运行状态 +
        this.Mapdata[9].工站 +
        '当前停机：' +
        this.Mapdata[9].当前停机时间
      document.getElementById('secondtext4').innerHTML =
        this.Mapdata[10].运行状态 +
        this.Mapdata[10].工站 +
        '当前停机：' +
        this.Mapdata[10].当前停机时间
      document.getElementById('secondtext5').innerHTML =
        this.Mapdata[11].运行状态 +
        this.Mapdata[11].工站 +
        '当前停机：' +
        this.Mapdata[11].当前停机时间
      document.getElementById('secondtext6').innerHTML =
        this.Mapdata[12].运行状态 +
        this.Mapdata[12].工站 +
        '当前停机：' +
        this.Mapdata[12].当前停机时间
      document.getElementById('secondtext7').innerHTML =
        this.Mapdata[13].运行状态 +
        this.Mapdata[13].工站 +
        '当前停机：' +
        this.Mapdata[13].当前停机时间
      document.getElementById('secondtext8').innerHTML =
        this.Mapdata[14].运行状态 +
        this.Mapdata[14].工站 +
        '当前停机：' +
        this.Mapdata[14].当前停机时间
      document.getElementById('secondtext9').innerHTML =
        this.Mapdata[15].运行状态 +
        this.Mapdata[15].工站 +
        '当前停机：' +
        this.Mapdata[15].当前停机时间
      document.getElementById('secondtext10').innerHTML =
        this.Mapdata[16].运行状态 +
        this.Mapdata[16].工站 +
        '当前停机：' +
        this.Mapdata[16].当前停机时间
      document.getElementById('secondtext11').innerHTML =
        this.Mapdata[17].运行状态 +
        this.Mapdata[17].工站 +
        '当前停机：' +
        this.Mapdata[17].当前停机时间
      document.getElementById('secondtext12').innerHTML =
        this.Mapdata[18].运行状态 +
        this.Mapdata[18].工站 +
        '当前停机：' +
        this.Mapdata[18].当前停机时间
    }
  },
  /* [{
    运行状态：，
    工站:,
    当前停机时间：，
  }，
{
   运行状态：，
    当前停机时间：，
}]
          🟢正常运行
          🟡设备待机
          🔴故障报警
          ⚪网络离线
*/
  data () {
    return {
      domX: [15, 230, 355, 1045, 949, 990], // dom初始元素
      domY: [440, 360, 295, 255, 120, 40],

      domX1: [
        250,
        500,
        555,
        630,
        880,
        970,
        1070,
        1390,
        1435,
        1590,
        1658,
        1658,
        1460
      ], // dom初始元素
      domY1: [643, 610, 572, 540, 520, 475, 400, 320, 275, 235, 195, 155, 30],
      curX: null,
      curY: null,
      yuya: 30,
      TextdomX: [80, 290, 415, 1105, 1010, 1055], // dom初始元素
      TextdomY: [460, 380, 315, 275, 140, 60],

      TextdomX1: [
        310,
        585,
        635,
        710,
        955,
        1050,
        1145,
        1465,
        1530,
        1675,
        1750,
        1750,
        1550
      ], // dom初始元素
      TextdomY1: [
        663,
        610,
        572,
        540,
        522,
        478,
        403,
        323,
        278,
        238,
        198,
        158,
        35
      ],
      Text: null, // 初始元素
      textcurX: null,
      textcurY: null,

      Mapdata: [
        {
          运行状态: '🟢',
          工站: '总成1#',
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
          工站: '定子7#',
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
          工站: '定子1#',
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
      ],
      isMouseDown: false
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    that = this
  },
  mounted () {
    // 页面加载完成后,才执行
    document.getElementById('firstRect').innerHTML =
      this.Mapdata[0].运行状态 + this.Mapdata[0].工站 + '：'
    document.getElementById('firstRect1').innerHTML =
      this.Mapdata[1].运行状态 + this.Mapdata[1].工站 + '：'
    document.getElementById('firstRect2').innerHTML =
      this.Mapdata[2].运行状态 + this.Mapdata[2].工站 + '：'
    document.getElementById('firstRect3').innerHTML =
      this.Mapdata[3].运行状态 + this.Mapdata[3].工站 + '：'
    document.getElementById('firstRect4').innerHTML =
      this.Mapdata[4].运行状态 + this.Mapdata[4].工站 + '：'
    document.getElementById('firstRect5').innerHTML =
      this.Mapdata[5].运行状态 + this.Mapdata[5].工站 + '：'
    document.getElementById('secondRect').innerHTML =
      this.Mapdata[6].运行状态 + this.Mapdata[6].工站 + '：'

    document.getElementById('textRect').innerHTML =
      '当前停机：' + this.Mapdata[0].当前停机时间
    document.getElementById('textRect11').innerHTML =
      '当前停机：' + this.Mapdata[1].当前停机时间
    document.getElementById('textRect12').innerHTML =
      '当前停机：' + this.Mapdata[2].当前停机时间
    document.getElementById('textRect13').innerHTML =
      '当前停机：' + this.Mapdata[3].当前停机时间
    document.getElementById('textRect14').innerHTML =
      '当前停机：' + this.Mapdata[4].当前停机时间
    document.getElementById('textRect15').innerHTML =
      '当前停机：' + this.Mapdata[5].当前停机时间
    document.getElementById('secondtext').innerHTML =
      '当前停机：' + this.Mapdata[6].当前停机时间

    document.getElementById('secondtext1').innerHTML =
      this.Mapdata[7].运行状态 +
      this.Mapdata[7].工站 +
      '当前停机：' +
      this.Mapdata[7].当前停机时间
    document.getElementById('secondtext2').innerHTML =
      this.Mapdata[8].运行状态 +
      this.Mapdata[8].工站 +
      '当前停机：' +
      this.Mapdata[8].当前停机时间
    document.getElementById('secondtext3').innerHTML =
      this.Mapdata[9].运行状态 +
      this.Mapdata[9].工站 +
      '当前停机：' +
      this.Mapdata[9].当前停机时间
    document.getElementById('secondtext4').innerHTML =
      this.Mapdata[10].运行状态 +
      this.Mapdata[10].工站 +
      '当前停机：' +
      this.Mapdata[10].当前停机时间
    document.getElementById('secondtext5').innerHTML =
      this.Mapdata[11].运行状态 +
      this.Mapdata[11].工站 +
      '当前停机：' +
      this.Mapdata[11].当前停机时间
    document.getElementById('secondtext6').innerHTML =
      this.Mapdata[12].运行状态 +
      this.Mapdata[12].工站 +
      '当前停机：' +
      this.Mapdata[12].当前停机时间
    document.getElementById('secondtext7').innerHTML =
      this.Mapdata[13].运行状态 +
      this.Mapdata[13].工站 +
      '当前停机：' +
      this.Mapdata[13].当前停机时间
    document.getElementById('secondtext8').innerHTML =
      this.Mapdata[14].运行状态 +
      this.Mapdata[14].工站 +
      '当前停机：' +
      this.Mapdata[14].当前停机时间
    document.getElementById('secondtext9').innerHTML =
      this.Mapdata[15].运行状态 +
      this.Mapdata[15].工站 +
      '当前停机：' +
      this.Mapdata[15].当前停机时间
    document.getElementById('secondtext10').innerHTML =
      this.Mapdata[16].运行状态 +
      this.Mapdata[16].工站 +
      '当前停机：' +
      this.Mapdata[16].当前停机时间
    document.getElementById('secondtext11').innerHTML =
      this.Mapdata[17].运行状态 +
      this.Mapdata[17].工站 +
      '当前停机：' +
      this.Mapdata[17].当前停机时间
    document.getElementById('secondtext12').innerHTML =
      this.Mapdata[18].运行状态 +
      this.Mapdata[18].工站 +
      '当前停机：' +
      this.Mapdata[18].当前停机时间
  },
  methods: {
    mousedown ({ offsetX, offsetY }) {
      // 鼠标初始位置
      that.curX = offsetX - this.domX[0] // 初始位置
      that.curY = offsetY - this.domY[0]

      that.textcurX = offsetX - this.TextdomX[0] // 初始位置
      that.textcurY = offsetY - this.TextdomX[0]

      console.log('shubiaoyidongshijian!')
      console.log(that.domX[0])
      // debugger
      this.$refs.box.addEventListener('mousemove', this.mousemove)

      // that.isMouseDown = true;
    },
    mousemove ({ offsetX, offsetY }) {
      // 移动距离mousemove
      console.log('lalalalalla!')
      // 元素位置
      that.domX[0] = offsetX - that.curX
      that.domY[0] = offsetY - that.curY
      that.TextdomX[0] = offsetX - that.textcurX
      that.TextdomY[0] = offsetY - that.textcurY
      this.$set(this.domX, 0, that.domX[0])
      this.$set(this.domY, 0, that.domY[0])
      this.$set(this.TextdomX, 0, that.TextdomX[0])
      this.$set(this.TextdomY, 0, that.TextdomY[0])
    },
    mouseup () {
      that.curX = that.curY = null
      that.textcurX = that.textcurY = null
      console.log('天灯亮起!')
      this.$refs.box.removeEventListener('mousemove', this.mousemove)

      // that.isMouseDown = false; // 取消按钮
    }
  }
}
</script>

<style>
#map {
  height: 100%;
  width: 100%;
  background-image: url("img/111@3x.png");
  background-size:  100% auto;
  background-repeat: no-repeat;
}
</style>

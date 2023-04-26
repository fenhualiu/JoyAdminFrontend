import { GetAllRelationNodeValue } from '@/api/opcua'
import { GetPassRates, GetPassRateByDevice } from '@/api/statistic'

 // #region
/*  try {
          GetUserInfo().then(res => {
            const data = res.data
            if (data.StatusCode == 200) {
              commit('setAvatar', '')
              commit('setUserName', data.Data.Name)
              commit('setUserId', data.Data.Id)
              commit('setAccess', data.Data.Access)
              commit('setHasGetInfo', true)
            }
            resolve(data)
          }).catch(err => {
            reject(err)
          })

          ,
    SetNGDing1 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            console.log(body)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGDing1@-@@@-@')
              console.dir(res.data.Data)

              let item = res.data.Data
              state.NGcontext[0] = item[0].Ng
              resolve(res.data)
            } else {
            }
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGDing2 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGDing2@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[1] = item[0].Ng
              console.log('_____NGDING2__')
              console.log(state.NGcontext[1])
              resolve(res.data)
            } else {
            }
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGDing3 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGDing3@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[2] = item[0].Ng
              resolve(res.data)
            } else {
            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGDing4 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGDing4@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[3] = item[0].Ng
              resolve(res.data)
            } else {
            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGDing5 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGDing5@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[4] = item[0].Ng
              resolve(res.data)
            } else {
            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGDing6 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGDing6@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[5] = item[0].Ng
              resolve(res.data)
            } else {
            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGDing7 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGDing7@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[6] = item[0].Ng
              console.log('_____NGDING6__')
              console.log(state.NGcontext[6])
              resolve(res.data)
            } else {
            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGZhuan1 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGZhuan1@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[7] = item[0].Ng
              resolve(res.data)
            } else {
            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGZhuan2 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGZhuan2@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[8] = item[0].Ng
              resolve(res.data)
            } else {
            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGZhuan3 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGZhuan3@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[9] = item[0].Ng
              resolve(res.data)
            } else {

            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGZhuan4 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGZhuan4@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[10] = item[0].Ng
              resolve(res.data)
            } else {
            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGZong1 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGZong1@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[11] = item[0].Ng
              resolve(res.data)
            } else {
            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGZong2 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGZong2@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[12] = item[0].Ng
              resolve(res.data)
            } else {
              // console.log(res.data.StatusCode)
            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetNGZong3 (state, body) {
      return new Promise((resolve, reject) => {
        GetPassRates(body)
          .then((res) => {
            // console.log(context)
            if (res.data.StatusCode === 200) {
              console.log('@@@-@@SetNGZong3@-@@@-@')
              console.dir(res.data.Data)
              let item = res.data.Data
              state.NGcontext[13] = item[0].Ng
              resolve(res.data)
            } else {
              // console.log(res.data.StatusCode)
            }
            resolve(res.data.StatusCode)
            console.log(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
          */
         //#endregion

export default {
  state: {
    定子1run: {},
    定子2run: {},
    定子3run: {},
    定子4run: {},
    定子5run: {},
    定子6run: {},
    定子7run: {},
    转子1run: {},
    转子2run: {},
    转子3run: {},
    总成1run: {},
    总成2run: {},
    总成3run: {},
    总成4run: {},
    alarm: {
      chart: []
    },
    inferior: {
      chart: [],
      inferiortxt: []
    },
    timesum: {
      chart: [],
      cycletime: []
    },
    manufacture: {
      chart: [],
      CutQuantity: []
    },
    linestate: [],
    DingLine: null,
    ZhuanLine: null,
    ZongChenLine: null,
    NGcontext: []
  },
  getters: {
  },
  mutations: {
    ReceivedDingRun (state) {
      return new Promise((resolve, reject) => {
        let GetDing1 = GetAllRelationNodeValue('ns=2;s=keyence.定子1.运行情况')
          .then((res) => {
            state.定子1run = res.data.Data

            if (res.data.StatusCode === 200) {
              console.log('*****相关定子1run节点值*****')
              console.log(state.定子1run.data)
              // 不良品信息
              state.inferior.chart[0] = state.定子1run['ns=2;s=keyence.定子1.运行情况.NG数量']
              // state.inferior.inferiortxt.push([, 'xxxxxxx'])
              // 设备时间
              // ns=2;s=keyence.定子1运行情况
              state.timesum.chart[0] = state.定子1run['ns=2;s=keyence.定子1.运行情况.平均周期']
              state.timesum.cycletime[0] =
                {
                  设备名称: '定子1#',
                  当前周期: state.定子1run['ns=2;s=keyence.定子1.运行情况.单次周期'],
                  平均周期: state.定子1run['ns=2;s=keyence.定子1.运行情况.平均周期'],
                  运行时间: state.定子1run['ns=2;s=keyence.定子1.运行情况.运行时间'],
                  停机时间: state.定子1run['ns=2;s=keyence.定子1.运行情况.停机时间'],
                  报警时间: state.定子1run['ns=2;s=keyence.定子1.运行情况.报警时间']
                }
              // 设备生产
              let goodrate = parseFloat(state.定子1run['ns=2;s=keyence.定子1.运行情况.合格率'])
              let goodnum = (parseFloat(state.定子1run['ns=2;s=keyence.定子1.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[0] =
                {
                  设备名称: '定子1#',
                  设定产量: state.定子1run['ns=2;s=keyence.定子1.运行情况.预设数量'],
                  进料数量: state.定子1run['ns=2;s=keyence.定子1.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.定子1run['ns=2;s=keyence.定子1.运行情况.NG数量'],
                  良率: state.定子1run['ns=2;s=keyence.定子1.运行情况.合格率']
                }

              // 总览图
              state.linestate[0] = {
                运行状态: state.定子1run['ns=2;s=keyence.定子1.运行情况.运行状态'],
                工站: '定子1#',
                当前停机时间: state.定子1run['ns=2;s=keyence.定子1.运行情况.停机时间']
              }
            }
            resolve(state.定子1run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetDing1)

        let GetDing2 = GetAllRelationNodeValue('ns=2;s=keyence.定子2.运行情况')
          .then((res) => {
            state.定子2run = res.data.Data
            console.log('*****相关定子2run节点值*****')
            console.log(state.定子2run)
            if (res.data.StatusCode === 200) {
              console.log(state.定子2run)
              // 不良品信息
              state.inferior.chart[1] = state.定子2run['ns=2;s=keyence.定子2.运行情况.NG数量']

              // 设备时间
              state.timesum.chart[1] = state.定子2run['ns=2;s=keyence.定子2.运行情况.平均周期']
              state.timesum.cycletime[1] =
                {
                  设备名称: '定子2# ',
                  当前周期: state.定子2run['ns=2;s=keyence.定子2.运行情况.单次周期'],
                  平均周期: state.定子2run['ns=2;s=keyence.定子2.运行情况.平均周期'],
                  运行时间: state.定子2run['ns=2;s=keyence.定子2.运行情况.运行时间'],
                  停机时间: state.定子2run['ns=2;s=keyence.定子2.运行情况.停机时间'],
                  报警时间: state.定子2run['ns=2;s=keyence.定子2.运行情况.报警时间']
                }

              // 设备生产
              let goodrate = parseFloat(state.定子2run['ns=2;s=keyence.定子2.运行情况.合格率'])
              let goodnum = (parseFloat(state.定子2run['ns=2;s=keyence.定子2.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[1] =
                {
                  设备名称: '定子2#',
                  设定产量: state.定子2run['ns=2;s=通道 3.定子2.运行情况.预设数量'],
                  进料数量: state.定子2run['ns=2;s=通道 3.定子2.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.定子2run['ns=2;s=通道 3.定子2.运行情况.NG数量'],
                  良率: state.定子2run['ns=2;s=通道 3.定子2.运行情况.合格率']
                }

              // 总览图
              state.linestate[1] = {
                运行状态: state.定子2run['ns=2;s=keyence.定子2.运行情况.运行状态'],
                工站: '定子2#',
                当前停机时间: state.定子2run['ns=2;s=keyence.定子2.运行情况.停机时间']
              }
            }
            resolve(state.定子2run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetDing2)

        let GetDing3 = GetAllRelationNodeValue('ns=2;s=keyence.定子3.运行情况')
          .then((res) => {
            state.定子3run = res.data.Data
            console.log('*****相关定子3run节点值*****')
            console.log(state.定子3run)
            if (res.data.StatusCode === 200) {
              console.log(state.定子3run)
              // 不良品信息
              state.inferior.chart[2] = state.定子3run['ns=2;s=keyence.定子3.运行情况.NG数量']

              // 设备时间
              state.timesum.chart[2] = (state.定子3run['ns=2;s=keyence.定子3.运行情况.平均周期'])
              state.timesum.cycletime[2] = (
                {
                  设备名称: '定子3#',
                  当前周期: state.定子3run['ns=2;s=keyence.定子3.运行情况.单次周期'],
                  平均周期: state.定子3run['ns=2;s=keyence.定子3.运行情况.平均周期'],
                  运行时间: state.定子3run['ns=2;s=keyence.定子3.运行情况.运行时间'],
                  停机时间: state.定子3run['ns=2;s=keyence.定子3.运行情况.停机时间'],
                  报警时间: state.定子3run['ns=2;s=keyence.定子3.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.定子3run['ns=2;s=keyence.定子3.运行情况.合格率'])
              let goodnum = (parseFloat(state.定子3run['ns=2;s=keyence.定子3.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[2] = (
                {
                  设备名称: '定子3#',
                  设定产量: state.定子3run['ns=2;s=keyence.定子3.运行情况.预设数量'],
                  进料数量: state.定子3run['ns=2;s=keyence.定子3.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.定子3run['ns=2;s=keyence.定子3.运行情况.NG数量'],
                  良率: state.定子3run['ns=2;s=keyence.定子3.运行情况.合格率']
                }
              )

              // 总览图
              state.linestate[2] = ({
                运行状态: state.定子3run['ns=2;s=keyence.定子3.运行情况.运行状态'],
                工站: '定子3#',
                当前停机时间: state.定子3run['ns=2;s=keyence.定子3.运行情况.停机时间']
              })
            }
            resolve(state.定子3run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetDing3)

        let GetDing4 = GetAllRelationNodeValue('ns=2;s=keyence.定子4.运行情况')
          .then((res) => {
            state.定子4run = res.data.Data
            console.log('*****相关定子4run节点值*****')
            console.log(state.定子4run)
            if (res.data.StatusCode === 200) {
              console.log(state.定子4run)
              // 不良品信息
              state.inferior.chart[3] = (state.定子4run['ns=2;s=keyence.定子4.运行情况.NG数量'])

              // 设备时间
              state.timesum.chart[3] = (state.定子4run['ns=2;s=keyence.定子4.运行情况.平均周期'])
              state.timesum.cycletime[3] = (
                {
                  设备名称: '定子4#',
                  当前周期: state.定子4run['ns=2;s=keyence.定子4.运行情况.单次周期'],
                  平均周期: state.定子4run['ns=2;s=keyence.定子4.运行情况.平均周期'],
                  运行时间: state.定子4run['ns=2;s=keyence.定子4.运行情况.运行时间'],
                  停机时间: state.定子4run['ns=2;s=keyence.定子4.运行情况.停机时间'],
                  报警时间: state.定子4run['ns=2;s=keyence.定子4.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.定子4run['ns=2;s=keyence.定子4.运行情况.合格率'])
              let goodnum = (parseFloat(state.定子4run['ns=2;s=keyence.定子4.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[3] = (
                {
                  设备名称: '定子4#',
                  设定产量: state.定子4run['ns=2;s=keyence.定子4.运行情况.预设数量'],
                  进料数量: state.定子4run['ns=2;s=keyence.定子4.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.定子4run['ns=2;s=keyence.定子4.运行情况.NG数量'],
                  良率: state.定子4run['ns=2;s=keyence.定子4.运行情况.合格率']
                }
              )

              // 总览图
              state.linestate[3] = ({
                运行状态: state.定子4run['ns=2;s=keyence.定子4.运行情况.运行状态'],
                工站: '定子4#',
                当前停机时间: state.定子4run['ns=2;s=keyence.定子4.运行情况.停机时间']
              })
            }
            resolve(state.定子4run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetDing4)

        let GetDing5 = GetAllRelationNodeValue('ns=2;s=keyence.定子5.运行情况')
          .then((res) => {
            state.定子5run = res.data.Data
            console.log('*****相关定子5run节点值*****')
            console.log(state.定子5run)
            if (res.data.StatusCode === 200) {
              console.log(state.定子5run)
              // 不良品信息
              state.inferior.chart[4] = (state.定子5run['ns=2;s=keyence.定子5.运行情况.NG数量'])

              // 设备时间
              state.timesum.chart[4] = (state.定子5run['ns=2;s=keyence.定子5.运行情况.平均周期'])
              state.timesum.cycletime[4] = (
                {
                  设备名称: '定子5# ',
                  当前周期: state.定子5run['ns=2;s=keyence.定子5.运行情况.单次周期'],
                  平均周期: state.定子5run['ns=2;s=keyence.定子5.运行情况.平均周期'],
                  运行时间: state.定子5run['ns=2;s=keyence.定子5.运行情况.运行时间'],
                  停机时间: state.定子5run['ns=2;s=keyence.定子5.运行情况.停机时间'],
                  报警时间: state.定子5run['ns=2;s=keyence.定子5.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.定子5run['ns=2;s=keyence.定子5.运行情况.合格率'])
              let goodnum = (parseFloat(state.定子5run['ns=2;s=keyence.定子5.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[4] = (
                {
                  设备名称: '定子5#',
                  设定产量: state.定子5run['ns=2;s=keyence.定子5.运行情况.预设数量'],
                  进料数量: state.定子5run['ns=2;s=keyence.定子5.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.定子5run['ns=2;s=keyence.定子5.运行情况.NG数量'],
                  良率: state.定子5run['ns=2;s=keyence.定子5.运行情况.合格率']
                }
              )

              // 总览图
              state.linestate[4] = ({
                运行状态: state.定子5run['ns=2;s=keyence.定子5.运行情况.运行状态'],
                工站: '定子5#',
                当前停机时间: state.定子5run['ns=2;s=keyence.定子5.运行情况.停机时间']
              })
            }
            resolve(state.定子5run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetDing5)

        let GetDing6 = GetAllRelationNodeValue('ns=2;s=keyence.定子6.运行情况')
          .then((res) => {
            state.定子6run = res.data.Data
            console.log('*****相关定子6run节点值*****')
            console.log(state.定子6run)
            if (res.data.StatusCode === 200) {
              console.log(state.定子6run)
              // 不良品信息
              state.inferior.chart[5] = (state.定子6run['ns=2;s=keyence.定子6.运行情况.NG数量'])

              // 设备时间
              state.timesum.chart[5] = (state.定子6run['ns=2;s=keyence.定子6.运行情况.平均周期'])
              state.timesum.cycletime[5] = (
                {
                  设备名称: '定子6#',
                  当前周期: state.定子6run['ns=2;s=keyence.定子6.运行情况.单次周期'],
                  平均周期: state.定子6run['ns=2;s=keyence.定子6.运行情况.平均周期'],
                  运行时间: state.定子6run['ns=2;s=keyence.定子6.运行情况.运行时间'],
                  停机时间: state.定子6run['ns=2;s=keyence.定子6.运行情况.停机时间'],
                  报警时间: state.定子6run['ns=2;s=keyence.定子6.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.定子6run['ns=2;s=keyence.定子6.运行情况.合格率'])
              let goodnum = (parseFloat(state.定子6run['ns=2;s=keyence.定子6.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[5] = (
                {
                  设备名称: '定子6#',
                  设定产量: state.定子6run['ns=2;s=keyence.定子6.运行情况.预设数量'],
                  进料数量: state.定子6run['ns=2;s=keyence.定子6.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.定子6run['ns=2;s=keyence.定子6.运行情况.NG数量'],
                  良率: state.定子6run['ns=2;s=keyence.定子6.运行情况.合格率']
                }
              )

              // 总览图
              state.linestate[5] = ({
                运行状态: state.定子6run['ns=2;s=keyence.定子6.运行情况.运行状态'],
                工站: '定子6#',
                当前停机时间: state.定子6run['ns=2;s=keyence.定子6.运行情况.停机时间']
              })
            }
            resolve(state.定子6run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetDing6)

        let GetDing7 = GetAllRelationNodeValue('ns=2;s=keyence.定子7.运行情况')
          .then((res) => {
            state.定子7run = res.data.Data
            console.log('*****相关定子7run节点值*****')
            console.log(state.定子7run)
            if (res.data.StatusCode === 200) {
              console.log(state.定子7run)
              // 不良品信息
              state.inferior.chart[6] = (state.定子7run['ns=2;s=keyence.定子7.运行情况.NG数量'])

              // 设备时间
              state.timesum.chart[6] = (state.定子7run['ns=2;s=keyence.定子7.运行情况.平均周期'])
              state.timesum.cycletime[6] = (
                {
                  设备名称: '定子7# ',
                  当前周期: state.定子7run['ns=2;s=keyence.定子7.运行情况.单次周期'],
                  平均周期: state.定子7run['ns=2;s=keyence.定子7.运行情况.平均周期'],
                  运行时间: state.定子7run['ns=2;s=keyence.定子7.运行情况.运行时间'],
                  停机时间: state.定子7run['ns=2;s=keyence.定子7.运行情况.停机时间'],
                  报警时间: state.定子7run['ns=2;s=keyence.定子7.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.定子7run['ns=2;s=keyence.定子7.运行情况.合格率'])
              let goodnum = (parseFloat(state.定子7run['ns=2;s=keyence.定子7.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[6] = (
                {
                  设备名称: '定子7#',
                  设定产量: state.定子7run['ns=2;s=keyence.定子7.运行情况.预设数量'],
                  进料数量: state.定子7run['ns=2;s=keyence.定子7.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.定子7run['ns=2;s=keyence.定子7.运行情况.NG数量'],
                  良率: state.定子7run['ns=2;s=keyence.定子7.运行情况.合格率']
                })
              state.manufacture.CutQuantity[0] = ({ 定子7: goodnum })

              // 总览图
              state.linestate[6] = ({
                运行状态: state.定子7run['ns=2;s=keyence.定子7.运行情况.运行状态'],
                工站: '定子7#',
                当前停机时间: state.定子7run['ns=2;s=keyence.定子7.运行情况.停机时间']
              })
            }
            resolve(state.定子7run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetDing7)
      })
    },
    ReceivedZhuanRun (state) {
      return new Promise((resolve, reject) => {
        let GetZhuan1 = GetAllRelationNodeValue('ns=2;s=keyence.转子1.运行情况')
          .then((res) => {
            if (res.data.StatusCode === 200) {
              state.转子1run = res.data.Data
              console.log('*****相关转子1run节点值*****')
              console.log(state.转子1run)
              // 不良品信息
              state.inferior.chart[7] = (state.转子1run['ns=2;s=keyence.转子1.运行情况.NG数量'])

              // 设备时间
              state.timesum.chart[7] = (state.转子1run['ns=2;s=keyence.转子1.运行情况.平均周期'])
              state.timesum.cycletime[7] = (
                {
                  设备名称: '转子1#',
                  当前周期: state.转子1run['ns=2;s=keyence.转子1.运行情况.单次周期'],
                  平均周期: state.转子1run['ns=2;s=keyence.转子1.运行情况.平均周期'],
                  运行时间: state.转子1run['ns=2;s=keyence.转子1.运行情况.运行时间'],
                  停机时间: state.转子1run['ns=2;s=keyence.转子1.运行情况.停机时间'],
                  报警时间: state.转子1run['ns=2;s=keyence.转子1.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.转子1run['ns=2;s=keyence.转子1.运行情况.合格率'])
              let goodnum = (parseFloat(state.转子1run['ns=2;s=keyence.转子1.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[7] = (
                {
                  设备名称: '转子1#',
                  设定产量: state.转子1run['ns=2;s=keyence.转子1.运行情况.预设数量'],
                  进料数量: state.转子1run['ns=2;s=keyence.转子1.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.转子1run['ns=2;s=keyence.转子1.运行情况.NG数量'],
                  良率: state.转子1run['ns=2;s=keyence.转子1.运行情况.合格率']
                }
              )

              // 总览图
              state.linestate[7] = ({
                运行状态: state.转子1run['ns=2;s=keyence.转子1.运行情况.运行状态'],
                工站: '转子1#',
                当前停机时间: state.转子1run['ns=2;s=keyence.转子1.运行情况.停机时间']
              })
              state.linestate[8] = ({
                运行状态: state.转子1run['ns=2;s=keyence.转子1.运行情况.运行状态'],
                工站: '转子固化1#',
                当前停机时间: state.转子1run['ns=2;s=keyence.转子1.运行情况.停机时间']
              })
            }
            resolve(state.转子1run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetZhuan1)

        let GetZhuan2 = GetAllRelationNodeValue('ns=2;s=keyence.转子2.运行情况')
          .then((res) => {
            if (res.data.StatusCode === 200) {
              state.转子2run = res.data.Data
              console.log('*****相关转子2run节点值*****')
              console.log(state.转子2run)
              // 不良品信息
              state.inferior.chart[8] = (state.转子2run['ns=2;s=keyence.转子2.运行情况.NG数量'])

              // 设备时间
              state.timesum.chart[8] = (state.转子2run['ns=2;s=keyence.转子2.运行情况.平均周期'])
              state.timesum.cycletime[8] = (
                {
                  设备名称: '转子2#',
                  当前周期: state.转子2run['ns=2;s=keyence.转子2.运行情况.单次周期'],
                  平均周期: state.转子2run['ns=2;s=keyence.转子2.运行情况.平均周期'],
                  运行时间: state.转子2run['ns=2;s=keyence.转子2.运行情况.运行时间'],
                  停机时间: state.转子2run['ns=2;s=keyence.转子2.运行情况.停机时间'],
                  报警时间: state.转子2run['ns=2;s=keyence.转子2.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.转子2run['ns=2;s=keyence.转子2.运行情况.合格率'])
              let goodnum = (parseFloat(state.转子2run['ns=2;s=keyence.转子2.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[8] = (
                {
                  设备名称: '转子2#',
                  设定产量: state.转子2run['ns=2;s=keyence.转子2.运行情况.预设数量'],
                  进料数量: state.转子2run['ns=2;s=keyence.转子2.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.转子2run['ns=2;s=keyence.转子2.运行情况.NG数量'],
                  良率: state.转子2run['ns=2;s=keyence.转子2.运行情况.合格率']
                })

              // 总览图
              state.linestate[9] = ({
                运行状态: state.转子2run['ns=2;s=keyence.转子2.运行情况.运行状态'],
                工站: '转子2#',
                当前停机时间: state.转子2run['ns=2;s=keyence.转子2.运行情况.停机时间']
              })
              state.linestate[10] = ({
                运行状态: state.转子2run['ns=2;s=keyence.转子2.运行情况.运行状态'],
                工站: '转子固化2#',
                当前停机时间: state.转子2run['ns=2;s=keyence.转子2.运行情况.停机时间']
              })
            }
            resolve(state.转子2run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetZhuan2)

        let GetZhuan3 = GetAllRelationNodeValue('ns=2;s=keyence.转子3.运行情况')
          .then((res) => {
            if (res.data.StatusCode === 200) {
              state.转子3run = res.data.Data
              console.log('*****相关转子3run节点值*****')
              console.log(state.转子3run)
              // 不良品信息
              state.inferior.chart[9] = (state.转子3run['ns=2;s=keyence.转子3.运行情况.NG数量'])

              // 设备时间
              state.timesum.chart[9] = (state.转子3run['ns=2;s=keyence.转子3.运行情况.平均周期'])
              state.timesum.cycletime[9] = (
                {
                  设备名称: '转子3# ',
                  当前周期: state.转子3run['ns=2;s=keyence.转子3.运行情况.单次周期'],
                  平均周期: state.转子3run['ns=2;s=keyence.转子3.运行情况.平均周期'],
                  运行时间: state.转子3run['ns=2;s=keyence.转子3.运行情况.运行时间'],
                  停机时间: state.转子3run['ns=2;s=keyence.转子3.运行情况.停机时间'],
                  报警时间: state.转子3run['ns=2;s=keyence.转子3.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.转子3run['ns=2;s=keyence.转子3.运行情况.合格率'])
              let goodnum = (parseFloat(state.转子3run['ns=2;s=keyence.转子3.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[9] = (
                {
                  设备名称: '转子3# ',
                  设定产量: state.转子3run['ns=2;s=keyence.转子3.运行情况.预设数量'],
                  进料数量: state.转子3run['ns=2;s=keyence.转子3.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.转子3run['ns=2;s=keyence.转子3.运行情况.NG数量'],
                  良率: state.转子3run['ns=2;s=keyence.转子3.运行情况.合格率']
                }
              )

              // 总览图
              state.linestate[11] = ({
                运行状态: state.转子3run['ns=2;s=keyence.转子3.运行情况.运行状态'],
                工站: '转子3#',
                当前停机时间: state.转子3run['ns=2;s=keyence.转子3.运行情况.停机时间']
              })
            }
            resolve(state.转子3run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetZhuan3)

        let GetZhuan4 = GetAllRelationNodeValue('ns=2;s=keyence.转子4.运行情况')
          .then((res) => {
            if (res.data.StatusCode === 200) {
              state.转子4run = res.data.Data
              console.log('*****相关转子4run节点值*****')
              console.log(state.转子4run)
              // 不良品信息
              state.inferior.chart[10] = (state.转子4run['ns=2;s=keyence.转子4.运行情况.NG数量'])

              // 设备时间
              state.timesum.chart[10] = (state.转子4run['ns=2;s=keyence.转子4.运行情况.平均周期'])
              state.timesum.cycletime[10] = (
                {
                  设备名称: '转子4# ',
                  当前周期: state.转子4run['ns=2;s=keyence.转子4.运行情况.单次周期'],
                  平均周期: state.转子4run['ns=2;s=keyence.转子4.运行情况.平均周期'],
                  运行时间: state.转子4run['ns=2;s=keyence.转子4.运行情况.运行时间'],
                  停机时间: state.转子4run['ns=2;s=keyence.转子4.运行情况.停机时间'],
                  报警时间: state.转子4run['ns=2;s=keyence.转子4.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.转子4run['ns=2;s=keyence.转子4.运行情况.合格率'])
              let goodnum = (parseFloat(state.转子4run['ns=2;s=keyence.转子4.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[10] = (
                {
                  设备名称: '转子4# ',
                  设定产量: state.转子4run['ns=2;s=keyence.转子4.运行情况.预设数量'],
                  进料数量: state.转子4run['ns=2;s=keyence.转子4.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.转子4run['ns=2;s=keyence.转子4.运行情况.NG数量'],
                  良率: state.转子4run['ns=2;s=keyence.转子4.运行情况.合格率']
                }
              )
              state.manufacture.CutQuantity[1] = ({ 转子4: goodnum })

              // 总览图
              state.linestate[12] = ({
                运行状态: state.转子4run['ns=2;s=keyence.转子4.运行情况.运行状态'],
                工站: '转子4#',
                当前停机时间: state.转子4run['ns=2;s=keyence.转子4.运行情况.停机时间']
              })
            }
            resolve(state.转子4run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetZhuan4)
      })
    },
    ReceivedZongRun (state) {
      return new Promise((resolve, reject) => {
        let GetZong1 = GetAllRelationNodeValue('ns=2;s=keyence.总成1.运行情况')
          .then((res) => {
            state.总成1run = res.data.Data
            console.log('*****相关总成1run节点值*****')
            if (res.data.StatusCode === 200) {
              state.总成1run = res.data
              console.log(state.总成1run)
              // 不良品信息
              state.inferior.chart[11] = (state.总成1run['ns=2;s=keyence.总成1.运行情况.NG数量'])

              // 设备时间
              state.timesum.chart[11] = (state.总成1run['ns=2;s=keyence.总成1.运行情况.平均周期'])
              state.timesum.cycletime[11] = (
                {
                  设备名称: '总成1# ',
                  当前周期: state.总成1run['ns=2;s=keyence.总成1.运行情况.单次周期'],
                  平均周期: state.总成1run['ns=2;s=keyence.总成1.运行情况.平均周期'],
                  运行时间: state.总成1run['ns=2;s=keyence.总成1.运行情况.运行时间'],
                  停机时间: state.总成1run['ns=2;s=keyence.总成1.运行情况.停机时间'],
                  报警时间: state.总成1run['ns=2;s=keyence.总成1.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.总成1run['ns=2;s=keyence.总成1.运行情况.合格率'])
              let goodnum = (parseFloat(state.总成1run['ns=2;s=keyence.总成1.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[11] = (
                {
                  设备名称: '总成1# ',
                  设定产量: state.总成1run['ns=2;s=keyence.总成1.运行情况.预设数量'],
                  进料数量: state.总成1run['ns=2;s=keyence.总成1.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.总成1run['ns=2;s=keyence.总成1.运行情况.NG数量'],
                  良率: state.总成1run['ns=2;s=keyence.总成1.运行情况.合格率']
                })

              // 总览图
              state.linestate[13] = ({
                运行状态: state.总成1run['ns=2;s=keyence.总成1.运行情况.运行状态'],
                工站: '总成1#',
                当前停机时间: state.总成1run['ns=2;s=keyence.总成1.运行情况.停机时间']
              })
              state.linestate[14] = ({
                运行状态: state.总成1run['ns=2;s=keyence.总成1.运行情况.运行状态'],
                工站: '总成固化',
                当前停机时间: state.总成1run['ns=2;s=keyence.总成1.运行情况.停机时间']
              })
            }
            resolve(state.总成1run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetZong1)

        let GetZong2 = GetAllRelationNodeValue('ns=2;s=keyence.总成2.运行情况')
          .then((res) => {
            if (res.data.StatusCode === 200) {
              state.总成2run = res.data.Data
              console.log('*****相关总成2run节点值*****')
              console.log(state.总成2run)
              // 不良品信息
              state.inferior.chart[12] = (state.总成2run['ns=2;s=keyence.总成2.运行情况.NG数量'])

              // 设备时间
              state.timesum.chart[12] = (state.总成2run['ns=2;s=keyence.总成2.运行情况.平均周期'])
              state.timesum.cycletime[12] = (
                {
                  设备名称: '总成2# ',
                  当前周期: state.总成2run['ns=2;s=keyence.总成2.运行情况.单次周期'],
                  平均周期: state.总成2run['ns=2;s=keyence.总成2.运行情况.平均周期'],
                  运行时间: state.总成2run['ns=2;s=keyence.总成2.运行情况.运行时间'],
                  停机时间: state.总成2run['ns=2;s=keyence.总成2.运行情况.停机时间'],
                  报警时间: state.总成2run['ns=2;s=keyence.总成2.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.总成2run['ns=2;s=keyence.总成2.运行情况.合格率'])
              let goodnum = (parseFloat(state.总成2run['ns=2;s=keyence.总成2.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[12] = (
                {
                  设备名称: '总成2# ',
                  设定产量: state.总成2run['ns=2;s=keyence.总成2.运行情况.预设数量'],
                  进料数量: state.总成2run['ns=2;s=keyence.总成2.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.总成2run['ns=2;s=keyence.总成2.运行情况.NG数量'],
                  良率: state.总成2run['ns=2;s=keyence.总成2.运行情况.合格率']
                }
              )

              // 总览图
              state.linestate[15] = ({
                运行状态: state.总成2run['ns=2;s=keyence.总成2.运行情况.运行状态'],
                工站: '总成2#',
                当前停机时间: state.总成2run['ns=2;s=keyence.总成2.运行情况.停机时间']
              })
              state.linestate[16] = ({
                运行状态: state.总成2run['ns=2;s=keyence.总成2.运行情况.运行状态'],
                工站: '总成灌胶',
                当前停机时间: state.总成2run['ns=2;s=keyence.总成2.运行情况.停机时间']
              })
            }
            resolve(state.总成2run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetZong2)

        let GetZong3 = GetAllRelationNodeValue('ns=2;s=keyence.总成3.运行情况')
          .then((res) => {
            if (res.data.StatusCode === 200) {
              state.总成3run = res.data.Data
              console.log('*****相关总成3run节点值*****')
              console.log(state.总成3run)
              // 不良品信息
              state.inferior.chart[13] = (state.总成3run['ns=2;s=keyence.总成3.运行情况.NG数量'])

              // 设备时间
              state.timesum.chart[13] = (state.总成3run['ns=2;s=keyence.总成3.运行情况.平均周期'])
              state.timesum.cycletime[13] = (
                {
                  设备名称: '总成3# ',
                  当前周期: state.总成3run['ns=2;s=keyence.总成3.运行情况.单次周期'],
                  平均周期: state.总成3run['ns=2;s=keyence.总成3.运行情况.平均周期'],
                  运行时间: state.总成3run['ns=2;s=keyence.总成3.运行情况.运行时间'],
                  停机时间: state.总成3run['ns=2;s=keyence.总成3.运行情况.停机时间'],
                  报警时间: state.总成3run['ns=2;s=keyence.总成3.运行情况.报警时间']
                })

              // 设备生产
              let goodrate = parseFloat(state.总成3run['ns=2;s=keyence.总成3.运行情况.合格率'])
              let goodnum = (parseFloat(state.总成3run['ns=2;s=keyence.总成3.运行情况.NG数量']) / (1 - goodrate)) * goodrate
              state.manufacture.chart[13] = (
                {
                  设备名称: '总成3# ',
                  设定产量: state.总成3run['ns=2;s=keyence.总成3.运行情况.预设数量'],
                  进料数量: state.总成3run['ns=2;s=keyence.总成3.运行情况.进料数量'],
                  良品数: goodnum,
                  NG数量: state.总成3run['ns=2;s=keyence.总成3.运行情况.NG数量'],
                  良率: state.总成3run['ns=2;s=keyence.总成3.运行情况.合格率']
                })
              state.manufacture.CutQuantity[2] = ({ 总成3: goodnum })

              // 总览图
              state.linestate[17] = ({
                运行状态: state.总成3run['ns=2;s=keyence.总成3.运行情况.运行状态'],
                工站: '总成3#',
                当前停机时间: state.总成3run['ns=2;s=keyence.总成3.运行情况.停机时间']
              })
              state.linestate[18] = ({
                运行状态: state.总成3run['ns=2;s=keyence.总成3.运行情况.运行状态'],
                工站: '总成反电动势',
                当前停机时间: state.总成3run['ns=2;s=keyence.总成3.运行情况.停机时间']
              })
            }
            resolve(state.总成3run)
          })
          .catch(err => {
            reject(err)
          })
        console.dir(GetZong3)
      })
    },
    ReceivePassRate (state, body) {
      return new Promise((resolve, reject) => {
        console.log(body)
        GetPassRateByDevice(body)
          .then((res) => {
            let passrate = res.data
            if (res.data.StatusCode === 200) {
              console.log('*****GetPassRateByDevice相关节点值*****')
              // 不良品信息
              state.NGcontext = passrate.Data
              console.log(passrate.Data)
            }
            resolve(passrate)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  actions: {

  }
}

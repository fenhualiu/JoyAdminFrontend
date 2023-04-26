import { GetAlarmCount, GetAlarmFreq } from '@/api/alarm'
/*
*
*  try {
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
          * */

export default {
  state: {
    AlamrSum: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    PastAlarm: [
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 },
      { Message: 'ALarm-Test', Count: 0 }]
  },
  getters: {
  },
  mutations: {
    SetAlarmD1 (state, sumbody) {
      var AlamrSumD1 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmD1@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[0] = item[0].Count
                // console.dir(state.AlamrSum[0])
              }
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
    SetAlarmD2 (state, sumbody) {
      var AlamrSumD2 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmD2@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[1] = item[0].Count
                // console.dir(state.AlamrSum[1])
              }

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
    SetAlarmD3 (state, sumbody) {
      var AlamrSumD1 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmD3@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[2] = item[0].Count
                // console.dir(state.AlamrSum[2])
              }
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
    SetAlarmD4 (state, sumbody) {
      var AlamrSumD4 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmD4@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[3] = item[0].Count
                // console.dir(state.AlamrSum[3])
              }
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
    SetAlarmD5 (state, sumbody) {
      var AlamrSumD5 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmD5@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[4] = item[0].Count
                // console.dir(state.AlamrSum[4])
              }
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
    SetAlarmD6 (state, sumbody) {
      var AlamrSumD6 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmD6@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[5] = item[0].Count
                // console.dir(state.AlamrSum[5])
              }
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
    SetAlarmD7 (state, sumbody) {
      var AlamrSumD7 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmD7@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[6] = item[0].Count
                // console.dir(state.AlamrSum[6])
              }
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
    SetAlarmZ1 (state, sumbody) {
      var AlamrSumZ1 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmZ1@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[7] = item[0].Count
                // console.dir(state.AlamrSum[6])
              }
              // console.dir(state.AlamrSum[7])
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
    SetAlarmZ2 (state, sumbody) {
      var AlamrSumZ2 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmZ2@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[8] = item[0].Count
                // console.dir(state.AlamrSum[6])
              }
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
    SetAlarmZ3 (state, sumbody) {
      var AlamrSumZ3 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmZ3@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[9] = item[0].Count
                // console.dir(state.AlamrSum[6])
              }
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
    SetAlarmZ4 (state, sumbody) {
      var AlamrSumZ4 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmZ4@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[10] = item[0].Count
                // console.dir(state.AlamrSum[6])
              }
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
    SetAlarmC1 (state, sumbody) {
      var AlamrSumD1 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmC1@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[11] = item[0].Count
                // console.dir(state.AlamrSum[6])
              }
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
    SetAlarmC2 (state, sumbody) {
      var AlamrSumC2 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmC2@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[12] = item[0].Count
                // console.dir(state.AlamrSum[6])
              }
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
    SetAlarmC3 (state, sumbody) {
      let AlamrSumC3 = new Promise((resolve, reject) => {
        GetAlarmCount(sumbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetAlarmC3@-@@@')
              // console.dir(res.data.Data)
              let item = res.data.Data
              if (Object.keys(item).length !== 0) {
                state.AlamrSum[13] = item[0].Count
                // console.dir(state.AlamrSum[6])
              }
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
    SetPastD1 (state, pastbody) {
      var PastAlarmD1 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastD1@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[0] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmD1 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastD2 (state, pastbody) {
      var PastAlarmD2 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastD2@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (info.length !== 0) {
                state.PastAlarm[1] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmD2 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastD3 (state, pastbody) {
      var PastAlarmD3 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastD3@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[2] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmD3 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastD4 (state, pastbody) {
      var PastAlarmD4 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastD4@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[3] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmD4 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastD5 (state, pastbody) {
      var PastAlarmD5 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastD5@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[4] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmD5 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastD6 (state, pastbody) {
      var PastAlarmD6 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastD6@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[5] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmD6 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastD7 (state, pastbody) {
      var PastAlarmD7 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastD7@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[6] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmD7 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastZ1 (state, pastbody) {
      var PastAlarmZ1 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastZ1@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[7] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmZ1 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastZ2 (state, pastbody) {
      var PastAlarmZ2 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastZ2@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[8] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmZ2 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastZ3 (state, pastbody) {
      var PastAlarmZ3 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastZ3@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[9] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmZ3 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastZ4 (state, pastbody) {
      var PastAlarmZ4 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastZ4@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[10] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmZ4 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastC1 (state, pastbody) {
      var PastAlarmC1 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastC1@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[11] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmC1 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastC2 (state, pastbody) {
      var PastAlarmC2 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastC2@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[12] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmC2 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    SetPastC3 (state, pastbody) {
      let PastAlarmC3 = new Promise((resolve, reject) => {
        GetAlarmFreq(pastbody)
          .then((res) => {
            if (res.data.StatusCode === 200) {
              console.log('@@@-@SetPastC3@-@@@')
              let sss = pastbody.Station
              // alert(res.data.Data[sss][0].Message)
              let info = res.data.Data[sss]
              if (Object.prototype.isPrototypeOf(info) && Object.keys(info).length !== 0) {
                state.PastAlarm[13] = {
                  Message: info[0].Message,
                  Count: info[0].Count
                }
              }
              resolve(res.data)
            }
            console.log(' PastAlarmC3 ')
            console.log(res.data)
            resolve(res.data.StatusCode)
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

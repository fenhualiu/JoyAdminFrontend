import { GetAllRelationNodeValue } from './opcua'
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
        
const DingZi1Run = {}
export const processing_data = () => {

  let GetData = GetAllRelationNodeValue('ns=2;s=通道 3.定子2.运行情况')
    .then((res) => {
      DingZi1Run = res.data
      console.log('*****相关节点值*****')
      console.log(thisdata)
      if (thisdata.StatusCode === 200) {
        console.log(thisdata)
      }
      resolve(thisdata)
    })
    .catch(err => {
      reject(err)
    })
  console.dir(GetData)
  return new Promise((resolve, reject) => {
   
    // alert(GetData)
  })
}

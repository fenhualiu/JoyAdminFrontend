import { axios } from '@/libs/api.request'

// serverUrl
export const OpenConnect = (serverUrl) => {
  return axios.post('api/OpcUa/OpenConnect/' + serverUrl)
}

// nodeId/startTime/endTime
export const ReadSingleNodeIdHistoryDatas = (idtime) => {
  return axios.post('api/OpcUa/ReadSingleNodeIdHistoryDatas/' + idtime)
}

// nodeId，OK
export const GetCurrentNodeValue = id => {
  return axios.get('api/OpcUa/GetCurrentNodeValue/' + id)
}

// nodeId,OK
export const GetCurrentNodeAttributes = id => {
  return axios.get('api/OpcUa/GetCurrentNodeAttributes/' + id)
}

// nodeId，ok
export const GetAllRelationNodeValue = id => {
  return axios.get('api/OpcUa/GetAllRelationNodeValue/' + id)
}
// Alarm
export const GetCurrentAlarm = () => {
  return axios.get('api/OpcUa/GetCurrentAlarm')
}

/*
  return axios.request({
    url: 'api/OpcUa/GetAllRelationNodeValue',
    method: 'get',
    params: {
      form
    }
  })
   */

// 可以获取到数据，data[],GetAllRelationNodeOfNodeId/nodeId
export const GetAllRelationNodeOfNodeId = id => {
  return axios.get('api/OpcUa/GetAllRelationNodeOfNodeId/' + id)
}

// nodeId
export const WriteSingleNodeIdOf = (id, form) => {
  return axios.post('api/OpcUa/WriteSingleNodeIdOf/' + id, form)
}

// #region 密码管理

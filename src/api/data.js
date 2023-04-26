import { axios } from '@/libs/api.request'

export const errorReq = () => {
  return axios.get('error_url')
}

export const saveErrorLogger = info => {
  return axios.post('api/System/SaveErrorLogger', info)
}

/* export const gettag(name){
  return axios.get()
}
*/
export const getMachineData = () => {
  return axios.get('api/MachineData/GetData')
}
export const Req2 = () => {
  return axios.get('api/OpcUa/GetCurrentNodeValue')
}

export const GetCurrentNodeValue = (code, params) => {
  return axios.get(`api/OpcUa/GetCurrentNodeValue/${code}`)
}

export const Req3 = () => {
  return axios.get('error_url')
}

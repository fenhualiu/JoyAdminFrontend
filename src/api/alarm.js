import { axios } from '@/libs/api.request'

// 415
export const GetAlarmCount = (data) => {
  return axios.post('api/AlarmHistory/GetAlarmCount', data)
}

// 415
export const GetAlarmFreq = (form) => {
  return axios.post('api/AlarmHistory/GetAlarmFreq', form)
}

import { axios } from '@/libs/api.request'

export const Upload = (form) => {
  return axios.post('api/Statistic/Upload', form)
}

// url添加参数,/api/Statistic/GetRecentUpload/1/50
export const GetRecentUpload = id => {
  return axios.get('api/Statistic/GetRecentUpload/' + id)
}

// 415
export const GetPassRates = (data) => {
  return axios.post('api/Statistic/GetPassRates', data)
}

export const GetPassRateByDevice = (data) => {
  return axios.get('api/Statistic/GetPassRateByDevice/' + data)
}

// 415,api/Statistic/GetPassRateByDevice/2023-04-18T08%3A50%3A31.547Z/2023-04-25T08%3A50%3A31.547Z
export const GetNgCounts = (form) => {
  return axios.post('api/Statistic/QueryNgCounts', form)
}

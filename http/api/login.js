import serviceAxios from '../index'

export const getTest = (params) => {
  return serviceAxios({
    url: '/test1',
    method: 'get',
    params
  })
}
export const login = (data) => {
  return serviceAxios({
    url: '/api/login',
    method: 'post',
    data
  })
}

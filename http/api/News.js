import serviceAxios from '../index'

export const getNews = (data) => {
  return serviceAxios({
    url: '/News/News',
    method: 'post',
    data
  })
}

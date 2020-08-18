import request from '@/utils/request'

export function login(userInfo) {
  return request({
    url: '/user/login',
    method: 'post',
    data: userInfo
  })
}

export function register(userInfo){
  return request({
    url: '/user/register',
    method: 'post',
    data: userInfo
  });
}

export function sendAuthCode(telephone){
  return request({
    url: '/user/sendAuthCode',
    method: 'get',
    params: {telephone}
  });
}

export function getInfo(token) {
  return request({
    url: '/user/getUserInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}

import request from '@/utils/request'

export function login(username, password,usertype) {
  return request({
    url: '/rent/user/login',
    method: 'post',
    data: {
      username,
      password,
      usertype
    }
  })
}

export function register(formData){
  return request({
    url: '/user/register',
    method: 'post',
    data: formData
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
    url: '/rent/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/rent/user/logout',
    method: 'post'
  })
}

import request from '@/utils/request'
import pwdEncoder from "@/utils/passwordEncoder"

export function login(userInfo) {
  let userInfoEn = Object.assign({}, userInfo);
  userInfoEn.password = pwdEncoder.encode(userInfoEn.password);
  return request({
    url: '/user/login',
    method: 'post',
    data: userInfoEn
  })
}

export function register(userInfo){
  let userInfoEn = Object.assign({}, userInfo);
  userInfoEn.password = pwdEncoder.encode(userInfoEn.password);
  return request({
    url: '/user/register',
    method: 'post',
    data: userInfoEn
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

export function resetPwd(userInfo) {
  let userInfoEn = Object.assign({}, userInfo);
  userInfoEn.password = pwdEncoder.encode(userInfoEn.password);
  return request({
    url: '/user/resetPwd',
    method: 'post',
    data: userInfoEn
  });
}

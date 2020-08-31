import request from '@/utils/request'
import pwdEncoder from "@/utils/passwordEncoder"

export function updateName(formData) {
  return request({
    url: '/user/updateName',
    method: 'get',
    params: formData
  })
};

export function updatePwd(formData) {
  let formDataEn = {};
  formDataEn.telephone = formData.telephone;
  formDataEn.oldPwd = pwdEncoder.encode(formData.oldPwd);
  formDataEn.newPwd = pwdEncoder.encode(formData.newPwd);
  return request({
    url: '/user/updatePwd',
    method: 'get',
    params: formDataEn
  })
};

export function getFavProperty(formData) {
  return request({
    url: '/user/getFavProperty',
    method: 'get',
    params: formData
  })
};

export function deleteFavProperty(formData) {
  return request({
    url: '/user/deleteFavProperty',
    method: 'get',
    params: formData
  })
};

export function getFavEstate(formData) {
  return request({
    url: '/user/getFavEstate',
    method: 'get',
    params: formData
  })
};

export function deleteFavEstate(formData) {
  return request({
    url: '/user/deleteFavEstate',
    method: 'get',
    params: formData
  })
};




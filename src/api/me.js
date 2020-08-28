import request from '@/utils/request'

export function updateName(formData) {
  return request({
    url: '/user/updateName',
    method: 'get',
    params: formData
  })
};




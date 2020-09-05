// 推荐api
import request from '@/utils/request'

export function getOldHouseRec() {
  return request({
    url: 'recommend/getOldHouse',
    method: 'get',
  })
};

export function getRentHouseRec() {
  return request({
    url: 'recommend/getRentHouse',
    method: 'get',
  })
};

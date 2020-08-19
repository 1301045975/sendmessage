// 地图找房api
import request from '@/utils/request'

export function getCity() {
  return request({
    url: '/map/getCity',
    method: 'get',
  })
};

export function getDistricts() {
  return request({
    url: 'map/getDistricts',
    method: 'get',
  })
};

export function getZones() {
  return request({
    url: '/map/getZones',
    method: 'get',
  })
};



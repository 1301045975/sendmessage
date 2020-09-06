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

export function getRegions() {
  return request({
    url: '/map/getRegions',
    method: 'get',
  })
};


export function getEstatesByZoneId(zoneId) {
  return request({
    url: '/map/getEstatesByZoneId',
    method: 'get',
    params: { zoneId }
  })
};

//获取estateId下房源信息
export function getPropertiesByEstateId(estateId) {
  return request({
    url: '/property/getPropertiesByEstateId',
    method: 'get',
    params: { estateId }
  })
};
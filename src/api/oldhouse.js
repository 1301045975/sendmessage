import request from '@/utils/request'
const group_name = 'rent'
const api_name = 'oldhouse'
export default {
    getList() {
        return request({
            url: `/${group_name}/${api_name}`,
            method: 'get'
        })
    },
    save(pojo) {
        return request({
            url: `/${group_name}/${api_name}`,
            method: 'post',
            data: pojo
        })
    },
    findById(id) {
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: 'get'
        })
    },
    update(id, pojo) {
        if (id === null || id === '') {
            return this.save(pojo)
        }
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: 'put',
            data: pojo
        })
    },
    deleteById(id) {
        return request({
            url: `/${group_name}/${api_name}/${id}`,
            method: 'delete'
        })
    },
    count() {
        return request({
            url: `/${group_name}/${api_name}/count`,
            method: 'get'
        })
    },
    getByCityCode(cityCode){
        return request({
            url: `/cityConfig/getByCityCode`,
            method: 'get',
            params: {
                cityCode: cityCode
            }
        })
    },
    getByPAreaCode(cityPinYin, pAreaCode){
        return request({
            url: `/area/getAreaByPCode`,
            method: 'get',
            params: {
                cityPinYin,
                pAreaCode,
            }
        })
    },
    getByPAreaId(cityPinYin, pAreaId){
        return request({
            url: `/area/getAreaByPId`,
            method: 'get',
            params: {
                cityPinYin,
                pAreaId,
            }
        })
    },
    search(cityPinYin, pageNum, pageSize, searchMap) {
        return request({
            url: `/property/search?cityPinYin=${cityPinYin}&pageNum=${pageNum}&pageSize=${pageSize}`,
            method: 'post',
            data: searchMap
        })
    },
}

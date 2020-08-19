<template>
  <div>
      <el-select style="width: 120px"  v-model="selected" placeholder="房屋类型">
        <el-option  v-for="item in type" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
  </div>
</template>

<script>
    export default {
      name: "dropdown_type",
      data() {
        return {
          selected: '',
          type: [{
            value: '1',
            label: '板房'
          },{
            value: '2',
            label: '砖房'
          },{
            value: '3',
            label: '裙楼'
          },{
            value: '4',
            label: '排房'
          },{
            value: '5',
            label: '多层'
          },{
            value: '6',
            label: '高层'
          },{
            value: '7',
            label: '小高层'
          },{
            value: '8',
            label: '四合院'
          },{
            value: '9',
            label: '多层复式'
          },{
            value: '10',
            label: '高层复式'
          },{
            value: '11',
            label: '多层跃式'
          },{
            value: '12',
            label: '高层跃式'
          },{
            value: '13',
            label: '独立别墅'
          },{
            value: '14',
            label: '联体别墅'
          },{
            value: '15',
            label: '双拼别墅'
          }]
        }
      },
      methods: {
        doGetDicts() {
          if (this.dialog) {
            getDicts()
              .then(res => {
                this.type = res.data.type;//把请求返回的列表，赋值给之前定义的
              })
              .catch(err => {
                this.loading = false;
                console.log(err.response.data.message);
              });
          }
        }
      }
    }
</script>

<style scoped>

</style>

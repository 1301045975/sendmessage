<template>
  <div>
      <el-select style="width: 120px"  v-model="selected" placeholder="朝向">
        <el-option  v-for="item in direction" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
  </div>
</template>

<script>
    export default {
      name: "dropdown_direction",
      data() {
        return {
          selected: '',
          direction: [{
            value: '1',
            label: '朝南'
          },{
            value: '2',
            label: '朝北'
          },{
            value: '3',
            label: '朝中'
          },{
            value: '4',
            label: '朝东'
          },{
            value: '5',
            label: '朝西'
          },{
            value: '6',
            label: '东西'
          },{
            value: '7',
            label: '南北'
          },{
            value: '8',
            label: '东南'
          },{
            value: '9',
            label: '东北'
          },{
            value: '10',
            label: '西南'
          },{
            value: '11',
            label: '西北'
          }]
        }
      },
      methods: {
        doGetDicts() {
          if (this.dialog) {
            getDicts()
              .then(res => {
                this.direction = res.data.direction;//把请求返回的列表，赋值给之前定义的
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

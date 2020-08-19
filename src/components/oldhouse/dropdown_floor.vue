<template>
  <div>
      <el-select style="width: 120px"  v-model="selected" placeholder="楼层">
        <el-option  v-for="item in floor" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
  </div>
</template>

<script>
    export default {
      name: "dropdown_floor",
      data() {
        return {
          selected:'',
          floor: [{
            value: '1',
            label: '低区'
          },{
            value: '2',
            label: '中区'
          },{
            value: '3',
            label: '高区'
          }]
        }
      },
      methods: {

      }
    }
</script>

<style scoped>

</style>

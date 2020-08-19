<template>
  <div>
      <el-select style="width: 120px"  v-model="selected" placeholder="装修">
        <el-option  v-for="item in build" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
  </div>
</template>

<script>
    export default {
      name: "dropdown_bulid",
      data() {
        return {
          selected:'',
          build: [{
            value: '1',
            label: '精装'
          },{
            value: '2',
            label: '中装'
          },{
            value: '3',
            label: '简装'
          },{
            value: '4',
            label: '清水'
          }]
        }
      },
      methods: {
        doGetDicts() {

        }
      }
    }
</script>

<style scoped>

</style>

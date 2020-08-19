<template>
  <div>
    <el-select style="width: 120px"  v-model="selected" placeholder="建造年代">
      <el-option  v-for="item in year" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    name: "dropdown_year",
    data() {
      return {
        selected: '',
        year: [{
          value: '1',
          label: '5年以内'
        },{
          value: '2',
          label: '10年以内'
        },{
          value: '3',
          label: '15年以内'
        },{
          value: '4',
          label: '20年以内'
        },{
          value: '5',
          label: '20年以上'
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

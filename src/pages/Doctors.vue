<template>
  <l-table :columns="table.columns" :data="table.data"></l-table>
</template>

<script>
import LTable from './../components/Table'
import Axios from 'axios';

  const tableColumns = ['Full name', 'Phone', 'Section']
  export default {
    components: {
      LTable,
    },
    data () {
      this.getData()
      return {
        table: {
          columns: tableColumns,
          data: []
        }
      }
    },
    methods: {
    getData(){
      Axios.get('http://localhost:3000/api/v1/doctors').then(respone => {
        this.table.data =  respone.data;
      })
    },
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
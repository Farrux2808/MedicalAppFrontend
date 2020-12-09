<template>
  <table id="customers">
  <tr>
    <th>Id</th>
    <th v-for="column in columns" :key="column">{{column}}</th>
  </tr>
  <tr v-for="(item, index) in data" :key="index">
    <td>{{index+1}}</td>
    <td v-for="column in columns" :key="column" >{{itemValue(item, column)}}</td>
  </tr>
</table>
</template>
<script>
  export default {
    name: 'l-table',
    props: {
      columns: Array,
      data: Array
    },
    methods: {
      hasValue (item, column) {
        return item[column.toLowerCase()] !== 'undefined'
      },
      itemValue (item, column) {
        if(column == "Full name"){
          return item['fullName']
        }
        else {
          return item[column.toLowerCase()]
        }
        
      }
    }
  }
</script>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>

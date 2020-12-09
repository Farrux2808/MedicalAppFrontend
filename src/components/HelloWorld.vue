<template>
  <div class="hello">
    <button type="button" v-on:click="getData()"> lalala</button> 
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () =>({

  }),
  methods: {
    getData(){
      Axios.get('http://localhost:3000/api/v1/doctors').then(respone => {
        let data = respone;
        console.log(data);
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

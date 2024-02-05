<template>
  <div class="home">
    <a href="/user">사용자 목록</a>
    <br />
    <button @click="getData">데이터 호출</button>
  </div>
</template>

<script>
import axios from 'axios';

const uForm = {no: 1, name: '테스트', email: 'test@email.com', pwd: '1234', gender: true}
const params = {
  'params': {no: 1}
}

export default {
  name: 'HomeView',
  methods: {
    getData() {
      axios
      // .post('http://localhost:8080/editById', uForm)
      // .delete('http://localhost:8080/delete', params)
      .put('http://localhost:8080/save', uForm)
      .then((resonse) => {
        console.log(Response)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>

<template>
  <div class="bro2">
    <h3>this  is  brother2  page</h3>
    老二的工资是{{bro2Msg.salary}}
    <button @click="jiaxin">++++++</button>
    <sun-zi></sun-zi>
  </div>
</template>
<script>
import Bus  from  '../main.js'
import sunZi from  './sunzi'
export default {
  data() {
    return {
      bro2Msg: {
        salary:20000,
        city:"shanghai"
      }
    }
  },
  mounted () {
    Bus.$emit("sendToBro1",this.bro2Msg);
  },
  methods: {
    jiaxin() {
      this.bro2Msg.salary++
    }
  },
  components: {
    sunZi,
  },
}
</script>

<style scoped>
.bro2{
  width: 100%;
  height: 200px;
  border:5px solid rgb(221, 13, 13)
}
</style>
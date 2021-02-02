<template>
  <div class="bro1">
    <h3>this  is  brother1  page</h3>
    老大看到老二的信息{{msgFromBro2.city}}
    老大看到老二的信息{{msgFromBro2.salary}}
  </div>
</template>
<script>
import Bus  from  '../main.js'
export default {
  data() {
    return {
      msgFromBro2: {}
    }
  },
  mounted () {
    Bus.$on("sendToBro1",(arg)=>{
      console.log(arg)
      this.msgFromBro2=arg
    });
  },
}
</script>

<style scoped>
.bro1{
  width: 100%;
  height: 120px;
  border:2px solid #000
}
</style>

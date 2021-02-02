<template>
  <div class="son">
    <h3>this is son page</h3>
    儿子的数学分数{{sonMsg.Math}}
    <button @click="add">努力了</button>
    儿子看到父亲的实力{{sendToSon.money}}
    儿子看到父亲的实力{{sendToSon.car}}
  </div>
</template>
<script>
export default {
  props:['sendToSon'],
  data() {
    return {
      sonMsg: {
        Chinese:86,Math:69
      }
    }
  },
  mounted () {
    this.$emit('sendToBox',this.sonMsg);
  },
  methods: {
    add() {
      this.sonMsg.Math++
    }
  },
}
</script>
<style scoped>
.son{
  width: 100%;
  height: 100px;
  border:1px  solid green;
}
</style>



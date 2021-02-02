<template>
    <!-- http://localhost:8080/'/detail/'+item.pid -->
  <div class="index">
    <h2>this is index.vue</h2>
    <ul>
      <li v-for="(item,i) in list" :key="i">
        <!-- <router-link :to="'/detail/'+item.pid"></router-link> -->
        <router-link :to="'/detail?arg='+item.pid">{{item.title}}</router-link>
      </li>
    </ul>
    <input type="datetime-local" name="" id="" @change="fun">
    <input type="radio" name="num" id="" v-model="val">1
    <input type="radio" name="num" id="" v-model="val">2
    <input type="radio" name="num" id="" v-model="val">3
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: Array,
      val:false
    }
  },
  created () {
    var  url=`http://www.xzserver.applinzi.com/index`
    this.$axios.get(url).then(res=>{
      this.list=res.data
    });
  },
  methods: {
    fun(){
      console.log(123)
    }
  },
}
</script>
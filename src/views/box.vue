<template>
  <div class="box">
    <h2>this is  box  page</h2>
    父亲看到儿子的分数{{msgFromSon.Chinese}}
    父亲看到儿子的分数{{msgFromSon.Math}}
    父亲的存款是 {{boxMsg.money}} 
    <button @click="jiaban">加班了</button>
    爷爷今年{{age}} 
    <button @click="birthday">过生日</button>
    <my-son 
      :sendToSon="boxMsg" 
      @sendToBox="fun">
    </my-son>
    <my-bro1></my-bro1>
    <my-bro2></my-bro2>
  </div>
</template>
<script>
import mySon from '../components/son'
import myBro1 from '../components/brother1'
import  myBro2 from '../components/brother2'
export default {
  data() {
    return {
      boxMsg: {
        money:9999999,
        car:"B"
      },
      msgFromSon:{},
      age:60
    }
  },
  provide(){
    return {
      sendToSunzi:this.age
    }
  },
  methods: {
    fun(arg) {
      this.msgFromSon=arg
    },
    jiaban(){
      this.boxMsg.money++
    },
    birthday(){
      this.age++
    }
  },
  components: {
    mySon,myBro1,myBro2
  },
}
</script>
<style>
.box{
  width: 100%;
  height: 100%;
  border:1px  solid  red;
}
</style>

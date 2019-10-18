<template>

  <!--<img src="../../assets/logo.png">-->
  <div class="hello">
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">{{$t('menu.first')}}</el-menu-item>
        <el-submenu index="2">
          <template slot="title">{{$t('menu.second')}}</template>
          <el-menu-item index="2-1">{{$t('menu.seSecondFirst')}}</el-menu-item>
          <el-menu-item index="2-2">{{$t('menu.seSecondSecond')}}</el-menu-item>
          <el-menu-item index="2-3">{{$t('menu.seSecondThird')}}</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">{{$t('menu.seSecondFour')}}</template>
            <el-menu-item index="2-4-1">{{$t('menu.seSecondFirst')}}</el-menu-item>
            <el-menu-item index="2-4-2">{{$t('menu.seSecondSecond')}}</el-menu-item>
            <el-menu-item index="2-4-3">{{$t('menu.seSecondThird')}}</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>{{$t('menu.third')}}</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">{{$t('menu.four')}}</a></el-menu-item>
      </el-menu></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">
        <el-select v-model="value" placeholder="请选择" @change="onSearch">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select></div></el-col>
    </el-row>


    <img src="../assets/logo.png">
    <h1>{{$t('message.text')}}</h1>
    <h2>2019.10.10</h2>
    <h2>demo</h2>
    <el-button>{{$t('button.button1')}}</el-button>

    <el-button type="primary">{{$t('button.button2')}}</el-button>
    <el-button type="primary" @click="tableFun">table</el-button>
    <el-button type="primary" @click="paginationFun">pagination</el-button>
    <el-button type="primary" @click="operatorFun">operator</el-button>
    <el-button type="primary" @click="addFun">add</el-button>
    <el-button type="success">{{$t('button.button3')}}</el-button>
    <el-button type="info">{{$t('button.button4')}}</el-button>
    <el-button type="warning">{{$t('button.button5')}}</el-button>
    <el-button type="danger">{{$t('button.button6')}}</el-button>
    <el-button type="text">{{$t('button.button7')}}</el-button>
    <el-date-picker type="date" :placeholder="$t('el.datepicker.selectDate')" v-model="date1" style="width: 100%;"></el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      date1:'',
      activeIndex: '1',
      msg: 'Welcome to Your Vue.js App',
      options: [{
        value: 'cn',
        label: '中文'
      },
        {
        value: 'en',
        label: 'English'}
      ],
      value: 'cn'
    }
  },
  created(){
    localStorage.setItem('lang','cn');
  },
  methods:{
    onSearch(e){
      localStorage.setItem('lang',e);
      this.$i18n.locale = e;

    },
    tableFun(){
      this.$router.push({ path:'/demo' })
    },
    paginationFun(){
      this.$router.push({ path:'/pagination' })
    },
    operatorFun(){
      this.$router.push({ path:'/operator' })
    },
    addFun(){
      this.$router.push({ path:'/add' })
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /*display: inline-block;*/
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

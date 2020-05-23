<template>
  <div id="app">
    <keep-alive>
      <router-view id="container"></router-view>
    </keep-alive>
    <tab-bar @changeRoute="barRouter" :itemArr="tabBarItem"></tab-bar>
  </div>
</template>

<script>
import tabBar from './components/tabBar/index';
import img from './assets/logo.png';
import activeImg from './assets/active.jpg';
export default {
  data() {
    return {
      tabBarItem: [
        {
          name: '首页',
          img,
          activeImg,
          router: 'index',
        },
        {
          name: '分类',
          img,
          activeImg,
          router: 'type',
        },
        {
          name: '购物车',
          img,
          activeImg,
          router: 'car',
        },
        {
          name: '我的',
          img,
          activeImg,
          router: 'personal',
        },
      ],
    };
  },
  components: {
    tabBar,
  },
  methods: {
    // 接收子组件的tabbar切换路由
    barRouter(idx) {
      const pathName = this.$data.tabBarItem[idx].router;
      const nowPath = this.$route.name;
      pathName !== nowPath && this.$router.push({ name: pathName });
    },
  },
};
</script>

<style>
* {
  list-style: none;
  margin: 0;
  padding: 0px;
  text-decoration: none;
  box-sizing: border-box;
  letter-spacing: 0.5px;
}
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: #333;
}
input:foucs,
textarea:foucs {
  outline: none;
}
textarea {
  resize: none;
}
html {
  font-size: 16px;
}
body,
html,
#app {
  height: 100%;
}
#container {
  height: calc(100% - 49px);
}
</style>

<template>
  <div id="tabBar">
    <div
      class="tabBarItems"
      v-for="({ name, img, activeImg }, idx) in itemArr"
      :key="name"
      @click="barClick(idx)"
    >
      <img :src="activeImg" v-show="idx === activeIdx" />
      <img :src="img" v-show="idx !== activeIdx" />
      <p :class="{ active: idx === activeIdx }">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemArr: {
      type: Array,
      requested: true,
    },
  },
  data() {
    return {
      activeIdx: 0,
    };
  },
  methods: {
    barClick(idx) {
      // 修改选中样式
      this.activeIdx = idx;
      // 向父组件发送路由切换
      this.$emit('changeRoute', idx);
    },
    /** 匹配路由名称所在id
     * @param {String} name 路由名称
     */
    filterArrName(name) {
      let result = -1;
      for (let i = 0; i < this.itemArr.length; i += 1) {
        if (this.itemArr[i].router === name) {
          result = i;
          break;
        }
      }
      return result;
    },
  },
  created() {
    // 检查刷新后的active指向问题 主要用在pc上 移动端不会有刷新操作
    const nowPathName = sessionStorage.getItem('nowPath');
    const result = this.filterArrName(nowPathName);
    if (result > 0) this.activeIdx = result;
  },
};
</script>
<style scoped>
#tabBar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 49px;
}
.tabBarItems {
  flex: 1;
}
.tabBarItems > p {
  text-align: center;
  font-size: 0.9rem;
}
.tabBarItems > img {
  margin: 0 auto;
  width: 1.5rem;
  display: block;
}
.active {
  color: #f00;
}
</style>

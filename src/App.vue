<template>
  <div id="app">
    <tar-bar />
  </div>
</template>

<script>
import tarBar from "components/tarBar333";
export default {
  components: {
    tarBar,
  },
  data() {
    return {
      showBack: false,
      active: 0,
      icon: {
        active: "https://img01.yzcdn.cn/vant/user-active.png",
        inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
  created() {
    //判断当前是否为首页，如果是则显示
    this.showBack = this.$route.path !== "/";
  },
  watch: {
    //监听当前路由是否发现变化
    "$route.path"(newVal) {
      this.showBack = newVal !== "/";
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      //  this.$router.back();
    },
  },
};
</script>

<style lass="scss" scoped>
</style>


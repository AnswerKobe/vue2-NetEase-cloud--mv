<template>
  <div id="tarbar">
    <div id="div_boxs_lnteado">
      <van-nav-bar :title="$route.meta.title" :fixed="true">
        <template #left>
          <van-icon
            name="arrow-left"
            size="18"
            v-show="showBack"
            @click="goBack"
          />
          <span
            id="backto"
            style="color: white; font-size: 16px"
            v-show="showBack"
            @click="goBack"
            >返回</span
          >
        </template>
      </van-nav-bar>
    </div>

    <transition name="fade">
      <router-view />
    </transition>

    <div id="bottom">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o"
          ><router-link to="/">首页</router-link>
        </van-tabbar-item>

        <van-tabbar-item icon="upgrade"
          ><router-link to="/discover">发现 </router-link></van-tabbar-item
        >

        <van-tabbar-item>
          <router-link to="/About">
            <span>我的</span>
          </router-link>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "tarBar",
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
    //判断当前是否为首页，如果不是则显示返回图标
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
      // this.$router.back(); //两个方法都可以实现返回的效果
    },
  },
};
</script>

<style lass="scss" scoped>
.van-nav-bar {
  background-color: #2f97ec;
  width: 100%;
  height: 50px;
}
.van-tabbar-item {
  background-color: #f5f5f5;
  font-size: 1.05rem;
  box-shadow: 0 -3px 2px rgba(100, 100, 100, 0.1);
}
#backto {
  font-size: 1.5rem;
  font-weight: bold;
}
#div_boxs_lnteado /deep/ .van-nav-bar__title {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
}
#div_boxs_lnteado /deep/ .van-nav-bar__text {
  color: white;
  font-size: 2rem;
  font-weight: bold;
}
#div_boxs_lnteado /deep/ .van-icon {
  color: white;
  font-size: 3rem;
}
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  /*  opacity: 0就是隐藏，实现页面移动的切换效果 */
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  /* 0.5s完成 */
  transition: all 0.5s ease;
}
</style>
<template>
  <div class="home">
    <div style="height: 60px"></div>

    <form action="/" id="search">
      <van-search
        shape="round"
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image.pic" class="banner-img" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div id="MvInfo">
      <van-grid :border="false" :column-num="2">
        <van-grid-item
          v-for="item in mvList"
          :key="item.id"
          :to="{ name: 'play', params: { mvId: item.id } }"
        >
          <van-image radius="10px" :src="item.cover" />
          <span id="name">{{ item.name }}</span>
          <span id="artistName">{{ item.artistName }}</span>
          <span id="watch">{{ $dataFormat(item.playCount) }}</span>
        </van-grid-item>
      </van-grid>
    </div>

    <div style="height: 50px"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getBannerdata } from "api/home";
import { getMvdata } from "api/home";
import { searchMv } from "api/home";
import { getSingerMv } from "api/home";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      images: [],
      mvList: [],
      search: [],
      value: "",
    };
  },
  created() {
    //1.请求多个数据
    getBannerdata().then((res) => {
      console.log(res);
      this.images = res.banners;
    });
    getMvdata().then((res) => {
      console.log(res.data);
      this.mvList = res.data;
    });
  },
  methods: {
    onSearch(val) {
      this.$router.push({
        name: "search",
        params: { searchList: this.value },
      });
    },
    onCancel() {},
  },
};
</script>

<style scoped>
.van-search__content {
  width: 100%;
  height: 44px;
}
.van-field__control {
  font-size: 1rem;
}
.van-cell {
  font-size: 30px;
}
.van-cell--borderless {
  font-size: 20px;
}
.van-search__action {
  font-size: 20px;
}
.banner-img {
  width: 99%;
  height: 100%;
  border-radius: 3%;
  margin: 2px;
}
.van-grid {
  margin: 2px;
}
#MvInfo {
  position: relative;
}
#watch {
  position: absolute;
  right: 10px;
  top: 20px;
  color: white;
}
#name {
  font-weight: bold;
}
#artistName {
  color: #778899;
  text-shadow: 0 1px #fff; /* 向下阴影 */
}
.van-image {
  width: 100%;
  height: 120px;
}
.van-field__left-icon .van-icon,
.van-field__right-icon .van-icon {
  display: block;
  font-size: 34px;
  line-height: inherit;
}
</style>


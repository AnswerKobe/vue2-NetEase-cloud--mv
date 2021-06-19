<template>
  <div class="discover">
    <div style="height: 50px"></div>

    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      发现你喜欢的Mv
    </van-divider>

    <div class="leftShow">推荐MV：</div>
    <div id="MvInfo">
      <van-grid :border="false" :column-num="2">
        <van-grid-item
          v-for="item in recommendMv"
          :key="item.id"
          :to="{ name: 'play', params: { mvId: item.id } }"
        >
          <van-image radius="10px" :src="item.picUrl" />
          <span id="name">{{ item.name }}</span>
          <span id="artistName">{{ item.artistName }}</span>
          <span id="watch">{{ $dataFormat(item.playCount) }}</span>
        </van-grid-item>
      </van-grid>
    </div>

    <div class="leftShow">MV排行：</div>
    <div id="MvInfo">
      <van-grid :border="false" :column-num="2">
        <van-grid-item
          v-for="item in topMv"
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

    <div class="leftShow">最新MV：</div>
    <div id="MvInfo">
      <van-grid :border="false" :column-num="2">
        <van-grid-item
          v-for="item in newestMv"
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

    <div class="leftShow">相似MV：</div>
    <div id="MvInfo">
      <van-grid :border="false" :column-num="2">
        <van-grid-item
          v-for="item in NeteaseMv"
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
import { recommendMv } from "api/home";
import { newestMv } from "api/home";
import { similarMv } from "api/home";
import { topMv } from "api/home";
export default {
  name: "discover",
  components: {},
  data() {
    return {
      recommendMv: [],
      newestMv: [],
      NeteaseMv: [],
      topMv: [],
    };
  },
  created() {
    //请求多个数据
    recommendMv().then((res) => {
      console.log(res.result);
      this.recommendMv = res.result;
    });

    newestMv().then((res) => {
      console.log(res);
      this.newestMv = res.data;
    });

    similarMv().then((res) => {
      console.log(res);
      this.NeteaseMv = res.mvs;
    });

    topMv().then((res) => {
      console.log(res);
      this.topMv = res.data;
    });
  },
};
</script>

<style scoped>
.head img {
  width: 500px;
  height: 300px;
}
.van-divider {
  font-size: 18px;
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
.leftShow {
  border-left: 3px solid red;
  font-size: 20px;
}
.van-image {
  width: 100%;
  height: 120px;
}
</style>
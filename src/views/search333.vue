<template>
  <div id="searchInfo">
    <div style="height: 50px"></div>

    <span id="headContext">有关 “{{ searchList }}” 的搜索结果：</span>
    <van-grid :border="false" :column-num="2">
      <van-grid-item
        v-for="item in this.data"
        :key="item.id"
        :to="{ name: 'play', params: { mvId: item.id } }"
      >
        <van-image radius="10px" :src="item.cover" />
        <span id="name">{{ item.name }}</span>
        <span id="artistName">{{ item.artistName }}</span>
        <span id="watch">{{ $dataFormat(item.playCount) }}</span>
      </van-grid-item>
    </van-grid>

    <div style="height: 50px"></div>
  </div>
</template>


<script>
import { searchMv } from "api/home";
// @ is an alias to /src
export default {
  name: "search333",
  components: {},
  data() {
    return {
      data: [],
    };
  },
  props: ["searchList"],

  created() {
    searchMv(this.searchList).then((res) => {
      console.log(res);
      this.data = res.result.mvs;
    });
  },
};
</script>

<style scoped>
#headContext {
  padding: 10px;
  font-style: italic;
  font-family: Fantasy;
  font-size: 30px;
  color: indianred;
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
</style>
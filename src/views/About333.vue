<template>
  <div class="about">
    <div style="height: 60px"></div>

    <div class="myId">
      <img src="../assets/img/yihu.jpg" alt="" />
    </div>
    <div>
      <van-tag type="primary" size="large">个人简介：</van-tag>
      <h3>姓名：杨怡虎</h3>
      <h3>班级：2018级软件工程2班</h3>
      <h3>学号：201830110333</h3>
      <h3>爱好：打篮球、大数据</h3>
    </div>
    <br />
    <br />
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >
      喜欢看的MV：
    </van-divider>
    <van-list>
      <van-cell
        v-for="(item, index) in topSong"
        :key="index"
        :title="index + 1 + '：' + item.name"
        @click="toPlay(item.id)"
      />
    </van-list>

    <div style="height: 60px"></div>
  </div>
</template>

<script>
import { topSong } from "api/home";
import { topMv } from "api/home";

export default {
  name: "About",
  components: {},
  data() {
    return {
      topSong: [],
    };
  },
  methods: {
    toPlay(id) {
      this.$router.push({
        name: "play",
        params: {
          mvId: id,
        },
      });
    },
  },
  created() {
    topMv().then((res) => {
      console.log(res.data);
      this.topSong = res.data;
    });
  },
};
</script>

<style scoped>
.myId {
  margin: 10px auto;
  float: left;
  padding: 10px;
}
.myId img {
  border-radius: 50%;
}
.van-divider {
  font-size: 18px;
}
.van-cell {
  font-size: 18px;
}
</style>

<template>
  <div class="play">
    <mvPlay :myMvId="mvId"></mvPlay>
    <comment :myComment="mvId"></comment>
  </div>
</template>

<script>
import { getvideodata } from "api/home";
import { getMvcomment } from "api/home";
import { mvDetail } from "api/home";

import mvPlay from "components/mvPlay333";
import comment from "components/comment333";
export default {
  components: {
    mvPlay,
    comment,
  },
  data() {
    return {
      videoPlay: [],
      comment: [],
      mvDetail: [],
    };
  },
  props: ["mvId"],
  created() {
    console.log(this.mvId);
    getvideodata(this.mvId).then((res) => {
      console.log(res);
      this.videoPlay = res.data.url;
    });

    getMvcomment(this.mvId).then((res) => {
      console.log(res);
      this.comment = res;
    });

    mvDetail(this.mvId).then((res) => {
      console.log(res);
      this.mvDetail = res.data;
    });
  },
  destroyed() {},
};
</script>

<style scoped>
</style>
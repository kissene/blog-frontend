<template>
  <Layout>
    <div style="min-height: 600px">
      <div v-if="news && news.length > 0">
        <el-card
          shadow="never"
          style="min-height: 400px"
          v-for="(item, index) in news"
          :key="'p' + index"
        >
          <div slot="header">
            <span>{{ item.title }}</span>
          </div>
          <div style="font-size: 0.9rem; line-height: 1.5; color: #606c71">
            发布 {{ item.created_at | format }} <br />
            更新 {{ item.updated_at | format }}
          </div>
          <div
            v-html="item.content"
            class="markdown-body"
            style="padding-top: 20px"
          ></div>
        </el-card>
      </div>
      <div v-else>
        <el-card
          shadow="never"
          style="
            margin-bottom: 20px;
            padding: 20px 0px 20px 0px;
            text-align: center;
          "
          v-if="!blog.id"
        >
          <font style="font-size: 30px; color: #dddddd">
            <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
          </font>
        </el-card>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  news: allStrapiNew {
    edges {
      node {
        id,
        title,
        content,
        created_at,
        updated_at
      }
    }
  }
}
</page-query>
<script>
import util from "../utils/util";
export default {
  name: "NamePage",
  metaInfo: {
    title: "最新动态",
  },
  computed: {
    news() {
      return this.$page.news.edges.map((item) => item.node);
    },
  },
  filters: {
    format: util.dateTransform,
  },
};
</script>

<style>
</style>
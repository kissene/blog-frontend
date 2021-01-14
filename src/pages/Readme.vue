<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card shadow="never">
        <div
          v-html="readMe.content"
          class="markdown-body"
          v-if="readMe.content"
        ></div>
        <div
          style="
            min-height: 400px;
            margin-bottom: 20px;
            padding: 20px 0px 20px 0px;
            text-align: center;
          "
          v-else
        >
          <font style="font-size: 30px; color: #dddddd">
            <b>◔ ‸◔？没有博客介绍</b>
          </font>
        </div>
      </el-card>
    </div>
  </Layout>
</template>
<page-query>
query {
  readMe: allReadeMe {
    edges {
      node {
        title,
        content
      }
    }
  }
}
</page-query>
<script>
export default {
  name: "ReadMePage",
  metaInfo: {
    title: "ReadMe",
  },
  computed: {
    readMe() {
      return this.$page.readMe.edges[0].node;
    },
  },
};
</script>

<style>
</style>
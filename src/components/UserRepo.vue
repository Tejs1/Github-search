<script>
import Octokit from "../services/Octokit";
export default {
  name: "UserRepo",
  props: {
    repoData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { languages: null };
  },
  computed: {
    langId() {
      return this.repoData.node_id + "_l_";
    },
    dateOfCreation() {
      return this.repoData.created_at.split("T")[0];
    },
    langStats() {
      const statObj = {};
      let total = 0;
      for (const property in this.languages) {
        statObj[property] = this.languages[property];
        total += this.languages[property];
      }
      for (const lang in statObj) {
        statObj[lang] = Math.round((statObj[lang] / total) * 100);
      }
      return statObj;
    },
  },
  created() {
    Octokit.getRepoLang(this.repoData.owner.login, this.repoData.name).then(
      (resp) => (this.languages = resp.data)
    );
  },

  methods: {
    getWidth(item) {
      return item + "%";
    },
  },
};
</script>

<template>
  <div class="repo">
    <div>
      <h1>{{ repoData.name }}</h1>
      <div>Created at :{{ dateOfCreation }}</div>
      <div class="colors">
        <span
          v-for="(item, key) in langStats"
          :key="key"
          :class="[key, item]"
          :style="{
            width: getWidth(item),
          }"
        />
      </div>
      <div v-if="languages" class="repo-stat">
        <div v-for="(item, id) in langStats" :key="langId + id">
          <span>{{ id + ": " }} </span><span>{{ item }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.repo {
  text-align: left;
  height: 221px;
  outline: 1px solid red;
  padding: 1rem;
}
h1 {
  font-size: larger;
}
.colors {
  display: flex;
  width: 50%;
  background-color: rgb(40, 33, 21);
  border-radius: 5px;
}
.colors span {
  height: 0.5rem;
}
</style>

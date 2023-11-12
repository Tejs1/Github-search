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
      const tempObj = {};
      let total = 0;
      for (const property in this.languages) {
        if (this.languages[property] !== 0) {
          tempObj[property] = this.languages[property];
          total += this.languages[property];
        }
      }
      const statObj = {};
      for (const lang in tempObj) {
        const percentage = Math.round((tempObj[lang] / total) * 100);
        //to avoid lang which have percentage ~ 0
        if (percentage !== 0) statObj[lang] = percentage;
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
  <div v-if="Object.keys(langStats).length !== 0" class="repo">
    <div>
      <RouterLink
        :to="{
          name: 'RepoDetailsView',
          params: {
            username: repoData.owner.login,
            reponame: repoData.name,
          },
        }"
      >
        <h1>{{ repoData.name }}</h1>
      </RouterLink>
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
          <span v-if="!item == 0">
            <span>{{ id + ": " }}</span>
            <span>{{ item }}%</span>
          </span>
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
  background-color: #242424;
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

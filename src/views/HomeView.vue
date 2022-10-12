<script>
import Octokit from "../services/Octokit";
import UserCard from "../components/UserCard.vue";
export default {
  name: "HomeView",
  components: {
    UserCard,
  },
  data() {
    return {
      inputValue: "",
      searchResults: [
        {
          login: "Tejs",
          id: 3336664,
          node_id: "MDQ6VXNlcjMzMzY2NjQ=",
          avatar_url: "https://avatars.githubusercontent.com/u/3336664?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Tejs",
          html_url: "https://github.com/Tejs",
          followers_url: "https://api.github.com/users/Tejs/followers",
          following_url:
            "https://api.github.com/users/Tejs/following{/other_user}",
          gists_url: "https://api.github.com/users/Tejs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Tejs/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/Tejs/subscriptions",
          organizations_url: "https://api.github.com/users/Tejs/orgs",
          repos_url: "https://api.github.com/users/Tejs/repos",
          events_url: "https://api.github.com/users/Tejs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Tejs/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "tejseth",
          id: 55564043,
          node_id: "MDQ6VXNlcjU1NTY0MDQz",
          avatar_url: "https://avatars.githubusercontent.com/u/55564043?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/tejseth",
          html_url: "https://github.com/tejseth",
          followers_url: "https://api.github.com/users/tejseth/followers",
          following_url:
            "https://api.github.com/users/tejseth/following{/other_user}",
          gists_url: "https://api.github.com/users/tejseth/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/tejseth/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/tejseth/subscriptions",
          organizations_url: "https://api.github.com/users/tejseth/orgs",
          repos_url: "https://api.github.com/users/tejseth/repos",
          events_url: "https://api.github.com/users/tejseth/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/tejseth/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "TejsinghDhaosriya",
          id: 48129713,
          node_id: "MDQ6VXNlcjQ4MTI5NzEz",
          avatar_url: "https://avatars.githubusercontent.com/u/48129713?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/TejsinghDhaosriya",
          html_url: "https://github.com/TejsinghDhaosriya",
          followers_url:
            "https://api.github.com/users/TejsinghDhaosriya/followers",
          following_url:
            "https://api.github.com/users/TejsinghDhaosriya/following{/other_user}",
          gists_url:
            "https://api.github.com/users/TejsinghDhaosriya/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/TejsinghDhaosriya/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/TejsinghDhaosriya/subscriptions",
          organizations_url:
            "https://api.github.com/users/TejsinghDhaosriya/orgs",
          repos_url: "https://api.github.com/users/TejsinghDhaosriya/repos",
          events_url:
            "https://api.github.com/users/TejsinghDhaosriya/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/TejsinghDhaosriya/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "Tejs1",
          id: 67797070,
          node_id: "MDQ6VXNlcjY3Nzk3MDcw",
          avatar_url: "https://avatars.githubusercontent.com/u/67797070?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Tejs1",
          html_url: "https://github.com/Tejs1",
          followers_url: "https://api.github.com/users/Tejs1/followers",
          following_url:
            "https://api.github.com/users/Tejs1/following{/other_user}",
          gists_url: "https://api.github.com/users/Tejs1/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Tejs1/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/Tejs1/subscriptions",
          organizations_url: "https://api.github.com/users/Tejs1/orgs",
          repos_url: "https://api.github.com/users/Tejs1/repos",
          events_url: "https://api.github.com/users/Tejs1/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Tejs1/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "tejshahi",
          id: 1841958,
          node_id: "MDQ6VXNlcjE4NDE5NTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1841958?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/tejshahi",
          html_url: "https://github.com/tejshahi",
          followers_url: "https://api.github.com/users/tejshahi/followers",
          following_url:
            "https://api.github.com/users/tejshahi/following{/other_user}",
          gists_url: "https://api.github.com/users/tejshahi/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/tejshahi/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/tejshahi/subscriptions",
          organizations_url: "https://api.github.com/users/tejshahi/orgs",
          repos_url: "https://api.github.com/users/tejshahi/repos",
          events_url: "https://api.github.com/users/tejshahi/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/tejshahi/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "TejSankhe",
          id: 37365321,
          node_id: "MDQ6VXNlcjM3MzY1MzIx",
          avatar_url: "https://avatars.githubusercontent.com/u/37365321?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/TejSankhe",
          html_url: "https://github.com/TejSankhe",
          followers_url: "https://api.github.com/users/TejSankhe/followers",
          following_url:
            "https://api.github.com/users/TejSankhe/following{/other_user}",
          gists_url: "https://api.github.com/users/TejSankhe/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/TejSankhe/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/TejSankhe/subscriptions",
          organizations_url: "https://api.github.com/users/TejSankhe/orgs",
          repos_url: "https://api.github.com/users/TejSankhe/repos",
          events_url: "https://api.github.com/users/TejSankhe/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/TejSankhe/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "tejsubedi",
          id: 36252274,
          node_id: "MDQ6VXNlcjM2MjUyMjc0",
          avatar_url: "https://avatars.githubusercontent.com/u/36252274?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/tejsubedi",
          html_url: "https://github.com/tejsubedi",
          followers_url: "https://api.github.com/users/tejsubedi/followers",
          following_url:
            "https://api.github.com/users/tejsubedi/following{/other_user}",
          gists_url: "https://api.github.com/users/tejsubedi/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/tejsubedi/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/tejsubedi/subscriptions",
          organizations_url: "https://api.github.com/users/tejsubedi/orgs",
          repos_url: "https://api.github.com/users/tejsubedi/repos",
          events_url: "https://api.github.com/users/tejsubedi/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/tejsubedi/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "tejshreebgund",
          id: 70435896,
          node_id: "MDQ6VXNlcjcwNDM1ODk2",
          avatar_url: "https://avatars.githubusercontent.com/u/70435896?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/tejshreebgund",
          html_url: "https://github.com/tejshreebgund",
          followers_url: "https://api.github.com/users/tejshreebgund/followers",
          following_url:
            "https://api.github.com/users/tejshreebgund/following{/other_user}",
          gists_url:
            "https://api.github.com/users/tejshreebgund/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/tejshreebgund/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/tejshreebgund/subscriptions",
          organizations_url: "https://api.github.com/users/tejshreebgund/orgs",
          repos_url: "https://api.github.com/users/tejshreebgund/repos",
          events_url:
            "https://api.github.com/users/tejshreebgund/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/tejshreebgund/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "tejsi",
          id: 32486486,
          node_id: "MDQ6VXNlcjMyNDg2NDg2",
          avatar_url: "https://avatars.githubusercontent.com/u/32486486?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/tejsi",
          html_url: "https://github.com/tejsi",
          followers_url: "https://api.github.com/users/tejsi/followers",
          following_url:
            "https://api.github.com/users/tejsi/following{/other_user}",
          gists_url: "https://api.github.com/users/tejsi/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/tejsi/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/tejsi/subscriptions",
          organizations_url: "https://api.github.com/users/tejsi/orgs",
          repos_url: "https://api.github.com/users/tejsi/repos",
          events_url: "https://api.github.com/users/tejsi/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/tejsi/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "TejshreeYeole",
          id: 19764486,
          node_id: "MDQ6VXNlcjE5NzY0NDg2",
          avatar_url: "https://avatars.githubusercontent.com/u/19764486?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/TejshreeYeole",
          html_url: "https://github.com/TejshreeYeole",
          followers_url: "https://api.github.com/users/TejshreeYeole/followers",
          following_url:
            "https://api.github.com/users/TejshreeYeole/following{/other_user}",
          gists_url:
            "https://api.github.com/users/TejshreeYeole/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/TejshreeYeole/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/TejshreeYeole/subscriptions",
          organizations_url: "https://api.github.com/users/TejshreeYeole/orgs",
          repos_url: "https://api.github.com/users/TejshreeYeole/repos",
          events_url:
            "https://api.github.com/users/TejshreeYeole/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/TejshreeYeole/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "tejsner",
          id: 13541415,
          node_id: "MDQ6VXNlcjEzNTQxNDE1",
          avatar_url: "https://avatars.githubusercontent.com/u/13541415?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/tejsner",
          html_url: "https://github.com/tejsner",
          followers_url: "https://api.github.com/users/tejsner/followers",
          following_url:
            "https://api.github.com/users/tejsner/following{/other_user}",
          gists_url: "https://api.github.com/users/tejsner/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/tejsner/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/tejsner/subscriptions",
          organizations_url: "https://api.github.com/users/tejsner/orgs",
          repos_url: "https://api.github.com/users/tejsner/repos",
          events_url: "https://api.github.com/users/tejsner/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/tejsner/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
      ],
    };
  },

  methods: {
    // submitForm() {
    //   Octokit.getUserSearchResults(this.inputValue)
    //     .then((response) => {
    //       this.searchResults = response.data.items;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   this.inputValue = "";
    // },
  },
};
</script>
<template>
  <main class="output">
    <form @submit.prevent="submitForm">
      <input
        v-model="inputValue"
        type="text"
        placeholder="Add a comment"
        required
      />
      <button id="search" type="submit">Search</button>
    </form>

    <ul v-if="searchResults">
      <UserCard
        v-for="searchItem in searchResults"
        :key="searchItem.id"
        :search-item-prop="searchItem"
      />
    </ul>
  </main>
</template>
<style lang="css" scoped>
form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 600px;
  margin: auto;
}
.output {
  width: 100%;
}

.output ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  list-style-type: none;
  max-width: 100%;
  margin-top: 2rem;
}
</style>

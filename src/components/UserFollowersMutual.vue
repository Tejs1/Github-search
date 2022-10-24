<script>
import Octokit from "../services/Octokit";

export default {
  name: "UserFollowersMutual",
  props: {
    login: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      followersData: [
        {
          login: "vivekweb2013",
          id: 7036736,
          node_id: "MDQ6VXNlcjcwMzY3MzY=",
          avatar_url: "https://avatars.githubusercontent.com/u/7036736?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/vivekweb2013",
          html_url: "https://github.com/vivekweb2013",
          followers_url: "https://api.github.com/users/vivekweb2013/followers",
          following_url:
            "https://api.github.com/users/vivekweb2013/following{/other_user}",
          gists_url:
            "https://api.github.com/users/vivekweb2013/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/vivekweb2013/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/vivekweb2013/subscriptions",
          organizations_url: "https://api.github.com/users/vivekweb2013/orgs",
          repos_url: "https://api.github.com/users/vivekweb2013/repos",
          events_url:
            "https://api.github.com/users/vivekweb2013/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/vivekweb2013/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "sa3dany",
          id: 21214427,
          node_id: "MDQ6VXNlcjIxMjE0NDI3",
          avatar_url: "https://avatars.githubusercontent.com/u/21214427?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/sa3dany",
          html_url: "https://github.com/sa3dany",
          followers_url: "https://api.github.com/users/sa3dany/followers",
          following_url:
            "https://api.github.com/users/sa3dany/following{/other_user}",
          gists_url: "https://api.github.com/users/sa3dany/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/sa3dany/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/sa3dany/subscriptions",
          organizations_url: "https://api.github.com/users/sa3dany/orgs",
          repos_url: "https://api.github.com/users/sa3dany/repos",
          events_url: "https://api.github.com/users/sa3dany/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/sa3dany/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "tarun-soni",
          id: 33228915,
          node_id: "MDQ6VXNlcjMzMjI4OTE1",
          avatar_url: "https://avatars.githubusercontent.com/u/33228915?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/tarun-soni",
          html_url: "https://github.com/tarun-soni",
          followers_url: "https://api.github.com/users/tarun-soni/followers",
          following_url:
            "https://api.github.com/users/tarun-soni/following{/other_user}",
          gists_url: "https://api.github.com/users/tarun-soni/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/tarun-soni/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/tarun-soni/subscriptions",
          organizations_url: "https://api.github.com/users/tarun-soni/orgs",
          repos_url: "https://api.github.com/users/tarun-soni/repos",
          events_url:
            "https://api.github.com/users/tarun-soni/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/tarun-soni/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "Walunjkirnesh25",
          id: 47272594,
          node_id: "MDQ6VXNlcjQ3MjcyNTk0",
          avatar_url: "https://avatars.githubusercontent.com/u/47272594?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Walunjkirnesh25",
          html_url: "https://github.com/Walunjkirnesh25",
          followers_url:
            "https://api.github.com/users/Walunjkirnesh25/followers",
          following_url:
            "https://api.github.com/users/Walunjkirnesh25/following{/other_user}",
          gists_url:
            "https://api.github.com/users/Walunjkirnesh25/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Walunjkirnesh25/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Walunjkirnesh25/subscriptions",
          organizations_url:
            "https://api.github.com/users/Walunjkirnesh25/orgs",
          repos_url: "https://api.github.com/users/Walunjkirnesh25/repos",
          events_url:
            "https://api.github.com/users/Walunjkirnesh25/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Walunjkirnesh25/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "archivine",
          id: 51271204,
          node_id: "MDQ6VXNlcjUxMjcxMjA0",
          avatar_url: "https://avatars.githubusercontent.com/u/51271204?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/archivine",
          html_url: "https://github.com/archivine",
          followers_url: "https://api.github.com/users/archivine/followers",
          following_url:
            "https://api.github.com/users/archivine/following{/other_user}",
          gists_url: "https://api.github.com/users/archivine/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/archivine/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/archivine/subscriptions",
          organizations_url: "https://api.github.com/users/archivine/orgs",
          repos_url: "https://api.github.com/users/archivine/repos",
          events_url: "https://api.github.com/users/archivine/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/archivine/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "AayshaChugh",
          id: 52296431,
          node_id: "MDQ6VXNlcjUyMjk2NDMx",
          avatar_url: "https://avatars.githubusercontent.com/u/52296431?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/AayshaChugh",
          html_url: "https://github.com/AayshaChugh",
          followers_url: "https://api.github.com/users/AayshaChugh/followers",
          following_url:
            "https://api.github.com/users/AayshaChugh/following{/other_user}",
          gists_url: "https://api.github.com/users/AayshaChugh/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/AayshaChugh/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/AayshaChugh/subscriptions",
          organizations_url: "https://api.github.com/users/AayshaChugh/orgs",
          repos_url: "https://api.github.com/users/AayshaChugh/repos",
          events_url:
            "https://api.github.com/users/AayshaChugh/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/AayshaChugh/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "MiheerTamkhane",
          id: 54612063,
          node_id: "MDQ6VXNlcjU0NjEyMDYz",
          avatar_url: "https://avatars.githubusercontent.com/u/54612063?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/MiheerTamkhane",
          html_url: "https://github.com/MiheerTamkhane",
          followers_url:
            "https://api.github.com/users/MiheerTamkhane/followers",
          following_url:
            "https://api.github.com/users/MiheerTamkhane/following{/other_user}",
          gists_url:
            "https://api.github.com/users/MiheerTamkhane/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/MiheerTamkhane/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/MiheerTamkhane/subscriptions",
          organizations_url: "https://api.github.com/users/MiheerTamkhane/orgs",
          repos_url: "https://api.github.com/users/MiheerTamkhane/repos",
          events_url:
            "https://api.github.com/users/MiheerTamkhane/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/MiheerTamkhane/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "anjali1102",
          id: 56559378,
          node_id: "MDQ6VXNlcjU2NTU5Mzc4",
          avatar_url: "https://avatars.githubusercontent.com/u/56559378?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/anjali1102",
          html_url: "https://github.com/anjali1102",
          followers_url: "https://api.github.com/users/anjali1102/followers",
          following_url:
            "https://api.github.com/users/anjali1102/following{/other_user}",
          gists_url: "https://api.github.com/users/anjali1102/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/anjali1102/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/anjali1102/subscriptions",
          organizations_url: "https://api.github.com/users/anjali1102/orgs",
          repos_url: "https://api.github.com/users/anjali1102/repos",
          events_url:
            "https://api.github.com/users/anjali1102/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/anjali1102/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "vaibhav18matere",
          id: 59862355,
          node_id: "MDQ6VXNlcjU5ODYyMzU1",
          avatar_url: "https://avatars.githubusercontent.com/u/59862355?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/vaibhav18matere",
          html_url: "https://github.com/vaibhav18matere",
          followers_url:
            "https://api.github.com/users/vaibhav18matere/followers",
          following_url:
            "https://api.github.com/users/vaibhav18matere/following{/other_user}",
          gists_url:
            "https://api.github.com/users/vaibhav18matere/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/vaibhav18matere/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/vaibhav18matere/subscriptions",
          organizations_url:
            "https://api.github.com/users/vaibhav18matere/orgs",
          repos_url: "https://api.github.com/users/vaibhav18matere/repos",
          events_url:
            "https://api.github.com/users/vaibhav18matere/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/vaibhav18matere/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "Subhojit-Dey1234",
          id: 66687621,
          node_id: "MDQ6VXNlcjY2Njg3NjIx",
          avatar_url: "https://avatars.githubusercontent.com/u/66687621?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Subhojit-Dey1234",
          html_url: "https://github.com/Subhojit-Dey1234",
          followers_url:
            "https://api.github.com/users/Subhojit-Dey1234/followers",
          following_url:
            "https://api.github.com/users/Subhojit-Dey1234/following{/other_user}",
          gists_url:
            "https://api.github.com/users/Subhojit-Dey1234/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Subhojit-Dey1234/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Subhojit-Dey1234/subscriptions",
          organizations_url:
            "https://api.github.com/users/Subhojit-Dey1234/orgs",
          repos_url: "https://api.github.com/users/Subhojit-Dey1234/repos",
          events_url:
            "https://api.github.com/users/Subhojit-Dey1234/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Subhojit-Dey1234/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "peter-kimanzi",
          id: 71552773,
          node_id: "MDQ6VXNlcjcxNTUyNzcz",
          avatar_url: "https://avatars.githubusercontent.com/u/71552773?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/peter-kimanzi",
          html_url: "https://github.com/peter-kimanzi",
          followers_url: "https://api.github.com/users/peter-kimanzi/followers",
          following_url:
            "https://api.github.com/users/peter-kimanzi/following{/other_user}",
          gists_url:
            "https://api.github.com/users/peter-kimanzi/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/peter-kimanzi/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/peter-kimanzi/subscriptions",
          organizations_url: "https://api.github.com/users/peter-kimanzi/orgs",
          repos_url: "https://api.github.com/users/peter-kimanzi/repos",
          events_url:
            "https://api.github.com/users/peter-kimanzi/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/peter-kimanzi/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "archismansaha",
          id: 76175105,
          node_id: "MDQ6VXNlcjc2MTc1MTA1",
          avatar_url: "https://avatars.githubusercontent.com/u/76175105?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/archismansaha",
          html_url: "https://github.com/archismansaha",
          followers_url: "https://api.github.com/users/archismansaha/followers",
          following_url:
            "https://api.github.com/users/archismansaha/following{/other_user}",
          gists_url:
            "https://api.github.com/users/archismansaha/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/archismansaha/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/archismansaha/subscriptions",
          organizations_url: "https://api.github.com/users/archismansaha/orgs",
          repos_url: "https://api.github.com/users/archismansaha/repos",
          events_url:
            "https://api.github.com/users/archismansaha/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/archismansaha/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "Rickshawala",
          id: 81474331,
          node_id: "MDQ6VXNlcjgxNDc0MzMx",
          avatar_url: "https://avatars.githubusercontent.com/u/81474331?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Rickshawala",
          html_url: "https://github.com/Rickshawala",
          followers_url: "https://api.github.com/users/Rickshawala/followers",
          following_url:
            "https://api.github.com/users/Rickshawala/following{/other_user}",
          gists_url: "https://api.github.com/users/Rickshawala/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Rickshawala/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Rickshawala/subscriptions",
          organizations_url: "https://api.github.com/users/Rickshawala/orgs",
          repos_url: "https://api.github.com/users/Rickshawala/repos",
          events_url:
            "https://api.github.com/users/Rickshawala/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Rickshawala/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "hrushi-thorat",
          id: 84261008,
          node_id: "MDQ6VXNlcjg0MjYxMDA4",
          avatar_url: "https://avatars.githubusercontent.com/u/84261008?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/hrushi-thorat",
          html_url: "https://github.com/hrushi-thorat",
          followers_url: "https://api.github.com/users/hrushi-thorat/followers",
          following_url:
            "https://api.github.com/users/hrushi-thorat/following{/other_user}",
          gists_url:
            "https://api.github.com/users/hrushi-thorat/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/hrushi-thorat/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/hrushi-thorat/subscriptions",
          organizations_url: "https://api.github.com/users/hrushi-thorat/orgs",
          repos_url: "https://api.github.com/users/hrushi-thorat/repos",
          events_url:
            "https://api.github.com/users/hrushi-thorat/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/hrushi-thorat/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "jesar-enl",
          id: 85540701,
          node_id: "MDQ6VXNlcjg1NTQwNzAx",
          avatar_url: "https://avatars.githubusercontent.com/u/85540701?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jesar-enl",
          html_url: "https://github.com/jesar-enl",
          followers_url: "https://api.github.com/users/jesar-enl/followers",
          following_url:
            "https://api.github.com/users/jesar-enl/following{/other_user}",
          gists_url: "https://api.github.com/users/jesar-enl/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jesar-enl/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jesar-enl/subscriptions",
          organizations_url: "https://api.github.com/users/jesar-enl/orgs",
          repos_url: "https://api.github.com/users/jesar-enl/repos",
          events_url: "https://api.github.com/users/jesar-enl/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jesar-enl/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "kumawat-rohit",
          id: 87697905,
          node_id: "MDQ6VXNlcjg3Njk3OTA1",
          avatar_url: "https://avatars.githubusercontent.com/u/87697905?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/kumawat-rohit",
          html_url: "https://github.com/kumawat-rohit",
          followers_url: "https://api.github.com/users/kumawat-rohit/followers",
          following_url:
            "https://api.github.com/users/kumawat-rohit/following{/other_user}",
          gists_url:
            "https://api.github.com/users/kumawat-rohit/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/kumawat-rohit/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/kumawat-rohit/subscriptions",
          organizations_url: "https://api.github.com/users/kumawat-rohit/orgs",
          repos_url: "https://api.github.com/users/kumawat-rohit/repos",
          events_url:
            "https://api.github.com/users/kumawat-rohit/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/kumawat-rohit/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "Rushikesh222",
          id: 90494892,
          node_id: "MDQ6VXNlcjkwNDk0ODky",
          avatar_url: "https://avatars.githubusercontent.com/u/90494892?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Rushikesh222",
          html_url: "https://github.com/Rushikesh222",
          followers_url: "https://api.github.com/users/Rushikesh222/followers",
          following_url:
            "https://api.github.com/users/Rushikesh222/following{/other_user}",
          gists_url:
            "https://api.github.com/users/Rushikesh222/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Rushikesh222/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Rushikesh222/subscriptions",
          organizations_url: "https://api.github.com/users/Rushikesh222/orgs",
          repos_url: "https://api.github.com/users/Rushikesh222/repos",
          events_url:
            "https://api.github.com/users/Rushikesh222/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Rushikesh222/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "mangeshsali",
          id: 97012992,
          node_id: "U_kgDOBchNAA",
          avatar_url: "https://avatars.githubusercontent.com/u/97012992?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mangeshsali",
          html_url: "https://github.com/mangeshsali",
          followers_url: "https://api.github.com/users/mangeshsali/followers",
          following_url:
            "https://api.github.com/users/mangeshsali/following{/other_user}",
          gists_url: "https://api.github.com/users/mangeshsali/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mangeshsali/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mangeshsali/subscriptions",
          organizations_url: "https://api.github.com/users/mangeshsali/orgs",
          repos_url: "https://api.github.com/users/mangeshsali/repos",
          events_url:
            "https://api.github.com/users/mangeshsali/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mangeshsali/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "omkar636",
          id: 99261636,
          node_id: "U_kgDOBeqcxA",
          avatar_url: "https://avatars.githubusercontent.com/u/99261636?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/omkar636",
          html_url: "https://github.com/omkar636",
          followers_url: "https://api.github.com/users/omkar636/followers",
          following_url:
            "https://api.github.com/users/omkar636/following{/other_user}",
          gists_url: "https://api.github.com/users/omkar636/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/omkar636/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/omkar636/subscriptions",
          organizations_url: "https://api.github.com/users/omkar636/orgs",
          repos_url: "https://api.github.com/users/omkar636/repos",
          events_url: "https://api.github.com/users/omkar636/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/omkar636/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "yashj2022",
          id: 111694454,
          node_id: "U_kgDOBqhSdg",
          avatar_url: "https://avatars.githubusercontent.com/u/111694454?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/yashj2022",
          html_url: "https://github.com/yashj2022",
          followers_url: "https://api.github.com/users/yashj2022/followers",
          following_url:
            "https://api.github.com/users/yashj2022/following{/other_user}",
          gists_url: "https://api.github.com/users/yashj2022/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/yashj2022/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/yashj2022/subscriptions",
          organizations_url: "https://api.github.com/users/yashj2022/orgs",
          repos_url: "https://api.github.com/users/yashj2022/repos",
          events_url: "https://api.github.com/users/yashj2022/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/yashj2022/received_events",
          type: "User",
          site_admin: false,
        },
      ],
    };
  },
  created() {
    console.log("this.login");
    Octokit.getUserFollowers(this.login)
      .then((response) => {
        this.followersData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    size() {
      return "&s=50";
    },
  },
};
</script>
<template>
  <div class="wrapper-followers">
    <RouterLink
      v-if="followersData"
      v-for="follower in followersData"
      :to="{
        name: 'UserProfileView',
        params: { username: follower.login },
      }"
      class="avatar-div"
    >
      <img
        :key="follower.id"
        :src="follower.avatar_url + size"
        :alt="follower.login"
        height="55"
        width="55"
      />
    </RouterLink>
  </div>
</template>

<style scoped>
.wrapper-followers {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin: 1rem;
}
.wrapper-followers img {
  padding: 5px;
}
</style>

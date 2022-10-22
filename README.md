# Github Search

#### live link : [gitsocial.netlify.app](https://gitsocial.netlify.app/)

## Todo

- [x] Search bar to search GitHub user
- [x] GitHub Profile page, of a GitHub user
  - [x] Name , Email , Blog , Description, Avatar
  - [x] Call Diff avatar sizes from gituhub api
  - [x] Followers , Following count
  - [x] Followers avatar
  - [ ] Show mutual Followers of user and client
  - [ ] Show mutual Following of user and client
  - [ ] Longest streak
  - [ ] Top Languages
- [ ] List all the repository of the GitHub user
  - [x] List 1st 24 repositories of the GitHub user
  - [ ] Pagination or Infinite scroll
  - [ ] Sort Filter repositories
    - [ ] Popularity
    - [ ] Date created
    - [ ] Date updated
    - [ ] Top language
- [x] Dynamic routing, for each above use-case
  - [x] Home
  - [x] UserProfile
  - [x] UserRepo
- [x] Integrate GitHub APIs to fetch all data
- [ ] Mobile responsive
- [ ] Search repositories [ by keyword, language or any other parameter ]
- [ ] GitHub organizations [search, list, profile, repositories ]
- [x] Show stats of a repository
  - [x] Show Languages
  - [x] Show span color
  - [x] Github colors for differnt Languages
  - [ ] Export Languages colors.css to cloud zipped
- [ ] Show stats on user-profile / organization-profile
- [ ] Integrate GitHub OAuth 2.0
- [ ] Setup own backend, wherever needed
- [ ] Add Navigation api

### search organizations option

## Dependancies

### Vue + Vite

### Octokit:

Added Octokit Official client for the GitHub API.

### Isomorphic-fetch:

Octokit was not working with default `node-fetch` with `vite`, So had to use `Isomorphic-fetch`. [Issue](https://github.com/octokit/octokit.js/issues/2126)

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn  dev
```

### Compile and Minify for Production

```sh
yarn  build
```

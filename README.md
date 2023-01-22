# Deploying a React App\* to GitHub Pages

2

3 \* created using `create-react-app`
@gitname
Add Introduction section to README
5 years ago
4

5

# Introduction

6

@gitname
Refine Introduction section
last year
7
In this tutorial, I'll show you how you can create a React app and deploy it to GitHub Pages.
@gitname
Add Introduction section to README
5 years ago
8

@gitname
Refine Introduction section
last year
9
To create the React app, I'll be using [`create-react-app`](https://create-react-app.dev/), which is a tool people can use to create a React app from scratch. To deploy the React app, I'll be using [`gh-pages`](https://github.com/tschaub/gh-pages), which is an npm package people can use to deploy things to [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages), a free web hosting service provided by GitHub.
@gitname
Add Introduction section to README
5 years ago
10

@gitname
Refine Introduction section
last year
11
If you follow along with this tutorial, you'll end up with a new React app—hosted on GitHub Pages—which you can then customize.
@gitname
Add Introduction section to README
5 years ago
12

13

# Tutorial

14

@gitname
Add Prerequisites section to the README
5 years ago
15

## Prerequisites

16

@gitname
Refine Prerequisites section
last year
17

1. [Node and npm](https://nodejs.org/en/download/) are installed. Here are the versions I'll be using while making this tutorial:
   @gitname
   Add Prerequisites section to the README
   5 years ago
   18

@gitname
Modernize instructions and incorporate suggestions from readers
last year
19
`shell
@gitname
Add Prerequisites section to the README
5 years ago
20
    $ node --version
@gitname
Modernize instructions and incorporate suggestions from readers
last year
21
    v16.13.2
@gitname
Add Prerequisites section to the README
5 years ago
22
23
    $ npm --version
@gitname
Modernize instructions and incorporate suggestions from readers
last year
24
    8.1.2
@gitname
Add Prerequisites section to the README
5 years ago
25
    `
@gitname
Refine Prerequisites section
last year
26 > Installing npm adds two commands to the system—`npm` and `npx`—both of which I'll be using while making this tutorial.
@gitname
Modernize instructions and incorporate suggestions from readers
last year
27
@gitname
Refine Prerequisites section
last year
28 2. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) is installed. Here's the version I'll be using while making this tutorial:
@gitname
Add Prerequisites section to the README
5 years ago
29

@gitname
Modernize instructions and incorporate suggestions from readers
last year
30
`shell
31
    $ git --version
32
    git version 2.29.1.windows.1
@gitname
Add Prerequisites section to the README
5 years ago
33
    `
34

@gitname
Fix typos and refine phrasing
last year
35 3. A [GitHub](https://github.com/signup) account. :octocat:
@gitname
Populate the Procedure section of the README
5 years ago
36

@gitname
Modernize instructions and incorporate suggestions from readers
last year
37

## Procedure

@gitname
Add shortcut for adding lines to package.json
5 years ago
38

@gitname
Modernize instructions and incorporate suggestions from readers
last year
39

### 1. Create an **empty** repository on GitHub

@gitname
Add shortcut for adding lines to package.json
5 years ago
40

@gitname
Refine indentation and bullet points in Steps 1-2
last year
41

1. Sign into your GitHub account.
   42
2. Visit the [Create a new repository](https://github.com/new) form.
   43
3. Fill in the form as follows:
   @gitname
   Refine Step 5 and account for project vs. user sites
   last year
   44 - **Repository name:** You can enter any name you want\*.
   @gitname
   Add Prerequisites section to the README
   5 years ago
   45

@gitname
Refine Step 5 and account for project vs. user sites
last year
46 > \* For a [project site](https://pages.github.com/#project-site), you can enter any name you want. For a [user site](https://pages.github.com/#user-site), GitHub [requires](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites) that the repository's name have the following format: `{username}.github.io` (e.g. `gitname.github.io`)
47

@gitname
Refine indentation and bullet points in Steps 1-2
last year
48 > The name you enter will show up in a few places: (a) in references to the repository throughout GitHub, (b) in the URL of the repository, and (c) in the URL of the deployed React app.
@AbhishekCode
@gitname
Add prerequisite to configure Git client (#4)
4 years ago
49
@gitname
Refine Step 5 and account for project vs. user sites
last year
50 > In this tutorial, I'll be deploying the React app as a project site.
51
52
I'll enter: `react-gh-pages`
@gitname
Refine indentation and bullet points in Steps 1-2
last year
53

54

- **Repository privacy:** Select _Public_ (or _Private_\*).
  @gitname
  Modernize instructions and incorporate suggestions from readers
  last year
  55

@gitname
Refine indentation and bullet points in Steps 1-2
last year
56 > \* For [GitHub Free](https://docs.github.com/en/get-started/learning-about-github/githubs-products#github-free-for-user-accounts) users, the only type of repository that can be used with GitHub Pages is _Public_. For [GitHub Pro](https://docs.github.com/en/get-started/learning-about-github/githubs-products#github-pro) users (and other paying users), both _Public_ and _Private_ repositories can be used with GitHub Pages.
@gitname
Modernize instructions and incorporate suggestions from readers
last year
57
@gitname
Refine Step 5 and account for project vs. user sites
last year
58
I'll choose: _Public_
@gitname
Modernize instructions and incorporate suggestions from readers
last year
59

@gitname
Refine indentation and bullet points in Steps 1-2
last year
60

- **Initialize repository:** Leave all checkboxes empty.
  @gitname
  Modernize instructions and incorporate suggestions from readers
  last year
  61

@gitname
Refine indentation and bullet points in Steps 1-2
last year
62 > That will make it so GitHub creates an empty repository, instead of pre-populating the repository with a `README.md`, `.gitignore`, and/or `LICENSE` file.
63 4. Submit the form.
@gitname
Add Prerequisites section to the README
5 years ago
64
@gitname
Conclude Step 2 with a checkpoint statement
last year
65
At this point, your GitHub account contains an empty repository, having the name and privacy type that you specified.
@gitname
Populate the Procedure section of the README
5 years ago
66

@gitname
Modernize instructions and incorporate suggestions from readers
last year
67

### 2. Create a React app

@gitname
Populate the Procedure section of the README
5 years ago
68

@gitname
Refine indentation and bullet points in Steps 1-2
last year
69

1. Create a React app named `my-app`:
   @gitname
   Populate the Procedure section of the README
   5 years ago
   70

@gitname
Refine Step 2
last year
71 > In case you want to use a different name from `my-app` (e.g. `web-ui`), you can accomplish that by replacing all occurrences of `my-app` in this tutorial, with that other name (i.e. `my-app` --> `web-ui`).
72

@gitname
Modernize instructions and incorporate suggestions from readers
last year
73
`shell
74
    $ npx create-react-app my-app
@gitname
Populate the Procedure section of the README
5 years ago
75
    `
76

@gitname
Refine Step 2
last year
77 > That command will create a React app written in JavaScript. To create one written in [TypeScript](https://create-react-app.dev/docs/adding-typescript/#installation), you can issue this command instead:
@gitname
Modernize instructions and incorporate suggestions from readers
last year
78 > `shell
79
    > $ npx create-react-app my-app --template typescript
80
    > `
@gitname
Populate the Procedure section of the README
5 years ago
81
@gitname
Refine Step 2
last year
82
That command will create a new folder named `my-app`, which will contain the source code of a React app.
@gitname
Modernize instructions and incorporate suggestions from readers
last year
83

@gitname
Remove unnecessary trailing whitespace
2 months ago
84 > In addition to containing the source code of the React app, that folder is also a Git repository. That characteristic of the folder will come into play in Step 6.
@gitname
Modernize instructions and incorporate suggestions from readers
last year
85
@gitname
Add note about branch names: master vs. main
3 days ago
86 > #### Branch names: `master` vs. `main`
87 >
88 > The Git repository will have one branch, which will be named either (a) `master`, the default for a fresh Git installation; or (b) the value of the Git configuration variable, `init.defaultBranch`, if your computer is running Git version 2.28 or later _and_ you have [set that variable](https://github.blog/2020-07-27-highlights-from-git-2-28/#introducing-init-defaultbranch) in your Git configuration (e.g. via `$ git config --global init.defaultBranch main`).
89 >
90 > Since I have not set that variable in my Git installation, the branch in my repository will be named `master`. In case the branch in your repository has a different name (which you can check by running `$ git branch`), such as `main`; you can **replace** all occurrences of `master` throughout the remainder of this tutorial, with that other name (e.g. `master` → `main`).
91
@gitname
Refine indentation and bullet points in Steps 1-2
last year
92 2. Enter the newly-created folder:
@gitname
Refine Step 2
last year
93

@gitname
Modernize instructions and incorporate suggestions from readers
last year
94
`shell
95
    $ cd my-app
@gitname
Populate the Procedure section of the README
5 years ago
96
    `
@gitname
Modernize instructions and incorporate suggestions from readers
last year
97

@gitname
Conclude Step 2 with a checkpoint statement
last year
98
At this point, there is a React app on your computer and you are in the folder that contains its source code. All of the remaining commands shown in this tutorial can be run from that folder.
@gitname
Modernize instructions and incorporate suggestions from readers
last year
99

@gitname
Refine Step 3
last year
100

### 3. Install the `gh-pages` npm package

@gitname
Modernize instructions and incorporate suggestions from readers
last year
101

@gitname
Refine Step 3
last year
102

1. Install the [`gh-pages`](https://github.com/tschaub/gh-pages) npm package and designate it as a [development dependency](https://nodejs.dev/learn/npm-dependencies-and-devdependencies):
   103

@gitname
Modernize instructions and incorporate suggestions from readers
last year
104
`shell
@gitname
Reorder npm command options
5 years ago
105
    $ npm install gh-pages --save-dev
@gitname
Populate the Procedure section of the README
5 years ago
106
    `
@gitname
Refine Step 3
last year
107

108
At this point, the `gh-pages` npm package is installed on your computer and the React app's dependence upon it is documented in the React app's `package.json` file.
@gitname
Populate the Procedure section of the README
5 years ago
109

@gitname
Refine Step 5 and account for project vs. user sites
last year
110

### 4. Add a `homepage` property to the `package.json` file

@gitname
Populate the Procedure section of the README
5 years ago
111

@gitname
Refine Step 5 and account for project vs. user sites
last year
112

1. Open the `package.json` file in a text editor.
   113

@gitname
Modernize instructions and incorporate suggestions from readers
last year
114
`shell
115
    $ vi package.json
@gitname
Populate the Procedure section of the README
5 years ago
116
    `
@gitname
Modernize instructions and incorporate suggestions from readers
last year
117

@gitname
Refine Step 5 and account for project vs. user sites
last year
118 > In this tutorial, the text editor I'll be using is [vi](https://www.vim.org/). You can use any text editor you want; for example, [Visual Studio Code](https://code.visualstudio.com/).
@gitname
Modernize instructions and incorporate suggestions from readers
last year
119
@gitname
Refine Step 5 and account for project vs. user sites
last year
120 2. Add a `homepage` property in this format\*: `https://{username}.github.io/{repo-name}`
@gitname
Fix typos and refine phrasing
last year
121

@gitname
Refine Step 5 and account for project vs. user sites
last year
122 > \* For a [project site](https://pages.github.com/#project-site), that's the format. For a [user site](https://pages.github.com/#user-site), the format is: `https://{username}.github.io`. You can read more about the `homepage` property in the ["GitHub Pages" section](https://create-react-app.dev/docs/deployment/#github-pages) of the `create-react-app` documentation.
@gitname
Modernize instructions and incorporate suggestions from readers
last year
123
124
`diff
125
    {
126
      "name": "my-app",
127
      "version": "0.1.0",
128
    + "homepage": "https://gitname.github.io/react-gh-pages",
129
      "private": true,
@gitname
Populate the Procedure section of the README
5 years ago
130
    `
@gitname
Refine Step 5 and account for project vs. user sites
last year
131
At this point, the React app's `package.json` file includes a property named `homepage`.
@gitname
Modernize instructions and incorporate suggestions from readers
last year
132

133

### 5. Add deployment scripts to the `package.json` file

@gitname
Populate the Procedure section of the README
5 years ago
134

@gitname
Refine Step 5 and account for project vs. user sites
last year
135

1. Open the `package.json` file in a text editor (if it isn't already open in one).
   136

137
`shell
138
    $ vi package.json
139
    `
140

@gitname
Remove obsolete deploy script specific to user sites
9 months ago
141 2. Add a `predeploy` property and a `deploy` property to the `scripts` object:
@gitname
Modernize instructions and incorporate suggestions from readers
last year
142

143
`diff
144
    "scripts": {
145
    +   "predeploy": "npm run build",
146
    +   "deploy": "gh-pages -d build",
147
        "start": "react-scripts start",
148
        "build": "react-scripts build",
@gitname
Populate the Procedure section of the README
5 years ago
149
    `
@gitname
Modernize instructions and incorporate suggestions from readers
last year
150

@gitname
Refine Step 5 and account for project vs. user sites
last year
151
At this point, the React app's `package.json` file includes deployment scripts.
@gitname
Modernize instructions and incorporate suggestions from readers
last year
152

@gitname
Refine step titles
last year
153

### 6. Add a "remote" that points to the GitHub repository

@gitname
Modernize instructions and incorporate suggestions from readers
last year
154

@gitname
Refine Step 6
last year
155

1. Add a "[remote](https://git-scm.com/docs/git-remote)" to the local Git repository.
   @gitname
   Fix typos and refine phrasing
   last year
   156

@gitname
Refine Step 6
last year
157
You can do that by issuing a command in this format:
158

159
`shell
160
    $ git remote add origin https://github.com/{username}/{repo-name}.git
161
    `
162

163
To customize that command for your situation, replace `{username}` with your GitHub username and replace `{repo-name}` with the name of the GitHub repository you created in Step 1.
164

165
In my case, I'll run:
@gitname
Modernize instructions and incorporate suggestions from readers
last year
166

167
`shell
@gitname
Populate the Procedure section of the README
5 years ago
168
    $ git remote add origin https://github.com/gitname/react-gh-pages.git
169
    `
170

@gitname
Refine Step 6
last year
171 > That command tells Git where I want it to push things whenever I—or the `gh-pages` npm package acting on my behalf—issue the `$ git push` command from within this local Git repository.
172
173
At this point, the local repository has a "remote" whose URL points to the GitHub repository you created in Step 1.
@gitname
Populate the Procedure section of the README
5 years ago
174

@gitname
Add step about configuring GitHub Pages to watch gh-pages branch
2 months ago
175

### 7. Push the React app to the GitHub repository

@gitname
Modernize instructions and incorporate suggestions from readers
last year
176

@gitname
Add step about configuring GitHub Pages to watch gh-pages branch
2 months ago
177

1. Push the React app to the GitHub repository
   @gitname
   Modernize instructions and incorporate suggestions from readers
   last year
   178

179
`shell
@gitname
Populate the Procedure section of the README
5 years ago
180
    $ npm run deploy
181
    `
182

@gitname
Modernize instructions and incorporate suggestions from readers
last year
183 > That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.
184 >
@gitname
Add instructions for customizing deployment commit message (#84)
last year
185 > Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.
@gitname
Populate the Procedure section of the README
5 years ago
186
@gitname
Add instructions for customizing deployment commit message (#84)
last year
187 > By default, the new commit on the `gh-pages` branch will have a commit message of "Updates". You can [specify a custom commit message](https://github.com/gitname/react-gh-pages/issues/80#issuecomment-1042449820) via the `-m` option, like this:
188 > `shell
189
    > $ npm run deploy -- -m "Deploy React app to GitHub Pages"
190
    > `
191
@gitname
Add step about configuring GitHub Pages to watch gh-pages branch
2 months ago
192
At this point, the GitHub repository contains a branch named `gh-pages`, which contains the files that make up the distributable version of the React app. However, we haven't configured GitHub Pages to _serve_ those files yet.
193

194

### 8. Configure GitHub Pages

195

196

1. Navigate to the **GitHub Pages** settings page
   197
   1. In your web browser, navigate to the GitHub repository
      198
   1. Above the code browser, click on the tab labeled "Settings"
      199
   1. In the sidebar, in the "Code and automation" section, click on "Pages"
      200
1. Configure the "Build and deployment" settings like this:
   201
   1. **Source**: Deploy from a branch
      202
   2. **Branch**:
      203 - Branch: `gh-pages`
      204 - Folder: `/ (root)`
      205
1. Click on the "Save" button
   @gitname
   Modernize instructions and incorporate suggestions from readers
   last year
   206

@gitname
Refine Step 7
last year
207
**That's it!** The React app has been deployed to GitHub Pages! :rocket:
@gitname
Add step about configuring GitHub Pages to watch gh-pages branch
2 months ago
208

@gitname
Refine Step 7
last year
209
At this point, the React app is accessible to anyone who visits the `homepage` URL you specified in Step 4. For example, the React app I deployed is accessible at https://gitname.github.io/react-gh-pages.
@gitname
Modernize instructions and incorporate suggestions from readers
last year
210

@gitname
Add step about configuring GitHub Pages to watch gh-pages branch
2 months ago
211

### 9. (Optional) Store the React app's _source code_ on GitHub

@gitname
Modernize instructions and incorporate suggestions from readers
last year
212

@gitname
Update instructions to account for the addition of a new step
2 months ago
213
In a previous step, the `gh-pages` npm package pushed the distributable version of the React app to a branch named `gh-pages` in the GitHub repository. However, the _source code_ of the React app is not yet stored on GitHub.
@gitname
Modernize instructions and incorporate suggestions from readers
last year
214

@gitname
Refine Step 8
last year
215
In this step, I'll show you how you can store the source code of the React app on GitHub.
@gitname
Modernize instructions and incorporate suggestions from readers
last year
216

@gitname
Refine Step 8
last year
217

1. Commit the changes you made while you were following this tutorial, to the `master` branch of the local Git repository; then, push that branch up to the `master` branch of the GitHub repository.
   @gitname
   Modernize instructions and incorporate suggestions from readers
   last year
   218

219
`shell
@gitname
Populate the Procedure section of the README
5 years ago
220
    $ git add .
@gitname
Add instructions for customizing deployment commit message (#84)
last year
221
    $ git commit -m "Configure React app for deployment to GitHub Pages"
@gitname
Populate the Procedure section of the README
5 years ago
222
    $ git push origin master
223
    `
224

@gitname
Modernize instructions and incorporate suggestions from readers
last year
225 > I recommend exploring the GitHub repository at this point. It will have two branches: `master` and `gh-pages`. The `master` branch will contain the React app's source code, while the `gh-pages` branch will contain the distributable version of the React app.
@gitname
Add Introduction section to README
5 years ago
226
@gitname
Add References section to README
5 years ago
227

# References

228

@gitname
Modernize instructions and incorporate suggestions from readers
last year
229

1. [The official `create-react-app` deployment guide](https://create-react-app.dev/docs/deployment/#github-pages)
   @gitname
   Remove obsolete deploy script specific to user sites
   9 months ago
   230
2. [GitHub blog: Build and deploy GitHub Pages from any branch](https://github.blog/changelog/2020-09-03-build-and-deploy-github-pages-from-any-branch/)
   @gitname
   Add reference/link to GitHub Issue about CNAME file
   5 months ago
   231
3. [Preserving the `CNAME` file when using a custom domain](https://github.com/gitname/react-gh-pages/issues/89#issuecomment-1207271670)
   @gitname
   Add References section to README
   5 years ago
   232

@gitname
Add Introduction section to README
5 years ago
233

# Notes

234

@gitname
Refine Introduction section
last year
235

- Special thanks to GitHub (the company) for providing us with the GitHub Pages hosting service for free.
  236
- And now, time to turn the default React app generated by `create-react-app` into something unique!
  237
- This repository consists of two branches:
  238 - `master` - the _source code_ of the React app
  239 - `gh-pages` - the React app _built from_ that source code
  240

@gitname
Add Contributors section
last year
241

# Contributors

242

@gitname
Add contributors whose PRs were merged
last year
243
Thanks to these people for contributing to the maintenance of this tutorial.
@gitname
Add Contributors section
last year
244

@gitname
Convert "Contributors" section from Markdown to HTML
9 months ago
245

<!--
246
247
Template:
248
---------
249
250
<a href="https://github.com/____" target="_blank" title="____">
251
  <img src="https://github.com/____.png?size=40" height="40" width="40" alt="____" />
252
</a>
253
254
Instructions:
255
-------------
256
257
1. Copy the template and paste it below.
258
2. Replace the four "____" strings with the contributor's GitHub username.
259
260
Note: I specified the avatars using HTML because, when I did so using Markdown,
261
      only the _custom_ avatars appeared at the size I specified via the URL
262
      (e.g. 40px squared, for `https://github.com/gitname.png?size=40`);
263
      the GitHub-generated avatars seemed to ignore the size parameter and,
264
      instead, appear at their full size (approximately 420px squared).
265
      By using HTML, I can force _both_ types to appear at 40px squared.
266
267
-->

268

269
<a href="https://github.com/gitname" target="_blank" title="gitname">
270
<img src="https://github.com/gitname.png?size=40" height="40" width="40" alt="gitname" />
271
</a>
272
<a href="https://github.com/rhulse" target="_blank" title="rhulse">
273
<img src="https://github.com/rhulse.png?size=40" height="40" width="40" alt="rhulse" />
274
</a>
275
<a href="https://github.com/AbhishekCode" target="_blank" title="AbhishekCode">
276
<img src="https://github.com/AbhishekCode.png?size=40" height="40" width="40" alt="AbhishekCode" />
277
</a>
278
<a href="https://github.com/adnjoo" target="_blank" title="adnjoo">
279
<img src="https://github.com/adnjoo.png?size=40" height="40" width="40" alt="adnjoo" />
280
</a>
281
<a href="https://github.com/thebeatlesphan" target="_blank" title="thebeatlesphan">
282
<img src="https://github.com/thebeatlesphan.png?size=40" height="40" width="40" alt="thebeatlesphan" />
283
</a>
284
<a href="https://github.com/valerio-pescatori" target="_blank" title="valerio-pescatori">
285
<img src="https://github.com/valerio-pescatori.png?size=40" height="40" width="40" alt="valerio-pescatori" />
286
</a>
@gitname
Add contributor avatar to the list
2 months ago
287
<a href="https://github.com/jackweyhrich" target="_blank" title="jackweyhrich">
288
<img src="https://github.com/jackweyhrich.png?size=40" height="40" width="40" alt="jackweyhrich" />
289
</a>
@gitname
Add Contributors section
last year
290

@gitname
Add contributors whose PRs were merged
last year
291
This list is maintained manually—for now—and includes (a) each person who submitted a pull request that was eventually merged into `master`, and (b) each person who contributed in a different way (e.g. providing constructive feedback) and who approved of me including them in this list.

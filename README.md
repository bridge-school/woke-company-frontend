This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🚧 Setup

### 🛠 Install dependencies

```
$ yarn
```

### ⚡️ Run the app

```
$ yarn start
```

### ⚙️ Run the backend

See instructions [here](https://github.com/bridge-school/woke-company-backend) for running the backend repo.

## 💁 App architecture

### ✏️ API requests

This app follows whatever comes out of the box with `create-react-app`. We've added an `api` folder with an example in there for how to make requests to the backend. You can treat backend routes as local routes for development thanks to our requests being proxied through the api server port. You should be able to treat local and production routes for the backend the same. See the example in `api/index.js`

## 📝 Git Flow

To begin working on a codebase, you first need to fork the repository. Forking creates your own personal copy of a repository where you can freely create branches and make changes without affecting the original repository. After creating a fork, `git clone` the remote fork locally and `npm install` dependencies (you only need to do this once).

For our team git (work)flow, our goal is for our master branch to be an up-to-date, single source of truth. This means that when we start working on our features, we always branch off the latest master, and when we finish our feature, we merge back into master so the rest of the team immediately has access to the latest code. In git terms, the git flow looks like: pull, branch, commit, rebase, PR, merge:

1.  Get latest master. Make sure your local repository is up-to-date with the remote repository by pulling (`git pull <remote>`) the latest master.

2.  Create feature branch. Instead of adding our new commits directly to master, we branch (`git checkout -b <name of branch>`) off master and work on our feature in an isolated branch. The branch should only contain changes relevant to that feature. If you need to work on another feature or a bug fix, create a new branch. Try to give your branch a descriptive name like “feat/adds-login-page”.

3.  Commit work. “Save” your work as you go by making commits (`git add <file>`, then `git commit -m “your descriptive message"`) to your feature branch. As commits are added to the branch it’s best practice to push those changes to your remote fork frequently (`git push <remote> <branch>`).
4.  Rebase. As you work, integrate your changes with master regularly by rebasing (`git rebase <branch>`). Rebasing changes the base of your branch to the last commit on the branch you are rebasing against, then replays your commits on top of it. Essentially, git history is rewritten so that your work is always added to the latest master. Note that when you rebase you may find yourself resolving merge conflicts if someone worked on similar areas of the codebase.
5.  Have your code reviewed. When a branch is ready to be merged (after rebasing and pushing your latest changes), open a pull request on the original remote repository (not your fork) to start the review process. Have a colleague review your pull request, discuss changes, and make any agreed upon revisions.
6.  Merge into master. Once the changes have passed the review process, merge them into the master branch!

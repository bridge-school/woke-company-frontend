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

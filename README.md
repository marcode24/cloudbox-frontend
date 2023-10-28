<div align="center">
  <h1>☁️ Cloud Box</h1>
  <a href="https://cloudbox-m.netlify.app" target="_blank">View Demo</a>
  <br/><br/>

  ![Version](https://img.shields.io/github/package-json/v/marcode24/cloudbox-frontend?style=popout&logo=npm)
  ![GitHub CI Workflow Status](https://img.shields.io/github/actions/workflow/status/marcode24/cloudbox-frontend/ci.yml?branch=main&style=popout&logo=testcafe&label=tests)
  ![GitHub repo size](https://img.shields.io/github/repo-size/marcode24/cloudbox-frontend?style=popout&logo=github&label=repo%20size)
  ![GitHub](https://img.shields.io/github/license/marcode24/cloudbox-frontend?style=popout&logo=github&label=license)
  ![GitHub Repo stars](https://img.shields.io/github/stars/marcode24/cloudbox-frontend?style=popout&logo=apachespark&color=yellow&logoColor=yellow)
  ![Github repo views](https://img.shields.io/github/search/marcode24/cloudbox-frontend/cloudbox-frontend?style=popout&logo=github&label=repo%20views)
  ![GitHub last commit](https://img.shields.io/github/last-commit/marcode24/cloudbox-frontend?style=popout&logo=git&label=last%20commit)
</div>

## 🚀 Getting Started

This is a cloud storage application that allows you to upload, download and delete files. Here you can also create folders and subfolders to organize your files.

###  📝 Requirements

- [![Angular](https://img.shields.io/badge/Angular-blue?style=popout&logo=angular&logoColor=red)](https://angular.io/)
- [![Node](https://img.shields.io/badge/Node-gray?style=popout&logo=node.js)](https://nodejs.org/en/)
- [![NPM](https://img.shields.io/badge/NPM-blue?style=popout&logo=npm)](https://www.npmjs.com/)
- [![Git](https://img.shields.io/badge/Git-gray?style=popout&logo=git)](https://git-scm.com/)

Optional tools:

- [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-blue?style=popout&logo=visual-studio-code)](https://code.visualstudio.com/)

### 📦 Installation & Usage

```bash
# Clone this repository
git clone https://github.com/marcode24/cloudbox-frontend

# Go into the repository
cd cloudbox-frontend

# Install dependencies
npm install

# Run the app
ng serve
```

shut it down manually with `Ctrl-C` or `Cmd-C`.

## 📐 Tests

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:cov
```

## 🌎 Environments

| Name       | URL                                                              | PORT |
| ---------- | ---------------------------------------------------------------- | ---- |
| Localhost  | [localhost](http://localhost:4200)                               | 4200 |
| Production | [https://cloudbox-m.netlify.app](https://cloudbox-m.netlify.app) |

## 📁 Folder Structure

    .
    ├── src
    │ ├── app                 # Source code application
    │ │ │── auth              # Module for auth feature
    │ │ ├── core              # Module as Singleton
    │ │ │ ├── components
    │ │ │ ├── enums
    │ │ │ ├── guards
    │ │ │ ├── interceptors
    │ │ │ ├── interfaces
    │ │ │ ├── models
    │ │ │ ├── services
    │ │ │ └── utils
    │ │ ├── features          # Module for features which compose the application
    │ │ ├── shared            # Module for components shared between application modules
    │ │ │ ├── components
    │ ├── assets              # Styles, images, icons, fonts etc
    │ ├── environments        # Config by environment (localhost and production)
    │ └── styles              # Global styles
    └── README.md

## 🖼️ Previews - Desktop

### Login

![Login](https://res.cloudinary.com/dfeujtobk/image/upload/v1683409111/cloudbox/desktop/login_ze2kbb.png)

### Register

![Register](https://res.cloudinary.com/dfeujtobk/image/upload/v1683409111/cloudbox/desktop/register_xze8iw.png)

### Home

![Home](https://res.cloudinary.com/dfeujtobk/image/upload/v1683409111/cloudbox/desktop/home_eshrq7.png)

## 🖼️ Previews - Mobile

### Login

![Login](https://res.cloudinary.com/dfeujtobk/image/upload/v1683409111/cloudbox/mobile/login_rcldxq.png)

### Register

![Register](https://res.cloudinary.com/dfeujtobk/image/upload/v1683409111/cloudbox/mobile/register_tyrfwo.png)

### Home

![Home](https://res.cloudinary.com/dfeujtobk/image/upload/v1683409111/cloudbox/mobile/home_dfui84.png)

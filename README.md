# Hasan Mhd Amin - Portfolio Website

Welcome to the source repository for my personal portfolio website! This project is a living showcase of my professional experience, skills, open-source projects, and technical biography as a Software Engineer and Android/Full Stack Developer.

You can view the live site here: **[https://itshasan.de](https://itshasan.de)**

---

## 🛠 Tech Stack

- **React.js** (Bootstrapped with Create React App)
- **Material-UI (MUI)** for the core component library
- **AOS** for scroll animations
- Custom CSS styling and responsive layouts

---

## 🚀 Getting Started

If you want to run this project locally, fork the repository, or modify the codebase, follow these instructions:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (which comes with `npm`) installed on your machine.

### 1. Install Dependencies
Navigate to the project directory and install the required modules:

```bash
npm install
# or
yarn install
```

### 2. Run the Development Server
To start the app in development mode with hot-reloading:

```bash
npm start
# or
yarn start
```
Open **[http://localhost:3000](http://localhost:3000)** to view it in the browser. The page will reload if you make any edits.

---

## 🏗 Build & Release

When you are ready to publish new changes to the live website, the process is simple thanks to the `gh-pages` package.

### 1. Build for Production
To create an optimized production build of the website:

```bash
npm run build
# or
yarn build
```
This builds the app into the `build` folder, optimizing React and minifying the bundle for the best performance.

### 2. Deploy to GitHub Pages (Live Site)
To automatically build and push the updated code straight to the `gh-pages` branch (which updates `itshasan.de`):

```bash
npm run deploy
```
*(Note: The `deploy` script automatically runs the `build` script first, so you technically only need to run `npm run deploy` to handle both steps).*

---

## 📂 Project Structure

Most of the content you will want to update is located inside the `src/projectsResource` folder. These JSON and JS files act as a simple internal database for the site:

- **`main_config.json`**: Update your name, headline, profile image, CV link, and social media URLs.
- **`experience.js`**: Update your professional journey and timeline.
- **`projects.json`**: Add or remove portfolio projects.
- **`skills.js`**: Update your technical stack and skill list.

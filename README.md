# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This repository contains two implementations:

- Original app: Vite + TypeScript + React + Tailwind + shadcn/ui (under `src/`)
- Static site: Plain HTML/CSS/JS (under `public/`)

You can browse the static site without any build steps.

## How can I run the static site?

Open the `public/` folder in a browser or use a simple local server:

```powershell
# Using Node (if installed)
npx serve public

# Using Python (if installed)
python -m http.server 5500 --directory public
```

### Image Assets

All images are stored locally in `public/images/` for offline support and performance:

- **Hero images:** Used on slideshow across all pages (hero-1.jpg through hero-4.jpg)
- **Archive images:** Trophy, stadium, celebration, and memorabilia categories
- **Error handling:** Automatic fallback to styled placeholders if images fail to load

See [IMAGES.md](IMAGES.md) for detailed image management and customization guide.

### Pages

- `public/index.html` — Home with slideshow and CTAs
- `public/archives.html` — Archives with search, filters, sorting, grid/list views, favorites, and lightbox
- `public/exhibits.html` — Exhibits with timeline and CTAs
- `public/visitor.html` — Visitor hub with contact form validation
- `public/admin.html` — Demo admin login (`admin` / `museum2024`) and basic dashboard

Features preserved in static JS:

- Mobile menu, nav active-state highlighting
- Dark/light theme toggle with persistence
- Archives filtering, sorting, favorites (localStorage), and image lightbox
- Timeline interactions on Exhibits
- Contact form validation and success toast on Visitor

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow to deploy the static site.

1. Create a GitHub account at https://github.com/join
2. Create a new repository (public) and push this code:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: static site + react app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In your repo, go to Settings → Pages → Source and select "GitHub Actions".
4. Push to `main` to trigger the workflow. Your site will be published at:
   `https://<your-username>.github.io/<your-repo>/`

Notes:
- The workflow deploys from the `public/` folder.
- A `public/404.html` and `public/.nojekyll` are included for better Pages behavior.
- The original React app remains in `src/` and can be developed separately.

## How can I run the original React app?

You can still run the React/Vite version:

```powershell
npm i
npm run dev
```

The static site does not require this; both can coexist.

# Job Application Tracker

A simple, local-first job application tracker built with React + Vite. All data is saved in your browser's `localStorage` — nothing leaves your machine.

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  main.jsx                      entry point
  App.jsx                       top-level state and layout
  index.css                     all styling + theme variables
  constants.js                  stages, themes, seed data, helpers
  hooks/
    useLocalStorage.js          localStorage-backed React state
  components/
    Header.jsx                  title + new entry button
    ThemeSwitcher.jsx           theme picker dropdown
    StatsBar.jsx                summary stats
    Toolbar.jsx                 search bar
    ApplicationList.jsx         renders the card list / empty state
    ApplicationCard.jsx         a single application card
    ApplicationFormModal.jsx    add/edit/delete form
```

## Features

- Add, edit, and delete applications
- Each card shows: company, role, stage, location, date applied, round, last action date, and notes
- Search by company, role, or location
- Switch between four color themes (Paper, Slate, Mint, Blush) — your choice is remembered
- Data persists across browser sessions via `localStorage`

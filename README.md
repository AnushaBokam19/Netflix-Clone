# MoviePage – Netflix-style movie browser

A React app that uses the [TMDB API](https://www.themoviedb.org/documentation/api) to show movies and TV in a Netflix-like layout: hero section, horizontal rows, and dark theme with red accents.

## Setup

1. **API key**  
   Create a `.env` file in the project root (or copy from `.env.example`) and set your TMDB API key:

   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

   Get a key at [TMDB API Settings](https://www.themoviedb.org/settings/api).

2. **Install and run**

   ```bash
   npm install
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173).

## Features

- **TMDB integration**: Trending, popular, top rated, and now playing via TMDB API.
- **Netflix-style UI**:
  - Red top banner and “N” branding.
  - Left sidebar (search, notifications, my list, browse).
  - Hero section with backdrop, title, meta, overview, Play/My List.
  - Horizontal scrollable rows: “Popular on Netflix”, “Trending Now”, “Top Rated”, “Now Playing”.
- **Dark theme** with red accents (`#e50914`).

## Tech

- React 19 + Vite 7
- TMDB REST API (trending, popular, top_rated, now_playing)
- Image base: `https://image.tmdb.org/t/p/`

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview production build

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/6a77b075-d304-4342-a055-c9e435c98b6f/web/NP-en-20260406-TRIFECTA-perspective_16d9d85b-77b5-4478-987b-91e30cd0ebd0_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
     ` Bearer ${import.meta.env.VITE_TMDB_KEY}`,
}
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "ne", name: "Nepali" },
  { identifier: "es", name: "Spanish" },
];

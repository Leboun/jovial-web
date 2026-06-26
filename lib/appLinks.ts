// Liens stores Jovial — source unique.
// ⚠️ À remplir le jour de la publication de l'app (App Store / Play Store).
export const APP_STORE_URL = "";
export const PLAY_STORE_URL = "";

// Tant que les deux liens sont vides, l'app est considérée « bientôt disponible ».
export const APP_COMING_SOON = !APP_STORE_URL && !PLAY_STORE_URL;

// Cible des CTA « Télécharger » : le store si publié, sinon la section téléchargement de l'accueil.
export const DOWNLOAD_HREF = APP_STORE_URL || "/#telecharger";

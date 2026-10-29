// Liens stores Jovial — source unique.
// iOS publié le 29/10/2026. ⚠️ Remplir PLAY_STORE_URL le jour de la sortie Android :
// les boutons, la waitlist Android et les CTA « Télécharger » se mettent à jour tout seuls.
export const APP_STORE_URL = "https://apps.apple.com/fr/app/jovial/id6779774685";
export const PLAY_STORE_URL = "";

// Tant que les deux liens sont vides, l'app est considérée « bientôt disponible ».
export const APP_COMING_SOON = !APP_STORE_URL && !PLAY_STORE_URL;
// Disponibilité par store (un store peut sortir avant l'autre).
export const IOS_AVAILABLE = !!APP_STORE_URL;
export const ANDROID_AVAILABLE = !!PLAY_STORE_URL;

// Cible des CTA « Télécharger » : la section téléchargement de l'accueil, qui montre
// les deux boutons (envoyer un utilisateur Android sur l'App Store serait une impasse).
export const DOWNLOAD_HREF = "/#telecharger";

// Apple App Site Association (AASA) — sert /.well-known/apple-app-site-association
// Permet aux Universal Links iOS : un lien https://getjovial.fr/u/... (ou /join/...)
// ouvre directement l'app Jovial (au lieu du schéma jovial:// bloqué dans les webviews).
// Requiert dans app.json : ios.associatedDomains = ["applinks:getjovial.fr", ...]
// + un BUILD (config native). appID = <TeamID>.<bundleIdentifier>.
export const dynamic = "force-static";

const AASA = {
  applinks: {
    apps: [],
    details: [
      {
        appID: "2PKZL7DXX9.fr.getjovial.app",
        paths: ["/u/*", "/join/*"],
      },
    ],
  },
};

export function GET() {
  return new Response(JSON.stringify(AASA), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=3600",
    },
  });
}

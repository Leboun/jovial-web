export type Article = {
  slug: string;
  date: string;
  tag: string;
  tagColor: string;
  tagEmoji: string;
  title: string;
  excerpt: string;
  readTime: string;
  content: string;
  author: string;
  city?: string;
};

export const articles: Article[] = [
  {
    slug: "play-rennes-bar-flechettes-interactives",
    date: "2 juin 2026",
    tag: "Portrait d'établissement",
    tagColor: "#2B4E93",
    tagEmoji: "🏠",
    title: "Play Rennes : le bar à fléchettes interactives qui a tout misé sur l'expérience",
    excerpt:
      "600 000 € d'investissement, 6 dartboards connectés, un ancien joueur de poker pro et un restaurateur de 30 ans d'expérience. Bienvenue chez Play, le bar qui a transformé les fléchettes en spectacle à Vern-sur-Seiche.",
    readTime: "5 min",
    author: "Équipe Jovial",
    city: "Rennes",
    content: `
## L'idée venue de Londres

Adrien Allain a passé cinq ans à Londres en tant que joueur de poker professionnel. C'est là-bas qu'il découvre les bars à fléchettes interactives — concept déjà bien ancré dans la culture britannique — et qu'une évidence s'impose : **ce format n'existe pas encore à Rennes**.

De retour en Bretagne, il convainc Éric Lefaix, restaurateur rennais avec plus de 30 ans d'expérience, de se lancer avec lui. Éric gérait alors son bar La Contrescarpe. Son verdict sur le projet : *"Un endroit convivial et festif, sans nuisances sonores."* L'association se fait naturellement — Adrien apporte la vision, Éric la connaissance du terrain.

## 600 000 € pour transformer une ancienne pizzeria

L'emplacement retenu est à Vern-sur-Seiche, dans une zone commerciale en développement près du Leclerc — les locaux du centre-ville étaient trop chers pour accueillir un espace de cette taille. Une ancienne pizzeria est entièrement rénovée. Budget total : **600 000 €**, financé avec le soutien de BPI France, du Crédit Agricole et du CIC.

Play Rennes ouvre ses portes en **décembre 2024**.

## Ce qu'on trouve à l'intérieur

Le concept repose sur trois jeux :

**6 dartboards interactifs** — chaque cible est connectée à un grand écran. Les scores s'affichent en temps réel, les lancers sont enregistrés et peuvent être rejoués. Plusieurs modes de jeu, du classique 501 aux défis multijoueurs. Tarifs disponibles sur playrennes.fr.

**Shuffleboards** — les planches de palets, rarissimes dans la région Ille-et-Vilaine selon l'équipe. Un jeu de précision et de stratégie qui crée une vraie addiction selon les premiers clients : *"Le shuffleboard en particulier est vraiment addictif."*

**2 tables de ping-pong** — pour souffler entre deux parties ou prolonger la soirée.

En cuisine, Corentin et Lily préparent des plats du jour maison, burgers, planches charcuterie et tapas. Au bar, Baptiste et Mattéo servent 8 bières pression — locales et internationales.

## Une clientèle qui revient

Les avis clients convergent sur l'ambiance : *"Dès qu'on entre, l'atmosphère est différente. On peut jouer sérieusement ou juste se détendre — c'est autre chose qu'un café classique."* Le personnel est régulièrement cité : professionnel, toujours souriant, disponible.

Play attire aussi bien les groupes d'amis que les entreprises (team building) et les compétiteurs qui participent aux **tournois bihebdomadaires ouverts à tous les niveaux**.

## Infos pratiques

**Adresse :** 3 rue de la Blanche Hermine, 35770 Vern-sur-Seiche
**Téléphone :** 02 23 61 27 13 | **Web :** playrennes.fr | **Instagram :** @playrennes
**Horaires :** Mar–Jeu 17h45–0h | Ven 17h45–1h | Sam 16h45–1h | Dim 16h45–23h | Fermé le lundi
**Réservations et tarifs :** playrennes.fr

Retrouvez Play Rennes sur la carte Jovial pour réserver votre créneau et suivre les prochains tournois.
    `,
  },
  // ⚠️ Articles événementiels déplacés dans lib/drafts.ts — à republier 7-10 jours avant l'événement
  /*
  {
    slug: "festival-interceltique-lorient-2026-bars-off-concerts",
    date: "20 juillet 2026",
    tag: "Festival & Off",
    tagColor: "#F59E0B",
    tagEmoji: "🎪",
    title: "Festival Interceltique de Lorient 2026 : le guide des bars et du Off",
    excerpt:
      "Du 31 juillet au 9 août 2026, Lorient devient la capitale mondiale de la musique celtique. 950 000 visiteurs, Yann Tiersen, Agnes Obel, et des dizaines de bars qui vibrent chaque nuit jusqu'à l'aube. Le guide complet du Off.",
    readTime: "6 min",
    author: "Équipe Jovial",
    city: "Lorient",
    content: `
## 55 ans de festival, 950 000 visiteurs

Le Festival Interceltique de Lorient est l'un des plus grands rassemblements culturels d'Europe. Sa 55ᵉ édition se tient du **31 juillet au 9 août 2026**, avec la **Cornouailles britannique** comme nation invitée d'honneur — une première depuis 11 ans — autour du thème *"La Cornouailles, au cœur de la mer Celtique"*.

Dix jours. Environ 950 000 spectateurs. Plus de 300 représentations. Et surtout, une ville entière qui vit au rythme des cornemuses, des bombards, des harpes et des danses du soir au lendemain.

## La programmation officielle 2026

Les grandes têtes d'affiche déjà annoncées :

- **Agnes Obel** (chanteuse-compositrice danoise) — mardi 4 août
- **Yann Tiersen** (set solo & électronique) — mercredi 5 août
- **Eluveitie** (folk-metal suisse, avec Tanork) — jeudi 6 août
- **Cécile Corbel** (harpiste et chanteuse bretonne) — mardi 4 août
- **Grande Parade des Nations Celtes** — dimanche 2 août à 10h00 : 3 500 musiciens et artistes dans les rues de Lorient, 80 000 spectateurs

Les concerts se tiennent au Stade du Moustoir (10 000 places), à l'Espace Jean-Pierre Pichard, au Kleub, au Palais des Congrès et sur le Quai de la Bretagne où des dîners-concerts représentent chaque nation celtique chaque soir.

## Le Off : là où la fête continue vraiment

Le Off du festival, c'est l'âme nocturne de l'Interceltique. Tandis que les scènes officielles ferment, les bars et tavernes du centre-ville prennent le relais jusqu'au bout de la nuit. Sessions irlandaises spontanées, fest-noz, concerts de rue, groupes qui s'installent sur les terrasses — tout est gratuit et imprévisible.

**Tavarn Ar Roue Morvan** — Centre-ville
L'adresse incontournable du Off. Taverne bretonne dont les murs sont tapissés de souvenirs du Bagad de Lann-Bihoué, elle organise des concerts de musique celtique et des fest-noz tout au long du festival. Le lieu de rendez-vous des musiciens entre deux scènes.

**Bar d'En Face (BDF)** — En face du Tavarn Ar Roue Morvan
Jazz sessions, sessions irlandaises, DJ sets — le BDF prend le relais en fin de soirée pour les nuits les plus longues du festival.

**Westport Inn** — Place Polig Montjarret
Pub irlandais qui devient un carrefour incontournable en août. Cuisine irlandaise, ambiance chaleureuse, concerts le week-end.

**Shamrock Irish Pub** — Centre-ville (Parc Jules Ferry)
Au cœur du quartier des bars, le Shamrock attire chaque été une foule cosmopolite. Ambiance garantie du premier au dernier soir du festival.

## La Nuit du Port de Pêche

Chaque dernier samedi du festival, le port de pêche de Lorient se transforme en scène géante. Des musiciens folk et rock y jouent en plein air dans une atmosphère unique, avec la mer en toile de fond. Un moment à part entière du festival, gratuit et inoubliable.

## Comment s'organiser

Le festival étant immense, voici quelques repères pratiques :

- **Réserver l'hébergement maintenant** — les hôtels de Lorient affichent complet dès le mois de mai
- **Transports** : des navettes spéciales circulent pendant toute la durée du festival
- **Off vs. Officiel** : les concerts officiels sont payants (de 15€ à 45€), le Off est entièrement gratuit
- **Meilleur moment pour le Off** : après 22h, quand les scènes officielles se terminent et que les musiciens migrent vers les bars

Sur Jovial, retrouvez les bars lorientais qui participent au Off, leurs programmations et leurs événements en temps réel pendant le festival.
    `,
  },
  */
  /*
  {
    slug: "fete-de-la-musique-bretagne-2026-brest-lorient-saint-brieuc-vannes",
    date: "16 juin 2026",
    tag: "Festival & Off",
    tagColor: "#F59E0B",
    tagEmoji: "🎪",
    title: "Fête de la Musique 2026 en Bretagne : Brest, Lorient, Saint-Brieuc, Vannes",
    excerpt:
      "Le 21 juin, toute la Bretagne chante. Concerts gratuits dans les bars, scènes en plein air, terrasses animées jusqu'à 1h du matin — le guide ville par ville pour ne rien manquer.",
    readTime: "5 min",
    author: "Équipe Jovial",
    content: `
## Le 21 juin, la Bretagne entière en fête

Chaque année le 21 juin, la Fête de la Musique transforme les villes françaises en scènes géantes. En Bretagne, l'événement prend une saveur particulière : musique bretonne, fest-noz spontanés, binious dans les rues pavées et bars animés jusqu'au bout de la nuit. Tour d'horizon des quatre grandes villes bretonnes cette année.

## Brest — du Jardin Kennedy au Port de Commerce

Brest est l'une des villes bretonnes qui investit le plus dans la Fête de la Musique. Les concerts s'étendent du **Jardin Kennedy** au **Port de Commerce**, avec des scènes installées dans les principales places du centre-ville. Tous les styles sont représentés : rock, jazz, électro, musique traditionnelle bretonne.

Les bars du quartier de la Rue de Siam et du Port de Commerce ouvrent leurs terrasses et accueillent des concerts live. Le **Vauban** et la **Carène**, deux salles incontournables de la scène brestoise, participent également aux festivités avec des programmations spéciales.

Entrée libre partout, dès la fin d'après-midi jusqu'à 1h00 du matin.

## Lorient — festival dans le festival

À Lorient, la Fête de la Musique a un goût particulier : la ville est rodée aux grandes fêtes musicales grâce au Festival Interceltique. Les bars du centre-ville — le **Tavarn Ar Roue Morvan**, le **Westport Inn**, le **Shamrock** — organisent des sessions live et des concerts en terrasse.

La place Polig Montjarret et les quais s'animent dès 17h avec des scènes en plein air. Les musiciens amateurs côtoient les professionnels dans une ambiance de fête de quartier à grande échelle. Concerts gratuits dans tous les bars participants jusqu'à 1h.

## Saint-Brieuc — dans les rues du centre historique

Saint-Brieuc transforme son centre médiéval en scène à ciel ouvert. Les ruelles pavées autour de la cathédrale et la place du Martray accueillent groupes de brass band, musiciens bretons et artistes locaux. Les bars du centre participent avec des concerts en terrasse ou en intérieur.

La ville est déjà dans l'état d'esprit festif depuis Art Rock (mai 2026) — la Fête de la Musique s'inscrit naturellement dans cette dynamique. Entrée libre, ambiance familiale en début de soirée puis plus festive après 21h.

## Vannes — port et vieille ville

Vannes combine deux atouts uniques : la **vieille ville médiévale** avec ses remparts et ses ruelles, et le **port**, qui s'anime en été. Le 21 juin, les deux se rejoignent : scènes en plein air dans les places historiques, concerts dans les bars du port et animations sur les quais.

L'**Echonova** (salle de musiques actuelles) organise une scène spéciale "Fête de la Musique" au port. Les bars et restaurants de la rue des Halles et du port restent ouverts et animés jusqu'à minuit passé.

## Les bons réflexes le 21 juin

Quelle que soit la ville, quelques conseils pour profiter au maximum :
- Venez à **pied ou à vélo** — les centres-villes sont fermés aux voitures en soirée
- Les transports en commun fonctionnent jusqu'à 1h30 minimum dans toutes ces villes
- Les bars peuvent servir en terrasse jusqu'à **0h30**
- Le meilleur créneau pour l'ambiance dans les bars : entre **21h et 23h**

Retrouvez tous les bars participants et leurs événements du soir sur Jovial.
    `,
  },
  */
  /*
  {
    slug: "fete-de-la-musique-rennes-2026-bars-programme",
    date: "14 juin 2026",
    tag: "Festival & Off",
    tagColor: "#F59E0B",
    tagEmoji: "🎪",
    title: "Fête de la Musique 2026 à Rennes : les bars qui jouent le jeu",
    excerpt:
      "Le 21 juin 2026, Rennes se transforme en scène géante. Plus de 100 concerts gratuits, des bars animés jusqu'à 1h du matin, les transports en commun toute la nuit. Voici les adresses à ne pas manquer.",
    readTime: "4 min",
    author: "Équipe Jovial",
    city: "Rennes",
    content: `
## 21 juin 2026 : Rennes en musique de 17h à 1h

Chaque année, la Fête de la Musique transforme Rennes en ville-concert. Cette année, l'édition 2026 promet plus de 100 concerts gratuits sur une quinzaine de scènes officielles, de 17h00 à 1h00 du matin. Entrée libre partout. Et les bars rennais jouent le jeu comme jamais.

**Infos pratiques :**
- Date : dimanche 21 juin 2026
- Horaires : 17h00 – 1h00
- Zone à Circulation Limitée (ZCL) : 19h00 – 2h00 (centre-ville fermé aux voitures)
- Métro STAR toute la nuit, bus jusqu'à 5h00
- Vente de boissons en terrasse jusqu'à 0h30

## Les bars rennais à l'affiche

Cette année, des dizaines d'établissements du centre-ville ont monté leurs propres scènes pour accueillir la fête. Voici les adresses confirmées avec leur programmation :

**Barex'po** — 2 rue Jules Simon
Comme ça & Friends aux platines pour une soirée House et Trance. Ouverture dès 17h jusqu'à 1h.

**Bistrot Cocagne** — 12 rue des Dames
Ambiance voyage musical : DJs aux sonorités tropicales, balkaniques et afro-zouk. À partir de 18h.

**Café D'Isly** — 8 rue d'Isly
Rock en live dès 19h30, avec un tribute band attendu à 21h30. Bonne adresse pour les amateurs de guitares.

**Caliente** — 7 Place Saint-Michel
Denis Mitcelli et Sauza au DJ set pour une nuit latine et électro. 18h – 1h.

**Kilkenny's Pub** — 3 rue du Vau Saint-Germain
Groove rock en live à partir de 20h. L'une des salles les plus appréciées du centre historique.

**Hibou Grand-Duc** — 10 rue Dupont des Loges
Techno et électronique jusqu'à 1h. Pour ceux qui aiment finir la nuit autrement.

**Demeter** — Place de la Gare / 26 avenue Janvier
Musique bretonne et électronique en alternance. Dès 18h30, à deux pas du métro.

**Le Hangar** — 1 rue de Dinan
Scène ouverte dès 18h. Ambiance bar de quartier, musique live, bière artisanale.

**Papier Timbré** — 39 rue de Dinan
À deux pas du Hangar, une autre adresse de la rue de Dinan qui s'anime dès 19h.

**Les Grands Gamins** — 40 Mail François Mitterrand
Bar festif avec programmation éclectique. Ouvert dès 18h, une bonne entrée en matière avant d'explorer le centre.

## Les places incontournables

Trois places concentrent l'énergie de la soirée :

**Place Sainte-Anne** — La plus iconique. Entourée de maisons à colombages du XVᵉ siècle, c'est ici que la fête bat son plein le plus longtemps. Plusieurs scènes, milliers de festivaliers, atmosphère électrique.

**Place Saint-Germain** — Le saint-germain des prés rennais. Bars en terrasse tout autour, concerts sur la place, ambiance conviviale.

**Place de la Gare** — Pour commencer la soirée ou finir en douceur, avec un accès direct au métro toute la nuit.

## Comment s'organiser ?

La ZCL (Zone à Circulation Limitée) ferme le centre-ville aux voitures dès 19h. Venez à pied, à vélo ou en métro. Le réseau STAR assure des trajets toute la nuit du 21 au 22 juin, avec des lignes de nuit jusqu'à 5h00.

Sur Jovial, vous retrouvez toutes ces adresses en carte interactive, avec les horaires, l'ambiance et les événements du soir en temps réel.
    `,
  },
  */
  {
    slug: "meilleurs-bars-flechettes-rennes-2026",
    date: "9 juin 2026",
    tag: "Ville & Quartier",
    tagColor: "#10B981",
    tagEmoji: "🏙️",
    title: "Les meilleurs bars à fléchettes de Rennes en 2026",
    excerpt:
      "Fléchettes interactives, tournois, bières artisanales… Rennes s'est imposée comme une vraie capitale bretonne du dart. Voici les 5 adresses à connaître absolument.",
    readTime: "5 min",
    author: "Équipe Jovial",
    city: "Rennes",
    content: `
## Rennes, nouvelle capitale bretonne des fléchettes

En quelques années, la fléchette — et surtout la fléchette interactive — est devenue l'une des activités phares de la sortie nocturne à Rennes. Les nouvelles technologies ont transformé le jeu : cibles connectées, écrans géants, scoring en temps réel, tournois hebdomadaires… Voici les cinq adresses rennaises qui font référence en 2026.

## Play Rennes — le spécialiste (Vern-sur-Seiche)

**Adresse :** 3 rue de la Blanche Hermine, 35770 Vern-sur-Seiche
**Tél :** 02 23 61 27 13 | **Web :** playrennes.fr
**Horaires :** Lun–Jeu 17h45–minuit | Ven 17h45–1h | Sam 16h45–1h | Dim 16h45–23h

Ouvert en décembre 2024 par Éric et Adrien, Play Rennes est l'adresse de référence des fléchettes interactives en Bretagne. Six dartboards connectés retransmettent chaque lancer en temps réel sur des écrans géants. Résultat : chaque partie devient un mini-spectacle.

La carte propose 8 bières pression (locales et internationales), des tapas, burgers et petits plats maison. Des tournois bihebdomadaires permettent aux habitués de se mesurer dans une ambiance conviviale et compétitive.

## Le Grand Bain — l'ambiance guinguette

**Adresse :** 2 Boulevard de la Tour d'Auvergne, 35000 Rennes (quartier Cleunay)
**Horaires :** Mar–Sam 15h–1h | Dim jusqu'à 23h

Ancienne piscine reconvertie en bar, Le Grand Bain joue sur un décor théâtral unique avec fond sonore aquatique et grande terrasse privée. En plus des fléchettes, le bar propose du billard, des concerts live et des soirées stand-up. Capacité 250 personnes, accessible PMR.

## BREWKLYN — le beer garden des sports

**Adresse :** 8 rue Nicolas Joseph Cugnot, 35000 Rennes (Bourg-l'Évêque)
**Tél :** 02 23 46 77 60
**Horaires :** Dim–Mer 11h–23h | Jeu–Sam 11h–1h | Happy hour : 17h–19h30

Avec plus de 300 places, BREWKLYN est le plus grand bar à jeux de Rennes. Fléchettes, billard, pétanque et concerts live plusieurs fois par semaine (rock, funk, acoustique). La sélection de bières artisanales est généreuse, et la cuisine tourne autour des tapas et planches à partager. Idéal pour les grandes tablées.

## Tiffany's Pub — le classique

**Adresse :** 19 rue Paul-Bert, 35000 Rennes
**Tél :** 02 99 38 91 24
**Horaires :** Lun–Ven 10h–3h | Sam 15h–3h | Dim 12h–3h

Institution rennaise depuis des années, Tiffany's propose une salle de billard dédiée (7 tables blackball + 1 US), une salle de fléchettes séparée et une grande terrasse. Pizzas, burgers et bières composent la carte. L'une des rares adresses ouvertes jusqu'à 3h du matin en semaine.

## Les Frères Jacks — hache et fléchettes nouvelle génération

**Adresse :** 10 rue de Bignon, 35000 Rennes
**Horaires :** Mar–Ven 18h–22h | Sam 11h–23h | Dim 14h–19h
**Tarif :** À partir de 19€ / personne

Si vous cherchez quelque chose de différent, Les Frères Jacks propose du lancer de hache, des shurikens et des cibles interactives dans un concept bar-loisirs. L'expérience est immersive et idéale pour une sortie en groupe ou en team building.

## Le bon plan : suivre les tournois sur Jovial

Play Rennes organise des tournois toutes les deux semaines. BREWKLYN propose des soirées thématiques régulières. Le Grand Bain programme concerts et stand-up. Pour ne rien rater et réserver votre créneau directement depuis votre téléphone, retrouvez toutes ces adresses sur la carte Jovial.
    `,
  },
  {
    slug: "art-rock-2026-saint-brieuc-bars-restaurants",
    date: "18 mai 2026",
    tag: "Festival & Off",
    tagColor: "#F59E0B",
    tagEmoji: "🎪",
    title: "Art Rock 2026 à Saint-Brieuc : les bars et restaurants se mettent au rythme du festival",
    excerpt:
      "Du 22 au 24 mai 2026, la 43ᵉ édition d'Art Rock transforme Saint-Brieuc en terrain de fête. Les bars et restaurants de la ville jouent le jeu avec soirées spéciales, concerts live et animations festives.",
    readTime: "5 min",
    author: "Équipe Jovial",
    city: "Saint-Brieuc",
    content: `
## Une ville entière en fête pendant Art Rock 2026

Durant trois jours et trois nuits, le cœur de Saint-Brieuc change totalement de visage. Des milliers de festivaliers affluent dans les rues pour profiter de la programmation du festival, portée cette année par des artistes comme The Kooks, Véronique Sanson, De La Soul, Babyshambles, Suzane, Sébastien Tellier ou encore Gaëtan Roussel.

Mais Art Rock, ce n'est pas uniquement les scènes officielles. Pendant tout le week-end, les bars, pubs et restaurants de Saint-Brieuc jouent eux aussi le jeu avec des soirées spéciales, concerts live, DJ sets, happy hours prolongés et animations festives qui font vibrer toute la ville jusque tard dans la nuit.

Cette effervescence profite naturellement aux établissements briochins qui préparent souvent des animations spéciales pour accueillir les visiteurs :

- concerts acoustiques et showcases après les concerts officiels ;
- DJ sets électro et soirées à thème ;
- terrasses animées et retransmissions ;
- menus spéciaux "festival" ;
- happy hours prolongés ;
- brunchs et afters du dimanche.

Le week-end Art Rock est devenu un moment incontournable pour découvrir l'ambiance festive des bars et restaurants de Saint-Brieuc.

## Les bars de Saint-Brieuc au cœur de l'expérience Art Rock

Pendant le festival, les établissements du centre-ville deviennent de véritables lieux de rencontre pour les festivaliers. Entre deux concerts ou après les scènes principales, beaucoup prolongent la soirée dans les bars de la ville.

Les pubs et bars à ambiance proposent généralement des programmations spéciales avec :

- musique live ;
- soirées électro ;
- DJ locaux ;
- cocktails exclusifs ;
- animations en terrasse.

C'est aussi l'occasion pour les visiteurs de découvrir la scène locale et l'atmosphère chaleureuse du centre historique de Saint-Brieuc.

## Restaurants et food spots : une offre renforcée pendant le festival

Art Rock attire des dizaines de milliers de visiteurs chaque année. Les restaurants de Saint-Brieuc adaptent donc leurs offres avec :

- services en continu ;
- plats rapides avant concerts ;
- menus spéciaux festival ;
- cuisine locale bretonne ;
- street food et options végétariennes.

Que vous recherchiez un restaurant convivial avant un concert ou un lieu où terminer la soirée entre amis, la ville regorge d'adresses qui participent pleinement à l'expérience Art Rock.

## Pourquoi suivre les animations Art Rock sur Jovial ?

Pendant un week-end aussi dense, il peut être difficile de savoir quels bars organisent une soirée spéciale, où trouver un concert live après minuit, quels restaurants restent ouverts tard ou quelles animations sont prévues autour du festival.

C'est exactement là que Jovial devient utile. Grâce à l'application, vous pouvez retrouver les animations des bars et restaurants, les événements autour d'Art Rock, les soirées et concerts à proximité, les lieux tendance du moment et les établissements les plus animés du week-end.

## Art Rock 2026 : un week-end à ne pas manquer en Bretagne

Avec sa programmation éclectique, son ambiance urbaine et ses nombreuses animations dans les établissements de la ville, Art Rock reste l'un des festivals les plus attendus de Bretagne.

Que vous soyez amateur de concerts, de gastronomie, de soirées festives ou simplement à la recherche d'une bonne ambiance pour le week-end, Saint-Brieuc promet une expérience unique du 22 au 24 mai 2026.

Et pour ne rien manquer des meilleures adresses, soirées et animations pendant le festival, gardez un œil sur Jovial.
    `,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

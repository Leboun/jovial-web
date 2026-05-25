/**
 * BROUILLONS — Articles en attente de publication
 *
 * Règle : les articles événementiels sont publiés 7 à 10 jours AVANT l'événement.
 * Pour publier un article : déplacer l'objet dans articles.ts après enrichissement.
 *
 * Calendrier de publication prévu :
 * - fete-de-la-musique-rennes          → publier le ~11 juin 2026 (événement le 21 juin)
 * - fete-de-la-musique-bretagne        → publier le ~11 juin 2026 (événement le 21 juin)
 * - festival-interceltique-lorient     → publier le ~21 juillet 2026 (festival du 31 juillet)
 */

import type { Article } from "./articles";

export const drafts: Article[] = [
  {
    slug: "fete-de-la-musique-rennes-2026-bars-programme",
    date: "11 juin 2026",
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

La ZCL ferme le centre-ville aux voitures dès 19h. Venez à pied, à vélo ou en métro. Le réseau STAR assure des trajets toute la nuit du 21 au 22 juin, avec des lignes de nuit jusqu'à 5h00.

Sur Jovial, vous retrouvez toutes ces adresses en carte interactive, avec les horaires, l'ambiance et les événements du soir en temps réel.
    `,
  },
  {
    slug: "fete-de-la-musique-bretagne-2026-brest-lorient-saint-brieuc-vannes",
    date: "11 juin 2026",
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

Entrée libre, ambiance familiale en début de soirée puis plus festive après 21h.

## Vannes — port et vieille ville

Vannes combine deux atouts uniques : la **vieille ville médiévale** avec ses remparts et ses ruelles, et le **port**, qui s'anime en été. Le 21 juin, les deux se rejoignent : scènes en plein air dans les places historiques, concerts dans les bars du port et animations sur les quais.

L'**Echonova** (salle de musiques actuelles) organise une scène spéciale "Fête de la Musique" au port. Les bars et restaurants de la rue des Halles et du port restent ouverts et animés jusqu'à minuit passé.

## Les bons réflexes le 21 juin

Quelle que soit la ville :
- Venez à **pied ou à vélo** — les centres-villes sont fermés aux voitures en soirée
- Les transports en commun fonctionnent jusqu'à 1h30 minimum dans toutes ces villes
- Les bars peuvent servir en terrasse jusqu'à **0h30**
- Le meilleur créneau pour l'ambiance dans les bars : entre **21h et 23h**

Retrouvez tous les bars participants et leurs événements du soir sur Jovial.
    `,
  },
  {
    slug: "festival-interceltique-lorient-2026-bars-off-concerts",
    date: "21 juillet 2026",
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

- **Réserver l'hébergement maintenant** — les hôtels de Lorient affichent complet dès le mois de mai
- **Transports** : des navettes spéciales circulent pendant toute la durée du festival
- **Off vs. Officiel** : les concerts officiels sont payants (de 15€ à 45€), le Off est entièrement gratuit
- **Meilleur moment pour le Off** : après 22h, quand les scènes officielles se terminent et que les musiciens migrent vers les bars

Sur Jovial, retrouvez les bars lorientais qui participent au Off, leurs programmations et leurs événements en temps réel pendant le festival.
    `,
  },
];

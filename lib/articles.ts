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
  image?: string; // chemin public utilise pour l'apercu de partage (og:image)
};

export const articles: Article[] = [
  {
    slug: "meilleurs-bars-flechettes-bretagne-2026",
    date: "10 juin 2026",
    tag: "Adresses",
    tagColor: "#2B4E93",
    tagEmoji: "📍",
    title: "Les meilleurs bars à fléchettes de Bretagne en 2026",
    excerpt:
      "Du bar du n°1 français Thibault Tricole à Pontivy aux enseignes Ma Target de Brest, Vannes et Lorient : les meilleurs bars à fléchettes de Bretagne en 2026.",
    readTime: "11 min",
    author: "Équipe Jovial",
    city: "Bretagne",
    image: "/dartrad.jpg",
    content: `
Cibles connectées, tournois entre potes, planches de charcuterie et bières artisanales… En quelques années, le bar à fléchettes est devenu un incontournable de la sortie en Bretagne — des grandes villes comme Brest, Rennes ou Vannes jusqu'aux pépites de communes plus discrètes comme Pontivy ou Hillion. Voici nos adresses préférées pour viser dans le mille en 2026.

![Le Piccadilly, bar a flechettes a Saint-Brieuc](/piccadilly-darts.jpg "Photo : Le Piccadilly")

## La fléchette, nouveau réflexe de sortie en Bretagne

Longtemps cantonnée à la cible poussiéreuse au fond du pub, la fléchette s'est offert une seconde jeunesse. La version interactive — cibles électroniques, scoring automatique, écrans qui réagissent à chaque lancer — a transformé un jeu de comptoir en véritable activité de soirée, à faire entre amis, en couple ou en équipe.

La Bretagne n'est pas en reste : une enseigne dédiée, **Ma Target**, a essaimé dans plusieurs villes de la région, de nombreux bars à jeux ont ajouté leurs dartboards, et le meilleur joueur français de l'histoire, **Thibault Tricole**, a même ouvert son propre bar à Pontivy. Tour d'horizon, ville par ville.

## Rennes — la capitale bretonne du dart

Rennes mérite à elle seule son propre guide : fléchettes interactives, tournois hebdomadaires, bars à jeux géants… la scène y est la plus dense de Bretagne, avec des adresses comme Play Rennes, BREWKLYN ou Le Grand Bain.

➡️ On vous a préparé le détail dans notre article dédié : **[Les meilleurs bars à fléchettes de Rennes en 2026](https://www.getjovial.fr/actualites/meilleurs-bars-flechettes-rennes-2026)**, et un focus complet sur **[Play Rennes, le bar à fléchettes interactives](https://www.getjovial.fr/actualites/play-rennes-bar-flechettes-interactives)**.

## Brest — entre la rue de Siam et les pubs de quartier

### Ma Target Brest — la référence interactive

**Adresse :** 11 rue de Siam, 29200 Brest
**Tél :** 02 98 46 94 75
**Horaires :** Lun–Mer 17h–00h | Jeu–Ven 17h–1h | Sam 16h–1h | Dim 16h–22h

En plein cœur de la rue de Siam, l'artère la plus connue de Brest, Ma Target a planté ses cibles connectées et s'est imposée comme l'adresse fléchettes de la ville. Ambiance sports bar décontractée, bonnes bières pression, planches à partager et un patron aux petits soins : on y vient autant pour la partie que pour l'atmosphère. Avec près de 300 avis et une note de 4,7/5, c'est une valeur sûre pour une soirée entre amis.

### Le Loustik Bar — le pub de quartier qui joue le jeu

**Adresse :** 62 rue Armorique, 29200 Brest
**Tél :** 07 69 65 18 11
**Horaires :** Mar–Sam 10h–00h (fermé dimanche et lundi)

Plus intimiste, Le Loustik cultive l'esprit bistrot de quartier : accueil chaleureux, bières à prix doux, et une cible pour se lancer un défi entre deux verres. Une note de 4,8/5 qui en dit long sur la convivialité du lieu — parfait pour une fléchette sans chichis.

## Vannes — la scène fléchettes du Morbihan

### Ma Target Vannes — cibles, planches et ambiance

**Adresse :** 21 rue Marcellin Berthelot, 56000 Vannes
**Tél :** 02 42 05 06 40
**Horaires :** Lun–Mar 17h–00h | Mer–Jeu 16h–00h | Ven–Sam 14h–1h | Dim 14h–23h

Le pendant vannetais de l'enseigne : un lieu joliment décoré, des dartboards au très bon rapport qualité-prix, de belles planches de charcuterie-fromage et des cocktails à prix raisonnables. L'endroit fait aussi salle de concert, ce qui donne souvent une ambiance survoltée le week-end (4,7/5).

### Le Skellig — le pub à fléchettes du centre

**Adresse :** 8 rue Jacques Rueff, 56000 Vannes
**Tél :** 02 97 46 27 09
**Horaires :** Mar–Mer 17h–00h | Jeu–Sam jusqu'à 1h | Dim & Lun en soirée

Un pub vannetais apprécié pour ses bières et cocktails à prix sages, ses planches généreuses et ses quelques jeux dont une cible de fléchettes. Concerts live réguliers et bonne ambiance quand ça se remplit (4,6/5) : l'adresse idéale pour enchaîner partie et pinte.

### SET&SMASH — aux portes de Vannes (Ploeren)

**Adresse :** 24 bis av. Louis de Cadoudal, 56880 Ploeren
**Tél :** 02 97 62 85 47
**Horaires :** Lun–Mer 17h–23h | Jeu–Sam 17h–1h | Dim 17h–23h

À quelques minutes de Vannes, SET&SMASH joue la carte du bar 100 % sport et jeux : fléchettes, poker, diffusions sportives, soirées à thème. Accueil très soigné et ambiance où toutes les générations se mélangent (4,8/5). Une belle alternative si vous cherchez un esprit « club » convivial.

## Lorient — du bar à cocktails au club de passionnés

### Ma Target Lorient — l'incontournable

**Adresse :** 2 rue de Pontcarré, 56100 Lorient
**Tél :** 09 77 97 28 85
**Horaires :** Lun–Jeu 17h–00h | Ven–Sam 17h–1h | Dim fermé

La troisième Ma Target de notre sélection, et l'une des mieux notées (4,8/5). Des pistes de fléchettes très bien entretenues, une vraie diversité de jeux, de la bonne bière et une équipe qui prend le temps d'expliquer aux débutants. L'adresse parfaite pour découvrir le dart à Lorient.

### BARZH — fléchettes et cocartes à la carte

**Adresse :** 9 rue Victor Masse, 56100 Lorient

**Horaires :** Lun–Jeu 17h–23h | Ven–Sam 16h–1h | Dim 17h–1h

Comme son nom complet l'indique (« bar cocktails fléchettes bière artisanale »), BARZH assume sa double vocation : deux cibles électroniques, un large choix de bières, des cocktails soignés et de généreuses planches à partager. Une salle à l'étage permet d'accueillir les plus grands groupes.

### CEP Darts An Oriant — pour les passionnés

**Adresse :** 67 rue Duguay Trouin, 56100 Lorient
**Tél :** 06 46 49 07 04
**Horaires :** Lun & Ven 19h15–22h30 (club)

Plus qu'un bar, un véritable club de fléchettes lorientais : ambiance ultra-conviviale, joueurs de tous niveaux et habitués toujours prêts à transmettre leurs conseils. Idéal si vous voulez progresser ou rejoindre une communauté de mordus.

## Saint-Brieuc — Le Piccadilly, le QG du dart costarmoricain

### Le Piccadilly

**Adresse :** rue Michelet, 22000 Saint-Brieuc
**Tél :** 02 96 33 37 09
**Horaires :** Mar–Sam 18h–1h (fermé dimanche et lundi)

Régulièrement cité comme l'un des meilleurs bars de Saint-Brieuc pour jouer aux fléchettes, Le Piccadilly mise sur une belle sélection de whiskies et de bières, une jolie cour à l'arrière et une ambiance musicale soignée portée par un patron très accueillant (4,7/5). Une adresse qui fait l'unanimité dans les Côtes-d'Armor.

## Les pépites hors des sentiers battus

On l'oublie trop souvent : certaines des meilleures adresses fléchettes de Bretagne ne sont pas au cœur des grandes villes, mais dans des communes plus discrètes. Deux d'entre elles valent largement le déplacement.

### Dartrad — Pontivy, le bar du meilleur joueur français

![Dartrad a Pontivy, le bar a flechettes de Thibault Tricole](/dartrad.jpg "Photo : Dartrad")

**Adresse :** 14 rue Albert de Mun, 56300 Pontivy
**Tél :** 06 30 08 31 13
**Horaires :** Mer 11h–23h | Jeu–Sam 11h–1h | Dim 17h–00h (fermé lundi et mardi)

C'est sans doute la pépite la plus folle de notre sélection. Dartrad a été ouvert par **Thibault Tricole** — surnommé « The French Touch », numéro 1 français, premier joueur tricolore à disputer le championnat du monde PDC et finaliste du championnat du monde WDF 2022 — avec sa compagne Marie Bouffaut. Installé à Malguénac, à deux pas de Pontivy, où il préside aussi le Bleiz Darts Club, le meilleur joueur français de l'histoire a voulu créer dans son fief un véritable repaire pour les amateurs de dart.

Le résultat : un bar à la déco industrielle très soignée, du matériel haut de gamme, de bonnes bières et une ambiance saluée par l'ensemble des avis (4,8/5). Le concept a quelque chose d'unique en France : on peut y croiser un champion et profiter de ses conseils. Débutant curieux ou joueur confirmé, c'est une étape incontournable du dart breton — et une vraie raison de pousser jusqu'à Pontivy.

### Le Griffin — Hillion, le social darts dans la baie de Saint-Brieuc

![Le Griffin a Hillion, social darts dans la baie de Saint-Brieuc](/le-griffin-darts.jpg "Photo : Le Griffin")

**Adresse :** 1 rue des Grands Champs, 22120 Hillion
**Tél :** 09 77 00 85 75 | **Web :** legriffin.fr
**Horaires :** Lun–Sam 10h–21h | Dim 14h–20h

La preuve qu'une petite commune peut abriter un grand concept. Niché à Hillion, dans la baie de Saint-Brieuc, **Le Griffin** est un lieu hybride — cave à bières, coffee shop et bar — entièrement pensé autour du **social darts** : des cibles connectées avec scoring par caméra et une interface ludique, accessibles à tous les niveaux. Fondé par Anthony, il y ajoute du rétrogaming et la diffusion des grands matchs.

Avec une note d'environ 4,8/5 sur plusieurs centaines d'avis, Le Griffin s'est imposé en un temps record comme une adresse de référence du secteur briochin. Belle sélection de bières artisanales, accueil chaleureux, terrasse couverte : l'endroit idéal pour découvrir la fléchette interactive entre amis, en famille ou pour un afterwork — la cible se réserve même à l'avance.

## Quimper — le dart au cœur des pubs

### Ceili

**Adresse :** 4 rue Aristide Briand, 29000 Quimper
**Tél :** 02 98 95 17 61
**Horaires :** tous les jours dès 11h30 (jusqu'à 1h)

Véritable institution quimpéroise (plus de 1 600 avis, 4,6/5), ce pub à l'irlandaise est le repaire des amateurs de fléchettes de la ville : il abrite le **Ceili Dart's Club**, qui réunit les joueurs de cibles électroniques et traditionnelles. Large choix de bières pression, ambiance animée, terrasse : l'adresse idéale pour enchaîner une partie et une pinte en plein centre.

Pour une soirée plus orientée jeux, *Le Big Bang* (110 rue de Bénodet) complète l'offre quimpéroise avec ses jeux de société, son coin rétrogaming et sa déco soignée.

## Saint-Malo — un berceau de la fléchette électronique

Petite surprise : Saint-Malo est l'un des berceaux historiques de la fléchette électronique en France. C'est ici qu'est installé **Shop Loisirs**, à l'origine de la diffusion de la cible électronique dans l'Hexagone depuis 1992, et la cité corsaire compte plusieurs clubs de dart actifs. De quoi trouver largement où viser, intra-muros.

### L'Equinoxial

**Adresse :** 3 rue du Puits-aux-Braies, 35400 Saint-Malo
**Tél :** 02 90 10 24 99
**Horaires :** basse saison Mar–Sam 17h–1h | haute saison tous les jours

En plein intra-muros, près de la Grande Porte, ce pub à l'ambiance irlandaise (Guinness, rhums arrangés maison, esprit rock'n'roll) propose une sélection de jeux de pub dont une cible de fléchettes, et diffuse les matchs. Accueil chaleureux et l'un des bars ouverts le plus tard de la vieille ville (4,5/5).

### L'Alchimiste

**Adresse :** 7 rue Saint-Thomas, 35400 Saint-Malo

Réparti sur trois niveaux, ce bar atypique à l'esprit rock cache à son sous-sol un billard et un jeu de fléchettes. Déco vintage, éclairage tamisé, belle sélection de bières et de cocktails : parfait pour une partie un peu à l'écart (4,5/5).

## Comment choisir son bar à fléchettes ?

- **Pour découvrir :** privilégiez une enseigne dédiée type Ma Target, où les cibles électroniques comptent les points à votre place — idéal quand on débute.
- **Pour la compétition :** visez les bars à tournois réguliers ou un club comme CEP Darts à Lorient.
- **Pour une soirée groupe :** choisissez les grands bars à jeux qui cumulent fléchettes, billard et planches à partager.
- **Pour l'ambiance pub :** les adresses de quartier (Le Loustik, Le Piccadilly, Le Skellig) offrent une fléchette plus « cosy », entre deux pintes.

## Bientôt, retrouve tout ça sur Jovial

**Jovial** arrive très prochainement : l'appli qui réunira les bars, activités et événements près de chez toi — fléchettes comprises. L'idée : repérer les adresses sur une carte interactive, suivre les tournois et réserver ta soirée en quelques secondes. Des lieux comme ceux de ce guide sont exactement ce qu'on a hâte de te faire découvrir au lancement.

📲 *Disponible très prochainement sur l'App Store et Google Play — gratuit, sans publicité.*
    `,
  },
  {
    slug: "finale-ligue-des-champions-2026-bars-bretagne",
    date: "27 mai 2026",
    tag: "Adresses",
    tagColor: "#2B4E93",
    tagEmoji: "📍",
    title: "Finale de la Ligue des Champions : les meilleurs bars pour la vivre en Bretagne",
    excerpt:
      "Rennes, Saint-Malo, Brest, Quimper, Morlaix, Lorient, Vannes, Saint-Brieuc, Lannion, Guingamp — les meilleures adresses de Bretagne pour vibrer devant la finale, département par département.",
    readTime: "7 min",
    author: "Équipe Jovial",
    city: "Bretagne",
    content: `
## PSG - Arsenal. Budapest. Samedi 31 mai à 18h.

Vingt ans. C'est le temps qu'il a fallu à Arsenal pour retrouver une finale de Ligue des Champions. En face, le PSG, tenant du titre, qui rêve de doubler la mise. À Budapest, au Puskás Aréna, l'une des affiches les plus attendues de la décennie va se jouer devant 67 000 spectateurs — et des millions de regards rivés sur un écran.

Si vous n'êtes pas dans les tribunes hongroises, autant être dans la meilleure salle possible. Voici les adresses en Bretagne où l'ambiance sera à la hauteur du match.

**Coup d'envoi : 18h00. Prévoyez d'arriver au moins 30 minutes avant — les meilleures places partent vite les soirs de finale.**

---

## Ille-et-Vilaine (35)

### BDS — Bar des Sports · Rennes
*Rennes centre / Pacé / Vern-sur-Seiche — bds-restaurant.com*
Fondé notamment par l'ancien joueur du Stade Rennais Romain Danzé, le BDS est devenu en quelques années LA référence du sport à Rennes. Plusieurs grands écrans par étage, cuisine servie en continu, ambiance garantie dès le coup d'envoi. Ouvert 7j/7 de 10h à minuit — et avec trois adresses dans l'agglo, pas d'excuse pour rater la finale.

### Hall's Beer · Rennes
*Rue Saint-Denis, Rennes*
Un grand bar en bois et pierres brutes, ambiance rock, et dans la salle du fond : un écran géant de 1,5 × 2 m avec son stéréo HD. La particularité ? Trois matchs peuvent être diffusés simultanément — utile si vous avez des dissidents Arsenal dans le groupe. Terrasse sur la rue Saint-Denis pour l'avant-match.

### Club Citron · Rennes
*Proche du Roazhon Park, Rennes*
Piste d'athlétisme peinte au sol, écrans géants sur tous les murs, salle spacieuse — le Club Citron est fait pour les grands événements sportifs. L'adresse idéale si vous êtes un groupe nombreux et que vous voulez de la place pour célébrer (ou pleurer) dans de bonnes conditions.

### Le Dock · Saint-Malo
*41 quai Duguay-Trouin, Saint-Malo — @ledock_saintmalo*
Un entrepôt portuaire reconverti en bar face aux remparts de Saint-Malo. Cinq écrans dans la salle, un écran géant en terrasse pour regarder PSG-Arsenal avec la mer en toile de fond. L'une des expériences visuelles les plus uniques de toute la région pour un soir de finale.

### BDS Saint-Malo · Saint-Malo
*Saint-Malo — bds-restaurant.com*
La franchise BDS a aussi posé ses valises à Saint-Malo. Même ADN qu'à Rennes : grands écrans, cuisine en continu, baby-foot et fléchettes pour les impatients d'avant-match. Ouvert jusqu'à minuit les soirs de compétition.

### Le Cactus · Fougères
*51 boulevard Jean Jaurès, 35300 Fougères — Tél. 02 99 94 51 82*
130 places, une salle taillée pour les soirées foot, référencée sur Allomatch pour ses retransmissions régulières. Fléchettes, bières pression, soirées à thème — Le Cactus est l'adresse incontournable du nord Ille-et-Vilaine pour les amateurs de sport. Idéal pour éviter la route jusqu'à Rennes.

### O'Shannon Pub · Redon
*62 Grande Rue, 35600 Redon — Tél. 02 99 71 48 28*
Au cœur du vieux port de Redon, à la frontière du Morbihan et de la Loire-Atlantique, l'O'Shannon est un pub irlandais qui a fait de la diffusion sportive l'un de ses piliers. Ambiance chaleureuse, bonne sélection de bières, et un écran pour ne rien rater du duel PSG-Arsenal. L'adresse du pays de Redon pour ce samedi soir.

---

## Finistère (29)

### Klub House · Brest
*Zone de Kergaradec, Brest — klubhouse.fr*
Le sport bar le plus ambitieux de Bretagne occidentale. Écran principal de 10 m² avec gradins façon tribune, plus de 20 bières pression, deux terrasses dont une sur le toit. Le Klub House a été conçu pour exactement ce type de soirée — une finale européenne diffusée dans les meilleures conditions possibles. Réservation conseillée.

### Pub Hamilton · Brest
*2 rue de la 2ème DB, 29200 Brest — Tél. 02 98 43 32 32*
Référencé par le Stade Brestois parmi les adresses incontournables pour regarder les matchs, le Pub Hamilton est un classique du centre brestois. Billard, ambiance pub authentique, retransmissions régulières. Pour ceux qui préfèrent l'atmosphère d'un vrai pub à l'américaine du sport bar.

### Le KEMP'5 · Quimper
*Quimper — kemp-5.fr*
Six écrans, bar lounge et restauration dans un complexe soccer indoor — le KEMP'5 propose une expérience sport immersive à Quimper. Ambiance passionnée garantie pour une finale de cette envergure. L'alternative aux bars du centre-ville pour ceux qui veulent du calme et de la place.

### Bar des Sports · Morlaix
*68 rue Ploujean, 29600 Morlaix — Tél. 02 98 88 31 67*
L'adresse historique du sport à Morlaix. Bar de quartier à l'ambiance authentique, clientèle locale fidèle et grand écran pour les soirées européennes. Pas de chichi, pas de prétention — juste le foot, bien regardé, entre gens du coin.

### BlackRock Irish Pub · Landerneau
*18 rue Chanoine Kerbrat, 29800 Landerneau — blackrock-irishpub.bzh — @blackrock.landerneau*
Pub irlandais niché dans une auberge du XVIIe siècle en plein cœur de Landerneau. Bières irlandaises et bretonnes à la pression, concerts live réguliers et retransmissions foot et rugby. L'adresse de référence du Pays de Landerneau pour PSG-Arsenal.

### V and B · Concarneau
*Concarneau*
Bar à bières spécialisé avec retransmissions sportives et une belle sélection de bières artisanales. Pour les habitants de Concarneau et du sud Finistère, c'est l'alternative sérieuse à la route jusqu'à Quimper. Grande finale, grande bière — l'équation est simple.

---

## Morbihan (56)

### Tavarn Ar Roue Morvan · Lorient
*Centre-ville, Lorient*
La taverne bretonne de référence de la scène nocturne lorientaise. Murs chargés d'histoire, bières bretonnes à la pression, atmosphère incomparable. Les soirs de grande compétition, le Tavarn se transforme : les tables se remplissent vite, les voix montent, et les cris de but résonnent jusqu'à la rue. Arrivez impérativement avant 17h30 pour PSG-Arsenal.

### Le Shamrock · Lorient
*29 place Jules-Ferry, 56100 Lorient*
Pub irlandais en plein cœur de Lorient, place Jules-Ferry. Grand écran, ambiance festive et clientèle de supporters passionnés — le Shamrock est depuis des années le point de ralliement pour les grands soirs européens. Si le PSG marque, vous l'entendrez depuis la place.

### Le Bar d'En Face (BDF) · Lorient
*En face du Tavarn Ar Roue Morvan, Lorient*
Juste en face du Tavarn, le BDF assure le relais avec ses propres écrans pour le match, et prolonge la soirée avec sessions live et DJ sets. Le combo parfait : Tavarn pour le match, BDF pour l'after — ou vice versa selon l'ambiance.

### Le Bar des Sports · Vannes
*2 min de la place Gambetta, 56000 Vannes — Tél. 02 97 47 27 12*
Établi depuis plus de 60 ans à deux pas du port, c'est la référence sportive vannetaise recommandée par l'Office de Tourisme du Golfe du Morbihan. Trois écrans dont deux géants, service efficace même à salle comble. Ouvert mar–dim 10h30–minuit.

### Dartrad · Pontivy
*14 rue Albert de Mun, 56300 Pontivy — @dartrad_bar*
Bar à fléchettes connectées au cœur de Pontivy, avec une communauté locale solide sur Facebook et Instagram. Les grands matchs passent sur les écrans du bar — et l'ambiance fléchettes avant PSG-Arsenal, c'est une façon originale de chauffer la salle avant 18h.

---

## Côtes-d'Armor (22)

### BDS Saint-Brieuc · Saint-Brieuc
*Quartier Brézillet, Saint-Brieuc — bds-restaurant.com*
Le sport bar le plus complet des Côtes-d'Armor. Grande terrasse extérieure, fléchettes, baby-foot, pétanque, et plusieurs écrans pour ne rien rater de PSG-Arsenal. La cuisine tourne en continu jusqu'à 22h30 — vous pouvez dîner et regarder la finale dans le même lieu, sans vous presser.

### Bar des Sports · Guingamp
*55 rue Notre Dame, 22200 Guingamp — Tél. 02 96 43 70 77*
Une institution guingampaise, fidèle à son nom depuis des années. Atmosphère authentique de bar de supporters, sans fioriture — les habitués s'y retrouvent à chaque grande soirée européenne. La référence du secteur pour regarder le foot dans une vraie ambiance locale.

### Campbell's Pub · Guingamp
*14 place Saint-Michel, 22200 Guingamp — Tél. 02 96 43 85 32 — @campbells_pub*
Bar de nuit ouvert jusqu'à 3h le week-end, avec grand écran en plein cœur de Guingamp. Cadre convivial, bières pression, soirées DJ — et une salle qui prend vie dès que l'enjeu est là. L'une des meilleures options du Guingampais pour PSG-Arsenal.

### Pub Le Zinc · Lannion
*46 rue de Tréguier, 22300 Lannion — Tél. 09 81 93 26 44*
Bar lannionnais référencé sur Allomatch pour ses retransmissions foot régulières. Ambiance de quartier, fléchettes et tournois de poker — Le Zinc rassemble une clientèle locale passionnée qui n'a pas besoin d'un grand écran 10 m² pour vibrer devant une finale.

### Bar Le Duclos · Dinan
*20 place Duclos, 22100 Dinan — Tél. 02 96 39 95 74*
En plein cœur de la vieille ville médiévale de Dinan, Le Duclos est LA référence locale pour le foot et le rugby. Terrasse sur la place, clientèle fidèle, atmosphère qui monte d'un cran les soirs de compétition. Regarder PSG-Arsenal depuis la place Duclos avec les remparts en fond — difficile de faire mieux à Dinan.

---

## Quelques conseils avant le coup d'envoi

**Arrivez tôt.** Le coup d'envoi est à 18h — une heure qui change tout. Pas besoin de poser une journée, mais il faut prévoir d'être installé vers 17h15-17h30. Les meilleurs sièges face à l'écran partent vite les soirs de finale.

**Réservez si vous êtes en groupe.** Beaucoup de ces établissements ne prennent pas de réservation habituellement, mais certains acceptent des demandes pour les grands événements. Un coup de téléphone la veille ne coûte rien.

**Pensez à l'after.** Si le PSG gagne, la nuit risque de durer. Si Arsenal crée l'exploit, idem. Choisissez un bar qui ferme tard — ou vérifiez ce qui se passe à côté.

Avec **Jovial**, retrouvez toutes ces adresses sur la carte interactive, leurs événements du soir et les animations prévues près de chez vous.

Bonne finale — et que le meilleur gagne.
    `,
  },
  {
    slug: "play-rennes-bar-flechettes-interactives",
    date: "25 mai 2026",
    tag: "Adresses",
    tagColor: "#2B4E93",
    tagEmoji: "📍",
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
    date: "25 mai 2026",
    tag: "Adresses",
    tagColor: "#2B4E93",
    tagEmoji: "📍",
    title: "Les meilleurs bars à fléchettes de Rennes en 2026",
    excerpt:
      "Fléchettes interactives, tournois, bières artisanales… Rennes s'est imposée comme une vraie capitale bretonne du dart. Voici les 5 adresses à connaître absolument.",
    readTime: "5 min",
    author: "Équipe Jovial",
    city: "Rennes",
    content: `
## Rennes, nouvelle capitale bretonne des fléchettes

En quelques années, la fléchette — et surtout la fléchette interactive — est devenue l'une des activités phares de la sortie nocturne à Rennes. Les nouvelles technologies ont transformé le jeu : cibles connectées, écrans géants, scoring en temps réel, tournois hebdomadaires… Voici les cinq adresses rennaises qui font référence en 2026.

Rennes fait partie de notre tour des [meilleurs bars à fléchettes de Bretagne](/actualites/meilleurs-bars-flechettes-bretagne-2026).

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
    tag: "Festivals",
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

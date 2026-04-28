# UI Kit complet — Evoria

## 1. ADN visuel

Evoria est une application orientée équipe, pensée pour organiser, collaborer et faire avancer les projets avec fluidité. Son interface doit inspirer la clarté, la structure, la modernité, la circulation de l’information et la progression collective.

Le style visuel doit rester sobre, distinctif et dynamique.

---

## 2. Fondations de marque

### 2.1 Palette principale

#### Couleurs de marque

* **Midnight** : `#020617` — fond principal, structure, profondeur
* **Navy** : `#0F172A` — surfaces sombres secondaires
* **Blue** : `#2563EB` — couleur principale d’action
* **Violet** : `#7C3AED` — collaboration, innovation, accent secondaire
* **Pink** : `#EC4899` — accent dynamique ponctuel
* **Gold** : `#F59E0B` — mise en avant rare et premium

#### Neutres UI

* **Slate 950** : `#020617`
* **Slate 900** : `#0F172A`
* **Slate 800** : `#1E293B`
* **Slate 700** : `#334155`
* **Slate 600** : `#475569`
* **Slate 500** : `#64748B`
* **Slate 400** : `#94A3B8`
* **Slate 300** : `#CBD5E1`
* **Slate 200** : `#E2E8F0`
* **Slate 100** : `#F1F5F9`
* **White** : `#FFFFFF`

### 2.2 Dégradé principal

Dégradé de marque recommandé :

* `linear-gradient(135deg, #2563EB 0%, #7C3AED 52%, #EC4899 100%)`

Usage conseillé :

* logo
* éléments hero
* boutons spéciaux
* indicateurs de progression premium

À éviter sur :

* texte long
* arrière-plans trop larges
* composants secondaires répétitifs

### 2.3 Couleurs fonctionnelles

* **Success** : `#22C55E`
* **Warning** : `#F59E0B`
* **Error** : `#EF4444`
* **Info** : `#38BDF8`

### 2.4 Répartition d’usage

* 70% neutres et fonds
* 20% bleu et violet
* 8% accent rose
* 2% doré maximum

---

## 3. Typographie

### 3.1 Familles

* **Titres / headings / navigation majeure** : `Sora`
* **Corps de texte / UI / formulaires** : `Inter`

### 3.2 Hiérarchie typographique

#### Display

* Display XL : 48px / 56px / 700
* Display L : 40px / 48px / 700

#### Headings

* H1 : 32px / 40px / 700
* H2 : 28px / 36px / 600
* H3 : 24px / 32px / 600
* H4 : 20px / 28px / 600
* H5 : 18px / 26px / 600
* H6 : 16px / 24px / 600

#### Texte

* Body L : 18px / 28px / 400
* Body M : 16px / 24px / 400
* Body S : 14px / 22px / 400
* Caption : 12px / 18px / 500
* Label : 13px / 18px / 600

### 3.3 Règles d’usage

* Sora uniquement pour structurer la lecture et signer l’identité.
* Inter pour tout ce qui doit être lu vite et souvent.
* Éviter les tailles en dessous de 14px pour le contenu important.
* Letter-spacing légèrement resserré sur Sora pour les grands titres.

---

## 4. Grille, spacing et layout

### 4.1 Système d’espacement

Base : **8px**

Échelle recommandée :

* 4px
* 8px
* 12px
* 16px
* 20px
* 24px
* 32px
* 40px
* 48px
* 64px

### 4.2 Rayons

* XS : 8px
* S : 12px
* M : 16px
* L : 20px
* XL : 24px
* Pill : 999px

### 4.3 Ombres

* **Shadow soft** : ombre discrète pour cartes standards
* **Shadow medium** : cartes interactives, menus flottants
* **Shadow glow** : halo bleu/violet très léger sur éléments importants

Règle : jamais d’ombre lourde ou trop floue façon template cheap.

### 4.4 Layout général

* Sidebar fixe
* Header de section simple et aéré
* Contenu en cartes ou panneaux
* Largeur max recommandée pour contenus textuels : 720–860px
* Largeur max dashboard : 1440px

---

## 5. Mode sombre et mode clair

### 5.1 Mode par défaut

Le **mode sombre** est le mode natif d’Evoria.

Pourquoi :

* plus cohérent avec l’identité premium
* plus immersif
* meilleur rendu du dégradé de marque

### 5.2 Mode clair

Prévoir un mode clair complet et cohérent, pas un simple inverse approximatif.

#### Règles

* conserver les mêmes contrastes logiques
* éviter le blanc pur comme fond massif
* préférer des gris très clairs légèrement bleutés

---

## 6. Tokens de design

### 6.1 Couleurs CSS

```css
:root {
  --evoria-bg: #020617;
  --evoria-surface: #0F172A;
  --evoria-surface-2: #1E293B;
  --evoria-border: #334155;
  --evoria-text: #F8FAFC;
  --evoria-text-muted: #94A3B8;
  --evoria-primary: #2563EB;
  --evoria-secondary: #7C3AED;
  --evoria-accent: #EC4899;
  --evoria-gold: #F59E0B;
  --evoria-success: #22C55E;
  --evoria-warning: #F59E0B;
  --evoria-error: #EF4444;
  --evoria-info: #38BDF8;
  --evoria-gradient: linear-gradient(135deg, #2563EB 0%, #7C3AED 52%, #EC4899 100%);
}
```

### 6.2 Radius

```css
:root {
  --radius-xs: 8px;
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 20px;
  --radius-xl: 24px;
  --radius-pill: 999px;
}
```

### 6.3 Espacements

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
}
```

---

## 7. Composants de base

### 7.1 Boutons

#### Variantes

* **Primary** : fond bleu ou dégradé, texte blanc
* **Secondary** : fond violet profond ou surface contrastée
* **Tertiary** : fond discret, contour ou surface simple
* **Ghost** : sans fond, hover léger
* **Danger** : fond rouge
* **Gold / Premium** : usage très rare

#### Tailles

* Small
* Medium
* Large

#### États

* Default
* Hover
* Active
* Focus visible
* Disabled
* Loading

#### Règles

* Toujours un focus visible accessible
* Icône possible à gauche ou droite
* Éviter plus d’un bouton primary par zone dense

### 7.2 Champs de formulaire

#### Types à normaliser

* Input texte
* Email
* Password
* Search
* Number
* Textarea
* Select
* Multi-select
* Date picker
* Time picker

#### États

* Default
* Hover
* Focus
* Filled
* Error
* Disabled
* Success

#### Règles visuelles

* fonds légèrement contrastés
* bordure nette mais discrète
* labels toujours visibles
* helper text sous le champ
* message d’erreur court et précis

### 7.3 Checkbox, radio, switch

#### Checkbox

Usage : sélections multiples, filtres, permissions, tâches

#### Radio

Usage : choix unique visible

#### Switch

Usage : activer / désactiver une préférence ou un état

Règle : ne pas mélanger switch et checkbox pour des actions identiques.

### 7.4 Badges et tags

#### Variantes

* Neutral
* Info
* Success
* Warning
* Error
* Gradient / Brand

#### Usages

* statut de tâche
* rôle utilisateur
* priorité
* catégorie projet
* présence d’un filtre actif

### 7.5 Avatars

#### Types

* avatar simple
* groupe d’avatars superposés
* avatar avec statut en ligne
* avatar placeholder avec initiales

#### Usages

* équipe projet
* assignation de tâche
* commentaires
* activité récente

### 7.6 Cartes

#### Types

* carte standard
* carte projet
* carte statistique
* carte tâche
* carte membre
* carte document
* carte activité

#### Structure recommandée

* titre
* méta-infos
* contenu principal
* actions secondaires

Règle : une carte = une fonction dominante. Éviter les cartes-couteaux suisses.

### 7.7 Navigation

#### Sidebar

Doit contenir :

* logo
* navigation principale
* projets récents ou épinglés
* espace utilisateur
* accès paramètres

#### Topbar / header

* titre de page
* recherche globale
* notifications
* profil
* CTA contextuel

#### Tabs

* tabs de section
* tabs de contenu
* tabs filtrantes

### 7.8 Tableaux

#### Types

* tableau simple
* tableau avec tri
* tableau avec filtres
* tableau avec sélection multiple
* tableau avec actions inline

#### Règles

* lignes aérées
* entêtes claires
* zebra facultatif mais léger
* jamais d’effet “Excel 2009 en crise”

### 7.9 Listes

#### Types

* liste de tâches
* liste d’activité
* liste de fichiers
* liste de notifications
* liste de projets

Chaque liste doit avoir :

* hiérarchie claire
* statut visible
* action rapide identifiable

### 7.10 Modales et panneaux

#### Types

* modale de confirmation
* modale d’édition
* panneau latéral détaillé
* drawer mobile

#### Règles

* préférer les panneaux latéraux pour l’édition riche
* réserver les modales aux actions courtes ou critiques

### 7.11 Menus flottants et dropdowns

#### Types

* menu d’actions
* menu profil
* filtre dropdown
* sélecteur de projet

Règle : ne jamais surcharger un dropdown avec une logique complexe qui mérite une vraie vue.

### 7.12 Tooltips

Usage : expliquer une action, un statut ou une icône peu évidente.

Règle : un tooltip doit aider, pas traduire un design raté.

### 7.13 Notifications et feedback

#### Types

* toast succès
* toast erreur
* toast info
* bannière système
* message inline de validation

#### Règles

* messages courts
* ton clair
* action possible si utile

### 7.14 États vides

Chaque module doit prévoir un empty state avec :

* un titre utile
* une phrase explicative
* une action principale
* éventuellement une illustration simple

Exemples :

* aucun projet
* aucune tâche assignée
* aucune activité récente
* aucun résultat de recherche

### 7.15 États de chargement

#### Types

* skeleton cards
* skeleton table
* spinner discret
* barre de progression

Règle : privilégier les skeletons quand la structure du contenu est connue.

### 7.16 États d’erreur

Prévoir :

* erreur mineure inline
* erreur de page
* erreur réseau
* erreur permission
* erreur ressource introuvable

Ton : direct, utile, jamais dramatique.

---

## 8. Composants métier pour Evoria

### 8.1 Carte projet

Doit pouvoir afficher :

* nom
* description courte
* équipe
* statut
* progression
* échéance
* priorité

### 8.2 Carte tâche

Doit pouvoir afficher :

* titre
* assigné à
* statut
* date limite
* priorité
* tags

### 8.3 Barre de progression projet

Variantes :

* simple linéaire
* segmentée
* milestone

### 8.4 Bloc activité récente

Exemples :

* Clara a déplacé une tâche
* Hugo a commenté un document
* 3 tâches terminées aujourd’hui

### 8.5 Bloc collaboration

* membres connectés
* commentaires récents
* demandes en attente
* invitations

### 8.6 Bloc métriques

Exemples :

* projets actifs
* tâches terminées
* temps moyen de résolution
* charge par équipe

### 8.7 Fil d’activité / timeline

Doit rester lisible même dense.
Prévoir :

* avatar
* action
* date
* cible de l’action
* filtre par type

### 8.8 Statuts standards

Définir un vocabulaire stable :

* brouillon
* en cours
* à valider
* bloqué
* terminé
* archivé

---

## 9. Accessibilité

### Règles clés

* contraste AA minimum
* focus visible partout
* navigation clavier complète
* icônes non seules pour les actions critiques
* tailles de texte adaptables
* ne jamais utiliser la couleur seule pour transmettre une information

### Mode accessibilité à prévoir

* taille de texte augmentée
* contraste renforcé
* densité réduite
* meilleure lisibilité des bordures

---

## 10. Iconographie et illustrations

### Icônes

Style recommandé :

* simple
* arrondi
* cohérent
* moderne

Exemples de familles compatibles :

* Lucide
* Heroicons
* Phosphor

### Illustrations

* minimalistes
* géométriques
* jamais enfantines
* réservées aux empty states, onboarding, pages marketing

---

## 11. Règles de cohérence UI

* Une seule logique visuelle par type d’action.
* Un seul composant = un seul rôle principal.
* Le primary signale l’action principale, pas une envie décorative.
* Les couleurs d’accent ne remplacent pas la hiérarchie.
* Les composants doivent respirer.
* Le dégradé est une signature, pas du papier peint.

---

## 12. Priorité de production du kit

### Niveau 1 — indispensable

* couleurs
* typographie
* boutons
* inputs
* sidebar
* topbar
* cartes
* badges
* tableaux
* toasts

### Niveau 2 — très important

* modales
* dropdowns
* tabs
* checkboxes / radios / switches
* empty states
* skeleton loaders

### Niveau 3 — avancé

* timeline d’activité
* widgets statistiques
* sélecteurs complexes
* vues filtres avancées
* composants collaboratifs temps réel

---

## 13. Stack frontend conseillée pour l’implémentation

Pour un frontend React moderne :

* **Tailwind CSS** pour les fondations utilitaires
* **shadcn/ui** comme base de composants à personnaliser
* **Lucide** pour les icônes
* **clsx / cva** pour gérer les variantes propres

Important : ne pas prendre un kit tout fait et subir son identité. Il faut le plier à Evoria, pas l’inverse.

---

## 14. Bibliothèque de composants — version exploitable

## 14.1 Principes de construction

Chaque composant Evoria doit être pensé avec les mêmes couches :

* **variant** : rôle visuel principal
* **size** : taille normalisée
* **state** : état d’interaction
* **content** : texte, icône, badge, compteur, avatar…
* **accessibility** : focus, contraste, aria, navigation clavier

Convention recommandée pour React :

* composants atomiques dans `components/ui`
* composants métier dans `components/app`
* variantes gérées avec `cva`
* fusion des classes avec `clsx` ou `cn`

---

## 14.2 Boutons

### Rôle

Déclencher une action immédiate.

### Variants

* `primary`
* `secondary`
* `tertiary`
* `ghost`
* `danger`
* `premium`

### Sizes

* `sm` : hauteur 36px
* `md` : hauteur 44px
* `lg` : hauteur 52px

### États

* default
* hover
* active
* focus-visible
* disabled
* loading

### Structure

* texte seul
* icône + texte
* texte + icône
* icône seule

### Règles d’usage

* `primary` = action principale d’une zone
* `secondary` = action importante mais non dominante
* `ghost` = action discrète dans une interface dense
* `danger` uniquement pour suppression, retrait, fermeture critique
* `premium` réservé aux actions exceptionnelles

### Tokens visuels

* rayon : `--radius-md`
* padding horizontal : 14px à 18px
* poids typo : 600
* transitions : 150–200ms

### Props recommandées

* `variant`
* `size`
* `loading`
* `disabled`
* `leftIcon`
* `rightIcon`
* `fullWidth`

---

## 14.3 Inputs

### Rôle

Saisie d’information simple.

### Types

* text
* email
* password
* search
* number
* tel
* url

### Sizes

* `sm`
* `md`
* `lg`

### États

* default
* hover
* focus
* filled
* error
* success
* disabled

### Composition

* label
* champ
* helper text
* message d’erreur
* icône optionnelle
* suffixe / préfixe optionnel

### Règles d’usage

* label toujours visible
* placeholder jamais utilisé comme seul repère
* bordure plus lisible au focus
* message d’erreur précis et court

### Props recommandées

* `label`
* `placeholder`
* `description`
* `error`
* `success`
* `leftIcon`
* `rightAddon`

---

## 14.4 Textarea

### Rôle

Saisie longue.

### Spécificités

* hauteur minimale confortable
* redimensionnement vertical possible
* compteur de caractères optionnel

### Props recommandées

* `minRows`
* `maxLength`
* `showCount`
* `resize`

---

## 14.5 Search Bar

### Rôle

Recherche globale ou locale.

### Composition

* icône recherche
* champ
* raccourci clavier optionnel
* bouton reset si contenu présent

### Règles d’usage

* doit être identifiable instantanément
* version globale dans la topbar
* version locale dans les listes, tableaux, projets

---

## 14.6 Select et Multi-select

### Rôle

Choisir une ou plusieurs options.

### États

* default
* focus
* open
* selected
* disabled
* error

### Règles d’usage

* pas plus de 7–8 options sans recherche
* multi-select avec tags compacts
* si la logique devient complexe, passer à un drawer ou une vue dédiée

### Props recommandées

* `options`
* `value`
* `placeholder`
* `searchable`
* `multiple`
* `emptyMessage`

---

## 14.7 Checkbox

### Rôle

Sélection multiple ou validation explicite.

### États

* unchecked
* checked
* indeterminate
* disabled
* error

### Règles d’usage

* idéale pour listes d’actions, permissions, tableaux
* taille confortable pour le clic

---

## 14.8 Radio Group

### Rôle

Choix unique visible.

### Règles d’usage

* privilégier quand les options sont peu nombreuses et importantes
* plus clair qu’un select pour une décision simple

---

## 14.9 Switch

### Rôle

Activer ou désactiver un état immédiatement.

### Règles d’usage

* pour préférences, notifications, affichages, paramètres
* pas pour confirmer une action irréversible

---

## 14.10 Badge

### Rôle

Afficher un statut compact.

### Variants

* `neutral`
* `info`
* `success`
* `warning`
* `error`
* `brand`
* `outline`

### Usages

* statut projet
* priorité tâche
* rôle membre
* filtre actif

### Tailles

* `sm`
* `md`

---

## 14.11 Avatar

### Types

* avatar image
* avatar initiales
* avatar avec statut
* groupe d’avatars

### Props recommandées

* `src`
* `fallback`
* `size`
* `status`
* `stacked`

### Règles d’usage

* fallback systématique
* statut en ligne discret mais lisible

---

## 14.12 Card

### Rôle

Conteneur de contenu structuré.

### Variants

* `default`
* `interactive`
* `project`
* `stat`
* `task`
* `activity`

### Zones internes

* header
* body
* footer
* action area

### Règles d’usage

* une hiérarchie visuelle très nette
* ne pas empiler trop d’actions dans le header
* version interactive avec hover subtil

### Props recommandées

* `title`
* `description`
* `interactive`
* `status`
* `actions`

---

## 14.13 Tabs

### Rôle

Changer de vue ou de sous-section.

### Types

* tabs soulignées
* pills
* tabs de filtre

### Règles d’usage

* limiter le nombre visible
* activer une vraie distinction entre actif et inactif
* ne pas confondre tabs et navigation globale

---

## 14.14 Sidebar Nav Item

### Rôle

Navigation principale de l’application.

### Structure

* icône
* label
* badge / compteur optionnel
* chevron si sous-menu

### États

* default
* hover
* active
* expanded
* collapsed

### Règles d’usage

* actif très identifiable
* sous-navigation plus discrète
* labels toujours lisibles en mode étendu

### Props recommandées

* `icon`
* `label`
* `active`
* `collapsed`
* `badge`
* `children`

---

## 14.15 Topbar

### Rôle

Porter le contexte de la page et les actions globales.

### Contenu type

* titre de page
* breadcrumb optionnel
* recherche globale
* bouton principal
* notifications
* menu profil

### Règles d’usage

* aérée, jamais surchargée
* recherche visuellement centrale si c’est un usage fréquent

---

## 14.16 Dropdown Menu

### Rôle

Présenter un petit menu d’actions contextuelles.

### Contenu type

* label optionnel
* actions standards
* séparateurs
* action destructive distincte

### Règles d’usage

* maximum de clarté
* action dangereuse bien isolée

---

## 14.17 Modal

### Rôle

Demander une confirmation ou afficher une interaction courte.

### Structure

* titre
* description
* contenu
* footer d’actions

### Variants

* confirm
* form
* alert

### Règles d’usage

* éviter les formulaires trop longs en modale
* préférer le panneau latéral pour l’édition riche

---

## 14.18 Drawer / Side Panel

### Rôle

Afficher du détail ou un formulaire sans quitter le contexte.

### Usages

* édition d’une tâche
* détail projet
* activité d’un document
* paramètres avancés

### Règles d’usage

* excellente option pour Evoria
* permet de garder le contexte collaboratif visible derrière

---

## 14.19 Tooltip

### Rôle

Apporter une précision ponctuelle.

### Règles d’usage

* court
* jamais indispensable pour comprendre l’action principale
* idéal pour icônes ou abréviations

---

## 14.20 Toast

### Rôle

Confirmer une action ou signaler un problème.

### Variants

* success
* error
* info
* warning

### Règles d’usage

* apparition discrète
* durée courte
* message très direct
* action secondaire seulement si utile

---

## 14.21 Banner

### Rôle

Afficher une information persistante importante.

### Usages

* incident système
* maintenance
* invitation en attente
* bannière d’onboarding

---

## 14.22 Table

### Rôle

Afficher une grande quantité d’information structurée.

### Variantes

* simple
* triable
* filtrable
* sélectionnable
* actions inline

### Règles d’usage

* en-têtes nets
* cellules aérées
* hover de ligne subtil
* actions visibles au bon moment

### Sous-composants

* `TableToolbar`
* `TableFilters`
* `TablePagination`
* `TableEmptyState`

---

## 14.23 List Item

### Rôle

Représenter une entrée dans une liste de tâches, projets, activités ou fichiers.

### Structure

* leading element
* bloc principal
* méta
* actions rapides

### Règles d’usage

* scan visuel rapide
* actions secondaires discrètes

---

## 14.24 Empty State

### Rôle

Accompagner l’absence de contenu.

### Structure

* illustration ou icône
* titre
* phrase d’explication
* CTA principal
* CTA secondaire optionnel

### Règles d’usage

* ton encourageant
* jamais culpabilisant

---

## 14.25 Skeleton

### Rôle

Signaler un chargement sans casser la structure.

### Variantes

* text
* card
* table row
* avatar
* dashboard blocks

---

## 14.26 Progress

### Types

* barre linéaire
* barre segmentée
* cercle compact
* milestone tracker

### Usages

* avancement projet
* progression onboarding
* charge de travail

---

## 14.27 Pagination

### Rôle

Naviguer dans les ensembles volumineux.

### Composition

* précédent
* suivant
* numéros optionnels
* taille de page optionnelle

---

## 14.28 Breadcrumb

### Rôle

Montrer la position dans l’arborescence.

### Règles d’usage

* utile sur les vues profondes
* inutile sur le dashboard principal

---

## 14.29 KPI Stat Card

### Rôle

Afficher une métrique clé.

### Contenu type

* label
* valeur
* delta
* mini tendance
* aide contextuelle optionnelle

### Règles d’usage

* très utile pour Evoria
* hiérarchie ultra lisible

---

## 14.30 Activity Item

### Rôle

Afficher un événement d’équipe ou de projet.

### Contenu type

* avatar
* acteur
* action
* cible
* date
* niveau de détail optionnel

---

## 14.31 Project Card

### Rôle

Composant métier central.

### Contenu type

* nom du projet
* description courte
* statut
* progression
* équipe
* échéance
* priorité
* CTA rapide

### Variants

* compact
* detailed
* dashboard

---

## 14.32 Task Card / Task Row

### Rôle

Composant métier central pour la gestion quotidienne.

### Contenu type

* titre
* assigné à
* priorité
* statut
* échéance
* tags
* commentaire ou pièce jointe éventuelle

### Variants

* row
* board card
* compact mobile

---

## 14.33 Comment Block

### Rôle

Affichage des échanges collaboratifs.

### Contenu type

* auteur
* avatar
* date
* contenu
* actions (répondre, modifier, résoudre)

---

## 14.34 Member Pill / User Chip

### Rôle

Afficher un membre compactement.

### Usages

* assignation
* filtres utilisateurs
* mentions
* participants d’un projet

---

## 14.35 Filter Bar

### Rôle

Regrouper les filtres d’une vue.

### Contenu type

* selecteurs
* tags actifs
* tri
* reset
* bouton vues enregistrées plus tard

### Règles d’usage

* très utile dans Evoria
* doit rester scannable et modulable

---

## 14.36 Demo page recommandée

Pour industrialiser le kit, créer une page interne de démonstration avec sections :

* couleurs
* typographies
* boutons
* champs
* navigation
* cartes
* tableaux
* états vides
* toasts
* composants métier

Nom suggéré : `app/(internal)/design-system/page.tsx`

---

## 14.37 Arborescence recommandée

```txt
components/
  ui/
    button.tsx
    input.tsx
    textarea.tsx
    select.tsx
    checkbox.tsx
    radio-group.tsx
    switch.tsx
    badge.tsx
    avatar.tsx
    card.tsx
    tabs.tsx
    modal.tsx
    drawer.tsx
    tooltip.tsx
    toast.tsx
    table.tsx
    skeleton.tsx
    progress.tsx
    pagination.tsx
    breadcrumb.tsx
  layout/
    sidebar.tsx
    sidebar-item.tsx
    topbar.tsx
  app/
    project-card.tsx
    task-card.tsx
    task-row.tsx
    activity-item.tsx
    kpi-stat-card.tsx
    comment-block.tsx
    member-pill.tsx
    filter-bar.tsx
```

---

## 14.38 Priorité de création effective

### Sprint 1

* Button
* Input
* Textarea
* Badge
* Card
* Avatar
* Sidebar item
* Topbar
* Tabs

### Sprint 2

* Select
* Checkbox
* Radio Group
* Switch
* Modal
* Drawer
* Toast
* Tooltip

### Sprint 3

* Table
* Empty State
* Skeleton
* Progress
* Pagination
* Breadcrumb

### Sprint 4

* Project Card
* Task Card
* KPI Stat Card
* Activity Item
* Filter Bar
* Comment Block
* Member Pill

---

## 15. Sprint 1 — composants prêts à coder

Cette section prépare les premiers fichiers à créer dans le repo Evoria.

Hypothèse technique :

* React
* TypeScript
* Tailwind CSS
* `lucide-react` pour les icônes
* `clsx` et `tailwind-merge` pour fusionner les classes proprement

---

## 15.1 Dépendances à installer

```bash
npm install lucide-react clsx tailwind-merge class-variance-authority
```

---

## 15.2 Utilitaire `cn`

Créer le fichier :

```txt
src/lib/utils.ts
```

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 15.3 Tokens CSS globaux

Ajouter dans :

```txt
src/index.css
```

ou dans le fichier CSS global équivalent.

```css
:root {
  --evoria-bg: #020617;
  --evoria-surface: #0f172a;
  --evoria-surface-2: #1e293b;
  --evoria-border: #334155;
  --evoria-text: #f8fafc;
  --evoria-text-muted: #94a3b8;

  --evoria-primary: #2563eb;
  --evoria-secondary: #7c3aed;
  --evoria-accent: #ec4899;
  --evoria-gold: #f59e0b;

  --evoria-success: #22c55e;
  --evoria-warning: #f59e0b;
  --evoria-error: #ef4444;
  --evoria-info: #38bdf8;

  --evoria-gradient: linear-gradient(135deg, #2563eb 0%, #7c3aed 52%, #ec4899 100%);
}

body {
  min-height: 100vh;
  background: var(--evoria-bg);
  color: var(--evoria-text);
  font-family: Inter, system-ui, sans-serif;
}

.evoria-gradient-text {
  background: var(--evoria-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.evoria-gradient-bg {
  background: var(--evoria-gradient);
}
```

---

## 15.4 Configuration typo Tailwind

Dans `tailwind.config.js` ou `tailwind.config.ts`, ajouter les familles :

```ts
fontFamily: {
  heading: ["Sora", "system-ui", "sans-serif"],
  body: ["Inter", "system-ui", "sans-serif"],
}
```

---

# 16. Composants UI — Sprint 1

## 16.1 Button

Créer :

```txt
src/components/ui/button.tsx
```

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white shadow-sm hover:bg-blue-500 active:bg-blue-700",
        gradient:
          "bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 text-white shadow-lg shadow-blue-950/30 hover:brightness-110 active:brightness-95",
        secondary:
          "bg-slate-800 text-slate-50 border border-slate-700 hover:bg-slate-700",
        tertiary:
          "bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-600 hover:bg-slate-800",
        ghost:
          "bg-transparent text-slate-300 hover:bg-slate-800/70 hover:text-white",
        danger:
          "bg-red-600 text-white hover:bg-red-500 active:bg-red-700",
        premium:
          "bg-amber-500 text-slate-950 hover:bg-amber-400 active:bg-amber-600",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-4 text-sm",
        lg: "h-13 px-5 text-base",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
```

---

## 16.2 Input

Créer :

```txt
src/components/ui/input.tsx
```

```tsx
import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightAddon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, description, error, leftIcon, rightAddon, id, ...props }, ref) => {
    const inputId = id ?? React.useId();

    return (
      <div className="w-full space-y-2">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-semibold text-slate-200">
            {label}
          </label>
        )}

        <div
          className={cn(
            "flex h-11 items-center gap-2 rounded-2xl border bg-slate-900/80 px-3 transition-colors",
            error
              ? "border-red-500/80 focus-within:border-red-400 focus-within:ring-red-400/30"
              : "border-slate-700 focus-within:border-blue-400 focus-within:ring-blue-400/30",
            "focus-within:ring-2",
            props.disabled && "cursor-not-allowed opacity-50"
          )}
        >
          {leftIcon && <span className="text-slate-400">{leftIcon}</span>}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full bg-transparent text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none disabled:cursor-not-allowed",
              className
            )}
            aria-invalid={Boolean(error)}
            {...props}
          />
          {rightAddon && <span className="text-slate-400">{rightAddon}</span>}
        </div>

        {description && !error && <p className="text-xs text-slate-400">{description}</p>}
        {error && <p className="text-xs font-medium text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
```

---

## 16.3 Textarea

Créer :

```txt
src/components/ui/textarea.tsx
```

```tsx
import * as React from "react";
import { cn } from "../../lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  error?: string;
  showCount?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, description, error, showCount, maxLength, value, id, ...props }, ref) => {
    const textareaId = id ?? React.useId();
    const count = typeof value === "string" ? value.length : 0;

    return (
      <div className="w-full space-y-2">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-semibold text-slate-200">
            {label}
          </label>
        )}

        <textarea
          id={textareaId}
          ref={ref}
          maxLength={maxLength}
          value={value}
          className={cn(
            "min-h-28 w-full resize-y rounded-2xl border bg-slate-900/80 px-3 py-3 text-sm text-slate-50 placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-red-500/80 focus:border-red-400 focus:ring-red-400/30"
              : "border-slate-700 focus:border-blue-400 focus:ring-blue-400/30",
            className
          )}
          aria-invalid={Boolean(error)}
          {...props}
        />

        <div className="flex items-center justify-between gap-4">
          <div>
            {description && !error && <p className="text-xs text-slate-400">{description}</p>}
            {error && <p className="text-xs font-medium text-red-400">{error}</p>}
          </div>

          {showCount && maxLength && (
            <p className="text-xs text-slate-500">
              {count}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
```

---

## 16.4 Badge

Créer :

```txt
src/components/ui/badge.tsx
```

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-semibold leading-none",
  {
    variants: {
      variant: {
        neutral: "border-slate-700 bg-slate-800 text-slate-200",
        info: "border-sky-400/30 bg-sky-400/10 text-sky-300",
        success: "border-green-400/30 bg-green-400/10 text-green-300",
        warning: "border-amber-400/30 bg-amber-400/10 text-amber-300",
        error: "border-red-400/30 bg-red-400/10 text-red-300",
        brand: "border-violet-400/30 bg-violet-500/10 text-violet-200",
        gradient:
          "border-transparent bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 text-white",
        outline: "border-slate-600 bg-transparent text-slate-300",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-2.5 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}
```

---

## 16.5 Card

Créer :

```txt
src/components/ui/card.tsx
```

```tsx
import * as React from "react";
import { cn } from "../../lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-slate-950/20 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-1.5 p-5", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-heading text-lg font-semibold tracking-tight text-slate-50", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm leading-6 text-slate-400", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 pt-0", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-3 p-5 pt-0", className)} {...props} />;
}
```

---

## 16.6 Avatar

Créer :

```txt
src/components/ui/avatar.tsx
```

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-800 font-semibold text-slate-200",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback: string;
  status?: "online" | "offline" | "busy";
}

export function Avatar({ className, size, src, alt, fallback, status, ...props }: AvatarProps) {
  const statusClasses = {
    online: "bg-green-400",
    offline: "bg-slate-500",
    busy: "bg-amber-400",
  };

  return (
    <div className={cn(avatarVariants({ size }), className)} {...props}>
      {src ? (
        <img src={src} alt={alt ?? fallback} className="h-full w-full object-cover" />
      ) : (
        <span>{fallback.slice(0, 2).toUpperCase()}</span>
      )}

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-slate-950",
            statusClasses[status]
          )}
          aria-label={`Statut : ${status}`}
        />
      )}
    </div>
  );
}
```

---

## 16.7 Tabs

Créer :

```txt
src/components/ui/tabs.tsx
```

```tsx
import * as React from "react";
import { cn } from "../../lib/utils";

export interface TabItem {
  value: string;
  label: string;
  count?: number;
}

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Tabs({ items, value, onChange, className }: TabsProps) {
  return (
    <div className={cn("inline-flex rounded-2xl border border-slate-800 bg-slate-900 p-1", className)}>
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
              active
                ? "bg-slate-800 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-100"
            )}
          >
            {item.label}
            {typeof item.count === "number" && (
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[11px]",
                  active ? "bg-blue-500/20 text-blue-200" : "bg-slate-800 text-slate-400"
                )}
              >
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
```

---

# 17. Composants layout — Sprint 1

## 17.1 Sidebar Item

Créer :

```txt
src/components/layout/sidebar-item.tsx
```

```tsx
import * as React from "react";
import { cn } from "../../lib/utils";

interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  badge?: string | number;
}

export function SidebarItem({
  icon,
  label,
  active,
  collapsed,
  badge,
  className,
  ...props
}: SidebarItemProps) {
  return (
    <button
      type="button"
      className={cn(
        "group flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition-colors",
        active
          ? "bg-blue-500/15 text-blue-200"
          : "text-slate-400 hover:bg-slate-800/80 hover:text-slate-100",
        collapsed && "justify-center px-2",
        className
      )}
      aria-label={collapsed ? label : undefined}
      {...props}
    >
      <span className={cn("shrink-0", active ? "text-blue-300" : "text-slate-500 group-hover:text-slate-300")}>
        {icon}
      </span>

      {!collapsed && <span className="truncate">{label}</span>}

      {!collapsed && badge && (
        <span className="ml-auto rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
          {badge}
        </span>
      )}
    </button>
  );
}
```

---

## 17.2 Sidebar

Créer :

```txt
src/components/layout/sidebar.tsx
```

```tsx
import { LayoutDashboard, FolderKanban, Users, CalendarDays, Settings } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 px-4 py-5">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-pink-500" />
        <div>
          <p className="font-heading text-lg font-bold text-white">Evoria</p>
          <p className="text-xs text-slate-500">Team workspace</p>
        </div>
      </div>

      <nav className="space-y-1">
        <SidebarItem icon={<LayoutDashboard size={18} />} label="Tableau de bord" active />
        <SidebarItem icon={<FolderKanban size={18} />} label="Projets" badge={6} />
        <SidebarItem icon={<Users size={18} />} label="Équipe" />
        <SidebarItem icon={<CalendarDays size={18} />} label="Planning" />
      </nav>

      <div className="mt-auto border-t border-slate-800 pt-4">
        <SidebarItem icon={<Settings size={18} />} label="Paramètres" />
      </div>
    </aside>
  );
}
```

---

## 17.3 Topbar

Créer :

```txt
src/components/layout/topbar.tsx
```

```tsx
import { Bell, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";

interface TopbarProps {
  title: string;
  subtitle?: string;
}

export function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <header className="flex min-h-20 items-center justify-between gap-6 border-b border-slate-800 bg-slate-950/80 px-6 backdrop-blur-xl">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-white">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden h-10 items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-500 md:flex">
          <Search size={16} />
          <span>Rechercher...</span>
          <kbd className="ml-10 rounded-lg border border-slate-700 px-1.5 py-0.5 text-[11px] text-slate-400">
            Ctrl K
          </kbd>
        </div>

        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell size={18} />
        </Button>

        <Avatar fallback="EM" status="online" />
      </div>
    </header>
  );
}
```

---

# 18. Composants métier — première base

## 18.1 Project Card

Créer :

```txt
src/components/app/project-card.tsx
```

```tsx
import { CalendarDays } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar } from "../ui/avatar";

interface ProjectCardProps {
  title: string;
  description: string;
  status: "En cours" | "À valider" | "Bloqué" | "Terminé";
  progress: number;
  dueDate: string;
}

const statusVariant = {
  "En cours": "info",
  "À valider": "warning",
  Bloqué: "error",
  Terminé: "success",
} as const;

export function ProjectCard({ title, description, status, progress, dueDate }: ProjectCardProps) {
  return (
    <Card className="transition-colors hover:border-slate-700">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge variant={statusVariant[status]}>{status}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
            <span>Progression</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-800">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex -space-x-2">
            <Avatar fallback="EM" size="sm" />
            <Avatar fallback="CL" size="sm" />
            <Avatar fallback="HG" size="sm" />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <CalendarDays size={14} />
            <span>{dueDate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

---

## 18.2 Task Card

Créer :

```txt
src/components/app/task-card.tsx
```

```tsx
import { MessageSquare, Paperclip } from "lucide-react";
import { Badge } from "../ui/badge";
import { Avatar } from "../ui/avatar";

interface TaskCardProps {
  title: string;
  status: "À faire" | "En cours" | "À valider" | "Terminé";
  priority: "Basse" | "Moyenne" | "Haute";
  assignee: string;
  comments?: number;
  attachments?: number;
}

const priorityVariant = {
  Basse: "neutral",
  Moyenne: "warning",
  Haute: "error",
} as const;

export function TaskCard({ title, status, priority, assignee, comments = 0, attachments = 0 }: TaskCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 transition-colors hover:border-slate-700">
      <div className="mb-3 flex items-center justify-between gap-3">
        <Badge variant="brand">{status}</Badge>
        <Badge variant={priorityVariant[priority]}>{priority}</Badge>
      </div>

      <h3 className="font-heading text-sm font-semibold leading-6 text-white">{title}</h3>

      <div className="mt-4 flex items-center justify-between gap-4">
        <Avatar fallback={assignee} size="sm" />

        <div className="flex items-center gap-3 text-xs text-slate-500">
          {comments > 0 && (
            <span className="flex items-center gap-1">
              <MessageSquare size={14} /> {comments}
            </span>
          )}
          {attachments > 0 && (
            <span className="flex items-center gap-1">
              <Paperclip size={14} /> {attachments}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
```

---

# 19. Page de test rapide

Créer une page ou un composant de test, par exemple :

```txt
src/pages/design-system-preview.tsx
```

ou dans Vite :

```txt
src/App.tsx
```

```tsx
import { Plus, Search } from "lucide-react";
import { Sidebar } from "./components/layout/sidebar";
import { Topbar } from "./components/layout/topbar";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Badge } from "./components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { ProjectCard } from "./components/app/project-card";
import { TaskCard } from "./components/app/task-card";

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-50">
      <Sidebar />

      <main className="flex min-w-0 flex-1 flex-col">
        <Topbar title="Design System" subtitle="Bibliothèque de composants Evoria" />

        <div className="space-y-8 p-6">
          <section className="space-y-4">
            <h2 className="font-heading text-xl font-bold">Boutons</h2>
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="gradient">
                <Plus size={16} /> Nouveau projet
              </Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Supprimer</Button>
              <Button loading>Chargement</Button>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Formulaire</CardTitle>
                <CardDescription>Exemple de champs normalisés.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input label="Nom du projet" placeholder="Refonte du site" leftIcon={<Search size={16} />} />
                <Input label="Budget" placeholder="12 000 €" error="Le budget est obligatoire." />
                <Textarea label="Description" placeholder="Décrire le projet..." maxLength={250} showCount />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Statuts et feedbacks visuels.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Neutral</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="gradient">Brand</Badge>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <ProjectCard
              title="Lancement Evoria"
              description="Préparation du MVP et des premiers écrans collaboratifs."
              status="En cours"
              progress={68}
              dueDate="12 juin 2026"
            />

            <TaskCard
              title="Créer la structure du dashboard d’accueil"
              status="En cours"
              priority="Haute"
              assignee="EM"
              comments={3}
              attachments={1}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
```

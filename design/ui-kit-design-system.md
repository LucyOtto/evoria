# UI Kit complet — Evoria

## 1. ADN visuel

Evoria est une application orientée équipe, pensée pour organiser, collaborer et faire avancer les projets avec fluidité. Son interface doit inspirer la clarté, la structure, la modernité, la circulation de l’information et la progression collective.

Le style visuel doit rester sobre, distinctif et dynamique.

---

## 2. Fondations de marque

### 2.1 Palette principale

#### Couleurs de marque
- **Midnight** : `#020617` — fond principal, structure, profondeur
- **Navy** : `#0F172A` — surfaces sombres secondaires
- **Blue** : `#2563EB` — couleur principale d’action
- **Violet** : `#7C3AED` — collaboration, innovation, accent secondaire
- **Pink** : `#EC4899` — accent dynamique ponctuel
- **Gold** : `#F59E0B` — mise en avant rare et premium

#### Neutres UI
- **Slate 950** : `#020617`
- **Slate 900** : `#0F172A`
- **Slate 800** : `#1E293B`
- **Slate 700** : `#334155`
- **Slate 600** : `#475569`
- **Slate 500** : `#64748B`
- **Slate 400** : `#94A3B8`
- **Slate 300** : `#CBD5E1`
- **Slate 200** : `#E2E8F0`
- **Slate 100** : `#F1F5F9`
- **White** : `#FFFFFF`

### 2.2 Dégradé principal

Dégradé de marque recommandé :
- `linear-gradient(135deg, #2563EB 0%, #7C3AED 52%, #EC4899 100%)`

Usage conseillé :
- logo
- éléments hero
- boutons spéciaux
- indicateurs de progression premium

À éviter sur :
- texte long
- arrière-plans trop larges
- composants secondaires répétitifs

### 2.3 Couleurs fonctionnelles
- **Success** : `#22C55E`
- **Warning** : `#F59E0B`
- **Error** : `#EF4444`
- **Info** : `#38BDF8`

### 2.4 Répartition d’usage
- 70% neutres et fonds
- 20% bleu et violet
- 8% accent rose
- 2% doré maximum

---

## 3. Typographie

### 3.1 Familles
- **Titres / headings / navigation majeure** : `Sora`
- **Corps de texte / UI / formulaires** : `Inter`

### 3.2 Hiérarchie typographique

#### Display
- Display XL : 48px / 56px / 700
- Display L : 40px / 48px / 700

#### Headings
- H1 : 32px / 40px / 700
- H2 : 28px / 36px / 600
- H3 : 24px / 32px / 600
- H4 : 20px / 28px / 600
- H5 : 18px / 26px / 600
- H6 : 16px / 24px / 600

#### Texte
- Body L : 18px / 28px / 400
- Body M : 16px / 24px / 400
- Body S : 14px / 22px / 400
- Caption : 12px / 18px / 500
- Label : 13px / 18px / 600

### 3.3 Règles d’usage
- Sora uniquement pour structurer la lecture et signer l’identité.
- Inter pour tout ce qui doit être lu vite et souvent.
- Éviter les tailles en dessous de 14px pour le contenu important.
- Letter-spacing légèrement resserré sur Sora pour les grands titres.

---

## 4. Grille, spacing et layout

### 4.1 Système d’espacement
Base : **8px**

Échelle recommandée :
- 4px
- 8px
- 12px
- 16px
- 20px
- 24px
- 32px
- 40px
- 48px
- 64px

### 4.2 Rayons
- XS : 8px
- S : 12px
- M : 16px
- L : 20px
- XL : 24px
- Pill : 999px

### 4.3 Ombres
- **Shadow soft** : ombre discrète pour cartes standards
- **Shadow medium** : cartes interactives, menus flottants
- **Shadow glow** : halo bleu/violet très léger sur éléments importants

Règle : jamais d’ombre lourde ou trop floue façon template cheap.

### 4.4 Layout général
- Sidebar fixe
- Header de section simple et aéré
- Contenu en cartes ou panneaux
- Largeur max recommandée pour contenus textuels : 720–860px
- Largeur max dashboard : 1440px

---

## 5. Mode sombre et mode clair

### 5.1 Mode par défaut
Le **mode sombre** est le mode natif d’Evoria.

Pourquoi :
- plus cohérent avec l’identité premium
- plus immersif
- meilleur rendu du dégradé de marque

### 5.2 Mode clair
Prévoir un mode clair complet et cohérent, pas un simple inverse approximatif.

#### Règles
- conserver les mêmes contrastes logiques
- éviter le blanc pur comme fond massif
- préférer des gris très clairs légèrement bleutés

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
- **Primary** : fond bleu ou dégradé, texte blanc
- **Secondary** : fond violet profond ou surface contrastée
- **Tertiary** : fond discret, contour ou surface simple
- **Ghost** : sans fond, hover léger
- **Danger** : fond rouge
- **Gold / Premium** : usage très rare

#### Tailles
- Small
- Medium
- Large

#### États
- Default
- Hover
- Active
- Focus visible
- Disabled
- Loading

#### Règles
- Toujours un focus visible accessible
- Icône possible à gauche ou droite
- Éviter plus d’un bouton primary par zone dense

### 7.2 Champs de formulaire

#### Types à normaliser
- Input texte
- Email
- Password
- Search
- Number
- Textarea
- Select
- Multi-select
- Date picker
- Time picker

#### États
- Default
- Hover
- Focus
- Filled
- Error
- Disabled
- Success

#### Règles visuelles
- fonds légèrement contrastés
- bordure nette mais discrète
- labels toujours visibles
- helper text sous le champ
- message d’erreur court et précis

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
- Neutral
- Info
- Success
- Warning
- Error
- Gradient / Brand

#### Usages
- statut de tâche
- rôle utilisateur
- priorité
- catégorie projet
- présence d’un filtre actif

### 7.5 Avatars

#### Types
- avatar simple
- groupe d’avatars superposés
- avatar avec statut en ligne
- avatar placeholder avec initiales

#### Usages
- équipe projet
- assignation de tâche
- commentaires
- activité récente

### 7.6 Cartes

#### Types
- carte standard
- carte projet
- carte statistique
- carte tâche
- carte membre
- carte document
- carte activité

#### Structure recommandée
- titre
- méta-infos
- contenu principal
- actions secondaires

Règle : une carte = une fonction dominante. Éviter les cartes-couteaux suisses.

### 7.7 Navigation

#### Sidebar
Doit contenir :
- logo
- navigation principale
- projets récents ou épinglés
- espace utilisateur
- accès paramètres

#### Topbar / header
- titre de page
- recherche globale
- notifications
- profil
- CTA contextuel

#### Tabs
- tabs de section
- tabs de contenu
- tabs filtrantes

### 7.8 Tableaux

#### Types
- tableau simple
- tableau avec tri
- tableau avec filtres
- tableau avec sélection multiple
- tableau avec actions inline

#### Règles
- lignes aérées
- entêtes claires
- zebra facultatif mais léger
- jamais d’effet “Excel 2009 en crise”

### 7.9 Listes

#### Types
- liste de tâches
- liste d’activité
- liste de fichiers
- liste de notifications
- liste de projets

Chaque liste doit avoir :
- hiérarchie claire
- statut visible
- action rapide identifiable

### 7.10 Modales et panneaux

#### Types
- modale de confirmation
- modale d’édition
- panneau latéral détaillé
- drawer mobile

#### Règles
- préférer les panneaux latéraux pour l’édition riche
- réserver les modales aux actions courtes ou critiques

### 7.11 Menus flottants et dropdowns

#### Types
- menu d’actions
- menu profil
- filtre dropdown
- sélecteur de projet

Règle : ne jamais surcharger un dropdown avec une logique complexe qui mérite une vraie vue.

### 7.12 Tooltips

Usage : expliquer une action, un statut ou une icône peu évidente.

Règle : un tooltip doit aider, pas traduire un design raté.

### 7.13 Notifications et feedback

#### Types
- toast succès
- toast erreur
- toast info
- bannière système
- message inline de validation

#### Règles
- messages courts
- ton clair
- action possible si utile

### 7.14 États vides

Chaque module doit prévoir un empty state avec :
- un titre utile
- une phrase explicative
- une action principale
- éventuellement une illustration simple

Exemples :
- aucun projet
- aucune tâche assignée
- aucune activité récente
- aucun résultat de recherche

### 7.15 États de chargement

#### Types
- skeleton cards
- skeleton table
- spinner discret
- barre de progression

Règle : privilégier les skeletons quand la structure du contenu est connue.

### 7.16 États d’erreur

Prévoir :
- erreur mineure inline
- erreur de page
- erreur réseau
- erreur permission
- erreur ressource introuvable

Ton : direct, utile, jamais dramatique.

---

## 8. Composants métier pour Evoria

### 8.1 Carte projet
Doit pouvoir afficher :
- nom
- description courte
- équipe
- statut
- progression
- échéance
- priorité

### 8.2 Carte tâche
Doit pouvoir afficher :
- titre
- assigné à
- statut
- date limite
- priorité
- tags

### 8.3 Barre de progression projet
Variantes :
- simple linéaire
- segmentée
- milestone

### 8.4 Bloc activité récente
Exemples :
- Clara a déplacé une tâche
- Hugo a commenté un document
- 3 tâches terminées aujourd’hui

### 8.5 Bloc collaboration
- membres connectés
- commentaires récents
- demandes en attente
- invitations

### 8.6 Bloc métriques
Exemples :
- projets actifs
- tâches terminées
- temps moyen de résolution
- charge par équipe

### 8.7 Fil d’activité / timeline
Doit rester lisible même dense.
Prévoir :
- avatar
- action
- date
- cible de l’action
- filtre par type

### 8.8 Statuts standards
Définir un vocabulaire stable :
- brouillon
- en cours
- à valider
- bloqué
- terminé
- archivé

---

## 9. Accessibilité

### Règles clés
- contraste AA minimum
- focus visible partout
- navigation clavier complète
- icônes non seules pour les actions critiques
- tailles de texte adaptables
- ne jamais utiliser la couleur seule pour transmettre une information

### Mode accessibilité à prévoir
- taille de texte augmentée
- contraste renforcé
- densité réduite
- meilleure lisibilité des bordures

---

## 10. Iconographie et illustrations

### Icônes
Style recommandé :
- simple
- arrondi
- cohérent
- moderne

Exemples de familles compatibles :
- Lucide
- Heroicons
- Phosphor

### Illustrations
- minimalistes
- géométriques
- jamais enfantines
- réservées aux empty states, onboarding, pages marketing

---

## 11. Règles de cohérence UI

- Une seule logique visuelle par type d’action.
- Un seul composant = un seul rôle principal.
- Le primary signale l’action principale, pas une envie décorative.
- Les couleurs d’accent ne remplacent pas la hiérarchie.
- Les composants doivent respirer.
- Le dégradé est une signature, pas du papier peint.

---

## 12. Priorité de production du kit

### Niveau 1 — indispensable
- couleurs
- typographie
- boutons
- inputs
- sidebar
- topbar
- cartes
- badges
- tableaux
- toasts

### Niveau 2 — très important
- modales
- dropdowns
- tabs
- checkboxes / radios / switches
- empty states
- skeleton loaders

### Niveau 3 — avancé
- timeline d’activité
- widgets statistiques
- sélecteurs complexes
- vues filtres avancées
- composants collaboratifs temps réel

---

## 13. Stack frontend conseillée pour l’implémentation

Pour un frontend React moderne :
- **Tailwind CSS** pour les fondations utilitaires
- **shadcn/ui** comme base de composants à personnaliser
- **Lucide** pour les icônes
- **clsx / cva** pour gérer les variantes propres

Important : ne pas prendre un kit tout fait et subir son identité. Il faut le plier à Evoria, pas l’inverse.

---

## 14. Bibliothèque de composants — version exploitable

## 14.1 Principes de construction

Chaque composant Evoria doit être pensé avec les mêmes couches :
- **variant** : rôle visuel principal
- **size** : taille normalisée
- **state** : état d’interaction
- **content** : texte, icône, badge, compteur, avatar…
- **accessibility** : focus, contraste, aria, navigation clavier

Convention recommandée pour React :
- composants atomiques dans `components/ui`
- composants métier dans `components/app`
- variantes gérées avec `cva`
- fusion des classes avec `clsx` ou `cn`

---

## 14.2 Boutons

### Rôle
Déclencher une action immédiate.

### Variants
- `primary`
- `secondary`
- `tertiary`
- `ghost`
- `danger`
- `premium`

### Sizes
- `sm` : hauteur 36px
- `md` : hauteur 44px
- `lg` : hauteur 52px

### États
- default
- hover
- active
- focus-visible
- disabled
- loading

### Structure
- texte seul
- icône + texte
- texte + icône
- icône seule

### Règles d’usage
- `primary` = action principale d’une zone
- `secondary` = action importante mais non dominante
- `ghost` = action discrète dans une interface dense
- `danger` uniquement pour suppression, retrait, fermeture critique
- `premium` réservé aux actions exceptionnelles

### Tokens visuels
- rayon : `--radius-md`
- padding horizontal : 14px à 18px
- poids typo : 600
- transitions : 150–200ms

### Props recommandées
- `variant`
- `size`
- `loading`
- `disabled`
- `leftIcon`
- `rightIcon`
- `fullWidth`

---

## 14.3 Inputs

### Rôle
Saisie d’information simple.

### Types
- text
- email
- password
- search
- number
- tel
- url

### Sizes
- `sm`
- `md`
- `lg`

### États
- default
- hover
- focus
- filled
- error
- success
- disabled

### Composition
- label
- champ
- helper text
- message d’erreur
- icône optionnelle
- suffixe / préfixe optionnel

### Règles d’usage
- label toujours visible
- placeholder jamais utilisé comme seul repère
- bordure plus lisible au focus
- message d’erreur précis et court

### Props recommandées
- `label`
- `placeholder`
- `description`
- `error`
- `success`
- `leftIcon`
- `rightAddon`

---

## 14.4 Textarea

### Rôle
Saisie longue.

### Spécificités
- hauteur minimale confortable
- redimensionnement vertical possible
- compteur de caractères optionnel

### Props recommandées
- `minRows`
- `maxLength`
- `showCount`
- `resize`

---

## 14.5 Search Bar

### Rôle
Recherche globale ou locale.

### Composition
- icône recherche
- champ
- raccourci clavier optionnel
- bouton reset si contenu présent

### Règles d’usage
- doit être identifiable instantanément
- version globale dans la topbar
- version locale dans les listes, tableaux, projets

---

## 14.6 Select et Multi-select

### Rôle
Choisir une ou plusieurs options.

### États
- default
- focus
- open
- selected
- disabled
- error

### Règles d’usage
- pas plus de 7–8 options sans recherche
- multi-select avec tags compacts
- si la logique devient complexe, passer à un drawer ou une vue dédiée

### Props recommandées
- `options`
- `value`
- `placeholder`
- `searchable`
- `multiple`
- `emptyMessage`

---

## 14.7 Checkbox

### Rôle
Sélection multiple ou validation explicite.

### États
- unchecked
- checked
- indeterminate
- disabled
- error

### Règles d’usage
- idéale pour listes d’actions, permissions, tableaux
- taille confortable pour le clic

---

## 14.8 Radio Group

### Rôle
Choix unique visible.

### Règles d’usage
- privilégier quand les options sont peu nombreuses et importantes
- plus clair qu’un select pour une décision simple

---

## 14.9 Switch

### Rôle
Activer ou désactiver un état immédiatement.

### Règles d’usage
- pour préférences, notifications, affichages, paramètres
- pas pour confirmer une action irréversible

---

## 14.10 Badge

### Rôle
Afficher un statut compact.

### Variants
- `neutral`
- `info`
- `success`
- `warning`
- `error`
- `brand`
- `outline`

### Usages
- statut projet
- priorité tâche
- rôle membre
- filtre actif

### Tailles
- `sm`
- `md`

---

## 14.11 Avatar

### Types
- avatar image
- avatar initiales
- avatar avec statut
- groupe d’avatars

### Props recommandées
- `src`
- `fallback`
- `size`
- `status`
- `stacked`

### Règles d’usage
- fallback systématique
- statut en ligne discret mais lisible

---

## 14.12 Card

### Rôle
Conteneur de contenu structuré.

### Variants
- `default`
- `interactive`
- `project`
- `stat`
- `task`
- `activity`

### Zones internes
- header
- body
- footer
- action area

### Règles d’usage
- une hiérarchie visuelle très nette
- ne pas empiler trop d’actions dans le header
- version interactive avec hover subtil

### Props recommandées
- `title`
- `description`
- `interactive`
- `status`
- `actions`

---

## 14.13 Tabs

### Rôle
Changer de vue ou de sous-section.

### Types
- tabs soulignées
- pills
- tabs de filtre

### Règles d’usage
- limiter le nombre visible
- activer une vraie distinction entre actif et inactif
- ne pas confondre tabs et navigation globale

---

## 14.14 Sidebar Nav Item

### Rôle
Navigation principale de l’application.

### Structure
- icône
- label
- badge / compteur optionnel
- chevron si sous-menu

### États
- default
- hover
- active
- expanded
- collapsed

### Règles d’usage
- actif très identifiable
- sous-navigation plus discrète
- labels toujours lisibles en mode étendu

### Props recommandées
- `icon`
- `label`
- `active`
- `collapsed`
- `badge`
- `children`

---

## 14.15 Topbar

### Rôle
Porter le contexte de la page et les actions globales.

### Contenu type
- titre de page
- breadcrumb optionnel
- recherche globale
- bouton principal
- notifications
- menu profil

### Règles d’usage
- aérée, jamais surchargée
- recherche visuellement centrale si c’est un usage fréquent

---

## 14.16 Dropdown Menu

### Rôle
Présenter un petit menu d’actions contextuelles.

### Contenu type
- label optionnel
- actions standards
- séparateurs
- action destructive distincte

### Règles d’usage
- maximum de clarté
- action dangereuse bien isolée

---

## 14.17 Modal

### Rôle
Demander une confirmation ou afficher une interaction courte.

### Structure
- titre
- description
- contenu
- footer d’actions

### Variants
- confirm
- form
- alert

### Règles d’usage
- éviter les formulaires trop longs en modale
- préférer le panneau latéral pour l’édition riche

---

## 14.18 Drawer / Side Panel

### Rôle
Afficher du détail ou un formulaire sans quitter le contexte.

### Usages
- édition d’une tâche
- détail projet
- activité d’un document
- paramètres avancés

### Règles d’usage
- excellente option pour Evoria
- permet de garder le contexte collaboratif visible derrière

---

## 14.19 Tooltip

### Rôle
Apporter une précision ponctuelle.

### Règles d’usage
- court
- jamais indispensable pour comprendre l’action principale
- idéal pour icônes ou abréviations

---

## 14.20 Toast

### Rôle
Confirmer une action ou signaler un problème.

### Variants
- success
- error
- info
- warning

### Règles d’usage
- apparition discrète
- durée courte
- message très direct
- action secondaire seulement si utile

---

## 14.21 Banner

### Rôle
Afficher une information persistante importante.

### Usages
- incident système
- maintenance
- invitation en attente
- bannière d’onboarding

---

## 14.22 Table

### Rôle
Afficher une grande quantité d’information structurée.

### Variantes
- simple
- triable
- filtrable
- sélectionnable
- actions inline

### Règles d’usage
- en-têtes nets
- cellules aérées
- hover de ligne subtil
- actions visibles au bon moment

### Sous-composants
- `TableToolbar`
- `TableFilters`
- `TablePagination`
- `TableEmptyState`

---

## 14.23 List Item

### Rôle
Représenter une entrée dans une liste de tâches, projets, activités ou fichiers.

### Structure
- leading element
- bloc principal
- méta
- actions rapides

### Règles d’usage
- scan visuel rapide
- actions secondaires discrètes

---

## 14.24 Empty State

### Rôle
Accompagner l’absence de contenu.

### Structure
- illustration ou icône
- titre
- phrase d’explication
- CTA principal
- CTA secondaire optionnel

### Règles d’usage
- ton encourageant
- jamais culpabilisant

---

## 14.25 Skeleton

### Rôle
Signaler un chargement sans casser la structure.

### Variantes
- text
- card
- table row
- avatar
- dashboard blocks

---

## 14.26 Progress

### Types
- barre linéaire
- barre segmentée
- cercle compact
- milestone tracker

### Usages
- avancement projet
- progression onboarding
- charge de travail

---

## 14.27 Pagination

### Rôle
Naviguer dans les ensembles volumineux.

### Composition
- précédent
- suivant
- numéros optionnels
- taille de page optionnelle

---

## 14.28 Breadcrumb

### Rôle
Montrer la position dans l’arborescence.

### Règles d’usage
- utile sur les vues profondes
- inutile sur le dashboard principal

---

## 14.29 KPI Stat Card

### Rôle
Afficher une métrique clé.

### Contenu type
- label
- valeur
- delta
- mini tendance
- aide contextuelle optionnelle

### Règles d’usage
- très utile pour Evoria
- hiérarchie ultra lisible

---

## 14.30 Activity Item

### Rôle
Afficher un événement d’équipe ou de projet.

### Contenu type
- avatar
- acteur
- action
- cible
- date
- niveau de détail optionnel

---

## 14.31 Project Card

### Rôle
Composant métier central.

### Contenu type
- nom du projet
- description courte
- statut
- progression
- équipe
- échéance
- priorité
- CTA rapide

### Variants
- compact
- detailed
- dashboard

---

## 14.32 Task Card / Task Row

### Rôle
Composant métier central pour la gestion quotidienne.

### Contenu type
- titre
- assigné à
- priorité
- statut
- échéance
- tags
- commentaire ou pièce jointe éventuelle

### Variants
- row
- board card
- compact mobile

---

## 14.33 Comment Block

### Rôle
Affichage des échanges collaboratifs.

### Contenu type
- auteur
- avatar
- date
- contenu
- actions (répondre, modifier, résoudre)

---

## 14.34 Member Pill / User Chip

### Rôle
Afficher un membre compactement.

### Usages
- assignation
- filtres utilisateurs
- mentions
- participants d’un projet

---

## 14.35 Filter Bar

### Rôle
Regrouper les filtres d’une vue.

### Contenu type
- selecteurs
- tags actifs
- tri
- reset
- bouton vues enregistrées plus tard

### Règles d’usage
- très utile dans Evoria
- doit rester scannable et modulable

---

## 14.36 Demo page recommandée

Pour industrialiser le kit, créer une page interne de démonstration avec sections :
- couleurs
- typographies
- boutons
- champs
- navigation
- cartes
- tableaux
- états vides
- toasts
- composants métier

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
- Button
- Input
- Textarea
- Badge
- Card
- Avatar
- Sidebar item
- Topbar
- Tabs

### Sprint 2
- Select
- Checkbox
- Radio Group
- Switch
- Modal
- Drawer
- Toast
- Tooltip

### Sprint 3
- Table
- Empty State
- Skeleton
- Progress
- Pagination
- Breadcrumb

### Sprint 4
- Project Card
- Task Card
- KPI Stat Card
- Activity Item
- Filter Bar
- Comment Block
- Member Pill

---

## 15. Étape suivante recommandée

À partir de cette bibliothèque, il faut produire :
1. une fiche détaillée par composant prioritaire
2. une page de démo UI kit
3. les premiers composants React + Tailwind
4. la maquette du dashboard d’accueil

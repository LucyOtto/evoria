# 📘 Cahier des charges — Evoria

## 1. 🎯 Contexte du projet

Dans le cadre de la formation en commerce/marketing, les étudiants doivent concevoir et organiser des événements à l’aide d’outils comme Excel.

👉 Problème :
- outils peu visuels
- informations éparpillées
- aucune centralisation
- difficulté à suivre l’avancement réel

👉 Opportunité :
- Créer une application dédiée permettant de :
  - centraliser toutes les données d’un événement
  - visualiser le rétroplanning facilement
  - suivre les tâches, les équipes et le budget

## 2. 💡 Présentation du projet

### Nom du projet : 
Evoria

### Concept :
Evoria est une application web de gestion d’événements permettant de planifier, organiser et suivre un projet événementiel de manière claire, visuelle et centralisée.

### Objectif principal :
Remplacer l’utilisation d’Excel par un outil plus intuitif, structuré et adapté à l’événementiel.

## 3. 👥 Cibles utilisateurs
### 🎓 Cible principale
- étudiants (commerce, marketing, événementiel)
###🧩 Cibles secondaires
- associations
- petites entreprises
- organisateurs d’événements locaux

## 4. 🧠 Problématique
Comment simplifier la gestion d’un événement en centralisant toutes les informations dans un outil visuel, ergonomique et accessible ?

## 5. 🎯 Objectifs
### Objectifs fonctionnels
- planifier un événement
- suivre les tâches et leur avancement
- organiser les ressources humaines et matérielles
- visualiser le rétroplanning
- centraliser les informations

### Objectifs utilisateurs
- gagner du temps
- mieux s’organiser
- éviter les oublis
- avoir une vision globale du projet

## 6. 🧱 Périmètre fonctionnel
## 6.1 Gestion des événements
- créer / modifier / supprimer un événement
- informations :
  - nom
  - date
  - lieu
  - description
  - objectif
  - cible
  - responsable
  - statut

### 6.2 Gestion des tâches
- créer des tâches liées à un événement
- attribuer un responsable
- définir :
  - date début / fin
  - statut (à faire / en cours / terminé)
  - priorité
  - sous-tâches (checklist)

### 6.3 Rétroplanning (Gantt simplifié)
- affichage des tâches sur une timeline
- visualisation par dates
- code couleur par statut ou catégorie
- identification des retards

### 6.4 Tableau de bord
- vue globale de l’événement :
- avancement (%)
- tâches en cours
- tâches en retard
- résumé budget (simple)
- prochaines échéances

### 6.5 Carnet de bord
- notes datées
- suivi des actions
- incidents / problèmes
- décisions prises

### 6.6 Gestion de l’équipe
- liste des membres
- rôle
- tâches assignées

### 6.7 Gestion des ressources
- matériel
- prestataires
- partenaires
- notes associées

### 6.8 Budget (version simple)
- budget prévisionnel
- budget réel
- suivi basique

## 7. ⭐ Fonctionnalités secondaires (V2)
- dépendances entre tâches
- modèles d’événements (templates)
- filtres avancés
- export PDF
- notifications / alertes
- commentaires sur tâches
- historique des actions
- vues multiples (kanban, calendrier)

## 8. 🚀 Fonctionnalités avancées (V3)
- gestion des participants
- formulaires d’inscription
- billetterie
- check-in
- automatisations
- intégrations (Google Calendar, etc.)
- application mobile

## 9. 🖥️ Contraintes techniques
### Technologies envisagées
- Frontend : React + TypeScript
- UI : Tailwind CSS
- Backend : FastAPI
- Base de données : SQLite (début)

### Contraintes
- application simple à utiliser
- responsive (utilisable sur PC en priorité)
- performance correcte en local
- code structuré et évolutif

## 10. 🎨 Contraintes UX/UI
- interface claire et intuitive
- navigation simple (menu latéral)
- visuel moderne
- lecture rapide des informations
- priorité à la lisibilité

## 11. 🔐 Sécurité (basique pour MVP)
- gestion simple des utilisateurs (optionnel V1)
- protection des données locales
- évolution possible vers authentification

## 12. 📈 Indicateurs de réussite
- temps de prise en main < 10 minutes
- réduction du nombre d’outils utilisés (tout centralisé)
- amélioration de la lisibilité du projet
- satisfaction utilisateur (classe = bêta test)

## 13. 🧭 Positionnement d’Evoria

Evoria est un outil de gestion d’événements simple, visuel et accessible, conçu pour remplacer Excel et faciliter l’organisation de projets événementiels pour les étudiants et petites structures.

## 14. 🔥 Proposition de valeur
- plus simple que les outils professionnels
- plus adapté que les outils généralistes
- plus visuel qu’Excel
- pensé pour un usage réel terrain

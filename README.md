# menage
# 🧹 MenagePro - Plateforme de mise en relation pour services de ménage au Cameroun

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/votre-repo/menagepro)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Firebase](https://img.shields.io/badge/Firebase-10.8.0-orange.svg)](https://firebase.google.com)

## 📋 Description

MenagePro est une plateforme web complète permettant la mise en relation entre les candidats (femmes de ménage) et les clients au Cameroun. L'application offre une gestion administrative complète des inscriptions, validations et suivi des candidatures.

### 🎯 Objectifs
- Faciliter l'inscription des femmes de ménage
- Centraliser la gestion des candidatures pour les administrateurs
- Offrir un espace personnel aux candidates validées
- Assurer un suivi transparent des statuts (en attente, validé, refusé)

## ✨ Fonctionnalités

### 👑 Espace Administrateur
- Connexion sécurisée via Firebase Auth
- Dashboard avec statistiques en temps réel
- Gestion complète des candidatures
- Filtrage par statut, ville, recherche textuelle
- Validation/refus des inscriptions
- Export des données au format CSV
- Interface responsive

### 👩‍🍳 Espace Candidat (Femme de ménage)
- Inscription avec formulaire complet
- Connexion sécurisée
- Espace personnel avec suivi du statut
- Stockage des informations dans Firestore
- Statut en attente après inscription

## 🏗️ Architecture Technique

### Technologies utilisées
| Technologie | Version | Utilisation |
|-------------|---------|-------------|
| HTML5 | - | Structure des pages |
| CSS3 | - | Styles et animations |
| JavaScript | ES6+ | Logique métier |
| Firebase Auth | 10.8.0 | Authentification |
| Firestore | 10.8.0 | Base de données NoSQL |
| Firebase Storage | 10.8.0 | Stockage de fichiers |

### Structure de la base de données

#### Collection `candidates`
```javascript
{
  uid: string,              // ID Firebase Auth
  nom: string,              // Nom complet
  email: string,            // Email unique
  telephone: string,        // Numéro de téléphone
  age: number,              // Âge (23-60 ans)
  ville: string,            // Ville (Douala, Yaoundé...)
  experience: number,       // Années d'expérience
  competences: string,      // Compétences (texte libre)
  status: string,           // pending | accepted | rejected
  dateInscription: timestamp, // Date d'inscription
  type: string              // "candidate"
}

# Projet Mailler - Gestion de Tâches avec Envoi d'Email

**Niveau :** Master 1  
**École :** ECV Paris Digital  
**Description :** Ce projet est une API backend de gestion de tâches qui envoie un email à chaque action (création, mise à jour, suppression, etc.). Le but est de renforcer les compétences en développement backend avec **Express.js**, **TypeScript**, **Nodemailer**, et l'utilisation de **variables d'environnement** pour sécuriser les informations d'authentification.

## Fonctionnalités

- **CRUD Tâches** : Permet la création, lecture, mise à jour, et suppression de tâches.
- **Envoi d'Email** : À chaque action sur une tâche (ex : création, suppression), un email est automatiquement envoyé pour notifier l'utilisateur.
- **Tests** : Tests d'API pour garantir le bon fonctionnement des endpoints et des fonctionnalités.
- **Variables d'environnement** : Utilisation de `.env` pour sécuriser les informations sensibles, telles que les identifiants de connexion.

## Technologies

- **Node.js** et **Express.js** : Pour la création de l'API backend.
- **TypeScript** : Pour un typage strict et une meilleure maintenabilité du code.
- **Nodemailer** : Pour l'envoi d'emails via un transporteur SMTP.
- **Jest** et **Supertest** : Pour les tests unitaires et d’intégration.
- **Mailtrap** (ou un compte SMTP configuré) : Permet de simuler l'envoi d'emails en environnement de développement.

## Installation et Configuration

1. **Cloner le projet**

   ```bash
   git clone https://github.com/QuentinGP23/test-auto-exo.git
   cd mailler
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**

   Créez un fichier `.env` à la racine du projet pour stocker les informations d'authentification pour l'envoi d'emails :

   ```plaintext
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   SMTP_HOST=smtp.yourprovider.com
   SMTP_PORT=587
   EMAIL_FROM=your-email@example.com
   ```

   - **EMAIL_USER** : Adresse email pour envoyer les notifications.
   - **EMAIL_PASS** : Mot de passe ou mot de passe d'application (si la double authentification est activée).
   - **SMTP_HOST** : Hôte SMTP de votre fournisseur d'email (ex : `smtp.gmail.com`).
   - **SMTP_PORT** : Port SMTP (587 pour TLS, 465 pour SSL).

4. **Ajouter `.env` au fichier `.gitignore`** pour éviter de partager vos informations sensibles.

5. **Démarrer le serveur en développement**

   ```bash
   npm run dev
   ```

6. **Tester l'API**
   - Les tests d'API peuvent être exécutés avec Jest. Utilisez la commande suivante pour lancer tous les tests :
     ```bash
     npm test
     ```

## Endpoints de l'API

- **POST /api/tasks** : Créer une nouvelle tâche
- **GET /api/tasks** : Récupérer la liste de toutes les tâches
- **GET /api/tasks/:id** : Récupérer une tâche spécifique par ID
- **PUT /api/tasks/:id** : Mettre à jour une tâche existante
- **DELETE /api/tasks/:id** : Supprimer une tâche par ID

Chaque endpoint déclenche un envoi d'email, notifiant de l'action effectuée.

## Exemple de Configuration avec Gmail

Pour utiliser Gmail en tant que transporteur SMTP :

1. Remplacez `SMTP_HOST` par `smtp.gmail.com` et `SMTP_PORT` par `587`.
2. Si vous avez activé la double authentification, générez un **mot de passe d'application** dans vos paramètres de sécurité Google, et utilisez-le pour `EMAIL_PASS`.

**Note** : Assurez-vous que votre compte Gmail autorise les "applications moins sécurisées" ou utilisez un mot de passe d'application.

## Structure du Projet

- **src/** : Code source principal
  - `app.ts` : Configuration de l'application Express
  - `server.ts` : Lancement du serveur
  - `routes.ts` : Définition des routes de l'API
  - `taskController.ts` : Logique de gestion des tâches
  - `emailService.ts` : Service d'envoi d'emails
  - `taskDatabase.ts` : Base de données en mémoire
- **tests/** : Tests des endpoints de l'API avec Jest et Supertest

## Auteur

- **Nom :** Quentin GEOFFROY-PITAILLER
- **Projet de cours :** Master 1 Développement Web à l'ECV Paris Digital

## Licence

Projet académique - usage non commercial

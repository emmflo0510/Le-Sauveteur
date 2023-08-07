Sauveteur 👨‍🚒 Projet "Le Sauveteur" pendant la période CAP ENTREPRISE.

Préambule 📜 Le projet "Le Sauveteur" vise à créer une application mobile gratuite pour mettre en contact des personnes formées aux gestes de premiers secours avec des situations d'urgence à proximité. Théo, ayant peu de connaissances techniques, s'adresse à un freelance pour développer rapidement un MVP (Minimum Viable Product) de l'application.

Enjeux ❗ L'objectif principal de l'application est de sauver des vies en facilitant l'assistance en cas d'urgence. Cependant, il faut garantir la sécurité 🔐 et éviter les abus en mettant en place une authentification simple 🔐 et en limitant les alertes ⏰. Un système de délai entre les alertes ⏳ est prévu pour protéger l'intégrité du système.

Expression du besoin : Application mobile 📱 L'application mobile se concentre sur la simplicité et l'efficacité 💡. Les objectifs de l'application sont :

Alerter les utilisateurs lorsque des situations urgentes se produisent à proximité 🚨. Notifier les personnes compétentes pour intervenir en cas d'urgence à proximité 🚑. L'authentification est requise, et une page d'inscription collecte des informations telles que le nom, le prénom, le mot de passe et l'adresse e-mail 📝. Les utilisateurs peuvent choisir d'activer ou de désactiver les notifications d'urgence 📬. Page principale 🏠 La page principale de l'application présente un bouton "Créer une urgence" ➕. Un formulaire en bonus permet d'ajouter des informations supplémentaires sur la situation d'urgence 📝. Les utilisateurs ont également accès à un historique des alertes qu'ils ont signalées 📜.

Une situation urgente est définie par :

Identifiant 🔍 Identifiant de l'utilisateur signalant l'urgence 🆘 Coordonnées GPS du lieu du signalant 📍 Date et heure de la déclaration ⏰ Date et heure de fin de la déclaration (optionnelle) ⏹️ Lorsqu'un utilisateur signale une urgence, l'application envoie une requête à l'API pour vérifier les délais entre les alertes ⏳, enregistrer la situation dans la base de données et notifier les utilisateurs à proximité 📡. Un timer ⏲️ et un bouton pour mettre fin à la situation d'urgence sont affichés. Page historique 📅 La page d'historique liste toutes les alertes ayant une date de fin de déclaration 📜.

Le projet "Le Sauveteur" se concentre sur la simplicité et la rapidité de développement pour offrir une solution pratique et efficace en cas d'urgence 🚑.

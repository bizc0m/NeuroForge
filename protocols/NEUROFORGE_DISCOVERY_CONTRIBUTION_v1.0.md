# NeuroForge — Protocole de visibilité, documentation et contribution v1.0

Version : 1.0 — 14 novembre 2026. Statut : proposition de standard, à intégrer projet par projet. La présence de ce document ne constitue pas une mise en œuvre ni une validation des applications.

## Règles générales

- Objectif : permettre de trouver chaque application, comprendre son utilité, l’essayer et contribuer sans devoir connaître son nom.
- Une source structurée par projet alimente les documents ; préserver les personnalisations, anciennes ressources, Combos et Katas.
- Documenter uniquement les fonctions réelles. Distinguer demandé, implémenté, testé, publié et non vérifié.
- Conserver les sources, dates, versions et preuves. Aucun chiffre de gain, volume de recherche, résultat de test ou classement inventé.
- Ne pas publier de secrets, données personnelles, journaux privés ou captures de comptes réels. Utiliser des exemples synthétiques.
- Les changements graphiques respectent le standard de la cible et les fonctions existantes. Toute modification commune passe par le responsable de l’intégration.
- Chaque modification se prépare sur une branche avec diff, contrôles et PR. Une proposition de mise à jour n’autorise ni fusion, ni déploiement, ni diffusion sur tous les projets.
- Une page en ligne ne prouve pas que le produit fonctionne. Le référencement et le classement ne sont jamais garantis.
- Une traduction générée n’est pas une traduction relue. Un export JSON est un plan, pas une exécution.
- Le présent protocole décrit la cible. Les validations manquantes doivent rester visibles.

## 1. Identité, inventaire et source de vérité

1. Attribuer un identifiant stable au projet ; séparer nom technique, nom marketing et entité/personnage.
2. Vérifier le dépôt canonique, la version, la branche, la licence réelle et le responsable.
3. Résumer la fonction principale en une phrase compréhensible sans connaître l’écosystème Nyx.
4. Inventorier fonctions, sous-fonctions, entrées, sorties, plateformes et limites vérifiables.
5. Relier chaque affirmation importante à une source documentaire, au code ou à un test daté.
6. Centraliser les informations dans `neuroforge.yml` ou un modèle équivalent versionné ; ne pas créer des valeurs divergentes dans chaque sortie.
7. Enregistrer les URL exactes du dépôt, des releases, de l’app en ligne, de la documentation et des contributions ; une adresse inconnue reste absente.
8. Identifier la version du standard graphique et la localisation réellement disponibles.
9. Inscrire chaque projet dans l’index central avec liens directs, fonction, statut et date de vérification.
10. Donner systématiquement le lien de cet index dans les bilans ; ne pas présenter les projets non audités comme vérifiés.

## 2. Recherche sémantique par fonction et langue

1. Partir des tâches utilisateur : « chercher dans mes fichiers », « créer un porte-nom PDF », plutôt que du seul nom de marque.
2. Définir les publics, contextes, objets manipulés et problèmes auxquels répond réellement le produit.
3. Rechercher pour chaque fonction ses termes usuels, synonymes, variantes et expressions métier dans chaque langue cible.
4. Consulter la KM interne si disponible, les références linguistiques, documentations spécialisées et usages de communautés ; Wikipédia sert de point de départ, pas de preuve unique.
5. Examiner les formulations de recherche et pages de résultats pour distinguer intentions d’apprentissage, de comparaison, de téléchargement et d’utilisation.
6. Ne pas copier les contenus concurrents ; conserver liens, date, langue, contexte et justification des termes retenus.
7. Séparer vocabulaire vérifié et hypothèses SEO ; ne déclarer un volume ou une difficulté qu’avec une source et une méthode identifiées.
8. Créer un glossaire par projet et langue : concept, formulation retenue, synonymes, exemples, termes à éviter et statut de revue.
9. Affecter chaque intention à une page utile ; éviter plusieurs pages presque identiques créées uniquement pour des mots-clés.
10. Réexaminer le glossaire lors d’un changement de fonction, de public ou d’usage observé.

## 3. Treize langues et localisation

1. La cible demandée est de **13 langues** ; la liste exacte et leurs variantes régionales restent **à confirmer**. Ne pas inventer les cinq langues supplémentaires à partir des anciennes listes.
2. Conserver une langue source explicite et un manifeste des 13 cibles après validation ; EN et FR figurent dans le socle déjà demandé.
3. Préparer une URL stable par langue publiée, par exemple `/fr/` et `/en/`, accessible directement sans cookie ni changement de préférence.
4. Traduire contenu principal, navigation, About, aide, tutoriels, textes alternatifs et métadonnées ; ne pas afficher une langue dont seul le menu est traduit.
5. Appliquer le glossaire local ; adapter les formulations à l’usage plutôt que traduire littéralement les mots-clés.
6. Tester expansion des textes, nombres, dates, polices et, si la liste retenue le nécessite, sens droite-à-gauche.
7. Utiliser des clés stables et conserver pour chaque traduction la révision de sa source, son responsable et son état : générée, relue, publiée ou obsolète.
8. Afficher un sélecteur textuel dans le nom de la langue ; ne pas assimiler langue et drapeau. Prévoir un fallback annoncé dans l’application.
9. Ne pas publier 13 coquilles vides : une langue incomplète reste signalée en préparation. Les brouillons conservent `noindex`.
10. Associer les variantes publiées avec `hreflang` réciproques, URL canoniques cohérentes et sitemap ; ne pas canoniser toutes les traductions vers l’anglais.

## 4. Documentation, About et README

1. Produire une page « à quoi sert cet outil » avec fonction, public, scénario concret et résultat attendu.
2. Donner une installation ou un accès en ligne reproductible, prérequis, permissions et version concernée.
3. Décrire un premier usage court avec données synthétiques et résultat observable.
4. Ajouter l’aide des réglages, formats d’import/export, erreurs courantes et récupération.
5. Intégrer un About compact : nom, fonction, version, auteur/éditeur, licence, docs, releases, contribution et support.
6. Présenter NeuroForge et le taillandier en version courte ; conserver le développement du récit dans le manifeste lié.
7. Documenter le développement assisté par IA et les limites effectivement connues ; ne pas affirmer une revue humaine ou des tests jamais réalisés.
8. Construire le README depuis les données vérifiées : fonction, badges, captures, accès/installation, usage, limites, contribution, crédits et licence.
9. Décrire les dépendances réellement utilisées avec rôle, lien officiel et notices de licence nécessaires.
10. Préserver les sections manuelles ; fournir un aperçu et un diff avant remplacement d’une documentation existante.

## 5. Page produit et découvrabilité technique

1. Afficher dès le haut le nom, la fonction recherchable et une action utile : essayer, télécharger ou lire le guide.
2. Montrer une capture réelle du produit ; identifier clairement les maquettes, compositions et fonctionnalités proposées.
3. Donner aux pages un titre et une description propres à leur fonction et à leur langue ; éviter slogans seuls et accumulation de mots-clés.
4. Utiliser une structure de titres lisible, des textes visibles et des liens HTML explicites vers les fonctions, guides et téléchargements.
5. Prévoir canonical, alternates linguistiques, sitemap et règles robots cohérents avec l’état public ou brouillon.
6. Renseigner OpenGraph et les données structurées applicables à partir des capacités réelles ; ne pas inventer avis, notes, prix ou compatibilité.
7. Vérifier HTTP, navigation mobile, clavier, contrastes, chargement des médias et téléchargement sur les URL finales.
8. Associer au dépôt une description et des Topics spécifiques pertinents, puis relier dépôt, page produit et index central.
9. Mettre en haut un accès distinct Buy Me a Coffee et KindWare ainsi que les identités NeuroForge et DisableNotNousefull ; vérifier les URL officielles avant insertion.
10. Ajouter du maillage contextuel entre projets, guides, Combos et Katas sans liens artificiels ; distinguer publiée, indexable et effectivement indexée.

## 6. Identité graphique, avatars et ressources

1. APP : interface Prompt Mistress, barre de menu et compacité Metis ; priorité au module Metis, version autonome secondaire.
2. HTML/WEBAPP : design et mécaniques NameTent, adaptés à la fonction sans ajouter de commandes vides.
3. Fixer les références des pinups fournies et les droits ; générer le personnage seulement après disponibilité de ces références.
4. Associer la déesse ou le personnage aux concepts du produit ; expliquer le choix et créer une entité originale si nécessaire.
5. Séparer avatar détaillé et icône fonctionnelle lisible à petite taille ; préserver les identités déjà approuvées.
6. Stocker sources, poses, transparence, exports, instructions de génération, provenance, droits et version dans une bibliothèque indexée.
7. Pour les compositions : capture réelle, personnage cadré à la taille, main calibrée, cible explicite et zones protégées pour les commandes.
8. Positionner bulles HTML traduisibles et avatar sans obstruction ; signaler l’impossibilité de placement plutôt que produire un pointage incohérent.
9. Prévoir trois booléens indépendants : avatar d’interface, avatar pendant la capture, panneau au lancement ; tester persistance et huit combinaisons dans le runtime concerné.
10. Garder les états distincts : proposé, validé graphiquement, intégré, testé ; les fichiers d’images ne prouvent pas l’intégration du produit.

## 7. Fision, Combos, Katas et tutoriels

1. Prévoir sur chaque page locale un accès « Ajuster dans Fision/NetFision », fondé sur le raccord compatible et autorisé.
2. Transmettre la composition actuelle avec calques identifiés : capture, avatar, bulle, icône, fonction et badges.
3. Préserver les variables et séparer données projet, traductions et disposition graphique.
4. Choisir explicitement la portée : cette page, ce projet ou template commune ; sauvegarder avant application.
5. Récupérer le JSON, contrôler sa validité, prévisualiser et tester le rendu ; l’éditeur public seul ne peut pas écrire les fichiers locaux.
6. Modifier l’apparence d’un badge sans falsifier sa source, son statut de test ou sa conformité.
7. Définir une Combo par une complémentarité réelle entre logiciels/modules, avec entrées, sorties, compatibilité et bénéfice.
8. Définir un Kata comme l’enchaînement reproductible d’une Combo : déclencheur, étapes, automatisation éventuelle, résultat, limites et récupération.
9. Conserver anciennes Combos et Katas avec versions et statut ; ne pas supprimer automatiquement ni qualifier d’automatique un scénario uniquement documenté.
10. Commencer les tutoriels par des compositions fixes validées ; raccorder ensuite l’animation de type marionnette au moteur concerné, avec preuves propres.

## 8. Invitation à contribuer : parcours obligatoire

1. Afficher une invitation visible dans README, page produit, documentation et About/Help lorsque pertinent.
2. Nommer les contributions accessibles sans coder : retour d’usage, reproduction, tests, traduction, tutoriel, accessibilité, illustration et documentation.
3. Fournir un `CONTRIBUTING.md` à l’emplacement reconnu par GitHub et un lien direct vers celui-ci ; ce protocole ne le remplace pas dans chaque dépôt.
4. Expliquer comment signaler un bug : version, environnement, étapes synthétiques, attendu, observé et pièces jointes nettoyées de données personnelles.
5. Donner un canal de proposition de fonction et demander le problème d’usage avant de prescrire une solution.
6. Documenter le lancement local, commandes de test, données isolées et procédure de validation des contributions techniques.
7. Identifier de petites tâches d’accueil et préciser périmètre, responsable, dépendances et critère d’acceptation ; ne pas promettre un délai de réponse non tenu.
8. Décrire la PR attendue : changement ciblé, preuves, mise à jour documentaire, droits des ressources et licences compatibles.
9. Fournir le canal de signalement privé des vulnérabilités lorsqu’il existe ; ne pas encourager leur publication avec secrets dans une issue publique.
10. Accuser réception, qualifier la proposition, expliquer acceptation/refus et créditer selon le souhait du contributeur ; ne pas inventer une contribution ni publier une identité sans accord.

### Texte d’invitation réutilisable

**FR** — Vous pouvez contribuer sans écrire de code : signaler un problème, tester un parcours, améliorer une traduction, expliquer un usage ou proposer une correction. Consultez le guide de contribution du dépôt et choisissez une tâche dont le périmètre est défini. N’ajoutez aucune donnée personnelle, aucun secret ni contenu sans droit de redistribution.

**EN** — You can contribute without writing code: report a problem, test a workflow, improve a translation, explain a use case, or propose a fix. Read the repository’s contribution guide and choose a task with a clear scope. Do not include personal data, secrets, or material you are not entitled to redistribute.

Les liens vers le guide et les canaux réels sont ajoutés par chaque projet ; aucune adresse fictive n’est fournie ici.

## 9. Changements, priorités et maintenance

1. Enregistrer une référence initiale : commit, version, fonctions et révision des documents/langues/ressources.
2. Surveiller les changements touchant commandes, formats, écrans, réglages, dépendances et capacités documentées.
3. Combiner diff, métadonnées et revue d’impact ; un détecteur ne garantit pas de comprendre un changement majeur.
4. Marquer précisément les documents, captures et traductions concernés comme « à revoir » ; ne pas régénérer tout le catalogue sans motif.
5. Conserver dans l’Explorateur tâches, priorités, groupes, responsables, dépendances, preuves et conditions de fin quand ces champs sont implémentés.
6. Prioriser intégrité et blocages, puis contrat commun, pilote APP et pilote WEBAPP, validation, généralisation et visibilité.
7. Présenter la mise à jour par PR avec diff et rapport ; ne pas changer la licence ou remplacer une ressource validée en silence.
8. Séparer licence du code, droits des médias et invitation KindWare ; une condition de licence KindWare nécessite un texte défini et une revue appropriée.
9. Mesurer la visibilité à partir de sources autorisées : indexation, requêtes, clics vers l’app et retours ; ne collecter aucune donnée de compte sans autorisation.
10. Conserver les limites et suspens dans le suivi existant ; une publication du protocole ne clôt pas les intégrations restantes.

## 10. Contrôles et conditions de livraison

1. Vérifier nom, fonction, URLs et licence contre des sources réelles ; conserver commande ou protocole de contrôle.
2. Relier chaque exigence à un résultat : réussi, échoué, non testé ou non applicable avec motif.
3. Tester liens internes, ancres, ressources, absence de secrets et de placeholders dans les sorties finales.
4. Contrôler chaque langue publiée : contenu, sélecteur, liens alternatifs et statut de traduction ; les 13 langues non définies restent un suspens.
5. Vérifier la visibilité de l’invitation, l’accès au guide de contribution et les canaux effectivement ouverts.
6. Vérifier captures, bulles, pointage, clavier et responsive sur les tailles retenues ; ne pas confondre contrôle visuel et test fonctionnel.
7. Tester import/export, récupération et préférences sur un profil isolé ; conserver les éléments utilisateur préexistants.
8. Produire un rapport des fichiers, versions, preuves, limites, responsables et prochaines actions ; pas de score global non défini.
9. Créer un commit ciblé puis pousser vers une destination vérifiée avec autorisation ; PR brouillon, aucune fusion ou mise en ligne implicite.
10. Fournir liens directs vers protocole, PR et index central ; vérifier le commit distant avant de déclarer le dépôt mis à jour.

## Suspens explicites

- Définir la liste exacte des 13 langues et variantes ; décision du propriétaire du standard.
- Confirmer la référence versionnée Metis et le contrat de module ; intégration par le Socle.
- Recevoir les références de pinups et vérifier leurs droits ; validation du personnage maître.
- Confirmer les URLs officielles de NeuroForge, DisableNotNousefull et la destination de la page KindWare avant génération globale.
- Décider si KindWare reste une invitation facultative ; aucune licence existante remplacée par ce document.
- Raccorder les trois réglages dans les runtimes : le configurateur documentaire ne démontre pas ce raccordement.
- Le présent lot publie un protocole ; il ne déploie pas de pages traduites, d’avatars ni d’automatisations de production.

## Références vérifiées le 14 novembre 2026

- [Google Search Essentials](https://developers.google.com/search/docs/essentials) — vocabulaire utilisé pour rechercher le contenu et emplacements descriptifs.
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — contenu utile, titres, liens et médias.
- [Versions localisées](https://developers.google.com/search/docs/specialty/international/localized-versions) — URLs linguistiques et relations entre variantes.
- [Sites multilingues](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) — architecture et navigation linguistiques.
- [GitHub — guide de contribution](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors) — emplacement et découverte de CONTRIBUTING.

Ces références soutiennent la méthode ; elles ne garantissent aucun classement, trafic ou contribution.

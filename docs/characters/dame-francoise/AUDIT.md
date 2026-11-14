# Audit, revue de code et contrôle — galerie Dame Françoise

Périmètre : galerie locale et proposition de publication NeuroForge PR 5. Sources : HTML/CSS/JS, profils, manifestes et images de `docs/generated/dame-francoise`, tests propriétaires et état GitHub lu pendant cette revue. Les modifications communes et les travaux préexistants sont préservés.

## Conclusion

Galerie corrigée et contrôlée dans Chromium/Chrome isolé avec données publiques/synthétiques. Deux portraits de mêmes dimensions, quatre variantes, popups, téléchargement et navigation clavier vérifiés. Pas de validation d’une application métier ni de déploiement : GitHub Pages lit encore `main:/docs`, la PR est brouillon et non fusionnée.

## Constats démontrés et corrections

1. **Charge excessive des aperçus — corrigé.** Les six PNG utilisés pour l’affichage pesaient 13 859 098 octets. Les six dérivés WebP pèsent 619 358 octets, soit 95,53 % de réduction de cette charge d’images. Mesure : sommes des tailles exactes dans `previews.json` ; ce chiffre ne représente pas un temps de chargement ou le poids total du dépôt. Les originaux ne sont pas supprimés et restent utilisés pour les grandes vues/téléchargements.
2. **Popup sans état explicite de chargement/échec — corrigé.** Avant correction, l’URL était affectée sans attendre le décodage et le lien de téléchargement était proposé immédiatement. Désormais : message annoncé, image masquée pendant le chargement, erreur lisible, téléchargement activé uniquement après décodage réussi. Échec réseau simulé réellement dans le navigateur.
3. **Gestion des requêtes successives — renforcée.** Un compteur invalide les résultats des anciennes demandes après fermeture/réouverture. Contrôle : chargement différé de la variante 2, fermeture, ouverture de la variante 3, puis libération de la première demande ; le bon lien est conservé. Ce renforcement accompagne l’ajout du chargement asynchrone.
4. **Tests susceptibles d’interroger un serveur existant — corrigé.** Le précédent port fixe était remplacé par un serveur de test local sur port attribué par le système, limité au dossier attendu. Les tests ne réutilisent plus un service utilisateur sur le même port.
5. **Lisibilité du code — améliorée.** Le contrôleur de galerie et son test sont structurés en lignes lisibles ; aucun nouveau framework ni service distant. Les dérivés sont reconstruits par `Tools/DocumentationCharacterPreviews.cjs` dans le worktree Documentation.
6. **Indication des sources/historique — conservée.** Le manifeste courant pointe vers les portraits communication-v3. Les preuves initiales concernent les fichiers initiaux et ne remplacent pas les vérifications courantes. La personnalité approuvée reste conservée dans les profils ; les variations visuelles restent identifiées comme propositions.

## Contrôles exécutés

- `node Tests/DocumentationCharacterGallery.cjs` : cinq largeurs (320, 390, 768, 1280, 1920), égalité des deux portraits, six ouvertures de popup, quatre variantes, fermeture Échap/bouton, retour du focus, PNG téléchargé, image absente et requête retardée. Zéro exception JavaScript observée dans le périmètre exécuté.
- `node Tests/DocumentationCharacterAssets.cjs` : décodage des deux PNG actifs, dimensions, alpha et empreintes du manifeste.
- `node Tools/DocumentationCharacterPreviews.cjs` : création des dérivés de présentation sans remplacement des PNG. Contrôle des empreintes avant/après, des chemins et des tailles.
- Contrôle des profils : source documentaire et copie publique identiques ; mission et schéma concordants ; liens de fichiers locaux présents.
- Inspection visuelle réelle de la capture après optimisation : rendu cohérent, même échelle et rangée des quatre miniatures conservés. Pas de mesure de similarité perceptuelle ni validation utilisateur de la compression.
- `node --check` sur contrôleur et outils ; `git diff --check` sur le lot ciblé.

Preuves : `gallery-verification.json`, `visual-v3-verification.json`, `docs/generated/dame-francoise/previews.json`. La capture de contrôle est conservée localement dans `work/francoise-gallery/gallery-audited.png`, non publiée comme donnée de compte ou preuve de runtime produit.

## Limites et priorités restantes

- **Publication** : fusion de PR 5 requise et non autorisée implicitement. Pas de prétention que la galerie soit déjà publiée sur `.io`.
- **Langues** : page en français, description anglaise dans la fiche ; cible de 13 langues non implémentée, liste encore à confirmer.
- **Identité** : validation de la variante masculine et des dernières retouches à obtenir ; personnage officiel féminin conservé.
- **Icone / animation** : compagnon fonctionnel, icône miniature, poses calibrées, calques séparés et moteur d’animation non livrés par ce lot.
- **Accessibilité** : tests clavier, focus et absence de débordement exécutés ; revue complète avec lecteurs d’écran, tactile matériel et autres navigateurs non effectuée. Aucun label de conformité globale.
- **Architecture** : façade et vitraux illustrés ; aucune exactitude architecturale ou affiliation religieuse officielle affirmée.
- **Performance** : poids des médias mesuré ; pas de benchmark réseau réel, mémoire ou LCP avant/après. Archives PNG lourdes conservées à dessein pour l’historique.

Prochaine décision : accepter le rendu optimisé puis autoriser la fusion séparément pour mettre la galerie en ligne. Les futurs raccordements aux applications doivent avoir leurs propres tests.

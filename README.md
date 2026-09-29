# Portfolio — Christopher Sauzon

Site statique fait avec [Astro](https://astro.build), publié sur GitHub Pages à l'adresse
<https://christopher.sauzon.org>.

## Travailler en local

```bash
npm install      # une seule fois
npm run dev      # site sur http://localhost:4321, rechargé à chaque modification
npm run build    # génère le site final dans dist/
```

En local (`npm run dev`), le site affiche aussi les **brouillons** et des repères roses
« à compléter ». Rien de tout ça n'apparaît sur le site publié.

## Où modifier quoi

| Je veux… | Fichier |
|---|---|
| Changer l'email, LinkedIn, le CV | `src/data/site.ts` |
| Changer un texte de l'interface (FR/EN) | `src/i18n/ui.ts` |
| Modifier un projet | `src/content/projects/fr/<projet>.md` et `en/<projet>.md` |
| Ajouter un projet | copier un `.md` existant dans `fr/` **et** `en/`, changer `order` |
| Masquer un projet du site publié | `draft: true` dans ses deux fichiers `.md` |
| Ajouter une vidéo | `youtubeId:` dans le `.md` (vidéo YouTube **non répertoriée**) |
| Ajouter une image | la déposer dans `src/assets/`, puis la référencer dans le `.md` |
| Galerie 3D | `src/components/Gallery3D.astro` |
| Couleurs, polices | `src/styles/global.css` |

Les images sont redimensionnées et converties automatiquement au build : on peut déposer
les fichiers d'origine.

## Mise en ligne

Chaque `git push` sur `main` reconstruit et publie le site
(`.github/workflows/deploy.yml`, environ 1 à 2 minutes).

### Domaine `christopher.sauzon.org`

1. DNS de sauzon.org : enregistrement `CNAME`, nom `christopher`, valeur `chrisgardian.github.io`.
2. GitHub > dépôt > Settings > Pages > Custom domain : `christopher.sauzon.org`, puis cocher
   « Enforce HTTPS » une fois le certificat prêt.
3. Recommandé : vérifier le domaine dans GitHub > Settings (du compte) > Pages, pour éviter
   qu'un autre dépôt puisse l'utiliser.

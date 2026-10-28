#!/usr/bin/env bash
# Собирает сайт под GitHub Pages (https://snowyks.github.io/les-pil/) и пушит сборку в ветку gh-pages.
# Запуск из папки my-app: bash scripts/deploy-pages.sh
set -e
cd "$(dirname "$0")/.."

# MSYS2_ENV_CONV_EXCL: иначе Git Bash превратит /les-pil в C:/Program Files/Git/les-pil
MSYS2_ENV_CONV_EXCL=PUBLIC_URL PUBLIC_URL=/les-pil REACT_APP_ORDER_URL=https://les-pil.vercel.app/api/order CI=true npm run build

# GitHub Pages не знает про SPA-маршруты: /les-pil/lumber отдаём той же index.html
cp build/index.html build/404.html
touch build/.nojekyll

cd build
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "deploy: GitHub Pages"
git push -f "$(git -C .. remote get-url origin)" gh-pages
rm -rf .git

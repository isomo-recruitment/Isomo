#! /bin/bash

vuepress build
shopt -s extglob
cd docs
rm -r !(_config.yml)
cd ..
cp -R .vuepress/dist/* docs/

git add .
git commit -m "deploy"
git push
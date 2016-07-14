#!/bin/bash

set -o errexit -o nounset

## make sure we deploy new assets, clean cache
npm run clean
## build /dist static asset artifacts
npm run build

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

#rev=$(git rev-parse --short HEAD)

#cd dist

#git init
#git config user.name "dviramontes"
#git config user.email "dviramontes@gmail.com"
#
#git remote add upstream "https://${GH_TOKEN}@github.com/mmmanyfold/princess-nokia.git"
#git fetch upstream
#git reset upstream/gh-pages

#echo "princessnokia.org" > CNAME

#touch .

#git add -A .
#git commit -m "rebuild pages at ${rev}"
#git push -q upstream HEAD:gh-pages
#!/usr/bin/env bash
set -e

COMMIT=$1

if [[ ${COMMIT} == "" ]]
then
  echo "missing parameter"
else
  echo "moving to ${COMMIT}..."
  git fetch -p --tags --force
  git reset HEAD --hard
  git pull origin master --rebase --force
  git checkout "${COMMIT}"
fi

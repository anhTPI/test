#!/usr/bin/env bash

set -x

GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD | sed -E 's/^(feature|hotfix|bugfix|release)\///g')
GIT_COMMIT_COUNT=$(git rev-list --all --count)
GIT_HASH=$(git rev-parse --short HEAD)

if [ "${GIT_BRANCH}" = 'master' ]; then
  GIT_SUFFIX=""
else
  GIT_SUFFIX=$(echo ".${GIT_BRANCH}" | sed 's/[^a-zA-Z0-9]/./g')
fi

if [[ "${GIT_BRANCH}" =~ ^([0-9]+\.){2}x$ ]]; then
  echo "${GIT_BRANCH}" | sed -E "s/x/${GIT_COMMIT_COUNT}/g"
else
  NPM_VERSION=$(grep '"version"' package.json | awk '{ print $2 }' | sed 's/[^0-9.]//g')
  echo "${NPM_VERSION}-dev.${GIT_COMMIT_COUNT}${GIT_SUFFIX}.${GIT_HASH}"
fi


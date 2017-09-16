#!/usr/bin/env bash

if (git status | grep "README.md" -q);
then
  echo "OK, README has changed";
  git add ./README.md;

  git status;
  echo "do the commit ...";
  git commit ./README.md -m "docs: update README.md";

  git status;
fi

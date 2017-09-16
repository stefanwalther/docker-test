#!/usr/bin/env bash

if (git status | grep "../README.md");
then
  echo "OK, README has changed";
fi

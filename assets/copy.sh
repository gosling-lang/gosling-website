#!/usr/bin/bash
cd ../../gosling.js
yarn run schema
cp ./schema/gosling.schema.json ../gosling-website/docs/assets
cd ../gosling-website/assets
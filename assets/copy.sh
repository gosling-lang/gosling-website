#!/usr/bin/bash
cd ../../gosling.js
yarn run schema
cp ./schema/gosling.schema.json ../gosling-website/assets
cd ../gosling-website/assets
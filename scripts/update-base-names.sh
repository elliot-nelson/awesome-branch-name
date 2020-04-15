#!/bin/bash

echo "Downloading latest version of the MtG card database..."
curl https://www.mtgjson.com/files/AllCards.json -o allcards.json

echo "Generating new data file..."
npm run generate-base-names

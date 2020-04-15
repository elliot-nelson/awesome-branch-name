#!/bin/bash
#
# Download the (very large) database of MtG cards as a json file.

curl https://www.mtgjson.com/files/AllCards.json -o allcards.json

#!/bin/bash
#
# This is a script to run on Linux, .deb or .rpm based systems for the rapid
# set up of environments for development and testing the end product.

cd /var/www/
sudo mkdir cms && chmod -R 777 cms/
cd cms/
git clone https://github.com/crowdsourcemedical/volunteer-database.git
python3 -m venv venv
source venv/bin/activate
cd /var/www/cms/volunteer-database/backend/
pip install --upgrade pip
pip install -r requirements.txt

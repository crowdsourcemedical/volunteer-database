#!/bin/bash

cd /var/www/
sudo mkdir cms && chmod -R 777 cms/
cd cms/
git clone https://github.com/crowdsourcemedical/volunteer-database.git
python3 -m venv venv
source venv/bin/activate
cd /var/www/cms/volunteer-database/backend/
pip install --upgrade pip
pip install -r requirements.txt

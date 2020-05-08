#!/bin/bash

# add keys (warning unsafe!)
wget -qO - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
# wget -qO - https://qgis.org/downloads/qgis-2019.gpg.key | sudo apt-key add -
# add repos
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/gis.list'
# sudo sh -c 'echo "deb https://qgis.org/ubuntu-ltr/ $(lsb_release -cs) main" > /etc/apt/sources.list.d/gis.list'

# update and install
sudo apt-get --yes update
sudo apt-get --yes install postgresql-12 pgadmin4 postgis
sudo apt-get --yes install redis redis-server nginx
# remote tools
sudo apt-get --yes remove ssh
sudo apt-get --yes install ssh xdg-utils

#start cluster
sudo pg_ctlcluster main 12 start

# enable postgis extensions
sudo -u postgres psql -c 'CREATE EXTENSION postgis;'
sudo -u postgres psql -c 'CREATE EXTENSION postgis_raster;'
sudo -u postgres psql -c 'CREATE EXTENSION postgis_topology;'

# edit bashrc
echo "alias cls='clear'" >> .bashrc
echo "export DISPLAY=localhost:0.0" >> .bashrc
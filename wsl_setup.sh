# get key
curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
# add repo
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'


# update and install
sudo apt-get update
sudo apt-get install postgresql-12 pgadmin4 postgis gdal-bin
sudo apt-get install redis redis-server
# remote tools
sudo apt-get remove ssh
sudo apt-get install ssh xdg-utils

# enable postgis extensions
sudo -u postgres psql -c 'CREATE EXTENSION postgis;'
sudo -u postgres psql -c 'CREATE EXTENSION postgis_raster;'
sudo -u postgres psql -c 'CREATE EXTENSION postgis_topology;'
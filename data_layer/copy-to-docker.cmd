@echo off
docker run -d --name mongo -p 27017:27017 --network=dockernet mongodb/mongodb-community-server:6.0.4-ubi8
for %%f in (*.json) do docker cp %%f mongo:/mnt/%%f
pause
# docker network create --attachable dockernet

docker run -d \
  --name mongo \
  -p 27017:27017 \
  --network=dockernet \
  mongodb/mongodb-community-server:6.0.4-ubi8

for file in $(ls *.json); do
  docker cp ${file} mongo:/mnt/${file}
done;
docker cp create-collections.sh mongo:/mnt/create-collections.sh

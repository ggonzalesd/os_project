# docker network create --attachable dockernet
#  --network=dockernet \

docker run -d \
  --name mongo \
  -p 27018:27017 \
  mongodb/mongodb-community-server:6.0.4-ubi8

for file in $(ls *.json); do
  docker cp ${file} mongo:/mnt/${file}
done;
docker cp create-collections.sh mongo:/mnt/create-collections.sh
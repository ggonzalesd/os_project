# Os Project


## Data Layer

Run the docker image for Data Layer

```sh
cd data_layer
sh start-docker.sh
docker exec -it mongo sh
```

Inside Mongo Container

```sh
cd /mnt
sh create-collections.sh
```
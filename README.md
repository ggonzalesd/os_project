# Os Project


## Data Layer

Run the docker image for Data Layer

```sh
docker run -d \
  --name mongo \
  -p 27018:27017 \
  mongodb/mongodb-community-server:6.0.4-ubi8
```

Copy all `json` files to the container

* assistants.json
* clothes.json
* orders.json
* sedes.json
* users.json
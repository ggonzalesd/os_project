docker run -d \
  --name frontend \
  --env-file .env \
  -p 8080:80 \
  --network=dockernet \
  os_project_front:0.0.1

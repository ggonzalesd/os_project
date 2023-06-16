@echo off
docker build -t os_project_api:0.0.1 .
docker run -d --name api --env-file .env -p 3000:3000 --network=dockernet os_project_api:0.0.1
pause
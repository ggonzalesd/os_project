@echo off
docker build -t os_project_front:0.0.1 .
docker run -d --name frontend --env-file .env -p 8080:3000 --network=dockernet os_project_front:0.0.1
pause
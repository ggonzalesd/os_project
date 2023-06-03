@echo off
for %%f in (*.json) do docker cp %%f mongo:/mnt/%%f
pause
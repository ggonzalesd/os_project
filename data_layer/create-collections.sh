for file in $(ls *.json); do
  COLLECTION=$(echo $file | cut -f1 -d'.');
  mongoimport -c ${COLLECTION} -d os_project --file $file
done;
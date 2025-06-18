#!/bin/bash

# Nombre del contenedor de Mongo
CONTAINER_NAME="meli-mongo"
JSON_FILE="products.json"

echo "📦 Copiando archivo ${JSON_FILE} al contenedor ${CONTAINER_NAME}..."
docker cp ${JSON_FILE} ${CONTAINER_NAME}:/products.json

echo "💾 Insertando productos en la base de datos 'meli'..."
docker exec -i ${CONTAINER_NAME} mongosh --eval "use meli; db.products.insertMany(require('/products.json'))"

echo "✅ Productos insertados correctamente en MongoDB."

#!/bin/bash
set -e

docker build -t oracle-instantclient-layer .
docker create --name oracle-layer-tmp oracle-instantclient-layer
docker cp oracle-layer-tmp:/opt/oracle_instantclient_layer.zip ./oracle_instantclient_layer.zip
docker rm oracle-layer-tmp

echo "✅ oracle_instantclient_layer.zip を作成しました！"

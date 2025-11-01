#!/bin/bash

docker build -t lambda-oracledb .
docker create --name lambda-oracledb-tmp lambda-oracledb
docker cp lambda-oracledb-tmp:/app/lambda_function.zip ./lambda_function.zip
docker rm lambda-oracledb-tmp

echo "✅ lambda_function.zip を作成しました！"

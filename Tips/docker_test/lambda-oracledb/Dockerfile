FROM amazonlinux:2

RUN yum update -y && \
    yum install -y python3 python3-pip zip oracle-instantclient19.8-basic && \
    mkdir -p /app

WORKDIR /app

RUN pip3 install oracledb -t .

COPY lambda_function.py .

RUN zip -r9 /app/lambda_function.zip .

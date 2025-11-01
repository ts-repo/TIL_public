FROM amazonlinux:2

# Oracle Instant Clientと依存ライブラリをインストール
RUN yum update -y && \
    yum install -y zip oracle-instantclient19.8-basic && \
    mkdir -p /opt/lib

# インストールされたInstant Clientの場所を確認してコピー
RUN cp -r /usr/lib/oracle /opt/lib/

# ZIP化（Lambdaレイヤー用構造）
WORKDIR /opt
RUN zip -r9 /opt/oracle_instantclient_layer.zip .

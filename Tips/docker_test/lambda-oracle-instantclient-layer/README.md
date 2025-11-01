# 🐳 Lambda OracleDB Layer Builder

このプロジェクトは、Oracle Instant Client を
AWS Lambda レイヤーとして利用できる形に ZIP 化するための Docker ビルド環境です。

---

## 📁 ディレクトリ構成
```
lambda-oracle-instantclient-layer/
├── Dockerfile # Lambdaレイヤーを構築するための設定
├── build.sh # ZIPを自動生成するスクリプト
```
---

## ⚙️ 事前準備

1. **Docker Desktop** をインストールしておきます。
   （Mac・Windows・Linux いずれも対応）
   👉 https://www.docker.com/products/docker-desktop/

2. ターミナルまたはコマンドプロンプトを開き、
   プロジェクトディレクトリに移動します。

  ```bash
   cd lambda-oracle-instantclient-layer
  ```
3. 実行権限を付与（Linux / Mac のみ）
chmod +x build.sh


🚀 実行方法
✅ デフォルト構成（Oracle Instant Client）
```
./build.sh
```

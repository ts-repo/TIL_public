import oracledb

def lambda_handler(event, context):
    try:
        connection = oracledb.connect(
            user="YOUR_USER",
            password="YOUR_PASSWORD",
            dsn="YOUR_DSN"
        )
        cursor = connection.cursor()
        cursor.execute("SELECT 'Hello Oracle from Lambda!' FROM dual")
        result = cursor.fetchone()
        return {"message": result[0]}
    except Exception as e:
        return {"error": str(e)}

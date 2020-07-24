module.exports = {
  "development": {
    "username": "postgres", //user name của postgres trên máy, defualt là postgres nếu không sửa
    "password": "data123", //password cho cái pgadmin
    "database": "library_mng", //tên db
    "host": "localhost", //host db
    "dialect": "postgres", //loại hệ qtcsdl sử dụng
    "port": 5432 //port mặc định của postgres
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "port": process.env.DB_PORT
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "port": process.env.DB_PORT
  }
}

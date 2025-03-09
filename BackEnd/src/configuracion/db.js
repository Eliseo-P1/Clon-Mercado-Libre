import mysql from "mysql2";


const pool = mysql.createPool({
    host: 'yamabiko.proxy.rlwy.net',
    user: 'root',
    password: 'mJtWvYaAOLPHwvrsdhVuIzgMPROTLhVF',
    database: 'railway',
    port: 54856,
  }).promise()
  

export default pool;

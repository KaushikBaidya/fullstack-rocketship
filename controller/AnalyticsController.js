const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getAnalytics = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(`SELECT * FROM analytics`);
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const updateAnalytics = async (updateCode) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE analytics SET code = ? WHERE analyticsId = 1",
      [updateCode]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export { getAnalytics, updateAnalytics };

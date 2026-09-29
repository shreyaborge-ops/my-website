const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "EmpAdmin@2026!",
    database: "employee_management",
    port: 3307
});

connection.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err.message);
        return;
    }

    console.log("Connected to MySQL database!");
});

module.exports = connection;
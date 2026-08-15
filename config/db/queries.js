import pool from "./pool.js";

async function getAll() {
    // const { rows } = await pool.query("SELECT * FROM usernames");
    // return rows;
}

async function insert() {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username])
}

module.exports = {
    getAll,
    insert
}
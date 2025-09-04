// const db = require('../config/db');
import db from '../config/db.js';

const User = {
  create: (user, callback) => {
    const { name, email, password,level, login,setores,empresa,now } = user;     
     
    db.query(
      'INSERT INTO usuario (nome, email, senha, admin, login,setor, empresa, gravado ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, email, password,level,login,setores,empresa,now ],
      callback
    );
  },

  findByEmail: (email, callback) => {

   //  const sql = 'SELECT * FROM usuario WHERE email = ?';
   //  const query = db.format(sql, [email]);
   //  console.log("DEBUG SQL:", query);
   
    db.query('SELECT * FROM usuario WHERE email = ?', [email], callback);
  },
  findByLogin: (login, callback) => {
      db.query("SELECT * FROM usuario WHERE login = ?", [login], callback);
  },
  findAll: (callback) => {
    db.query('SELECT id,login, nome, email FROM usuario', callback);
  },
  findByID: (id, callback) => {
    db.query('SELECT * FROM usuario WHERE id = ?', [id], callback);
  }
  
};

export default User;

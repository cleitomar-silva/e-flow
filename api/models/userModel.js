// const db = require('../config/db');
import db from '../config/db.js';

const User = {
  create: (user, callback) => {
    const { name, email, password,level, login,company,now, idUserCreated } = user;   

    let userID =  idUserCreated !== undefined && idUserCreated !== null && idUserCreated.toString().trim() !== "" && !isNaN(idUserCreated) ? Number(idUserCreated) : null;
     
    db.query(
      'INSERT INTO usuario (name, email, password, level, login, company, created_at, created_by_user_id ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, email, password,level,login,company,now, userID ],
      callback
    );
  },

  addDepartment: ({ userId, departmentId }, callback) => {
    db.query(
      "INSERT INTO usuario_setor (id_user, id_department) VALUES (?, ?)",
      [userId, departmentId],
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

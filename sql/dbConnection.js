var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'test',
  insecureAuth: true,
  port: "3307"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado a localhost");
  con.query("DROP DATABASE tucanton_db", function (err, result) {
    if (err) throw err;
    console.log("DB Eliminada");
  });
  con.query("CREATE DATABASE tucanton_db", function (err, result) {
    if (err) throw err;
    console.log("DB creada");
  });
  con.query("USE tucanton_db", function (err, result) {
    if (err) throw err;
    console.log("Usando tucanton_db");
  });
  con.query("CREATE TABLE equipos (id INT AUTO_INCREMENT PRIMARY KEY,nombre VARCHAR(25))", function (err, result) {
    if (err) throw err;
    console.log("Tabla equipos creada");
  });
  con.query("CREATE TABLE usuarios(id INT AUTO_INCREMENT PRIMARY KEY,nombre VARCHAR(25),equipo_id INT, FOREIGN KEY (equipo_id) REFERENCES equipos(id))", function (err, result) {
    if (err) throw err;
    console.log("Tabla usuarios creada");
  });
  con.query("CREATE TABLE clientes(id INT AUTO_INCREMENT PRIMARY KEY,usuario_id INT,FOREIGN KEY(usuario_id) REFERENCES clientes(id),email VARCHAR(30))", function (err, result) {
    if (err) throw err;
    console.log("Tabla clientes creada");
  });

  con.query("INSERT INTO equipos(nombre) VALUES ("EquipoUno"),("EquipoDos"),("EquipoTres")", function (err, result) {
    if (err) throw err;
    console.log("Equipos agregados");
  });

  con.query("INSERT INTO usuarios(nombre,equipo_id) VALUES ("NombreUno",1),("NombreDos",2),("NombreTres",3),("NombreCuatro",1),("NombreCinco",2),("NombreSeis",3)", function (err, result) {
    if (err) throw err;
    console.log("Usuarios agregados");
  });

  con.query("INSERT INTO clientes(email,usuario_id) VALUES ("correoUno@correoUno.com",1),("correoDos@correoDos.com",2),("correoTres@correoTres.com",3),("correoCuatro@correoCuatro.com",4),("correoCinco@correoCinco.com",5),("correoSeis@correoSeis.com",6)", function (err, result) {
    if (err) throw err;
    console.log("Clientes agregados");
  });
});

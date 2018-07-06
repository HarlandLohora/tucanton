CREATE DATABASE tucanton;

USE tucanton;

CREATE TABLE equipos (id INT,nombre VARCHAR(25));

CREATE TABLE usuarios(id INT,nombre VARCHAR(25),equipo_id INT);

CREATE TABLE clientes(id INT,usuario_id INT,email VARCHAR(30));

INSERT INTO equipos(nombre) VALUES ("EquipoUno"),("EquipoDos"),("EquipoTres");

INSERT INTO usuarios(nombre,equipo_id) VALUES ("NombreUno",1),("NombreDos",2),("NombreTres",3),("NombreCuatro",1),("NombreCinco",2),("NombreSeis",3);

INSERT INTO clientes(email,usuario_id) VALUES ("correoUno@correoUno.com",1),("correoDos@correoDos.com",2),("correoTres@correoTres.com",3),("correoCuatro@correoCuatro.com",4),("correoCinco@correoCinco.com",5),("correoSeis@correoSeis.com",6);

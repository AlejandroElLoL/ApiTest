CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE cursos (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(120) DEFAULT NULL,
    modalidad VARCHAR(100) DEFAULT NULL,
    extraModalidad VARCHAR(100) DEFAULT NULL,
    comienzo VARCHAR(10) DEFAULT NULL,
    diasCursada VARCHAR(100) DEFAULT NULL,
    extraDiasCursada VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE cursos;

INSERT INTO cursos VALUES
    (1, "Diplomatura en Cuidados Crítico", "Virtual sincrónico y asincrónico", "Un encuentro presencial con actividad simulada", "11 09 2024
", "miercóles de 17 a 19 hs", NULL);
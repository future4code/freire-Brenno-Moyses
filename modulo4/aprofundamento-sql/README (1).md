SET SQL_SAFE_UPDATES = 0;

-- a) Remove a coluna de salário
-- b) Troca gender por sex 
-- c) Limitou o gender para 255 caracteres

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET 
name = "Leonardo DiCaprio",
birth_date = "1900/03/09"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET 
name = "Jonah Hill",
birth_date = "2010-03-14",
salary = 620000,
gender = "male"
WHERE id = "005";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE salary > 1.00000000;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- Filtrou pelo genero e dividiu em dois grupos: Homens e mulheres.

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER TABLE Films ADD playing_limit_date DATE;

ALTER TABLE Films CHANGE evaluation evaluation FLOAT;

UPDATE Films
SET
	datee = "2015-10-30"
WHERE id = "002";

UPDATE Films
SET
	datee = "2010-05-30"
WHERE id = "001";

DELETE FROM Films WHERE id = "002";

UPDATE Films
SET
	synopsis = "teste teste"
WHERE id = "002";

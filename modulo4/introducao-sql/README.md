USE `freire-brenno-moyses`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000 ,
  "1963-08-23", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Angelica",
  1200550 ,
  "1968-08-23", 
  "male"
);

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

SELECT * from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Antônio Fagundes";

SELECT * from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary <=500000;

SELECT id, nome from Actor WHERE id = "002";

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 35000000;

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT * FROM Actor
WHERE name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g" OR name LIKE "%G" AND salary BETWEEN 35000000 AND 90000000;

CREATE TABLE Films (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT,
    datee DATE NOT NULL,
    evaluation FLOAT(10)
);

INSERT INTO Films (id, name, synopsis, datee, evaluation)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06", 
  7
);

INSERT INTO Films (id, name, synopsis, datee, evaluation)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/01/27", 
  10
);

INSERT INTO Films (id, name, synopsis, datee, evaluation)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/01/02", 
  8
);

SELECT id, evaluation, name from Films WHERE id = "003";

SELECT * from Films WHERE name = "Doce de mãe";

SELECT id, name, synopsis from Films WHERE evaluation >=7;

SELECT * FROM Films
WHERE name LIKE "%vida%";

SELECT * FROM Films
WHERE name or synopsis LIKE "%culinária%";

SELECT * FROM Films
WHERE datee < "2022-08-22";

SELECT * FROM Films
WHERE datee < "2022-08-22" AND 
      (name LIKE "%Doce de mãe%" OR
      synopsis LIKE "%culinária%") AND evaluation > 7;


ESCRITAS:

1-a)VARCHAR é strings de nomaximo n caracteres
PRIMARY KEY é o identificador unico de um registro da tabela
DATE representa uma data
CREATE TABLE cria uma tabela

b) o SHOW DATABASES mostrou detalhes como a database
SHOW TABLES mostrou a tabela

c)DESCRIBE Actor me mostrou com mais detalhes a tabela existente.

2-b) Deu um erro dizendo que uma entrada foi duplicada
c) A contagem de colunas não corresponde à contagem de valores na linha 1
d) O campo 'nome' não tem um valor padrão
e) Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

3-c) Todos os valores retornados foram null

e) Coluna desconhecida 'nome' na 'lista de campos'

4-a) Selecionando pessoas que tenham o nome iniciado com A ou J e salário maior que 300000

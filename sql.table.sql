CREATE TABLE User (
  id NOT NULL INT(15) PRIMARY KEY AUTO_INCREMENT,
  createdAt DATETIME,
  updatedAt DATETIME,
  lastActivityAt DATETIME,
  email VARCHAR(255),
  emailVerified DATETIME,
  name VARCHAR(255),
  password VARCHAR(255),
  workspace VARCHAR(255),
  workspaceld VARCHAR(255),
  role ENUM('admin','user'), -- Make sure to define the possible enum values
  Session VARCHAR(255),
  Account VARCHAR(255),
  ApiToken VARCHAR(255)
);



CREATE TABLE Contact (
  id INT(15) NOT NULL  PRIMARY KEY AUTO_INCREMENT,
  createdAt DATETIME,
  updatedAt DATETIME,
  workspaceld VARCHAR(255),
  name VARCHAR(255),
  phoneNumber VARCHAR(255),
  email VARCHAR(255),
  address VARCHAR(255),
  ContactList VARCHAR(255)
);


CREATE TABLE ContactGroup (
  id INT(15) NOT NULL  PRIMARY KEY AUTO_INCREMENT,
  createdAt DATETIME,
  updatedAt DATETIME,
  name VARCHAR(255),
  description VARCHAR(255),
  ContactList VARCHAR(255)
);


CREATE TABLE ContactList (
  id INT(15) NOT NULL  PRIMARY KEY AUTO_INCREMENT,
  contactGroupld VARCHAR(255),
  contactld VARCHAR(255),
  contactGroup VARCHAR(255),
  contact VARCHAR(255)
);


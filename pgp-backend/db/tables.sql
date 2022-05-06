CREATE DATABASE pgproductions;

USE pgproductions;

CREATE TABLE Artist (
    artist VARCHAR(30) PRIMARY KEY,
    img VARCHAR(50),
    descr TEXT
);

INSERT INTO Artist (artist, img, descr) values ('Pinkergloop',
'https://yt3.ggpht.com/ytc/AKedOLT-Gdya4G-WJ6Hw9mqOyjGadAA5DwV4PJaxpA5v=s900-c-k-c0x00ffffff-no-rj', 'aaaaaaaa');

INSERT INTO Artist (artist, img, descr) values ('Sun II',
'../../pinkergloop-productions-website-master/img/sunii.jpg', 'aaaaaaaa');

CREATE TABLE Merch (
    merch VARCHAR(30) PRIMARY KEY,
    img VARCHAR(50),
    price DECIMAL(10,2),
    descr TEXT
);
create table bloggers(
id serial primary key, 
    name varchar(32),
    promocode varchar(64) default null,
    balance float default 0.0,
    creating_date timestamp default current_timestamp,
    ending_date timestamp 
);

create table users(
  id serial primary key,
  name varchar(32),
  last_name varchar(32),
  bolger_promocode varchar(64) default null,
  paying_amount float default 0.0
);




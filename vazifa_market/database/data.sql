create table workers(
    id serial not null,
    fullname varchar(32),
    email varchar(32),
    password varchar(32),
    role boolean default true,
    is_active boolean default true
);

create table product(
    id serial not null,
    name varchar(32),
    kg int,
    price int,
    is_active boolean default true
);

create table category(
    id serial not null,
    name varchar(32),
    is_active boolean default true
);

create table history(
    id serial not null,
    worker_id int not null REFERENCES workers(id),
    product_id int not null REFERENCES product(id),
    is_sell boolean, 
    kg float,
    price float,
    create_at timestamp default current_timestamp
);

INSERT into product(name, kg, price)
VALUES
('olma', 20, 2000);


CONSTRAINT fk_author FOREIGN KEY(author_id) REFERENCES worker(id)

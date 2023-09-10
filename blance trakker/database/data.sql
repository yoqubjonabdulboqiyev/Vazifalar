
create extension "uuid-ossp";

CREATE TABLE income(
    id uuid primary key default uuid_generate_v4(),
    income_name varchar(32) not null, 
    amount_cash float default 0.0, 
    descrioption text default null,
    create_time timestamp default current_timestamp
);

CREATE TABLE paying(
    id uuid primary key default uuid_generate_v4(),
    paying_name varchar(32) not null, 
    amount_cash float default 0.0, 
    descrioption text default null,
    create_time timestamp default current_timestamp
);
CREATE TABLE history(
    id uuid primary key default uuid_generate_v4(),
    paying_id uuid default null,
    income_id uuid default null, 
    total_money float default 0.0, 
    last_changing timestamp default current_timestamp,
    foreign key(paying_id) REFERENCES paying(id),
     foreign key(income_id) REFERENCES income(id)
);

CREATE TABLE total_balance(
    id uuid primary key default uuid_generate_v4(),
    total_money float default 0.0, 
    last_changing timestamp default current_timestamp
);
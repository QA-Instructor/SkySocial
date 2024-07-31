use `skysocialdb`;

create table if not exists User (
	id integer auto_increment not null primary key,
    first_name varchar(50) not null,
    last_name varchar(50),
    user_password varchar(20) not null,
    email varchar(50) not null,
    phone varchar(11),
    profile_image varchar(300)
);

create table if not exists Event (
	id integer auto_increment not null primary key,
    event_title varchar(40) not null,
    event_description varchar(300),
    event_location varchar(200),
    image varchar(200),
    start_date_time varchar(20),
    end_date_time varchar(20),
    min_participant integer,
    max_participant integer,
    tag varchar(200),
    ticket_price float,
    email_confirmation boolean,
    organiser integer not null,
    foreign key(organiser) references User(id)
);

create table if not exists Event_User (
	event_id integer not null,
    user_id integer not null,
    foreign key(event_id) references Event(id),
    foreign key(user_id) references User(id),
    primary key(event_id, user_id)
);






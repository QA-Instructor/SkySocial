INSERT INTO User (first_name, last_name, user_password, email, phone, profile_image) VALUES ('Hubert', 'Matras', 'password1', 'hubert@sky.uk', '07495748484', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
INSERT INTO User (first_name, last_name, user_password, email, phone, profile_image) VALUES ('Ollie', 'Sinnassamy', 'password2', 'ollie@sky.uk', '07495748485', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
INSERT INTO User (first_name, last_name, user_password, email, phone, profile_image) VALUES ('Dhyey', 'Ghetia', 'password3', 'dhyey@sky.uk', '07495748486', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
INSERT INTO User (first_name, last_name, user_password, email, phone, profile_image) VALUES ('Dilpreet', 'Singh', 'password4', 'dilpreet@sky.uk', '07495748487', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
INSERT INTO User (first_name, last_name, user_password, email, phone, profile_image) VALUES ('Akhil', 'Maram', 'password5', 'akhil@sky.uk', '07495748488', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png');

INSERT INTO Event (
	event_title, event_description, event_location, image, start_date_time,
    end_date_time, min_participant, max_participant, tag, ticket_price,
    email_confirmation, organiser) VALUES (
    'Football', 'football wednesday at sky, everyone is welcome, please signup by monday 18/12/24',
    'Goals', './src/resources/e619f4e1-c156-419e-8d26-f2cc46235e76.jpg', '20/12/24 12:00:00',
    '20/12/24 14:00:00', 5, 10, '"footballatsky","footballforeveryone","footy"',
    10.00, true, 1);
INSERT INTO Event (
	event_title, event_description, event_location, image, start_date_time,
    end_date_time, min_participant, max_participant, tag, ticket_price,
    email_confirmation, organiser) VALUES (
    'Pub Social', 'Come enjoy a feew pints with colleges are sky.',
    'Spoons', './src/resources/pexels-august-de-richelieu-4427813.jpg', '29/12/24 12:00:00',
    '30/12/24 14:00:00', 10, 20, '"chillfirdays","coldones","social"',
    0.00, false, 2);
INSERT INTO Event (
	event_title, event_description, event_location, image, start_date_time,
    end_date_time, min_participant, max_participant, tag, ticket_price,
    email_confirmation, organiser) VALUES (
    'Coffee Break', 'Coffee chat with a local coffe beans toaster, try new brews and get a discount on hand toasted coffee beans',
    'Sky Central', 'https://www.luxurytravelmag.com.au/wp-content/uploads/2022/11/AudleyPublicHouse_Interior_Sim-Canetty-Clarke.jpg', '20/12/24 12:00:00',
    '25/12/24 14:00:00', 4, 15, '"coffeelovers","sustainablecoffee","coffeebrews"',
    0.00, true, 3);
## Service 2
This is a simple service called by [Worker](https://github.com/firstCodeOutlaw/worker), a 
worker created with NodeJs to fetch data from a RabbitMQ queue,
decipher the destination of the queued data and send it via HTTP to the appropriate
service. This is one of the two services.

## Installation
- After cloning, `cd` into application directory and run `npm install` to install dependencies
- Copy environment variables `cp .env.example .env`
- Run `npm start` to start the application. It should start on port 6702 if you have not modified 
`PORT` variable in .env
# firstAPI-AdonisJS

## DAY 1 - 27/02/2023

The first step was to get JSON info using Postman and Adonis Routing. Firstly, I had to create a new controller with the info which I wanted to consult. Secondly, add the specific route to get the specific information. Finally, test with Postman that the info is correctly showed.

To create the Controller you have to use next syntax:

```
node ace make:controller Controllername
```

<p align="center">
  <img src="assets/AdonisController.png" />
  <img src="assets/Adonisroute.png" />
  <img src="assets/postmanResults.png" />
</p>

## DAY 2 - 28/02/2023

After working with GET method to get JSON info. It's time to explore more options to build an API. So, I decided to follow a freeCodeCamp guide.

I installed lucid and I selected MariaDB/MySQL as the database. Also, i checked the .env file to see if all was correct.

```
npm install @adonisjs/lucid
node ace invoke @adonisjs/lucid
```

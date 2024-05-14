#! /usr/bin/env node
import inquirer from "inquirer";

class Player{
    name:string;
    fuel:number = 400;
    constructor(name:string) {
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 30
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 400;
    }
}

class Opponent{
    name:string;
    fuel:number = 400;
    constructor(name:string) {
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 30
        this.fuel = fuel
    }
}

let player = await inquirer.prompt(

    [
        {
            name: "name",
            type: "input",
            message: "Please enter your name: "
        }
    ]
);

let opponent = await inquirer.prompt(
    [
        {
            name: "select",
            type: "list",
            message: "Select your opponent",
            choices:["Robot" , "Zombie" , "Alien"]
        }
    ]
);

let P1 = new Player(player.name);
let O1 = new Opponent(opponent.select);

do{
    if(opponent.select == "Robot") {
        let ask = await inquirer.prompt(
          [
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices:["Attack","Drink Portion","Run for your life"]
            }
          ]
        )
        if(ask.opt == "Attack"){
         let num = Math.floor(Math.random() * 2)
         if(num > 0){
            P1.fuelDecrease()
            console.log(`${P1.name} fuel is ${P1.fuel}`);
            console.log(`${O1.name} fuel is ${O1.fuel}`);
            if(P1.fuel <= 0 ) {
                console.log("You loose,Better luck next time");
                process.exit();
            }
         }
         if (num <= 0) {
            O1.fuelDecrease()
            console.log(`${P1.name} fuel is ${P1.fuel}`);
            console.log(`${O1.name} fuel is ${O1.fuel}`);
            if(O1.fuel <= 0) {
                console.log("You win!");
                process.exit();
            }
         }
        }
        if(ask.opt == "Drink Portion"){
            P1.fuelIncrease() 
                console.log(`You drink portion your fuel is ${P1.fuel}`);
        }
        if(ask.opt = "Run for your life") {
            console.log(`You loose,Better luck next time`);
            process.exit();
        }
    }
    if(opponent.select == "Zombie") {
        let ask = await inquirer.prompt(
            [
                {
                    name: "opt",
                    type: "list",
                    message: "What would you like to do ?",
                    choices: ["Attack","Drink Portion","Run for your life"]
                }
            ]
        )
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
               P1.fuelDecrease()
               console.log(`${P1.name} fuel is ${P1.fuel}`);
               console.log(`${O1.name} fuel is ${O1.fuel}`);
               if(P1.fuel <= 0 ) {
                   console.log("You loose,Better luck next time");
                   process.exit();
               }
            }
        if (num <= 0) {
                O1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if(O1.fuel <= 0) {
                    console.log("You win!");
                    process.exit();
                }
            }
       }
        if(ask.opt == "Drink Portion"){
        P1.fuelIncrease() 
            console.log(`You drink portion your fuel is ${P1.fuel}`);
        }
        if(ask.opt == "Run for your life") {
        console.log(`You loose,Better luck next time`);
        process.exit();
        }
    }
    if(opponent.select == "Alien") {
        let ask = await inquirer.prompt(
            [
              {
                  name: "opt",
                  type: "list",
                  message: "What would you like to do?",
                  choices:["Attack","Drink Portion","Run for your life"]
              }
            ]
        )
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
               P1.fuelDecrease()
               console.log(`${P1.name} fuel is ${P1.fuel}`);
               console.log(`${O1.name} fuel is ${O1.fuel}`);
               if(P1.fuel <= 0 ) {
                   console.log("You loose,Better luck next time");
                   process.exit();
               }
            }
        if (num <= 0) {
                O1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if(O1.fuel <= 0) {
                    console.log("You win!");
                    process.exit();
                }
            }
       }
        if(ask.opt == "Drink Portion"){
        P1.fuelIncrease() 
            console.log(`You drink portion your fuel is ${P1.fuel}`);
        }
        if(ask.opt == "Run for your life") {
        console.log(`You loose,Better luck next time`);
        process.exit();
        }
    }
}
while(true);
// A

// let nomKe = 'Bouchard';
// let prenomKe = 'Kezari';
// let ageKe = 35;
// let tailleKe = '1.61m';
// let pointureKe = 41;

// console.log(nomKe,prenomKe,ageKe,tailleKe,pointureKe);
// let kezariInfo = { nomKe: 'Bouchard', prenomKe: 'Kezari', ageKe: 35, tailleKe: 1.61, pointureKe: 41 };
// console.log(kezariInfo);

// B

// let firstname = 'nom';
// let lastname = 'prenom'
// let age = '23';
// firstname = prompt('Comment t\'appelles-tu ?');
// console.log(firstname,lastname,age);
// let personneInfo = { firstname: 'nom', lastname: 'prenom', age: 23};
// let phraseExemple = 'Bonjour je suis ' + firstname + ' ' + lastname + ' ' + 'et j\'ai ' + age ;
// console.log(personneInfo);
// console.log(phraseExemple);

// alert(firstname);


// C

// let avisMathéo = 15.4;
// let avisNathan = 9.2;
// let avisLéo = 16.1;
// let somme = (avisLéo + avisMathéo + avisNathan) ;
// let moyenne = somme / 3;
// console.log(moyenne.toFixed(2));


// D et E

// let champOverwatch = ['Mercy' , 'D.VA' , 'Ashe' , ' Sombra' , 'Brigitte' , 'Tracer' , 'Zarya' , 'Widow' , 'Pharah' , 'Mei'];
// champOverwatch[3] = 'Nop';
// console.log(typeof(champOverwatch));
// console.log(champOverwatch);
// console.log(champOverwatch[3]);
// console.log(typeof(champOverwatch[4]));
// console.log(champOverwatch.length);
// champOverwatch.splice(7,1,'Nop');
// console.log(champOverwatch[7]);
// console.log(champOverwatch.push('Nyugga'));
// console.log(champOverwatch);
// console.log(champOverwatch.unshift('Ralsei','Echidna'));
// console.log(champOverwatch);
// console.log(champOverwatch.pop());
// console.log(champOverwatch);




// testTas = 'Hello';
// console.log(testTas.toUpperCase());
// overWatchdeux = champOverwatch.toString();
// console.log(overWatchdeux);
// console.log(overWatchdeux.toUpperCase());
// console.log(overWatchdeux.split());

// F

// let champOverwatch = ['Mercy' , 'D.VA' , 'Ashe' , ' Sombra' , 'Brigitte' , 'Tracer' , 'Zarya' , 'Widow' , 'Pharah' , 'Mei'];
// console.log(champOverwatch);
// for (element of champOverwatch) {
//     console.log(element);
// }
// console.log(champOverwatch);

// let champOverwatch2 = ['Mercy' , 'D.VA' , 'Ashe' , ' Sombra' , 'Brigitte' , 'Tracer' , 'Zarya' , 'Widow' , 'Pharah' , 'Mei'];
// champOverwatch2.forEach(element => {
//     console.log("Bonjour je suis" + " " + element);
// });

// console.log(champOverwatch.filter(champOverwatch => champOverwatch.length > 5));

// G

// let anneAge = 45 ;
// if (anneAge > 45 ){
//     console.log("Fané");
// } else if (anneAge <= 45 && anneAge > 18){
//     let batMan = "Batman le retour";
//     for(let i = 0; i < 10; i++){
//         batMan = batMan + " " + "batman le retour";
//     }
//     console.log(batMan);
// } else {
//     console.log("RINE");
// }

// let ronFlex = 1;

// while (ronFlex < 21) {
//     console.log("rondoudoudoudoudoudoduoduoduoudou");
//   ronFlex++;
// }

// H

// function hello(){
//     alert("Hello World");
// }
// hello();

// const hello1 = () => { 
//     alert("HeLLo WORlD");
// }
// hello1();

// function hello2(props){
//     if (props.length < 5 ){
//         alert("Bonjour");
//     } else {
//         alert("pasBonjour");
//     }
// }
// hello2('ouialorsenfaitejadore');

// const hello3 = (props) => {
//     if (props.length <= 5){
//         alert('Bonjour toi');
//     } else {
//         alert('Pas bonjour toi');
//     }
// }
// hello3('euh');

// I

// let personnage = {
//     nom: 'Elon',
//     age: 24,
//     signe: 'bélier',
//     plop: function(props){
//         personnage[props] = personnage[props] + 1 ;
//     }
//     }

//     console.log(personnage);
//     personnage.plop('age');
//     console.log(personnage);


// J

// class Aventurier{
//     constructor(){
//         this.attaque = 5;
//         this.defense = 2;
//     }
//     force(){
//         this.attaque = this.attaque + 10 ;
//         return this.attaque;
//     }
    
// }
// let poTato = new Aventurier; 
// // si on avais voulu des valeurs comme on voulait 
// // -> mettre getattaque dans le constructor + argument et mettre dans les parenthese de ton nouvel aventurier les valeurs voulues 
// poTato.force();
// console.log(poTato);

// K

let data = {
    id: 01,
    name: ['bob','tom'],
    color: 'blue'
}

let data1 = 'hello world' ;

dataConv = JSON.stringify(data);
console.log(dataConv);
dataConv1 = JSON.stringify(data1);
console.log(dataConv1);

let data2 = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Rick" },
                    { "id": "1002", "type": "Chocolate" },
                    { "id": "1003", "type": "Blueberry" },
                    { "id": "1004", "type": "Devil's Food" }
                ]
        },
    "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Morty" },
            { "id": "5007", "type": "helloWorld" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
}

console.log(data2['ppu']);
console.log(data2['batters']['batter'][0]['type']);
console.log(data2['topping'][2]['type']);
console.log(data2['topping'][5]['id']);
console.log(data2['topping'][3]['type']);
console.log(data2['topping'][3]['type'].length);


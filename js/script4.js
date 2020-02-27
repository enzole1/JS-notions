// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 



const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  
  
console.log("Dans cette liste il y a les entrepreneurs qui sont nés dans les années 70.");
    let seventies = []
    entrepreneurs.forEach(hashPerson => {
    for(let key in hashPerson) {
        if (key === "year") {
            if ((hashPerson[key] <= 1979) && (hashPerson[key] >= 1970)) {
            seventies.push(hashPerson);
            }
        }
    }
});

console.log(seventies);

// Un array qui contient le prénom et le nom des entrepreneurs 

console.log("Un array qui contient le prénom et le nom des entrepreneurs.");

    let name = []
    entrepreneurs.forEach(hashPeople => {
        name.push({ first: hashPeople.first, last: hashPeople.last });
        
    });

    console.log(name);

// Quel âge aurait chaque inventeur aujourd'hui ?

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");

    entrepreneurs.forEach(hashAge => {
        hashAge.age = 2020 - hashAge.year;
        console.log(`${hashAge.first} a ${hashAge.age}ans aujourd\'hui`);
    });
    
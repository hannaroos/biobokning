//-----------------Data----------------------

const movies = [
  { id: "semicolon", title: "The Last Semicolon", genre: "action", price: 140 },
  { id: "merge", title: "Merge Conflict", genre: "drama", price: 120 },
  { id: "bugjakten", title: "Bugjakten", genre: "komedi", price: 110 },
  { id: "darkmode", title: "Dark Mode", genre: "skräck", price: 130 },
  { id: "notfound", title: "404: Love Not Found", genre: "romantik", price: 120 },
  { id: "callback", title: "Callback Hell", genre: "skräck", price: 130 }
];

const snacks = [
  { id: "popcorn", name: "Popcorn", price: 45 },
  { id: "lask", name: "Läsk", price: 35 },
  { id: "godis", name: "Godis", price: 40 },
  { id: "nachos", name: "Nachos", price: 55 }
];

//Fylla dropdown från arrayen movies ovan
const movieSelect = document.querySelector("#movie");
const placeholder = document.createElement("option");
placeholder.value = "";
placeholder.textContent = "Välj film";
movieSelect.append(placeholder);

movies.forEach((movie) => {
    const option = document.createElement("option");
    option.value = movie.id;
    option.textContent = movie.title;
    movieSelect.append(option);
});

//Läsa valet
const movieInfo = document.querySelector("#movie-info");

movieSelect.addEventListener("change", () => {
    // const option = movieSelect.options[movieSelect.selectedIndex];
    const movie = movies.find((m) => m.id === movieSelect.value); //movies är min array med filmer, find() går igenom arrayen, m.id jämför
    //värdet från den valda dropdown option som är movieSelect.value.
    //med denna metod kommer jag åt alla information om filmen som t.ex. title, genre och price.
    if (!movie) { //kontrollerar om variabeln, movie, saknar ett värde.
        movieInfo.textContent = ""; //placeholder med välj film, saknar ett värde och då töms listan. 
        return;
    } 
    movieInfo.textContent = `Titel: ${movie.title}, genre: ${movie.genre}, pris: ${movie.price}kr`;
});

//Göra en dropdown för biljetterna:

const ticketSelect = document.querySelector("#tickets");

for (let i = 1; i <= 6; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    ticketSelect.append(option);
}

//skapa checkbox för snacks
const snackSelect = document.querySelector("#snacks");
// const chosenSnacks = snacks.filter((s) => values.includes(s.id));

snacks.forEach((snack) => {
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    checkbox.type = "checkbox";
    checkbox.name = "snack"; //name identifierar vilken typ av formulärfält det är, att alla checkboxar har samma name gör att de 
    //grupperas som samma typ av formulärfält.
    checkbox.value = snack.id;
    label.textContent = `${snack.name} (${snack.price}) kr`; 
    label.prepend(checkbox); //lägger till något i början av elementet. 
    snackSelect.append(label);    
});
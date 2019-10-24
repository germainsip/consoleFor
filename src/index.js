import "./styles.css";
// Vous pouvez changer la valeur de N
// pour obtenir d'autres résultat
var N = 5;
console.clear();
console.log("Table de multiplication par " + N);
console.log("==============================");
for (var i = 0; i <= 10; i++) {
  console.log(N + " x " + i + " = " + N * i);
}

// Evolution de l'affichage html
document.getElementById("app").innerHTML = `
<h1>La table des ${N}</h1>
`;

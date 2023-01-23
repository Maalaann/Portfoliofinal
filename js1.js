const ecran = document.querySelector("#ecran");
// Contient tout les elements button
const buttons = document.querySelectorAll("button");
// Evenement sur chaque button
buttons.forEach((item) => {
  item.onclick = () => {
    switch (item.id) {

      case "effacer":
        ecran.innerText = "";
        break;

      case "retour":
        ecran.innerText = ecran.innerText.slice(0, -1);
        break;

      case "egale":
        if (ecran.innerText) {
          ecran.innerText = eval(ecran.innerText);
        } else {
          ecran.innerText = "Erreur!";
          setTimeout(() => (ecran.innerText = ""), 2000);
        }
        break;

      case "Arret":
        window.location.href = "Arret.html";
        break;

      default:
        ecran.innerText += item.id;
        break;
    }
  };
});

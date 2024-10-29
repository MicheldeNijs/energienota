const link = document.createElement('link');
link.rel = 'icon';
document.head.appendChild(link);
link.href = 'favicon.png';

const voet = document.createElement("footer");
document.body.appendChild(voet);
voet.append(document.createElement("br"));
voet.append(document.createElement("hr"));
const par = document.createElement("p");
let parTekst = 'Verlaat deze pagina om terug te keren naar een onderhanden berekening. <br> ';
parTekst += 'Deze pagina is onderdeel van <a href="https://energienota.mdenijs.nl" target="_blank">energienota.mdenijs.nl</a>.';
par.innerHTML = parTekst;
voet.append(par);

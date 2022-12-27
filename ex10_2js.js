const POLTRONAS = 240; // constante com o núero de poltronas do teatro

var reservadas = [];

function montarPalco() {
  var ocupadas = [] // declara vetor para receber as poltronas ocupadas

  // verifica se há poltronas salvas em localStorage
  if (localStorage.getItem("teatroOcupadas")) {
    // preenche o vetor com as poltronas ocupadas do teatro (salvas em localStorage)
    ocupadas = localStorage.getItem("teatroOcupadas").split(";");
  }

  // captura divPalco, que é o local onde as imagens são inseridas
  var divPalco = document.getElementById("divPalco");

  // repetição para montar o numero total de poltronas (definida na constante)
  for (var i = 1; i <= POLTRONAS; i++) {

    var figure = document.createElement("figure"); // cria tag figure
    var imgStatus = document.createElement("img"); // cria tag img

    if (ocupadas.indexOf(i.toString()) >= 0) {  // se consta em ocupadas
      imgStatus.src = './img/ocupada.jpg';      // imagem ocupadas.jpg
    } else {                                    // se nao constar
      imgStatus.src = "./img/disponivel.jpg"    // imagem disponivel.jpg
    }
    imgStatus.className = "poltrona";           // classe com dimensao da img

    var figureCap = document.createElement("figcaption"); // cria figcaption

    var zeros = "";

    if (i < 10) {         // condicoes para exibir zeros nas poltronas...
      zeros = "00";        // menores que 10
    } else if (i < 100) {
      zeros = "0";          // menores que 100
    }

    var num = document.createTextNode("[" + zeros + i + "]");  // cria texto

    figureCap.appendChild(num);         // define os pais de cada tag criada
    figure.appendChild(imgStatus);      
    figure.appendChild(figureCap);

    if (i % 24 == 12) {                   // se módulo 24, restar 12 (é o corredor)
      figure.style.marginRight = "60px"   // define margem direita de 60px
    }

    divPalco.appendChild(figure); // indica que figure é filha de divPalco

    if (i % 24 == 0) {                       // se módulo 24, restar 0
      var br = document.createElement("br"); // cria tag br (quebra de linha)
      divPalco.appendChild(br);              // indica que br é filha de divPalco
    }
  }
}
montarPalco();
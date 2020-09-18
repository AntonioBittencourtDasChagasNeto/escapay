function myFunction() {

 var valor = parseFloat(document.getElementById("fvalor").value);
 if(Number.isNaN(valor))
 {
   return;
 }
 var myRadio = document.getElementById("pagamento").value;
 var tx1Deb = 2.04;
 var tx1CreVista = 10.454;
 var tx2Parc = 12.749;
 var tx3Parc = 13.358;
 var tx4Parc = 15.447;
 var tx5Parc = 16.524;
 var tx6Parc = 17.606;
 var tx7Parc = 18.695;
 var tx8Parc = 19.791;
 var tx9Parc = 20.893;
 var tx10Parc = 22.002;
 var tx11Parc = 23.118;
 var tx12Parc = 24.240;

 switch (myRadio) {
    case "debito":
        document.getElementById("1").innerHTML = ("1x de R$ " + (valor+(valor * (tx1Deb/100))).toFixed(2)).replace('.',',');
        document.getElementById("c1").style.visibility = "visible";
        document.getElementById("c2").style.visibility = "hidden";
        document.getElementById("c3").style.visibility = "hidden";
        document.getElementById("c4").style.visibility = "hidden";
        document.getElementById("c5").style.visibility = "hidden";
        document.getElementById("c6").style.visibility = "hidden";
        document.getElementById("c7").style.visibility = "hidden";
        document.getElementById("c8").style.visibility = "hidden";
        document.getElementById("c9").style.visibility = "hidden";
        document.getElementById("c10").style.visibility = "hidden";
        document.getElementById("c11").style.visibility = "hidden";
        document.getElementById("c12").style.visibility = "hidden";
      break;
    case "vista":
        document.getElementById("1").innerHTML = ("1x de R$ " + (valor+(valor * (tx1CreVista/100))).toFixed(2)).replace('.',',');
        document.getElementById("c1").style.visibility = "visible";
        document.getElementById("c2").style.visibility = "hidden";
        document.getElementById("c3").style.visibility = "hidden";
        document.getElementById("c4").style.visibility = "hidden";
        document.getElementById("c5").style.visibility = "hidden";
        document.getElementById("c6").style.visibility = "hidden";
        document.getElementById("c7").style.visibility = "hidden";
        document.getElementById("c8").style.visibility = "hidden";
        document.getElementById("c9").style.visibility = "hidden";
        document.getElementById("c10").style.visibility = "hidden";
        document.getElementById("c11").style.visibility = "hidden";
        document.getElementById("c12").style.visibility = "hidden";
      break;
    case "opel":
        document.getElementById("c1").style.visibility = "hidden";
        document.getElementById("c2").style.visibility = "visible";
        document.getElementById("c3").style.visibility = "visible";
        document.getElementById("c4").style.visibility = "visible";
        document.getElementById("c5").style.visibility = "visible";
        document.getElementById("c6").style.visibility = "visible";
        document.getElementById("c7").style.visibility = "visible";
        document.getElementById("c8").style.visibility = "visible";
        document.getElementById("c9").style.visibility = "visible";
        document.getElementById("c10").style.visibility = "visible";
        document.getElementById("c11").style.visibility = "visible";
        document.getElementById("c12").style.visibility = "visible";
        document.getElementById("2").innerHTML = ("2x de R$ " + ((valor+(valor * (tx2Parc/100)))/2).toFixed(2)).replace('.',',');
        document.getElementById("3").innerHTML = ("3x de R$ " + ((valor+(valor * (tx3Parc/100)))/3).toFixed(2)).replace('.',',');
        document.getElementById("4").innerHTML = ("4x de R$ " + ((valor+(valor * (tx4Parc/100)))/4).toFixed(2)).replace('.',',');
        document.getElementById("5").innerHTML = ("5x de R$ " + ((valor+(valor * (tx5Parc/100)))/5).toFixed(2)).replace('.',',');
        document.getElementById("6").innerHTML = ("6x de R$ " + ((valor+(valor * (tx6Parc/100)))/6).toFixed(2)).replace('.',',');
        document.getElementById("7").innerHTML = ("7x de R$ " + ((valor+(valor * (tx7Parc/100)))/7).toFixed(2)).replace('.',',');
        document.getElementById("8").innerHTML = ("8x de R$ " + ((valor+(valor * (tx8Parc/100)))/8).toFixed(2)).replace('.',',');
        document.getElementById("9").innerHTML = ("9x de R$ " + ((valor+(valor * (tx9Parc/100)))/9).toFixed(2)).replace('.',',');
        document.getElementById("10").innerHTML = ("10x de R$ " + ((valor+(valor * (tx10Parc/100)))/10).toFixed(2)).replace('.',',');
        document.getElementById("11").innerHTML = ("11x de R$ " + ((valor+(valor * (tx11Parc/100)))/11).toFixed(2)).replace('.',',');
        document.getElementById("12").innerHTML = ("12x de R$ " + ((valor+(valor * (tx12Parc/100)))/12).toFixed(2)).replace('.',',');
      break;
  }
}
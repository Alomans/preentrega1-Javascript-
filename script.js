let codProd = parseInt(
  prompt(
    "Ingrese el codigo de lo que desea comprar:\n 1.- VideoJuegos\n 2.- Consolas\n 3.- Accesorios\n 0.- No deseo comprar nada 👾 "
  )
);

let total = 0;

while (codProd != 0) {
  switch (codProd) {
    case 1:
      let vj = parseInt(
        prompt(
          "Ingrese el codigo de lo que desea comprar:\n1.- FC24   $1,599\n2.- GTA V   $549\n3.- ZELDA   $1,499\n4.- MARIO BROS   $1,499\n👾 "
        )
      );
      switch (vj) {
        case 1:
          total += 1599;
          alert("Agregaste el FC24 a tu carrito 🛒 Total acumulado $" + total);
          break;
        case 2:
          total += 549;
          alert("Agregaste el GTA V a tu carrito 🛒 Total acumulado $" + total);
          break;
        case 3:
          total += 1499;
          alert("Agregaste el ZELDA a tu carrito 🛒 Total acumulado $" + total);
          break;
        case 4:
          total += 1499;
          alert(
            "Agregaste el MARIO BROS a tu carrito 🛒 Total acumulado $" + total
          );
          break;
      }
      break;
    case 2:
      let con = parseInt(
        prompt(
          "Ingrese el codigo de lo que desea comprar:\n1.- Xbox series X   $11,599\n2.- PlayStation 5   $11,599\n3.- Switch Oled   $8,499\n👾 "
        )
      );
      switch (con) {
        case 1:
          total += 11599;
          alert(
            "Agregaste el Xbox Series X a tu carrito 🛒 Total acumulado $" +
              total
          );
          break;
        case 2:
          total += 11599;
          alert(
            "Agregaste el PlayStation 5 a tu carrito 🛒 Total acumulado $" +
              total
          );
          break;
        case 3:
          total += 8499;
          alert(
            "Agregaste la Switch Oled a tu carrito 🛒 Total acumulado $" + total
          );
          break;
      }
      break;
    case 3:
      let acc = parseInt(
        prompt(
          "Ingrese el codigo de lo que desea comprar:\n1.- Adifonos   $3,599\n2.- Teclado   $2,599\n3.- Mouse   $599\n4.- Mando   $1,999\n👾 "
        )
      );
      switch (acc) {
        case 1:
          total += 3599;
          alert(
            "Agregaste unos Audifonos a tu carrito 🛒 Total acumulado $" + total
          );
          break;
        case 2:
          total += 2599;
          alert(
            "Agregaste un Teclado a tu carrito 🛒 Total acumulado $" + total
          );
          break;
        case 3:
          total += 599;
          alert("Agregaste un Mouse a tu carrito 🛒 Total acumulado $" + total);
          break;
        case 4:
          total += 1999;
          alert("Agregaste un Mando a tu carrito 🛒 Total acumulado $" + total);
          break;
      }
      break;
  }
  codProd = parseInt(
    prompt(
      "Ingrese el codigo de lo que desea comprar:\n 1.- VideoJuegos\n 2.- Consolas\n 3.- Accesorios\n 0.- No deseo comprar nada 👾 "
    )
  );
}
//descuento

if (total >= 10000) {
  let total1 = 0;
  let desc1 = 0;
  const desc = 0.1;

  alert(
    "Su compra sobrepasa los $10,000 \nSe le aplicara un descuento del 10%"
  );
  desc1 = total * desc;
  total1 = total - desc1;
  alert(total1.toFixed(2));
  let iva1 = 0;
  const iva = 0.16;
  let rec_cre1 = 0;
  const rec_cre = 0.04;
  let total2 = 0;
  let total3 = 0;

  let Metpa = parseInt(
    prompt("Elija su metodo de pago:\n1.- Efectivo 💵\n2.- Tarjeta 💳\n👾 ")
  );

  if (Metpa == 1) {
    iva1 = total1 * iva;
    total2 = total1 + iva1;
    alert("Su total a pagar es de $" + total2.toFixed(2));
  } else if (Metpa == 2) {
    let tarj = parseInt(
      prompt("Que es su Tarjeta:\n1.- Debito \n2.- Credito \n👾")
    );
    if (tarj == 1) {
      iva1 = total1 * iva;
      total2 = total1 + iva1;
      alert("Su total a pagar es de $" + total2.toFixed(2));
    } else {
      iva1 = total1 * iva;
      total2 = total1 + iva1;
      rec_cre1 = total2 * rec_cre;
      total3 = total2 + rec_cre1;
      alert("Su total a pagar es de $" + total31.toFixed(2));
    }
  }
} else {
  //pago
  let iva1 = 0;
  const iva = 0.16;
  let rec_cre1 = 0;
  const rec_cre = 0.04;
  let total1 = 0;
  let total2 = 0;

  let Metpa = parseInt(
    prompt("Elija su metodo de pago:\n1.- Efectivo 💵\n2.- Tarjeta 💳\n👾 ")
  );

  if (Metpa == 1) {
    iva1 = total * iva;
    total1 = total + iva1;
    alert("Su total a pagar es de $" + total1.toFixed(2));
  } else if (Metpa == 2) {
    let tarj = parseInt(
      prompt("Que es su Tarjeta:\n1.- Debito \n2.- Credito \n👾")
    );
    if (tarj == 1) {
      iva1 = total * iva;
      total1 = total + iva1;
      alert("Su total a pagar es de $" + total1.toFixed(2));
    } else {
      iva1 = total * iva;
      total1 = total + iva1;
      rec_cre1 = total1 * rec_cre;
      total2 = total1 + rec_cre1;

      alert("Su total a pagar es de $" + total2.toFixed(2));
    }
  }
}

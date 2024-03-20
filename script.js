let codProd = parseInt(
  prompt(
    "Ingrese el codigo de lo que desea comprar:\n 1.- VideoJuegos\n 2.- Consolas\n 3.- Accesorios\n 0.- No deseo comprar nada 👾 "
  )
);

let total = 0;

while ((codProd != 0)) {
  switch (codProd) {
    case 1:
      let vj = parseInt(
        prompt(
          "Ingrese el codigo de lo que desea comprar:\n 1.- FC24   $1,599\n 2.- GTA V   $549\n 3.- ZELDA   $1,499\n 4.- MARIO BROS   $1,499\n👾 "
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
          alert("Agregaste el MARIO BROS a tu carrito 🛒 Total acumulado $" + total);
          break;
      }
      break;
    case 2:
      let con = parseInt(
        prompt(
          "Ingrese el codigo de lo que desea comprar:\n 1.- Xbox series X   $11,599\n 2.- PlayStation 5   $11,599\n 3.- Switch Oled   $8,499\n👾 "
        )
      );
      switch (con) {
        case 1:
          total += 11599;
          alert("Agregaste el Xbox Series X a tu carrito 🛒 Total acumulado $" + total);
          break;
        case 2:
          total += 11599;
          alert("Agregaste el PlayStation 5 a tu carrito 🛒 Total acumulado $" + total);
          break;
        case 3:
          total += 8499;
          alert("Agregaste la Switch Oled a tu carrito 🛒 Total acumulado $" + total);
          break;
      }
      break;
    case 3:
      let acc = parseInt(
        prompt(
          "Ingrese el codigo de lo que desea comprar:\n 1.- Adifonos   $3,599\n 2.- Teclado   $2,599\n 3.- Mouse   $599\n 4.- Mando   $1,999\n👾 "
        )
      );
      switch (acc) {
        case 1:
          total += 3599;
          alert("Agregaste unos Audifonos a tu carrito 🛒 Total acumulado $" + total);
          break;
        case 2:
          total += 2599;
          alert("Agregaste un Teclado a tu carrito 🛒 Total acumulado $" + total);
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

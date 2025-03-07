let valor1 = "";
let valor2 = "";
let operador = "";
let resultado = "";

const printNum = (numero) => {
   if (document.getElementById("visor").value === '0') {
      document.getElementById("visor").value = numero;
   } else {
      document.getElementById("visor").value += numero;
   }   
};

const clearVisor = numero => {
   if (document.getElementById("visor").value != '0') {
      document.getElementById("visor").value = 0;
   }
};

const backSpace = numero => {
   let del = document.getElementById("visor").value;
   document.getElementById("visor").value = del.slice(0, -1);   
};

const porcentaje = () => {
   if (operador = '*') {
      valor2 = document.getElementById("visor").value;
      document.getElementById("visor").value = (valor1 * valor2) / 100;      
   } else {
      document.getElementById("visor").value = "0";
   }   
};

const multiplicacion = (opMul) => {
   valor1 = parseFloat(document.getElementById("visor").value);
   document.getElementById("visor").value = "0";
   operador = opMul;
};

const division = (opDiv) => {
   valor1 = parseFloat(document.getElementById("visor").value);
   document.getElementById("visor").value = "0";   
   operador = opDiv;
}

const diferencia = (opDif) => {
   valor1 = parseFloat(document.getElementById("visor").value);
   document.getElementById("visor").value = "0";   
   operador = opDif;
}

const sumar = (opSum) => {
   valor1 = parseFloat(document.getElementById("visor").value);
   document.getElementById("visor").value = "0";   
   operador = opSum;
}

const punto = () => {
   if (document.getElementById("visor").value === '0') {
      document.getElementById("visor").value = '0';
   } else {
      document.getElementById("visor").value = document.getElementById("visor").value + '.';
   }
}

const calcular = () => {
   valor2 = parseFloat(document.getElementById("visor").value);
   switch (operador) {
      case '+':
         document.getElementById("visor").value = valor1 + valor2;
         break;
      case '-':
         document.getElementById("visor").value = valor1 - valor2;
         break;
      case '*':
         document.getElementById("visor").value = valor1 * valor2;
         break;
      case '/':
         document.getElementById("visor").value = valor1 / valor2;
         break;
      default:
         console.log("ERROR!!!");
         break;
   }
}

const masMenos = () => {
   let aux = document.getElementById("visor").value;
   if (aux > 0) {
      document.getElementById("visor").value = '-' + document.getElementById("visor").value;
   } else {
      document.getElementById("visor").value = aux.slice(1);
   }
}
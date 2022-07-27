//Crie a const para a frase aqui
const boasVindas = "mas não deixe o gato sair.";
const boasMaiuscula = boasVindas.toUpperCase();
const fraseDoDia = "Jorge tem casa verde e com portão azul, com dizeres:"+" BOAS VINDAS, " +boasMaiuscula ;

console.log(fraseDoDia);

const rosa1 = fraseDoDia.replace("verde","rosa" );
const laranja1 = fraseDoDia.replace("azul","laranja" );

console.log(laranja1);
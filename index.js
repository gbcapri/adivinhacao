let aleatorio = Math.floor(Math.random() * 100/* + 1*/);//O mais 1 retira o 0 como opção de acerto
let num;
let tentativa = 0;

console.log("adivinhe o numero que foi escolhido entre 0 e 100");
process.stdin.on("data", function (data) {
  if(tentativa < 15){
    num = Number(data.toString().trim());
    if (!isNaN(num)) {
      tentativa++;
      if (num == aleatorio) {
        console.log("Você acertou o número!! Incrível.");
        process.exit();
      } else {
        console.log("Você errou, tente novamente.");
          if(Math.abs(aleatorio - num) >= 30){
            console.log("Você errou por 30 ou mais")
          }else if(Math.abs(aleatorio - num) <= 2){
            console.log("Você errou por 2 ou menos")
          }else if(Math.abs(aleatorio - num) <= 10){
            console.log("Você está próximo por 10 ou menos")
          }else if(Math.abs(aleatorio - num) < 30){
            console.log("Você errou por menos de 30")
          }
        console.log("Essa é sua tentativa número " + tentativa + " de 15 tentativas");
      }
    }else{
    console.log("Insira um numero válido");}
  }else{
  console.log("Suas chances acabaram, o número era " + aleatorio);
  console.log("tente novamente o jogo!");
  tentativa = 0;
  aleatorio = Math.floor(Math.random() * 100);}
});
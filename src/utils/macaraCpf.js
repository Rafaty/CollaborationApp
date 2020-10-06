export default function mascaraCpf(cpf) {
  //Remove tudo o que não é dígito
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length <= 14) {
    //CPF
    //Coloca um ponto entre o terceiro e o quarto dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');

    //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');

    //Coloca um hífen entre o terceiro e o quarto dígitos
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  return cpf;
}

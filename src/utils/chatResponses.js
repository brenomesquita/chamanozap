const chatResponses = {

  whatIsYourName: {
    name: 'Chama no zap',
    title: 'Identificação do nome do usuário',
    message: 'Opa, tudo bem? Temos, sim! Poderia me dizer seu nome pra gente começar anotar seu pedido?',
    fail: 'Seu número não pode conter números e símbolos especiais :(. Por favor, digite novamente',
    next: 'confirmPhoneNumber'
  },
  confirmPhoneNumber: {
    name: 'Chama no zap',
    title: 'Confirmar número de telefone',
    message: 'Beleeza :), então me envie seu número com DDD pra eu te avisar quando o pedido estiver saindo.',
    next: 'whatIsYourCep',
  },
  whatIsYourCep: {
    name: 'Chama no zap',
    title: 'Identificação da área macro do usuário',
    message: ', já anotei o seu pedido. Pra fazer a entrega, vou precisar do seu CEP, poderia me informar?',
    next: 'whatIsYourComplement',

  },
  whatIsYourComplement: {
    name: 'Chama no zap',
    title: 'Identificação da área micro do usuário',
    message: 'Pode me dizer qual o complemento do seu endereço? Se é casa, apartamento ou outro tipo?',
    next: 'whatIsYourHouseNumber',
  },
  whatIsYourHouseNumber: {
    name: 'Chama no zap',
    title: 'Identificação da área micro do usuário',
    message: 'E qual o número que o pedido vai ser entregue?',
    next: 'payment'
  },
  payment: {
    name: 'Chama no zap',
    title: 'Pagamento',
    message: 'Certo! Pra gente confirmar seu pedido, faça o pagamento com uma transferência PIX com a chave "chamano@zap.com", estamos no aguardo. É rápido e seguro, não se preocupe!',
    next: 'finally'
  },
  finally: {
    name: 'Chama no zap',
    title: 'Finalizar pedido',
    message: ', já anotei seu pedido e ficará pronto em alguns minutos, assim que sair para entrega eu te aviso, ok? A HamburGueria Digital agradece sua preferência <3',
    fail: '',
    next: 'none',
  },
};

export default chatResponses;

Documentaçção Oficial : https://github.com/web-push-libs/web-push

Executar o generate.js, ele ira gerar esse código:

{
  publicKey: "xx",
  privateKey: "xx",
};

Apos isso, colocar essas key dentro da variável vapidKeys,

A publicKey, colar no applicationServerKey da funçao subscribe

Então ligar o server (Pode ser live-server) e clicar no botao subscribe, ele vai dar um console.log, copiar o objeto e colar dentro da variável pushSubscription.

Executar o wepush.js

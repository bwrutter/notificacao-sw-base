self.addEventListener('push', function (e) {
  var options = {
    body: 'Notificacao!',
    icon: 'favicon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      { action: 'Abrir', title: 'Abrir de notificacao',
        icon: 'favicon.png' },
      { action: 'fechar', title: 'Fechar de notificacao',
        icon: 'favicon.png' },
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Teste de notificacao!!!', options)
  );
});


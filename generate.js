import push from 'web-push';

let vapidKeys = push.generateVAPIDKeys();

console.log(vapidKeys);
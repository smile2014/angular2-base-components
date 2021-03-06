console.log('Production mode ...');

export const environment = {
  production: true,
  test: false
};
export const serviceServer = {
  protocol: 'http',
  host: 'localhost',
  port: 9996,
  services: [{name: 'users' , uri: 'users', methods: ['GET', 'POST', 'PUT', 'DELETE']},
             {name: 'roles', uri: 'roles', methods: ['GET', 'POST', 'PUT', 'DELETE']},
             {name: 'contacts', uri: 'contacts', methods: ['GET', 'POST', 'PUT', 'DELETE']},
             {name: 'countries', uri: 'countries', methods: ['GET', 'POST', 'PUT', 'DELETE']},
             {name: 'address-book', uri: 'people', methods: ['GET', 'POST', 'PUT', 'DELETE']},
             {name: 'auths', uri: 'auths', methods: ['GET', 'POST', 'PUT', 'DELETE']},
  ]
};
export const appConfig = {
  services: serviceServer,
  environment: environment
};

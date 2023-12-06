export default {
  routes: [
    {
     method: 'POST',
     path: '/password-reset',
     handler: 'password-reset.passwordReset',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};

const loginSchema = {
    id: '/login',
    type: 'object',
    properties: {
      userId: {
        type: 'string',
        required: true
      }
    }
  };

  export { loginSchema };
const myProfileSchema = {
    id: '/myProfile',
    type: 'object',
    properties: {
      userId: {
        type: 'string',
        required: true
      }
    }
  };

  export { myProfileSchema };
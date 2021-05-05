const helloSchema = {
  id: '/hello',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      required: false,
      minLength: 1,
      format: 'alphanumeric'
    },
    world: {
      type: 'string',
      required: false,
      minLength: 1,
      enum: ['Earth', 'Venus', 'Mars']
    },
    children: {
      type: 'array',
      minItems: 1,
      items: { $ref: '/helloChild' }
    }
  }
};

const helloChildSchema = {
  id: '/helloChild',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      required: false,
      minLength: 1,
      format: 'alphanumeric'
    },
    surname: {
      type: 'string',
      required: false,
      minLength: 1,
      format: 'alphanumeric'
    },
    dob: {
      type: 'string',
      required: false,
      format: 'date-time'
    }
  }
};

export { helloSchema, helloChildSchema };

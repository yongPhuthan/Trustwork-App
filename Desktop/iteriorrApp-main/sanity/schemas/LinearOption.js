export default {
    title: 'LinearOption',
    name: 'linearOption',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Linear Name',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Description',
        type: 'localeBlockContent',
      },
      {
        title: 'Price',
        name: 'price',
        type: 'number',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
      },
    ],
  };
  
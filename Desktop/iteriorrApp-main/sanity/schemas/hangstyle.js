export default {
    title: 'HangStyle',
    name: 'hangstyle',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Style Name',
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
  
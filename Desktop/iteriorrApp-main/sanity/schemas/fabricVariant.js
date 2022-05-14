export default {
    title: 'Fabric variant',
    name: 'fabricVariant',
    type: 'object',
    fields: [
      {
        name: 'color',
        title: 'Color Name',
        type: 'string',
      },
      {
        title: 'Weidth',
        name: 'width',
        type: 'number',
        default: 0,
      },
      {
        title: 'Lenght',
        name: 'lenght',
        type: 'number',
        default: 0,
      },
      {
        title: 'Fullnest',
        name: 'fullnest',
        type: 'number',
        default: 0,
      },
      {
        title: 'Number of Panels',
        name: 'qty',
        type: 'number',
        default: 0,
      },
      
      
      {
        title: 'Room name',
        name: 'room',
        type: 'string',
        default: 'ห้องรับแขก'
      },
      {
        title: 'Price',
        name: 'price',
        type: 'number',
        default: 490,
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
  }
  
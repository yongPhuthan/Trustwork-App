export default {
  title: 'Color variant',
  name: 'colorVariant',
  type: 'object',
  fields: [
    {
      name: 'color',
      title: 'Color Name',
      type: 'string',
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

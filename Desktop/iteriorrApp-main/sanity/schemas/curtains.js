export default {
  name: 'curtain',
  title: 'Curtain',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Fabric' },
    { name: 'slug', title: 'Slug', type: 'slug', options: {
        source: 'title',
        maxLength: 96,
      }, },      
      {
        title: 'Tags',
        name: 'tags',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ],
        options: {
          layout: 'tags',
        },
      },
      {
        name: 'body',
        title: 'Description',
        type: 'localeBlockContent',
      },
      {
        name: 'countInStock',
        title: 'countInStock',
        type: 'number',
      },
      {
        title: 'Fabric variant',
        name: 'defaultFabricVariant',
        type: 'array',
        of: [
          {
            title: 'Fabric Variant',
            type: 'fabricVariant',
          },
        ],
      },
  ],
};
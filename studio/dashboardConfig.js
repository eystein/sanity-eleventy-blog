export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df295a19e580f3a8cb1ffad',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-9zyw4i2h',
                  apiId: 'f80ccb7f-2f57-4295-8137-e2b330b1c66f'
                },
                {
                  buildHookId: '5df295a1118371615ee66b1e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-hj6zy8e9',
                  apiId: '22d39b6f-f96d-4ad6-a9ca-458d56699743'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eystein/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-hj6zy8e9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

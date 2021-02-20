export default {
  widgets: [
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
                  buildHookId: '6031818b50dc58d87d7511ed',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jto92f59',
                  apiId: '9aafc6b4-04c3-48f6-99f6-b6b8709d3e81'
                },
                {
                  buildHookId: '6031818b9509f95684ebfdaa',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fftouzum',
                  apiId: 'f3666216-2f38-4385-8bce-d3ff62ac41be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gdewalters/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fftouzum.netlify.app', category: 'apps'}
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

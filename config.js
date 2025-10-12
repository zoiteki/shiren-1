const config = {
  gatsby: {
    pathPrefix: '/shiren-1',
    siteUrl: 'https://zoiteki.github.io',
  },
  header: {
    logo: '',
    logoLink: '',
    title: 'Shiren 1 SFC Wiki',
    githubUrl: 'https://github.com/zoiteki/shiren-1',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/zoiteki" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
  },
  sidebar: {
    forcedNavOrder: [
      '/',
      '/guides',
      '/items',
      '/system',
      '/dungeons',
      '/other'
    ],
    collapsedNav: [],
    links: [],
    frontline: false,
    ignoreIndex: false
  },
  rightSidebar: {
    allowedDepths: [1, 2, 3], // Control which heading levels appear in TOC
  },
  siteMetadata: {
    title: 'Shiren SFC Wiki | Zoiteki',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: 'https://github.com/zoiteki/shiren-1/tree/main/content',
    favicon: 'https://raw.githubusercontent.com/zoiteki/shiren-1/main/src/components/images/favicon-32x32.png',
  },
  trailingSlash: 'ignore',
};

module.exports = config;

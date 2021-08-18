export const websitesReducer = () => {
  return [

  {title: 'Github',
    link: 'https://github.com/Darren-ODonnell',
  },
  {title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/darren-o-donnell-8388651ab/', 
  },
  {title: 'HackerRank',
    link: 'https://www.hackerrank.com/d_odonnell2001', 
  },

  ]
};

export const selectedWebsiteReducer = (selectedWebsite = null, action) => {
if(action.type === 'WEBSITE_SELECTED'){
  return action.payload;
}
return selectedWebsite;
};
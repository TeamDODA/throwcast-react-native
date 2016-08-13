const initialState = {
  stations: [
    {
      title: 'Fantasy Football Today Podcast',
      link: 'http://fantasynews.cbssports.com/fantasyfootball',
      description: 'fantasy news',
      imageUrl: 'http://podcasts.cstv.com/graphics/fantasy_football_today.jpg',
    },
  ],
  podcasts: [
    {
      title: 'Weekly Roundup: Thursday, August 11',
      link: '&p=510310&story=489697072&t=podcast&e=489697072&ft=pod&f=510310',
      description: 'Weekly Round-up 8/11',
      pubDate: 'Thu, 04 Aug 2016 20:52:00 -0400',
      imageUrl: 'https://media.npr.org/assets/img/2015/11/13/nprpolitics_red1400px_sq-6bc03b536409ec88fd8d3abb637b560e93865bad.png?s=1400',
      station: '',
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

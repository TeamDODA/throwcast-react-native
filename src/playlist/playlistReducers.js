const initialState = {
  title: 'Group speaking',
  imageUrl: 'http://www.fatcap.org/uploads/sht/18966/opct_987299d62dbb1d773b5c07fa2e97ab60d2e3b509.jpg',
  podcastList: [
    {
      id: 1,
      title: 'Dennis speaking',
      description: 'Dennis',
      link: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: 'http://random-international.com/wp-content/uploads/2012/10/RR-home-img2.jpg',
    },
    {
      id: 2,
      title: 'Daren speaking',
      description: 'Daren',
      link: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: 'http://random-international.com/wp-content/uploads/2013/05/rain-room-at-moma-6.jpg',
    },
    {
      id: 3,
      title: 'Omneet speaking',
      description: 'Omneet',
      link: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: 'http://www.trbimg.com/img-559b1148/turbine/la-et-cm-rain-room-lacma-20150706-001',
    },
    {
      id: 4,
      title: 'Dennis speaking',
      description: 'Dennis',
      link: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: 'http://random-international.com/wp-content/uploads/2012/10/RR-home-img2.jpg',
    },
    {
      id: 5,
      title: 'Daren speaking',
      description: 'Daren',
      link: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: 'http://random-international.com/wp-content/uploads/2012/10/RR-home-img2.jpg',
    },
    {
      id: 6,
      title: 'Omneet speaking',
      description: 'Omneet',
      link: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: '../img/omneet.png',
    },
    {
      id: 7,
      title: 'Dennis speaking',
      description: 'Dennis',
      link: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: '../img/dennis.png',
    },
    {
      id: 8,
      title: 'Daren speaking',
      description: 'Daren',
      link: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: '../img/daren.png',
    },
    {
      id: 9,
      title: 'Omneet speaking',
      description: 'Omneet',
      link: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: '../img/omneet.png',
    },
    {
      id: 10,
      title: 'Dennis speaking',
      description: 'Dennis',
      link: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: '../img/dennis.png',
    },
    {
      id: 11,
      title: 'Daren speaking',
      description: 'Daren',
      link: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: '../img/daren.png',
    },
    {
      id: 12,
      title: 'Omneet speaking',
      description: 'Omneet',
      link: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: '../img/omneet.png',
    },
    {
      id: 13,
      title: 'Dennis speaking',
      description: 'Dennis',
      link: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: '../img/dennis.png',
    },
    {
      id: 14,
      title: 'Daren speaking',
      description: 'Daren',
      link: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: '../img/daren.png',
    },
    {
      id: 15,
      title: 'Omneet speaking',
      description: 'Omneet',
      link: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      imageUrl: '../img/omneet.png',
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialState = {
  background: 'http://www.fatcap.org/uploads/sht/18966/opct_987299d62dbb1d773b5c07fa2e97ab60d2e3b509.jpg',
  podcastList: [
    {
      id: 1,
      title: 'Dennis speaking',
      artist: 'Dennis',
      uri: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: 'http://random-international.com/wp-content/uploads/2012/10/RR-home-img2.jpg',
    },
    {
      id: 2,
      title: 'Daren speaking',
      artist: 'Daren',
      uri: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: 'http://random-international.com/wp-content/uploads/2013/05/rain-room-at-moma-6.jpg',
    },
    {
      id: 3,
      title: 'Omneet speaking',
      artist: 'Omneet',
      uri: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: 'http://www.trbimg.com/img-559b1148/turbine/la-et-cm-rain-room-lacma-20150706-001',
    },
    {
      id: 4,
      title: 'Dennis speaking',
      artist: 'Dennis',
      uri: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: 'http://random-international.com/wp-content/uploads/2012/10/RR-home-img2.jpg',
    },
    {
      id: 5,
      title: 'Daren speaking',
      artist: 'Daren',
      uri: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: 'http://random-international.com/wp-content/uploads/2012/10/RR-home-img2.jpg',
    },
    {
      id: 6,
      title: 'Omneet speaking',
      artist: 'Omneet',
      uri: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: '../img/omneet.png',
    },
    {
      id: 7,
      title: 'Dennis speaking',
      artist: 'Dennis',
      uri: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: '../img/dennis.png',
    },
    {
      id: 8,
      title: 'Daren speaking',
      artist: 'Daren',
      uri: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: '../img/daren.png',
    },
    {
      id: 9,
      title: 'Omneet speaking',
      artist: 'Omneet',
      uri: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: '../img/omneet.png',
    },
    {
      id: 10,
      title: 'Dennis speaking',
      artist: 'Dennis',
      uri: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: '../img/dennis.png',
    },
    {
      id: 11,
      title: 'Daren speaking',
      artist: 'Daren',
      uri: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: '../img/daren.png',
    },
    {
      id: 12,
      title: 'Omneet speaking',
      artist: 'Omneet',
      uri: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: '../img/omneet.png',
    },
    {
      id: 13,
      title: 'Dennis speaking',
      artist: 'Dennis',
      uri: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: '../img/dennis.png',
    },
    {
      id: 14,
      title: 'Daren speaking',
      artist: 'Daren',
      uri: 'https://api.soundcloud.com/tracks/99534378/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: '../img/daren.png',
    },
    {
      id: 15,
      title: 'Omneet speaking',
      artist: 'Omneet',
      uri: 'https://api.soundcloud.com/tracks/254196631/stream?client_id=8a754483a114344c70ab15f20a5035ab',
      image: '../img/omneet.png',
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

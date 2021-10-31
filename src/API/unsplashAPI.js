import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID sQtJXpbAkQHHiG6Uq48qkuXmBLq63DE1ZgDrLeE2hbk',
  },
});
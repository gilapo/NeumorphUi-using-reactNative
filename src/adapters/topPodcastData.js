import {
  jonMayerAlbumCover,
  angankuAnganmuCover,
  bohemianRhapsodyCover,
  rockNRollCover,
} from '../assets';

const podcastData = [
  {
    name: 'Where the Light is...',
    key: 1,
    image: jonMayerAlbumCover,
    artist: 'John Mayer',
  },
  {name: 'Why Georgia', key: 2, image: '', artist: 'John Mayer'},
  {
    name: 'Anganku Anganmu',
    key: 3,
    image: angankuAnganmuCover,
    artist: 'Isyana & Raisa',
  },
  {name: 'Rock n Roll', key: 4, image: rockNRollCover, artist: 'Led Zeppelin'},
  {name: 'All of me', key: 5, image: '', artist: 'John Legend'},
  {
    name: 'Bohemian Rhapsody',
    key: 6,
    image: bohemianRhapsodyCover,
    artist: 'Queen',
  },
];

export default podcastData;

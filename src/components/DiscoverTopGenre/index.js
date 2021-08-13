import React from 'react';
import {DiscoverCard} from '../../atoms';
import {genres} from '../../adapters';

const DiscoverButton = () => {
  return genres.map((genre, index) => (
    <DiscoverCard
      key={index}
      backgroundColor={genre.backgroundColor}
      title={genre.namaGenre}
      image={genre.gambar}
    />
  ));
};
const DiscoverTopGenre = () => {
  return (
    <>
      <DiscoverButton />
    </>
  );
};

export default DiscoverTopGenre;

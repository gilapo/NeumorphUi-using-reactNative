import React from 'react';
import {DiscoverCard} from '../../atoms';
import {browse} from '../../adapters';

const BrowseButton = () => {
  return browse.map((browser, index) => (
    <DiscoverCard
      key={index}
      backgroundColor={browser.backgroundColor}
      title={browser.namaGenre}
      image={browser.gambar}
    />
  ));
};
const BrowseAll = () => {
  return (
    <>
      <BrowseButton />
    </>
  );
};

export default BrowseAll;

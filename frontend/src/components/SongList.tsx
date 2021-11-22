import React, { useEffect } from 'react';
import { useAppState, useActions } from 'state';

const SongList = (): React.ReactElement => {
  const { songs } = useAppState();
  const { loadSongs } = useActions();

  useEffect(() => {
    loadSongs();
  }, []);

  console.log(songs);

  return (
    <ul className="list-disc m-2">
      {songs.map((song, index) => {
        return <li key={index}>{song.name}</li>;
      })}
    </ul>
  );
};

export default SongList;

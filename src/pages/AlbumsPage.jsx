import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const responseAlbums = await response.json();
      setAlbums(responseAlbums);
    };
    fetchAlbums();
  }, []);
  return (
    <div>
      <Link to={"/albums"}>Albums page</Link>

      {/* {albums.map((album) => {
        <div>
          <Link to={`albums/${album.id}`}>Albums page</Link>
        </div>;
      })} */}
      {albums.map((album) => (
        <div>
          <Link to={`album/${album.id}`}>{album.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default AlbumsPage;

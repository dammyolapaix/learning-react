// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// function SingleAlbum() {
//   const params = useParams();
//   const [singleAlbum, setSingleAlbum] = useState(null);
//   useEffect(() => {
//     const fetchAlbums = async () => {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/albums/${params.albumId}`
//       );
//       const responseAlbums = await response.json();
//       setSingleAlbum(responseAlbums);
//     };
//     fetchAlbums();
//   }, []);
//   return (
//     <div>
//       {singleAlbum !== null && (
//         <div>
//           <div>userId:{singleAlbum.userId}</div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SingleAlbum;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleAlbum() {
  const params = useParams();
  const [singleAlbum, setSingleAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${params.albumId}`
      );
      const albumResponse = await response.json();
      setSingleAlbum(albumResponse);
    };
    fetchAlbum();
  }, [params.albumId]);

  return (
    <>
      <Link to={"/album"}>Go back</Link>
      {singleAlbum !== null && (
        <div>
          <h2>Album details</h2>
          <div>Album ID: {singleAlbum.id}</div>
          <div>User ID: {singleAlbum.userId}</div>
          <div>Title: {singleAlbum.title}</div>
        </div>
      )}
    </>
  );
}

export default SingleAlbum;

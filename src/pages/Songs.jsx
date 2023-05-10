import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import axios from "axios";

export const Songs = (props) => {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const AUTH_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
  const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE;

  // 받아온 토큰 정보를 로컬 저장소에 저장하여 페이지를 다시 로드할때 토근이 손실되지 않도록 해야한다.
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // 해시가 있을 때만 이 작업을 수행하고, 토큰이 없으면 안한다.
    // 로컬 스토리지에 토큰 값을 저장해본다.
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((e) => e.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setArtists(data.artists.items);
  };

  const rednerArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img src={artist.images[0].url} alt='' />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <div class='w-full h-full flex flex-col '>
      <Header />
      {!token ? (
        <a
          class='text-white'
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button class='text-white' onClick={logout}>
          Logout
        </button>
      )}

      {token ? (
        <form onSubmit={searchArtists}>
          <input type='text' onChange={(e) => setSearchKey(e.target.value)} />
          <button type='submit'>Search</button>
        </form>
      ) : (
        <h2>Please login</h2>
      )}

      {rednerArtists()}
    </div>
  );
};

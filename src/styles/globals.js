import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}; 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
    //https://wallpapers-hub.art/wallpaper-images/13378.jpg
    //https://wallup.net/wp-content/uploads/2016/01/25515-dark_fantasy.jpg
    //https://www.fonewalls.com/wp-content/uploads/2019/09/Big-Moon-Night-Wallpaper.jpg
    //https://www.fonewalls.com/wp-content/uploads/2020/09/Vector-Dark-Night-Wallpaper-139.jpg
    //https://i.pinimg.com/originals/ba/c9/6c/bac96c45e56e6db1c8f7812634eb8f10.jpg
    //https://images.wallpaperscraft.com/image/single/silhouettes_moon_night_143593_1920x1080.jpg
    //https://www.teahub.io/photos/full/117-1175104_free-skyrim-high-quality-wallpaper-id-skyrim-night.jpg
    //https://wallpaperaccess.com/full/1268171.jpg
    //https://www.teahub.io/photos/full/48-489458_galaxy-wallpaper-wallpaper.jpg
    background-image: url(https://www.teahub.io/photos/full/117-1175104_free-skyrim-high-quality-wallpaper-id-skyrim-night.jpg);
    background-attachment: fixed;
    background-size: cover;
    
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;

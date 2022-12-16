import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }

  *, *:before, *:after {
    box-sizing: border-box;
    font-family: "Fira Code", "Open Sans";
    font-weight: 300;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;

    justify-content: center;
    align-items: center;
    text-align: center;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    width: inherit;
    height: inherit;
  }

  .App {
    width: inherit;
    height: inherit;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .header {
    max-width: 80%;
    max-width: 1100px;
    height: 20%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 4rem;
    background: -webkit-linear-gradient(77deg, rgb(19, 70, 79) 0%, rgba(120,177,18,1) 34%, rgba(125,191,18,1) 67%, rgba(251,255,239,1) 100%);
    background-clip: inherit;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .footer {
    height: 10%;
    max-width: 80%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .footer img {
    width: 2rem;
    height: 2rem;
  }

  .main {
    height: 70%;
    max-width: 80%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    vertical-align: center;
  }

  .intro {
    width: 40%;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
  }

  .intro p {
    height: fit-content;
    margin-top: 2rem;
    text-align: left;
  }

  .intro p strong {
    font-weight: 600;
    background: -webkit-linear-gradient(77deg, rgb(42, 79, 19) 0%, rgba(120,177,18,1) 34%, rgba(125,191,18,1) 67%, rgb(208, 233, 135) 100%);
    background-clip: inherit;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .canvasContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  canvas {
    border-radius: 15px;
    background-color:rgb(150, 150, 150, .2);
    width: 400px;
    height: 400px;
    margin: 2rem 0;

    -webkit-box-shadow: 2px 2px 10px -3px #000000;
    box-shadow: 2px 2px 10px -3px #000000;
  }
`

/* :root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
} */

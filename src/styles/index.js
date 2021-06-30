import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --cl-primary: #072e69;
    --cl-secondary: #007bff;
    --cl-border: #eee;
    --cl-bg: #f7f9fe;

    --text-main: #042765;
    --text-muted: #999;

    --w-sidebar: 4rem;
    --border-radius: 8px;


    --fz-h2: 1rem;
    --fz-h3: 1rem;
  }

  html {
    box-sizing: border-box;
    font-size: 112.5%;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  

  body {
    font-family: Roboto, sans-serif;
    margin: 0;
    color: var(--text-main);
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }

  p {
    line-height: 1.6;
  }

  h3 {
    font-size: var(--fz-h3);
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .row {    
    display: flex;
    gap: 1em;
  }
`;

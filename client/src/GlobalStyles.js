import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 16px;
          margin: 0;
          background: ${theme.colors.background};
          font-family: 'Roboto', sans-serif;
        }
        .mapboxgl-popup-content {
          border-radius: 7px;
          background-color: ${theme.colors.background};
          display: flex;
          margin: 0;
          padding: 0;
          border: 3px solid ${theme.colors.primary};
          box-shadow: 14px 15px 20px -4px rgba(0, 0, 0, 0.75);
          > div {
            width: 100%;
            display: flex;
            flex-flow: column;
            align-items: flex-start;
          }
          > img {
            width: 37%;
            height: 90px;
            border-radius: 4px 0 0px 6px;
            margin-right: 10px;
            margin-left: 0.2%;
          }
        }
        .mapboxgl-popup-content > div > span {
          background-color: ${theme.colors.rate};
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26) !important;

          border-radius: 5px;
          padding: 0 5px 0 5px;
          font-size: 0.72rem;
          margin-bottom: 10px;
        }
        .mapboxgl-popup-content > div > div > span {
          font-size: 0.72rem;
          font-style: italic;
        }
        .mapboxgl-popup-content > div > h5 {
          font-size: 0.8rem;
          margin: 5px 0px 10px 0px;
        }
        .mapboxgl-popup-content > div > div > a > button {
          font-size: 0.67rem;
          background-color: ${theme.colors.secondary};
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26) !important;
          border: none;
          outline: none;
          color: white;
          font-weight: bold;
          padding: 2% 0px;
          height: 15px;
          width: 25px;
          border-radius: 5px;
          margin: 3px 3px 0px 10px;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        }
        .mapboxgl-popup-content > div > div {
          display: flex;
        }
      `}
    />
  );
}

export default GlobalStyles;

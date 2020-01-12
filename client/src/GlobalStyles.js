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
          width: 100%;
          display: flex;
          flex-flow: column;
          align-items: flex-start;
          width: 160px;
          margin: 0;
          padding: 0;
          height: 165px;
          border: 3px solid ${theme.colors.primary};
          box-shadow: 14px 15px 20px -4px rgba(0, 0, 0, 0.75);
          > div {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 30px;
          }
          > img {
            width: 100%;
            height: 80px;
            border-radius: 4px 4px 0px 0px;
          }
          > span {
            background-color: ${theme.colors.extra};
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26) !important;
            margin: 5px 0px 2px 8px;
            border-radius: 5px;
            height: fit-content;
            width: fit-content;
            padding: 2px 5px 2px 5px;
            font-size: 0.7rem;
          }
        }
        .mapboxgl-popup-content > div > span {
          margin: 5px 0 5px 10px;
          font-style: italic;
          font-size: 0.7rem;
        }

        .mapboxgl-popup-content > h5 {
          font-size: 0.8rem;
          margin: 1px 0px 0px 10px;
        }
        .mapboxgl-popup-content div > a > button {
          font-size: 0.6rem;
          background-color: ${theme.colors.secondary};
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26) !important;
          text-align: center;
          border: none;
          outline: none;
          color: white;
          font-weight: bold;
          margin-top: 7px;
          padding: 0px 2px 2px 0px;
          line-height: 15px;
          height: 15px;
          width: 35px;
          border-radius: 5px;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        }

        .mapboxgl-popup-tip {
          border-bottom-color: ${theme.colors.primary} !important;
        }

        .mapboxgl-marker {
          > svg > g {
            g:nth-child(2) {
              fill: ${theme.colors.secondary};
            }
          }
        }
      `}
    />
  );
}

export default GlobalStyles;

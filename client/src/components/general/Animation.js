import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

export const bounce = keyframes` 
    from,
    20%,
    53%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -30px, 0);
    }

    70% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -15px, 0);
    }

    90% {
      transform: translate3d(0, -4px, 0);
    }
  

  .bounce {
    animation-name: bounce;
    transform-origin: center bottom;
  }`;

export const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.35, 1.35, 1.35);
  }

  to {
    transform: scale3d(1, 1, 1);
  }


.pulse {
  animation-name: pulse;
}`;

export const flipIn = keyframes` {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}`;

export const fadeIn = keyframes`{
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;
export const fadeInLeft = keyframes`{
from {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
}`;

export const loading = keyframes`{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

export const Loading = styled.div`
  display: inline-block;
  margin: 10px auto 0px auto;
  width: 80px;
  height: 80px;
  &:after {
    content: ' ';
    display: block;
    width: 60px;
    height: 60px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: ${props => props.theme.colors.extra} transparent
      ${props => props.theme.colors.extra} transparent;
    animation: ${loading} 1.2s linear infinite;
  }
`;

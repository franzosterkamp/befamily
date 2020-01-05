import { keyframes } from '@emotion/core';

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
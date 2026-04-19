export const Loader = () => {
  const letters = ["L", "o", "a", "d", "i", "n", "g", "…"];
  const delays = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7];



  return (
    <LoaderContainer>
      <LoadingText>
        {letters.map((letter, index) => (
          <span
            key={crypto.randomUUID()}
            style={{ animationDelay: `${delays[index]}s` }}
          >
            {letter}
          </span>
        ))}
      </LoadingText>
    </LoaderContainer>
  );
};

import styled from "styled-components";

const LoaderContainer = styled.div`
  background-color: #1a1a2e;
  position: relative;
  font-size: 4rem;
  font-weight: 700;
  font-family: "Segoe UI", "Verdana", sans-serif;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  inset: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const LoadingText = styled.div`
  display: inline-block;
  color: #fff;

  span {
    display: inline-block;
    animation: wave-blur 2.8s ease-in-out infinite;
    transform-origin: center bottom;

    @keyframes wave-blur {
      0%,
      100% {
        filter: blur(8px);
        opacity: 0.3;
        transform: translateY(10px) scale(0.95);
        color: #aaa;
        text-shadow: none;
      }
      20% {
        filter: blur(4px);
        opacity: 0.5;
        transform: translateY(6px) scale(0.97);
        color: #ccc;
      }
      40% {
        filter: blur(2px);
        opacity: 0.7;
        transform: translateY(3px) scale(0.99);
        color: #eee;
      }
      50% {
        filter: blur(0);
        opacity: 1;
        transform: translateY(0) scale(1);
        color: #fff;
        text-shadow:
          0 0 10px rgba(255, 255, 255, 0.8),
          0 0 20px rgba(79, 195, 247, 0.6),
          0 0 30px rgba(33, 150, 243, 0.3);
      }
      60% {
        filter: blur(0);
        opacity: 1;
        transform: translateY(0) scale(1);
        color: #fff;
        text-shadow:
          0 0 8px rgba(255, 255, 255, 0.7),
          0 0 16px rgba(79, 195, 247, 0.5),
          0 0 24px rgba(33, 150, 243, 0.2);
      }
      70% {
        filter: blur(1px);
        opacity: 0.8;
        transform: translateY(2px) scale(0.99);
        color: #eee;
      }
      80% {
        filter: blur(3px);
        opacity: 0.6;
        transform: translateY(4px) scale(0.98);
        color: #ccc;
      }
    }
  }
`;

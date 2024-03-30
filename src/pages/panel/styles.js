import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 1.5rem;

  @media(max-width: 1300px){
    flex-direction: column;
  }
`;

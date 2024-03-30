import styled from "styled-components";

export const BoxDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1800px;

  @media(min-width: 1800px){
    margin: 0 auto;
  }

  @media(max-width: 1300px){
    flex-direction: column;
  }
`;

import styled from "styled-components";

import { color } from "utils/pallete";

export const BoxInfoPerfil = styled.div`
  margin-top: 0px;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  background-color: ${color.purple};
  border-radius: 0px 24px 0px 0px;

  @media (max-width: 1300px) {
    width: 100%;
    max-width: -webkit-fill-available;
    height: 100%;
    max-height: 150px;
    display: flex;
    border-radius: 0px 0px 24px 0px;
    flex-direction: column;
    padding: 12px;
    position: relative;
  }
`;

export const BoxInternalInfoPerfil = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  gap: 1rem;

  @media (max-width: 1300px) {
    margin: 0;
    display: flex;
    position: absolute;
    bottom: -50px;
  }
`;

export const HoraHeader = styled.div`
  > p {
    color: ${color.white};
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    margin-left: 0.8125rem;
    margin-top: 1rem;
    letter-spacing: 0.05em;
    font-size: 0.875rem;
  }

  @media (max-width: 1300px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const InfoName = styled.p`
  color: ${color.white};
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
`;

export const InfoFunction = styled.p`
  color: ${color.white};
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 1rem;
`;

export const InfoPessoais = styled.p`
  color: ${color.white};
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
`;

export const InfoPessoaisTime = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  > p {
    color: ${color.white};
    font-family: "Mulish", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const BoxInfos = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;

  gap: 1rem;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const ImgPerfil = styled.img`
  border-radius: 50%;
  height: 7.5rem;
  width: 7.5rem;
  border: 3px solid ${color.white};
`;

export const ImgIcon = styled.img`
  width: 1.125rem;
  margin-right: 0.3125rem;
`;

export const ImgIconVerif = styled.img`
  width: 0.9375rem;
  height: 0.9375rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1300px) {
    flex-direction: row;    
  }
`;

export const BoxProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1300px) {
    align-items: flex-start;
    margin-left: 0.625rem;
  }
`;

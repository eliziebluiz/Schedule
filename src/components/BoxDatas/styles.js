import styled from "styled-components";

import { color } from "utils/pallete";

export const BoxHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const ImgLogo = styled.img`
  width: 6.25rem;
  height: 6.25rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 1.25rem;

  @media (max-width: 1300px) {
    padding: 1.25rem;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;

  @media (max-width: 1300px) {
    align-items: center;
  }
`;

export const BoxInternalInfoDatas = styled.div`
  background-color: ${color.purple};
  border-radius: 0.5rem;
  min-height: 10rem;
  align-content: left;
  padding: 1.25rem;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const BoxDatasInfos = styled.div`
  text-align: center;
  background-color: ${color.purple};
  border-radius: 0.5rem;
  min-height: 10rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const TitlePrimary = styled.h1`
  color: ${color.black};
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 2rem;
  margin-bottom: 0.625rem;
`;

export const SubTitlePrimary = styled.h1`
  color: ${color.black};
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
`;

export const InfoDatas = styled.p`
  color: ${color.white};
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 0.875rem;
  display: block;
  flex: none;
  height: max-content;
  display: flex;
  margin: 0.625rem 0rem;
`;

export const BoxInfos = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 5px;
  p + p {
    margin-left: 15px;
  }
`;

export const BoxInputs = styled.form`
  display: flex;
  width: 100%;
  max-width: 700px;

  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 1300px) {
    flex-direction: column;
    max-width: -webkit-fill-available;
  }
`;

export const ItensLegenda = styled.div`
  display: flex;
  height: 30px;
`;

export const Item = styled.p`
  font-size: 2.25rem;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: #9f9f9f;
  background: #f2f2f2;
  border: none;
  border-radius: 6px;
  height: 45px;
  width: 100%;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  min-width: 180px;
  margin: 0.5em;
  height: 45px;
  border: none;
  border-radius: 6px;
  color: ${color.white};
  background-color: ${color.purple};
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  &:disabled {
    background-color: #00000033;
    color: ${color.white};
    cursor: unset;
  }
`;

export const BodyBotton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ImgIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 16px;
`;

export const Separator = styled.div`
  width: 1px;
  height: 30px;
  background-color: #fff;
`;

export const ImgElipses = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

import styled from "styled-components";

import { color } from "../../utils/palete";

export const BoxInfoPerfil = styled.div`
  width: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

export const BoxInfoTitle = styled.div`
  width: 100%;
`;

export const BoxInternalInfoDatas = styled.div`
  text-align: center;
  background-color: ${color.purple};
  border-radius: 24px;
  height: 200px;
  width: 100%;
`;

export const TitlePrimary = styled.h1`
  color: ${color.black};
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 32px;
  margin-bottom: 10px;
`;

export const SubTitlePrimary = styled.h1`
  color: ${color.black};
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  margin-bottom: 40px;
`;

export const InfoPessoais = styled.p`
  color: ${color.white};
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
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

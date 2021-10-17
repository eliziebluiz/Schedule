import styled from "styled-components";

import { color } from "../../utils/palete";

export const BoxInfoPerfil = styled.div`
  display: inline-table;
  margin-top: 0px;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  background-color: ${color.purple};
  border-radius: 0px 24px 0px 0px;
`;

export const BoxInternalInfoPerfil = styled.div`
  margin: 50% 0px;
  text-align: center;
  width: 100%;
`;

export const HoraHeader = styled.p`
  color: ${color.white};
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  margin-left: 13px;
  margin-top: 16px;
  letter-spacing: 0.05em;
  font-size: 14px;
`;

export const InfoName = styled.p`
  color: ${color.white};
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 18px;
`;

export const InfoFunction = styled.p`
  color: ${color.white};
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const InfoPessoais = styled.p`
  color: ${color.white};
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
`;

export const InfoPessoaisTime = styled.p`
  color: ${color.white};
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-style: normal;
  display: inline-flex;
  align-items: center;
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

export const ImgPerfil = styled.img`
  border-radius: 50%;
  width: 120px;
  border: 3px solid ${color.white};
  margin-bottom: 15px;
`;

export const ImgIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

export const ImgIconVerif = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

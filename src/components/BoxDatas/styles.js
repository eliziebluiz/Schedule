import styled from "styled-components";

import { color } from "../../utils/palete";

export const BoxHeader = styled.header`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

export const ImgLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const BoxGeral = styled.div`
  width: 100%;
  height: 100%;
  display: flow-root;
`;

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
  min-height: 200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
`;

export const BoxDatas = styled.div`
  text-align: center;
  background-color: ${color.purple};
  border-radius: 24px;
  min-height: 200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
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

export const InfoDatas = styled.p`
  color: ${color.white};
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  display: block;
  flex: none;
  height: max-content;
  margin: 10px 0px;
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

export const BoxInputs = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 5px;
  p + p {
    margin-left: 15px;
  }
`;

export const ItensLegenda = styled.div`
  display: flex;
`;

export const Item = styled.p`
  font-size: 36px;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #9f9f9f;
  background: #f2f2f2;
  border: none;
  border-radius: 6px;
  height: 32px;
  width: 100%;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
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

export const ImgIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 50px;
`;

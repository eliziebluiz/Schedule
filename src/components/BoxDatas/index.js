import {
  BoxInfoPerfil,
  // BoxInfos,
  BoxInfoTitle,
  BoxInputs,
  BoxInternalInfoDatas,
  ButtonSubmit,
  ImgIcon,
  InfoPessoais,
  Input,
  SubTitlePrimary,
  TitlePrimary,
} from "./styles";

import calendar from "../../assets/calendar.svg";

export default function BoxDatas() {
  return (
    <BoxInfoPerfil>
      <BoxInfoTitle>
        <TitlePrimary>Bem-vindo(a), Yuji</TitlePrimary>
        <SubTitlePrimary>
          Adicione seus jobs a agenda e gerencie sua rotina
        </SubTitlePrimary>
        <BoxInputs>
          <Input
            placeholder="Selecione uma data..."
            type="date"
            min="2021-01-01"
            max="2021-12-31"
          />
          <Input type="time" />
          <ButtonSubmit>
            <ImgIcon src={calendar} /> Agendar
          </ButtonSubmit>
        </BoxInputs>
        <BoxInternalInfoDatas>
          <InfoPessoais>10/jan das 10 ás 12h</InfoPessoais>
          <InfoPessoais>10/jan das 10 ás 12h</InfoPessoais>
          <InfoPessoais>10/jan das 10 ás 12h</InfoPessoais>
        </BoxInternalInfoDatas>
      </BoxInfoTitle>
    </BoxInfoPerfil>
  );
}

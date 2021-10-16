import {
  BoxInfoPerfil,
  // BoxInfos,
  BoxInfoTitle,
  BoxInternalInfoDatas,
  InfoPessoais,
  SubTitlePrimary,
  TitlePrimary,
} from "./styles";

export default function BoxDatas() {
  return (
    <BoxInfoPerfil>
      <BoxInfoTitle>
        <TitlePrimary>Bem-vindo(a), Yuji</TitlePrimary>
        <SubTitlePrimary>
          Adicione seus jobs a agenda e gerencie sua rotina
        </SubTitlePrimary>
        <BoxInternalInfoDatas>
          <InfoPessoais>10/jan das 10 ás 12h</InfoPessoais>
          <InfoPessoais>10/jan das 10 ás 12h</InfoPessoais>
          <InfoPessoais>10/jan das 10 ás 12h</InfoPessoais>
        </BoxInternalInfoDatas>
      </BoxInfoTitle>
    </BoxInfoPerfil>
  );
}

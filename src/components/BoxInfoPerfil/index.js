import moment from "moment";
import "moment/locale/pt-br";
import {
  BoxInfoPerfil,
  BoxInfos,
  BoxInternalInfoPerfil,
  HoraHeader,
  ImgPerfil,
  InfoFunction,
  InfoName,
  InfoPessoais,
} from "./styles";

moment.locale("pt-br");

export default function BoxInfo({ dados }) {
  const dataAtual = moment(new Date()).locale("pt-br").format("LL");
  const horaAtual = moment(new Date()).locale("pt-br").format("LT");

  console.log(dados);

  return (
    <BoxInfoPerfil>
      <HoraHeader>
        Hoje - {dataAtual} - {horaAtual}
      </HoraHeader>
      <BoxInternalInfoPerfil>
        <ImgPerfil src={dados?.picture} />
        <InfoName>
          {dados?.first_name} {dados?.last_name}
        </InfoName>
        <InfoFunction>Exorcista Jujutsu</InfoFunction>
        <BoxInfos>
          <InfoPessoais>Altura: {dados?.height}</InfoPessoais>
          <InfoPessoais>Manequim: {dados?.size}</InfoPessoais>
          <InfoPessoais>Calçado: {dados?.shoe}</InfoPessoais>
        </BoxInfos>
        <InfoPessoais>Tempo na Clooser: {dados.created_at} anos</InfoPessoais>
      </BoxInternalInfoPerfil>
    </BoxInfoPerfil>
  );
}

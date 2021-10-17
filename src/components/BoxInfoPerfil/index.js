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
  InfoPessoaisTime,
  ImgIcon,
  ImgIconVerif,
} from "./styles";

import relogio from "../../assets/relogio.svg";

import verific from "../../assets/verific.svg";

moment.locale("pt-br");

export default function BoxInfo({ dados }) {
  const dataAtual = moment(new Date()).locale("pt-br").format("LL");
  const horaAtual = moment(new Date()).locale("pt-br").format("LT");
  const data = moment(new Date());
  const dataEntrada = moment(new Date(dados?.created_at));

  console.log(data);

  console.log(dataEntrada);

  const durationTime = moment.duration(data.diff(dataEntrada)).asYears();

  console.log(durationTime);

  return (
    <BoxInfoPerfil>
      <HoraHeader>
        Hoje - {dataAtual} - {horaAtual}
      </HoraHeader>
      <BoxInternalInfoPerfil>
        <ImgPerfil src={dados?.picture} />
        <InfoName>
          {dados?.first_name} {dados?.last_name} <ImgIconVerif src={verific} />
        </InfoName>
        <InfoFunction>Exorcista Jujutsu</InfoFunction>
        <BoxInfos>
          <InfoPessoais>Altura: {dados?.height}</InfoPessoais>
          <InfoPessoais>Manequim: {dados?.size}</InfoPessoais>
          <InfoPessoais>Calçado: {dados?.shoe}</InfoPessoais>
        </BoxInfos>
        <InfoPessoaisTime>
          <ImgIcon src={relogio} /> Tempo na Clooser:
          {parseFloat(durationTime.toFixed(2))} anos
        </InfoPessoaisTime>
      </BoxInternalInfoPerfil>
    </BoxInfoPerfil>
  );
}

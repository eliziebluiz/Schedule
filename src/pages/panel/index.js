import { useEffect, useState } from "react";

import BoxDatas from "components/BoxDatas";
import BoxInfoPerfil from "components/BoxInfoPerfil";

import { reqBuscaDados } from "utils/getData";

import * as S from "./styles";

export default function Panel() {
  const [dados, setDados] = useState();
  useEffect(() => {
    reqBuscaDados(setDados);
  }, []);

  return (
    <S.Box>
      <BoxInfoPerfil dados={dados} />
      <BoxDatas name={dados?.first_name} />
    </S.Box>
  );
}

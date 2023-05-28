import React, { useState } from 'react';
import { Alert, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const Calendario: React.FC = () => {
  const [valor, setValor] = useState(() => dayjs('2017-01-25'));
  const [valorSelecionado, setValorSelecionado] = useState(() => dayjs('2017-01-25'));

  const onSelect = (novoValor: Dayjs) => {
    setValor(novoValor);
    setValorSelecionado(novoValor);
  };

  const onPanelChange = (novoValor: Dayjs) => {
    setValor(novoValor);
  };

  return (
    <>
      <Alert message={`Você selecionou a data: ${valorSelecionado?.format('YYYY-MM-DD')}`} />
      <Calendar value={valor} onSelect={onSelect} onPanelChange={onPanelChange} />
    </>
  );
};

export default Calendario;

import React, { useState } from 'react';
import { Alert, Calendar, Button, } from 'antd';
import type { Dayjs } from 'dayjs';
import './styled.css';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import moment from 'moment';

dayjs.locale('pt-br');
moment.locale('pt-br');

const Calendario: React.FC = () => {
  // Estado para armazenar o valor atual do calendário
  const [valor, setValor] = useState(() => dayjs('2017-01-25'));
  // Estado para armazenar a data selecionada pelo usuário
  const [valorSelecionado, setValorSelecionado] = useState<Dayjs | null>(null);
  // Estado para armazenar o índice do horário selecionado pelo usuário
  const [horarioSelecionado, setHorarioSelecionado] = useState<number | null>(null);

  // Lista de horários disponíveis
  const horarios = [
    '8h', '9h', '10h', '11h', '13h', '14h', '15h', '16h', '17h', '18h'
  ];

  // Função chamada quando o usuário seleciona uma data
  const onSelect = (novoValor: Dayjs) => {
    setValor(novoValor);
    setValorSelecionado(novoValor);
    setHorarioSelecionado(null);
  };

  // Função chamada quando o usuário navega pelo calendário
  const onPanelChange = (novoValor: Dayjs) => {
    setValor(novoValor);
  };

  // Função chamada quando o usuário seleciona um horário
  const selecionarHorario = (horario: number) => {
    setHorarioSelecionado(horario);
  };

  // Função para renderizar o cabeçalho personalizado do calendário
  const renderHeader = () => {
    const mes = valor.format('MMMM').toUpperCase();

    return (
      <div className="calendar-header">
        <Button
          className="prev-month-button"
          onClick={() => setValor(valor.subtract(1, 'month'))}
        >
          ANTERIOR
        </Button>
        <span className="calendar-month-year">
          {mes} {valor.format('YYYY')}
        </span>
        <Button
          className="next-month-button"
          onClick={() => setValor(valor.add(1, 'month'))}
        >
          PRÓXIMO
        </Button>
      </div>
    );
  };

  return (
    <>
      <Alert message={`Você selecionou a data: ${valorSelecionado?.format('YYYY-MM-DD')}`} />
      <Calendar
        value={valor}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        // Função para renderizar os horários dentro das células de cada dia
        cellRender={(date) => {
          // Verifica se o dia da semana é sábado (6) ou domingo (0)
          const isWeekend = date.day() === 6 || date.day() === 0;

          return (
            <div className={`horarios-container ${isWeekend ? 'weekend' : ''}`}>
              {isWeekend ? null : (
                horarios.map((horario, index) => (
                  <Button
                    key={index}
                    className={`horario-button ${horarioSelecionado === index ? 'selected' : ''}`}
                    onClick={() => selecionarHorario(index)}
                  >
                    {horario}
                  </Button>
                ))
              )}
            </div>
          );
        }}
        // Renderizar o cabeçalho personalizado
        headerRender={renderHeader}
      />
    </>
  );
};

export default Calendario;

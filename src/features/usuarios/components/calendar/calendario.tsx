import React, { useState, useEffect } from 'react';
import { Alert, Calendar, Button } from 'antd';
import type { Dayjs } from 'dayjs';
import './styled.css';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

const Calendario: React.FC = () => {
    const [valor, setValor] = useState(() => dayjs('2023-05-28'));
    const [valorSelecionado, setValorSelecionado] = useState<Dayjs | null>(null);
    const [horarioSelecionado, setHorarioSelecionado] = useState<number | null>(null);

    const horarios = ['08h', '9h', '10h', '11h', '13h', '14h', '15h', '16h', '17h', '18h'];

    const onSelect = (novoValor: Dayjs) => {
        setValor(novoValor);
        setValorSelecionado(novoValor);
        setHorarioSelecionado(null);
    };

    const onPanelChange = (novoValor: Dayjs) => {
        setValor(novoValor);
    };

    const selecionarHorario = (horario: number) => {
        setHorarioSelecionado(horario);
    };

    const renderHeader = () => {
        const mes = valor.format('MMMM').toUpperCase();

        return (
            <div className="calendar-header">
                <Button className="prev-month-button" onClick={() => setValor(valor.subtract(1, 'month'))}>
          ANTERIOR
                </Button>
                <span className="calendar-month-year">
                    {mes} {valor.format('YYYY')}
                </span>
                <Button className="next-month-button" onClick={() => setValor(valor.add(1, 'month'))}>
          PRÓXIMO
                </Button>
            </div>
        );
    };

    const handleDayHover = (date: Dayjs | null) => {
        setValorSelecionado(date);
    };

    useEffect(() => {
        const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  
        const thElements = document.querySelectorAll(
            '#root > section > section > main > div.calendar-container > div > div.ant-picker-panel > div > div > table > thead > tr > th'
        );
  
        thElements.forEach((element, index) => {
            const thElement = element as HTMLElement; // Adicionado type assertion
            thElement.textContent = dayNames[index];
            thElement.style.fontSize = '16px';
            thElement.style.textAlign = 'center';
            thElement.style.fontFamily = 'Arial, sans-serif';
            thElement.style.fontWeight = 'bold';
        });
    }, []);

    return (
        <>
            <Alert message={`Você selecionou a data: ${valorSelecionado?.format('YYYY-MM-DD')}`} />
            <div className="calendar-container">
                <Calendar
                    value={valor}
                    onSelect={onSelect}
                    onPanelChange={onPanelChange}
                    headerRender={renderHeader}
                    fullCellRender={(date) => {
                        const isWeekend = date.day() === 6 || date.day() === 0;
                        const isDateSelected = valorSelecionado && valorSelecionado.isSame(date, 'day');

                        return (
                            <div
                                className={`day-cell ${isWeekend ? 'weekend' : ''} ${
                                    isDateSelected ? 'selected' : ''
                                }`}
                                onMouseEnter={() => handleDayHover(date)}
                            >
                                <div className="day-number">{date.date()}</div>
                                {isWeekend || !valorSelecionado || !valorSelecionado.isSame(date, 'day') ? null : (
                                    <div className="time-slots">
                                        {horarios.map((horario, index) => (
                                            <Button
                                                key={index}
                                                className={`horario-button ${
                                                    horarioSelecionado === index ? 'selected' : ''
                                                }`}
                                                onClick={() => selecionarHorario(index)}
                                            >
                                                {horario}
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }}
                />
            </div>
        </>
    );
};

export default Calendario;

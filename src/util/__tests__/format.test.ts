import { formatDate, formatTemperature, formatWeekDay } from 'util/format';

describe('Format util', () => {
  it('should be able format week day', () => {
    expect(formatWeekDay(Date.UTC(2022, 6, 4))).toBe('Domingo');
    expect(formatWeekDay(Date.UTC(2022, 6, 5))).toBe('Segunda');
    expect(formatWeekDay(Date.UTC(2022, 6, 6))).toBe('Terça');
    expect(formatWeekDay(Date.UTC(2022, 6, 7))).toBe('Quarta');
    expect(formatWeekDay(Date.UTC(2022, 6, 8))).toBe('Quinta');
    expect(formatWeekDay(Date.UTC(2022, 6, 9))).toBe('Sexta');
    expect(formatWeekDay(Date.UTC(2022, 6, 10))).toBe('Sábado');
  });

  it('should be able format temperature', () => {
    expect(formatTemperature(10.4)).toBe('10°');
    expect(formatTemperature(10.6)).toBe('11°');
    expect(formatTemperature(-5)).toBe('-5°');
    expect(formatTemperature(0)).toBe('0°');
  });

  it('should be able format date', () => {
    expect(formatDate(1657091511000)).toBe('Qua, 6 de Julho de 2022');
  });
});

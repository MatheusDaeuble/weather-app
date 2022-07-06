import { months, week } from 'util/date';

describe('Format util', () => {
  describe('Week', () => {
    it('should be able return correct week day', async () => {
      expect(week[0]).toBe('Domingo');
      expect(week[1]).toBe('Segunda');
      expect(week[2]).toBe('Terça');
      expect(week[3]).toBe('Quarta');
      expect(week[4]).toBe('Quinta');
      expect(week[5]).toBe('Sexta');
      expect(week[6]).toBe('Sábado');
    });
  });

  describe('Month', () => {
    it('should be able to  return correct month', async () => {
      expect(months[0]).toBe('Janeiro');
      expect(months[1]).toBe('Fevereiro');
      expect(months[2]).toBe('Março');
      expect(months[3]).toBe('Abril');
      expect(months[4]).toBe('Maio');
      expect(months[5]).toBe('Junho');
      expect(months[6]).toBe('Julho');
      expect(months[7]).toBe('Agosto');
      expect(months[8]).toBe('Setembro');
      expect(months[9]).toBe('Outubro');
      expect(months[10]).toBe('Novembro');
      expect(months[11]).toBe('Dezembro');
    });
  });
});

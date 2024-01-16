// использование текущего времени в миллисекундах в качестве основы
// увеличение при каждом запросе с помощью функции-генератора
export const uniqueId = (() => {
    const id = (function*() {
        let mil = new Date().getTime();
        while (true)
            yield mil += 1;
    })();

    return () => id.next().value;
})();

// создание уникального id заданной длины
// на основе полученного значения (или нуля)
// увеличение при каждом запросе
export const uniqueIncrementingId = ((lastId = 0) => {
    const id = (function*() {
        let numb = lastId;
        while (true)
            yield numb += 1;
    })();

    return (length = 12) =>
        `${id.next().value}`.padStart(length, '0');
})();

// создание уникального id из букв и цифр
export const uniqueAlphaNumericId = (() => {
    const heyStack = '0123456789abcdefghijklmnopqrstuvwxyz';
    const randomInt = () =>
        Math.floor(Math.random() * Math.floor(heyStack.length));
    return (length = 24) =>
        Array.from({ length }, () => heyStack[randomInt()]).join('');
})();


//  Для получения текущего времени в миллисекундах, 
// преобразует его в строку с основанием 36 и затем добавляет случайное число, 
// также преобразованное в строку с основанием 36
export function uid(): string {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, '');
}

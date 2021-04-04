export async  const poll = (fn, validate, interval = 2500) => {
    const resolver = async (resolve, reject) => {
        // отлов ошибок, выбрасываемых функцией fn
        try {
            const result = await fn(); // fn необязательно должна возвращть промис
            // вызов валидатора для проверки полученного результата
            const valid = validate(result);

            if (valid === true) {
                resolve(result);
            } else if (valid === false) {
                setTimeout(resolver, interval, resolve, reject);
            }
            // если валидатор возвращает что-то кроме true/false,
            // опрос прекращается
        } catch (e) {
            reject(e);
        }
    };

    return new Promise(resolver);
}
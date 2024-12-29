const fs = require('fs');
const filePath = process.argv[2];

if (!filePath) {
  console.error('Укажите путь к файлу как аргумент.');
  process.exit(1);
}

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка чтения файла:', err.message);
    return;
  }

  const lines = data.split('\n').length;
  console.log(`Количество строк в файле: ${lines}`);
});

// NODE JS

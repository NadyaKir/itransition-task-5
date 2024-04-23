import { faker as fakerEN } from "@faker-js/faker";
import { faker as fakerPL } from "@faker-js/faker/locale/pl";
import { faker as fakerDE } from "@faker-js/faker/locale/de";

export const generateData = (req, res) => {
  // Получаем параметры из запроса
  const { region } = req.body;

  // Генерируем данные для таблицы
  const tableData = generateTableData(region);

  // Отправляем данные обратно на фронтенд
  res.json({ tableData });
};

function getFakerInstance(region) {
  switch (region) {
    case "USA":
      return fakerEN;
    case "Poland":
      return fakerPL;
    case "Germany":
      return fakerDE;
    default:
      return fakerEN;
  }
}

export function generateTableData(region) {
  const faker = getFakerInstance(region);

  const tableData = [];
  for (let i = 0; i < 20; i++) {
    const id = faker.string.uuid();
    const fullName = faker.person.fullName();
    const address = faker.location.streetAddress();
    const phone = faker.phone.number();

    tableData.push({ id, fullName, address, phone });
  }

  return tableData;
}

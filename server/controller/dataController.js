import { faker as fakerEN } from "@faker-js/faker";
import { faker as fakerPL } from "@faker-js/faker/locale/pl";
import { faker as fakerDE } from "@faker-js/faker/locale/de";

export const generateData = (req, res) => {
  const { region, seed } = req.body;
  const tableData = generateTableData(region, seed);

  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.json({ body: tableData });
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

export function generateTableData(region, seed) {
  const faker = getFakerInstance(region);

  faker.seed(seed);

  const tableData = [];
  for (let i = 0; i < 20; i++) {
    const id = faker.string.uuid();
    const fullName = faker.person.fullName();
    const address = faker.location.streetAddress({ useFullAddress: true });
    const phone = faker.phone.number();

    tableData.push({ id, fullName, address, phone });
  }

  return tableData;
}

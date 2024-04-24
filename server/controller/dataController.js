import { faker as fakerEN } from "@faker-js/faker";
import { faker as fakerPL } from "@faker-js/faker/locale/pl";
import { faker as fakerDE } from "@faker-js/faker/locale/de";

export const generateData = (req, res) => {
  const { region, seed, errorValue } = req.body;
  if (errorValue > 1000) {
    return res
      .status(400)
      .json({ error: "Value exceeds maximum limit of 1000" });
  }
  const tableData = generateTableData(region, seed, errorValue);

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

function generateError(str, errorType, region, isPhone) {
  const strArray = str.split("");
  const index = Math.floor(Math.random() * strArray.length);

  switch (errorType) {
    case "deletion":
      strArray.splice(index, 1);
      break;
    case "insertion":
      let newChar;
      if (!isPhone) {
        if (region === "USA") {
          newChar = generateRandomCharacter("USA");
        } else if (region === "Poland") {
          newChar = generateRandomCharacter("Poland");
        } else {
          newChar = generateRandomCharacter("Germany");
        }
      } else {
        newChar = Math.floor(Math.random() * 10).toString();
      }
      strArray.splice(index, 0, newChar);
      break;
    case "transposition":
      if (index < strArray.length - 1) {
        const temp = strArray[index];
        strArray[index] = strArray[index + 1];
        strArray[index + 1] = temp;
      }
      break;
    default:
      break;
  }

  return strArray.join("");
}

function generateRandomErrorType() {
  const errorTypes = ["deletion", "insertion", "transposition"];
  const randomIndex = Math.floor(Math.random() * errorTypes.length);
  return errorTypes[randomIndex];
}

function generateRandomCharacter(region) {
  const alphabet = getAlphabetForRegion(region);
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

function getAlphabetForRegion(region) {
  switch (region) {
    case "USA":
      return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    case "Poland":
      return "aąbcćdeęfghijklłmnńoóprsśtuwyzźżAĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ";
    case "Germany":
      return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜäöüß";
    default:
      return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
}

export function generateTableData(region, seed, errorValue) {
  const faker = getFakerInstance(region);

  faker.seed(seed);

  const tableData = [];
  for (let i = 0; i < 20; i++) {
    const id = faker.string.uuid();
    let fullName = faker.person.fullName();
    let address = faker.location.streetAddress({ useFullAddress: true });
    let phone = faker.phone.number();

    // Apply errors based on errorValue
    const errorCount = Math.floor(errorValue);
    const errorProbability = errorValue - errorCount;

    for (let j = 0; j < errorCount; j++) {
      fullName = generateError(fullName, generateRandomErrorType(), region);
      address = generateError(fullName, generateRandomErrorType(), region);
      phone = generateError(phone, generateRandomErrorType(), region, true);
    }

    // Apply error with probability
    if (Math.random() < errorProbability) {
      fullName = generateError(fullName, generateRandomErrorType(), region);
      address = generateError(fullName, generateRandomErrorType(), region);
      phone = generateError(phone, generateRandomErrorType(), region, true);
    }

    tableData.push({ id, fullName, address, phone });
  }

  return tableData;
}

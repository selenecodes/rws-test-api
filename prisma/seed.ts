/* eslint-disable no-await-in-loop */
/* eslint-disable no-magic-numbers */
import { faker } from '@faker-js/faker/locale/nl';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

faker.seed(123);

console.log('Creating fake zipcodes');

async function main() {
    const data = [...Array(10_000)].map(() => ({
        postcode: parseInt(faker.address.zipCode("####"), 10),
        netnummer: faker.random.numeric(3),
        latitude: parseFloat(faker.address.latitude()),
        longitude: parseFloat(faker.address.longitude()),
        woonplaats: faker.address.cityName(),
        soort: "Adres",
        provincie: faker.address.state(),
        alternatieve_schrijfwijzen: "",
        gemeente: faker.address.cityName(),
    }));
    await prisma.zipcode.createMany({ data })
}

void main()
  .then(() => void console.log('DB seeded with test data'))
  .catch((error) => {
    console.error(error);
    throw error;
  })
  .finally(() => void prisma.$disconnect());

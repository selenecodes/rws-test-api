-- CreateEnum
CREATE TYPE "Soort" AS ENUM ('Adres', 'Postbus', 'AdresMetPostbus');

-- CreateTable
CREATE TABLE "Zipcode" (
    "id" SERIAL NOT NULL,
    "postcode" INTEGER NOT NULL,
    "netnummer" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "woonplaats" TEXT NOT NULL,
    "soort" TEXT NOT NULL,
    "provincie" TEXT NOT NULL,
    "alternatieve_schrijfwijzen" TEXT,
    "gemeente" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Zipcode_pkey" PRIMARY KEY ("id")
);

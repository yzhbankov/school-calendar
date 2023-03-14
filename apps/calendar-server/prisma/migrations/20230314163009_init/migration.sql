/*
  Warnings:

  - Added the required column `createdDate` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedDate` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL;

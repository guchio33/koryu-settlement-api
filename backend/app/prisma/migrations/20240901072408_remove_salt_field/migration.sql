/*
  Warnings:

  - You are about to drop the column `hashedPassword` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `salt` on the `User` table. All the data in the column will be lost.
  - Added the required column `Password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `hashedPassword`,
    DROP COLUMN `salt`,
    ADD COLUMN `Password` VARCHAR(191) NOT NULL;

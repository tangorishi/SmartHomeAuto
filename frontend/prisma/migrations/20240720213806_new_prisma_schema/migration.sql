-- CreateEnum
CREATE TYPE "ApplianceType" AS ENUM ('light', 'fan', 'oven', 'other');

-- CreateEnum
CREATE TYPE "ApplianceStatus" AS ENUM ('on', 'off');

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Residence" (
    "residenceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Residence_pkey" PRIMARY KEY ("residenceId")
);

-- CreateTable
CREATE TABLE "Room" (
    "roomId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "residenceId" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("roomId")
);

-- CreateTable
CREATE TABLE "Appliance" (
    "applianceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "status" "ApplianceStatus" NOT NULL,
    "attributes" JSONB,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "Appliance_pkey" PRIMARY KEY ("applianceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Residence" ADD CONSTRAINT "Residence_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_residenceId_fkey" FOREIGN KEY ("residenceId") REFERENCES "Residence"("residenceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appliance" ADD CONSTRAINT "Appliance_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;

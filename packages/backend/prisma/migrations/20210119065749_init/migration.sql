-- CreateTable
CREATE TABLE "User" (
"id" SERIAL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "balanceId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
"id" SERIAL,
    "addedById" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "memo" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Balance" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY("balanceId")REFERENCES "Balance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD FOREIGN KEY("addedById")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "gender" VARCHAR(10) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

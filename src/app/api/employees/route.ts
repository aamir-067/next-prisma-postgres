import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const getEmployees = async () => {
	const allEmployees = await prisma.employee.findMany();
	return allEmployees;
};

export async function GET(req: NextRequest) {
	try {
		const employees = await getEmployees();
		prisma.$disconnect();
		return NextResponse.json(
			{
				employees,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
	}
}

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const prisma = new PrismaClient();
	try {
		const employees = await prisma.employee.findMany();
		prisma.$disconnect();
		return NextResponse.json(
			{
				employees,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				success: false,
			},
			{ status: 403 }
		);
	}
}

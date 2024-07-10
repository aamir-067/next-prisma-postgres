import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		await prisma.$connect();
		const employees = await prisma.employee.findMany();
		await prisma.$disconnect();
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

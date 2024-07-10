import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: { employeeId: string } }
) {
	const prisma = new PrismaClient();
	try {
		const employee = await prisma.employee.findUnique({
			where: {
				id: +params.employeeId,
			},
		});
		prisma.$disconnect();
		return NextResponse.json(
			{
				success: true,
				employee,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
	}
}

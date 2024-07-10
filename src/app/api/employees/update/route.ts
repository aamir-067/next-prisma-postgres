import { Employee, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
	const employee: Employee = await req.json();

	const prisma = new PrismaClient();
	try {
		await prisma.employee.update({
			where: {
				id: employee.id,
			},
			data: {
				...employee,
			},
		});
		prisma.$disconnect();
		return NextResponse.json(
			{
				success: true,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				success: false,
			},
			{ status: 402 }
		);
	}
}

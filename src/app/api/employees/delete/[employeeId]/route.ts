import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { employeeId: string } }
) {
	const prisma = new PrismaClient();
	try {
		const employee = await prisma.employee.delete({
			where: {
				id: +params.employeeId,
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
	}
}

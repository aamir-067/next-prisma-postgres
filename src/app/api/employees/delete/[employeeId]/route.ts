import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { employeeId: string } }
) {
	try {
		const employee = await prisma.employee.delete({
			where: {
				id: +params.employeeId,
			},
		});
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

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: { employeeId: string } }
) {
	try {
		const employee = await prisma.employee.findUnique({
			where: {
				id: +params.employeeId,
			},
		});
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

import { prisma } from "@/lib/prisma";
import { Employee } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
	const employee: Employee = await req.json();

	try {
		await prisma.employee.update({
			where: {
				id: employee.id,
			},
			data: {
				...employee,
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
		return NextResponse.json(
			{
				success: false,
			},
			{ status: 402 }
		);
	}
}

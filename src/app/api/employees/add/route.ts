import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
	try {
		const { age, name, gender } = await req.json();

		await prisma.$connect();
		const employee = await prisma.employee.create({
			data: {
				name: name,
				gender: gender,
				age: age,
			},
		});
		await prisma.$disconnect();
		if (!employee.id) {
			return NextResponse.json(
				{ success: false, massage: "record insertion failed" },
				{ status: 403 }
			);
		}
		return NextResponse.json(
			{ success: true, massage: "record inserted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error while inserting the record: ", error);
		return NextResponse.json(
			{ success: false, massage: "record insertion failed" },
			{ status: 402 }
		);
	}
}

"use client";
import { Employee } from '@prisma/client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


export function Table() {

    const [employees, setEmployees] = useState<Array<Employee>>([])


    const getEmployees = async () => {
        try {
            const employees = await fetch("/api/employees");
            const data = await employees.json();
            setEmployees(data.employees);
        } catch (error) {
            alert("Something goes wrong while getting employee details");
        }
    }

    const deleteEmployee = async (employeeId: number) => {
        setEmployees([]);
        try {
            const res = await fetch(`/api/employees/delete/${employeeId}`, { method: "DELETE" });
            if (!res.ok) {
                alert("Unable to delete employee details");
            }
            await getEmployees();
        } catch (error) {
            alert("Unable to delete employee details");
        }
    }

    useEffect(() => {
        setEmployees([]);
        getEmployees();

    }, []);

    return (
        <>
            <section className="mx-auto w-full text-white max-w-[700px] px-4 py-4">
                <div className="flex flex-row items-center justify-between space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Employees</h2>
                        <p className="mt-1 text-sm text-white">
                            This is a list of all employees. You can add new employees, edit or delete existing
                            ones.
                        </p>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto">
                        <div className="inline-block min-w-full py-2 align-middle px-8">
                            <div className="overflow-hidden border border-gray-200 rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-black">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-white"
                                            >
                                                <span>Employee</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-white"
                                            >
                                                <span>Age</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-white"
                                            >
                                                Gender
                                            </th>
                                            <th scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-white"
                                            >
                                                Actions
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-black">
                                        {
                                            employees?.map((employee: Employee, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="whitespace-nowrap px-4 py-4">
                                                            <div className="flex items-center">
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-white">{employee.name}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-4 py-4">
                                                            <div className="flex items-center">
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-white">{employee.age}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-12 py-4">
                                                            <div className="text-sm text-white">{employee.gender === "M" ? "Male" : "Female"}</div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-4 flex gap-4 py-4 text-right text-sm font-medium">
                                                            <Link href={`/edit/${employee.id}`} className="text-blue-400">
                                                                Edit
                                                            </Link>
                                                            <button
                                                                onClick={() => deleteEmployee(employee.id)}
                                                                className="text-red-400">
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        {
                                            employees.length === 0 && (
                                                <tr><td colSpan={4} className='text-center'>Loading...</td></tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

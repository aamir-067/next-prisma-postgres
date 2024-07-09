import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export function Table() {
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
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-white">John Doe</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-white">30</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4">
                                                <div className="text-sm text-white">Male</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 flex gap-4 py-4 text-right text-sm font-medium">
                                                <Link href={`/edit/1`} className="text-blue-400">
                                                    Edit
                                                </Link>
                                                <button
                                                    // onClick={() => deleteRecord(person.email)}
                                                    className="text-red-400">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
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

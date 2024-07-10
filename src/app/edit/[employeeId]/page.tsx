"use client";
import NavBar from '@/components/NavBar'
import { Employee } from '@prisma/client';
import React, { useEffect, useState } from 'react'

const Edit = ({ params }: { params: { employeeId: number } }) => {
    const [loading, setLoading] = useState(true);

    const [employeeData, setEmployeeData] = useState<Employee>({
        name: "",
        age: 0,
        gender: "M",
        id: params.employeeId
    });



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | undefined) => {
        e?.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/employees/update", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...employeeData
                })
            });

            const data = await res.json();
            if (!data.success) {
                alert("Something went wrong while updating the employee details");

            } else {
                alert("Employee details updated successfully");

            }
        } catch (error) {
            alert("Something went wrong while updating the employee details");
            console.log(error);


        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const getEmployeeDetails = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/employees/${params.employeeId}`);
                if (!res.ok) {
                    alert("Something went wrong while getting user details");
                    return;
                }
                const data = await res.json();
                if (res.ok) {
                    setEmployeeData(data.employee);
                } else {
                    alert("Something went wrong while getting user details");
                }
                setLoading(false);
            } catch (error) {
                alert("Something went wrong while getting user details");
                console.log(error);
            }
        }

        getEmployeeDetails();
    }, [params.employeeId]);

    return (
        <section className="w-full h-full bg-black px-10">
            <NavBar />
            <div className="flex items-center justify-center bg-black px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto w-full max-w-sm">
                    <h2 className="text-2xl font-bold leading-tight text-white">Edit Employee Details</h2>
                    {loading ? (
                        <div className='w-full mt-20 flex items-center justify-center'>
                            <p className='text-center'>Loading...</p>
                        </div>
                    ) : <form onSubmit={handleSubmit} className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-base font-medium text-white">
                                    {' '}
                                    Full Name{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={employeeData.name}
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        onChange={(e) => setEmployeeData((prev) => { return { ...prev, name: e.target.value } })}
                                        placeholder="Full Name"
                                        id="name"
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-base font-medium text-white">
                                    {' '}
                                    Age{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={employeeData.age}
                                        onChange={(e) => setEmployeeData((prev) => { return { ...prev, age: parseInt(e.target.value) } })}
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="number"
                                        placeholder="Age"
                                        id="age"
                                    ></input>
                                </div>
                            </div>
                            <div className=''>
                                <div className="mt-2 flex w-5/12 justify-between">
                                    <div className='flex gap-x-2'>
                                        <label className='text-base font-medium text-white' htmlFor="male">Male</label>
                                        <input
                                            checked={employeeData.gender === "M"}
                                            onChange={(e) => setEmployeeData((prev) => { return { ...prev, gender: e.target.checked ? "M" : "F" } })}
                                            type="radio" name="gender" id="male" />
                                    </div>
                                    <div className='flex gap-x-2'>
                                        <label className='text-base font-medium text-white' htmlFor="female">Female</label>
                                        <input
                                            checked={employeeData.gender === "F"}
                                            onChange={(e) => setEmployeeData((prev) => { return { ...prev, gender: e.target.checked ? "F" : "M" } })}
                                            type="radio" name="gender" id="female" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={() => handleSubmit(undefined)}
                                    className="inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-white/80"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </form >}
                </div >
            </div >
        </section >
    )
}

export default Edit
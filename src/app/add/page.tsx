"use client";
import React, { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'

export default function Add() {

    const [employeeData, setEmployeeData] = useState({
        name: "",
        age: 0,
        gender: "M"
    });


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | null = null) => {
        event && event.preventDefault();
        try {
            const response = await fetch('/api/employees/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: employeeData.name,
                    gender: employeeData.gender,
                    age: employeeData.age
                })
            });

            if (response.ok) {
                alert("Employee added successfully");
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong while adding new employee");
        }
    }

    return (
        <section className="w-full h-full bg-black px-10">
            <NavBar />
            <div className="flex items-center justify-center bg-black px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto w-full max-w-sm">
                    <h2 className="text-2xl font-bold leading-tight text-white">Add New Employee</h2>
                    <form onSubmit={handleSubmit} className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-base font-medium text-white">
                                    {' '}
                                    Full Name{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        value={employeeData.name}
                                        onChange={(e) => { setEmployeeData((prev) => { return { ...prev, name: e.target.value } }) }}
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
                                        onChange={(e) => { setEmployeeData((prev) => { return { ...prev, age: +e.target.value } }) }}
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
                                        <input type="radio" onChange={(e) => setEmployeeData((prev) => { return { ...prev, gender: e.target.checked ? "M" : "F" } })} name="gender" id="male" checked={employeeData.gender === "M"} />
                                    </div>
                                    <div className='flex gap-x-2'>
                                        <label className='text-base font-medium text-white' htmlFor="female">Female</label>
                                        <input type="radio" onChange={(e) => setEmployeeData((prev) => { return { ...prev, gender: e.target.checked ? "F" : "M" } })} name="gender" checked={employeeData.gender === "F"} id="female" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleSubmit(null)}
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-white/80"
                                >
                                    Add Employee
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

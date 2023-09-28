'use client';
import React from "react";

export default function Presentation({ imageSrc, name, carrer }) {
    return (
    <main className="">
       
    <div className=" inline-block p-6 border-2 border-black">
        <h1 className="mb-1 font-semibold tracking-tight text-gray-900">Sebastian Burgos Alanís</h1>
        <p className="mb-1 font-normal text-gray-700">Ingeniero en Tecnologías Computacionales</p>
        <a href="https://tec.mx/es" className="mb-1 font-sans hover:text-blue-600 hover:font-bold ease-in-out">Tecnológico de Monterrey</a>
        <a href="curriculum" className="flex flex-row-reverse">
        <span className=" px-3 py-2 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
         +
        </span>
        </a>
    </div>

    </main>
    );

}
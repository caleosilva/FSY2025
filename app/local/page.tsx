"use client";

import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Mapa() {
    return (
        <div className="flex flex-col h-screen overflow-y-auto pb-20 bg-gray-100 space-y-4">

            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-blue-600 text-white shadow-md rounded-b-2xl">
                <div>
                    <h1 className="text-2xl font-bold tracking-wide">Mapa</h1>
                    <h2 className="text-sm opacity-90">
                        Conheça o acampamento Maanaim.
                    </h2>
                </div>
            </div>

            <div className="p-4">
                <TransformWrapper>
                    <TransformComponent>
                        <Image
                            src="/Maanaim.jpg"
                            alt="Mapa do Local"
                            width={1000}
                            height={600}
                            className="w-full h-full object-contain rounded-xl shadow-xl border-2 border-gray-200"
                        />
                    </TransformComponent>
                </TransformWrapper>

                {/* Descrição abaixo da imagem */}
                <p className="text-gray-800 text-base text-center px-6 ">
                    Dica: faça <span className="font-semibold text-blue-600">movimentos de pinça</span> com dois
                    dedos para dar zoom e explorar os detalhes do mapa.
                </p>
            </div>

        </div>
    );
}

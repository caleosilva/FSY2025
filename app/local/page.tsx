"use client";

import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ConsultorDialog from "@/components/formatedComponents/CASDialog"

export default function Mapa() {
    return (
        <div className="flex flex-col h-screen overflow-y-auto pb-20 bg-gray-100 space-y-4">

            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-blue-600 text-white shadow-md rounded-b-2xl">
                <div>
                    <h1 className="text-2xl font-bold tracking-wide">Mapa</h1>
                    <h2 className="text-sm opacity-90">
                        Conheça o acampamento Maanaim e veja onde estão as companhias.
                    </h2>
                </div>
            </div>

            <ConsultorDialog />

            <div className="p-4 flex flex-col items-center justify-center">
                <TransformWrapper>
                    <TransformComponent>
                        <Image
                            src="/MaanaimEcompanhias.png"
                            alt="Mapa do Local"
                            width={700}
                            height={900}
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-xl border-2 border-gray-200"
                        />
                    </TransformComponent>
                </TransformWrapper>

                {/* Descrição abaixo da imagem */}
                <p className="text-gray-800 text-base text-center px-6 mt-4">
                    Dica: faça <span className="font-semibold text-blue-600">movimentos de pinça</span> com dois
                    dedos para dar zoom e explorar os detalhes do mapa.
                </p>
            </div>


        </div>
    );
}

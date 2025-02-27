"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CAGroup } from "@/types/activity";
import { Button } from "@/components/ui/button"
import { MapPinCheckInside } from "lucide-react";
import consultoresData from "@/data/consultores.json"; // Importando JSON


export default function ConsultorDialog() {
    const [open, setOpen] = useState(false);

    const caGroups: CAGroup[] = consultoresData;

    return (
        <div className="flex justify-center">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        <MapPinCheckInside /> Informações das companhias
                    </Button>

                </DialogTrigger>

                {/* Defini altura máxima e scroll no Dialog */}
                <DialogContent className="w-11/12 sm:max-w-md max-h-[70vh] overflow-y-auto rounded-lg">
                    <DialogHeader>
                        <DialogTitle className="text-center text-lg font-semibold">Localização das Companhias</DialogTitle>
                    </DialogHeader>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Selecione seus CA&rsquo;s para saber a cor do seu grupo, número e escritura da companhia.
                        </p>

                    </div>

                    {/* Accordion com scroll se necessário */}
                    <Accordion type="single" collapsible className="w-full">
                        {caGroups.map((group, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="rounded-lg">

                                {/* Botão do Accordion */}
                                <AccordionTrigger className="px-4 py-3 font-medium flex justify-between items-center rounded-lg">
                                    <span className="text-gray-800">{group.cas.join(" & ")}</span>
                                </AccordionTrigger>

                                {/* Conteúdo do Accordion */}
                                <AccordionContent className="p-4 text-gray-800 rounded-lg space-y-4" style={{ backgroundColor: group.cor }}>
                                    {group.consultores.map((consultor) => (
                                        <div key={consultor.id} className="flex flex-col px-4 py-3 bg-white rounded-lg shadow-md">
                                            <span className="font-bold text-gray-800 text-center">Companhia {consultor.id}</span>
                                            <span className="text-gray-600 text-center">{consultor.dupla.join(" & ")}</span>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </DialogContent>
            </Dialog>
        </div>

    );
}

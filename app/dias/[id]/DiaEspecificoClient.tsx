"use client";

import DialogActivity from "@/components/formatedComponents/DialogActivity";
import { useActivities } from "@/hooks/useActivities";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface DaysResponse {
  dia1: string[];
  dia2: string[];
  dia3: string[];
  dia4: string[];
  dia5: string[];
}

type DayKeys = keyof DaysResponse;

export default function DiaEspecificoClient({ params }: { params: { id: string } }) {
  const router = useRouter();

  const dayKey: DayKeys = (`dia${params.id}` as DayKeys);
  const activities = useActivities(dayKey);

  useEffect(() => {
    const handleBackButton = () => {
      router.push("/dias"); // Redireciona para /dias ao voltar
    };

    window.history.pushState(null, "", window.location.href); // Empurra um novo estado para evitar o fechamento
    window.addEventListener("popstate", handleBackButton); // Captura o evento de voltar

    return () => {
      window.removeEventListener("popstate", handleBackButton); // Remove o evento ao desmontar
    };
  }, [router]);

  return (
    <div className="flex flex-col h-screen overflow-y-auto pb-20 bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-6 bg-blue-600 text-white shadow-md rounded-b-2xl">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">{`Dia ${params.id}`}</h1>
          <h2 className="text-sm opacity-90">
            Clique nas atividades para obter mais informações.
          </h2>
        </div>
      </div>

      <div className="flex flex-col flex-1 h-auto p-4 space-y-4">
        {activities.map((activity, index) => (
          <DialogActivity
            key={index}
            activity={activity}
            additionalClass="rounded-lg"
            backgroundColor="#ffffff"
            day={dayKey}
          />
        ))}
      </div>
    </div>
  );
}
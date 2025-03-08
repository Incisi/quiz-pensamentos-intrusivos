import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toZonedTime } from 'date-fns-tz';
const timeZone = 'America/Sao_Paulo';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
    try {
        const { data, error } = await supabase.from("results").select("*");

        if (error) throw error;

        return NextResponse.json(data);
    } catch (error) {
        console.error("Erro ao buscar resultados:", error);
        return NextResponse.json(
            { error: "Erro ao buscar resultados do banco de dados." },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const { name, score } = await req.json();

        const currentDateInBrazil = toZonedTime(new Date(), timeZone);
        const currentDate = format(currentDateInBrazil, "dd-MM-yyyy - HH:mm", { locale: ptBR });

        const { error } = await supabase.from("results").insert([{ name, score, date: currentDate }]);

        if (error) throw error;

        return NextResponse.json({ message: "Resultado salvo com sucesso!" }, { status: 201 });
    } catch (error) {
        console.error("Erro ao salvar resultado:", error);
        return NextResponse.json(
            { error: "Erro ao salvar resultado no banco de dados." },
            { status: 500 }
        );
    }
}

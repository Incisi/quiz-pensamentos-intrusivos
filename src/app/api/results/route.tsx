import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const results = await prisma.result.findMany();
        return NextResponse.json(results);
    } catch (error) {
        console.error("Erro ao ler os resultados do banco:", error);
        return NextResponse.json({ error: "Não foi possível carregar os resultados." }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, score } = body;

        if (!name || typeof score !== "number") {
            return NextResponse.json({ error: "Nome e pontuação são obrigatórios." }, { status: 400 });
        }

        const result = await prisma.result.create({
            data: {
                name,
                score,
                date: new Date(),
            },
        });

        return NextResponse.json({ message: "Resultado salvo com sucesso!", result });
    } catch (error) {
        console.error("Erro ao salvar o resultado:", error);
        return NextResponse.json({ error: "Erro ao salvar o resultado." }, { status: 500 });
    }
}
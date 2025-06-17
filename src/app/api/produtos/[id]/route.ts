import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json();

  const atualizado = await prisma.produto.update({
    where: { id: params.id },
    data,
  });

  return NextResponse.json(atualizado);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await prisma.produto.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ message: "Produto removido" });
}

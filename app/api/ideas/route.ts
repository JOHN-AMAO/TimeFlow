import connectToDb from "@/lib/mongodb";
import IdeaModel from "@/models/ideas";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, description } = await request.json();
  await connectToDb();
  await IdeaModel.create({
    title,
    description,
  });
  return NextResponse.json({ message: "Idea Created" }, { status: 201 });
}

export async function GET() {
  try {
    await connectToDb();
    const data = await IdeaModel.find();
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching ideas:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToDb();
  await IdeaModel.findByIdAndDelete(id);

  return NextResponse.json(
    { message: "Idea deleted succesfully" },
    { status: 200 }
  );
}

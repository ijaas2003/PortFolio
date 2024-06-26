import connect from "@/lib/db";
import Visited from "@/lib/models/visiters";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { visiter } = body;
  if (!visiter) {
    return new NextResponse(
      JSON.stringify({
        error: "Please enter the company name",
      }),
      { status: 422 }
    );
  }
  await connect();
  const newVisiter = new Visited({
    visiter,
  });
  await newVisiter.save();
  return new NextResponse(
    JSON.stringify({
      message: visiter,
    }),
    { status: 200 }
  );
};

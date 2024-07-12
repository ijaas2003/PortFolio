import connect from "@/lib/db";
import Visited from "@/lib/models/visiters";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const GET = async (req: Request) => {
  await connect();
  
  const ViewData = await Visited.find({});
  console.log(ViewData);
  if (!ViewData) {
    return new NextResponse(
      JSON.stringify({
        message: "No data found",
      })
    );
  }
  return new NextResponse(
    JSON.stringify({
      message: "Datas present in DB",
      Data: ViewData,
    }),
    { status: 200 }
  );
};

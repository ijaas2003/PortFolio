import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { adminName, adminPass } = await req.json();
  if (!adminName || !adminPass) {
    return new NextResponse(
      JSON.stringify({
        message: "Name or password not found",
      }),
      { status: 424 }
    );
  }
  if (adminName != "ijaas" || adminPass != "solomafiaOP@1") {
    return new NextResponse(
      JSON.stringify({
        message: "Invalid Email or password",
      }),
      { status: 424 }
    );
  }
  return new NextResponse(
    JSON.stringify({
      message: "Data recived Successfully login",
      allowed: true,
    }),
    { status: 200 }
  );
};

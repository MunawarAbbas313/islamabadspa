import { NextResponse } from "next/server";

export async function GET() {
  const whatsappUrl =
    "https://wa.me/923183526306?text=" +
    encodeURIComponent(
      "Hi! I would like to book an appointment at Belvie Spa and Massage Center (Maqbool Market, F-7/4, Islamabad)."
    );

  return NextResponse.redirect(whatsappUrl, 307);
}

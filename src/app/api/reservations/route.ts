import { NextRequest, NextResponse } from "next/server";

type ReservationPayload = {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
};

function isValidPayload(data: Partial<ReservationPayload>): data is ReservationPayload {
  return Boolean(
    data.name?.trim() &&
      data.phone?.trim() &&
      data.guests?.trim() &&
      data.date?.trim() &&
      data.time?.trim()
  );
}

export async function POST(request: NextRequest) {
  let body: Partial<ReservationPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo de solicitud inválido." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Faltan datos requeridos para la reserva." },
      { status: 422 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Reserva recibida. Te contactaremos para confirmarla.",
      reservation: body,
    },
    { status: 201 }
  );
}

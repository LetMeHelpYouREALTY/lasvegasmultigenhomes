import { NextRequest, NextResponse } from 'next/server';

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadPayload;

    if (!body.email && !body.phone) {
      return NextResponse.json(
        { error: 'Email or phone is required' },
        { status: 400 },
      );
    }

    // FUB integration: wire to lib/fub/client when env vars are configured.
    console.info('[lead]', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      source: body.source ?? 'lasvegasmultigenhomes.com',
      at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

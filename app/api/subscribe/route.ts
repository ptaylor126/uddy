import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // For now, just log the subscriber
    // In production, this would be stored in Sanity or another database
    console.log("New newsletter subscriber:", email);

    // You can add Sanity integration here later:
    // await sanityClient.create({
    //   _type: 'subscriber',
    //   email,
    //   subscribedAt: new Date().toISOString(),
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}

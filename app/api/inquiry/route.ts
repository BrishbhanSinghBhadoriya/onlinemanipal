import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

console.log("ROUTE LOADED: app/api/inquiry/route.ts");

export async function POST(req: Request) {
    console.log("API: Inquiry POST request received");
    try {
        const body = await req.json();
        console.log("API: Body received:", JSON.stringify(body));
        await dbConnect();
        console.log("API: Database connected");
        const inquiry = await Inquiry.create(body);
        console.log("API: Inquiry created successfully:", inquiry._id);
        return NextResponse.json({ success: true, data: inquiry }, { status: 201 });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error("API: Inquiry Submission Error:", message);
        return NextResponse.json({ success: false, error: message }, { status: 400 });
    }
}

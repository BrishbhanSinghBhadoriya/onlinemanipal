import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("API: Enquiry received:", JSON.stringify(body));

    const name = (typeof body?.name === "string" ? body.name : (body?.fullName || "")).trim();
    const email = (typeof body?.email === "string" ? body.email : "").trim().toLowerCase();
    const phone = (typeof body?.phone === "string" ? body.phone : (body?.mobile || "")).trim();
    const program = (typeof body?.program === "string" ? body.program : (body?.course || "")).trim();
    const message = (typeof body?.message === "string" ? body.message : (body?.qualification || "")).trim();
    const state = (typeof body?.state === "string" ? body.state : "").trim();

    
    const incomingSource = (typeof body?.source === "string" ? body.source : "").trim();
    const source = incomingSource || req.headers.get("referer") || "";
    const campaign = (typeof body?.campaign === "string" ? body.campaign : "").trim();
    const university = (typeof body?.university === "string" ? body.university : "Manipal University").trim();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    let cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length === 12 && cleanPhone.startsWith("91")) {
      cleanPhone = cleanPhone.slice(2);
    }
    if (cleanPhone.startsWith("0")) {
      cleanPhone = cleanPhone.slice(1);
    }
    if (cleanPhone.length !== 10) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit phone number." },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const enquiries = await getCollection("enquiries");
    const doc = {
      name,
      email,
      phone: cleanPhone,
      program: program || null,
      message: message || null,
      state: state || null,
      source: source || null,       
      campaign: campaign || null,   
      university: university,       
      createdAt: new Date(),
    };

    const result = await enquiries.insertOne(doc);
    console.log("API: Lead saved to MongoDB:", result.insertedId);

    // Send to CRM
    const CRM_ENDPOINT = process.env.API_ENDPOINT;
    if (CRM_ENDPOINT) {
      try {
        const crmResponse = await fetch(CRM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email: email.toLowerCase(),
            phone: cleanPhone,
            program: program || "",
            state: state || null,
            source: source || null,       
            campaign: campaign || null,   
            university: university,       
          }),
        });

        if (!crmResponse.ok) {
          const errorData = await crmResponse.json().catch(() => null);
          console.error("CRM API Error:", {
            status: crmResponse.status,
            errorData,
          });
        } else {
          console.log("API: Lead successfully sent to CRM ✅");
        }
      } catch (crmErr) {
        console.error("Failed to send lead to CRM:", crmErr);
      }
    }

    return NextResponse.json({ ok: true, id: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

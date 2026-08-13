import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      phone,
      service,
      budget,
      requirements,
      message,
    } = body;

    const normalizedRequirements =
      (requirements || message || "").toString().trim();

    // Validation
    if (!name || !email || !phone || !service || !normalizedRequirements) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, phone, service, and requirements are required.",
        },
        { status: 400 }
      );
    }

    // Google Form endpoint
    const googleFormUrl =
      `https://docs.google.com/forms/d/e/${process.env.GOOGLE_FORM_ID}/formResponse`;

    const formData = new URLSearchParams();

    // Full name
    formData.append(
      process.env.GOOGLE_FORM_NAME_ENTRY!,
      name
    );

    // Email
    formData.append(
      process.env.GOOGLE_FORM_EMAIL_ENTRY!,
      email
    );

    // Company
    formData.append(
      process.env.GOOGLE_FORM_COMPANY_ENTRY!,
      company || ""
    );

    // Phone
    if (process.env.GOOGLE_FORM_PHONE_ENTRY && phone) {
      formData.append(
        process.env.GOOGLE_FORM_PHONE_ENTRY,
        phone
      );
    }

    // Service
    if (process.env.GOOGLE_FORM_SERVICE_ENTRY && service) {
      formData.append(
        process.env.GOOGLE_FORM_SERVICE_ENTRY,
        service
      );
    }

    // Budget
    if (process.env.GOOGLE_FORM_BUDGET_ENTRY && budget) {
      formData.append(
        process.env.GOOGLE_FORM_BUDGET_ENTRY,
        budget
      );
    }

    // Requirements
    if (process.env.GOOGLE_FORM_REQUIREMENTS_ENTRY && normalizedRequirements) {
      formData.append(
        process.env.GOOGLE_FORM_REQUIREMENTS_ENTRY,
        normalizedRequirements
      );
    }

    // Message fallback for older form mappings
    if (process.env.GOOGLE_FORM_MESSAGE_ENTRY && normalizedRequirements) {
      formData.append(
        process.env.GOOGLE_FORM_MESSAGE_ENTRY,
        normalizedRequirements
      );
    }

    // Submit to Google Forms
    const googleResponse = await fetch(
      googleFormUrl,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );

    if (!googleResponse.ok) {
      console.error(
        "Google Form error:",
        googleResponse.status
      );

      return NextResponse.json(
        {
          success: false,
          error: "Failed to submit contact form.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message submitted successfully.",
    });

  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
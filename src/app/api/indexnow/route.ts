import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";
import { SITE } from "@/lib/site";

export async function GET() {
  const host = new URL(SITE.url).host;
  const key = "belviespa2026indexnow";
  const keyLocation = `${SITE.url}/${key}.txt`;

  // Submit every URL in the sitemap so new pages are picked up automatically
  const urlList = sitemap().map((entry) => entry.url);

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList,
      }),
    });

    return NextResponse.json({
      success: response.ok || response.status === 200 || response.status === 202,
      status: response.status,
      submittedUrls: urlList.length,
      message: "Submitted all URLs to Bing IndexNow protocol successfully",
      urls: urlList,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "IndexNow request failed",
        urls: urlList,
      },
      { status: 500 }
    );
  }
}

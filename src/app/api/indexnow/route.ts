import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/blog-data";

export async function GET() {
  const host = "belviespa.com";
  const key = "belviespa2026indexnow";
  const keyLocation = `https://${host}/${key}.txt`;

  const staticUrls = [
    `https://${host}/`,
    `https://${host}/massage-center-islamabad`,
    `https://${host}/spa-f-7-islamabad`,
    `https://${host}/massage-f-7-islamabad`,
    `https://${host}/massage-center-f-7-islamabad`,
    `https://${host}/full-body-massage`,
    `https://${host}/body-massage`,
    `https://${host}/spa-services`,
    `https://${host}/services`,
    `https://${host}/location`,
    `https://${host}/why-choose-us`,
    `https://${host}/contact`,
    `https://${host}/whatsapp`,
    `https://${host}/about`,
    `https://${host}/blog`,
  ];

  const blogUrls = blogPosts.map((p) => `https://${host}/blog/${p.slug}`);
  const urlList = [...staticUrls, ...blogUrls];

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

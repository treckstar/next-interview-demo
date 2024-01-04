/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "InterviewIQ - Building blocks for your Next.js project";
export const contentType = "image/png";

export default async function OG() {
  // Font
  const interSemiBold = await fetch(
    new URL("./fonts/Recursive-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#373433"
        }}
      >
        <img
          src="https://interviewiq.sites.treckstar.net/logo.png"
          alt="InterviewIQ Logo"
          tw="w-30 h-30"
        />
        <h2
          style={{
            fontSize: "40px",
            background: "white",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}>
          InterviewIQ
        </h2>
        <h1
          style={{
            fontSize: "100px",
            background: "#D7E476",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          Demo for treckstar.net
        </h1>
        <img
          src="https://interviewiq.sites.treckstar.net/text.png"
          alt="InterviewIQ Logo"
          tw="w-30 h-30"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Recursive",
          data: interSemiBold,
        },
      ],
    }
  );
}

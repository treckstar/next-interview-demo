/* eslint-disable @next/next/no-img-element */
import "../styles/globals.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "InterviewIQ - AI-Powered Mock Interviews",
  openGraph: {
    title: "InterviewIQ - AI-Powered Mock Interviews",
    description:
      "InterviewIQ is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: [
      {
        url: "https://interviewiq.sites.treckstar.net/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InterviewIQ - AI-Powered Mock Interviews",
    description:
      "InterviewIQ is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://interviewiq.sites.treckstar.net/opengraph-image"],
    creator: "@treckstar",
  },
  metadataBase: new URL("https://interviewiq.sites.treckstar.net"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        <header>
          <div className="flex justify-between items-center px-4 py-4">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="/text.png"
                  alt="InterviewIQ Logo"
                  width="201"
                  height="46" />
              </a>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

// Exporting this way to avoid NextJs 14 type error
export { viewport };

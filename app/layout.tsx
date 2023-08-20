import Navbar from "../components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "Eshan Portfolio",
  description: "Eshan portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

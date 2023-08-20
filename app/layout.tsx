import axios from "axios";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "Eshan Portfolio",
  description: "Eshan portfolio website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await axios.get(
    "https://portfolio-server-3shaan.vercel.app//project"
  );
  const frontEnd = await axios.get(
    "https://portfolio-server-3shaan.vercel.app/skills?skill=front-end"
  );

  console.log(data);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

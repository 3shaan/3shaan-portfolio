
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import TsParticles from "../components/ParticleJs/TsParticle";

export const metadata = {
  title: "Eshan Portfolio",
  description: "Eshan portfolio website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ParticleBackground/> */}
        <TsParticles/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

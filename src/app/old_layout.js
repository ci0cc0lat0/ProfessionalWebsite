import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <div className="nav_header" id="ANTDOCS">
            <h1>[ANTDOCS]</h1>
          </div>
          

          <div className="nav_header">
            <h1>About</h1>
          </div>

          <div className="nav_header">
            <h1>Projects</h1>
          </div>

          <div className="nav_header">
            <h1>Contact</h1>
          </div>

        </div>

        
        {children}
        </body>
    </html>
  );
}
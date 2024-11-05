"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

function Footer() {
  const [time, setTime] = useState(new Date());
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      now.setHours(now.getUTCHours() + 10); // Convert to AEST (UTC+10)
      setTime(now);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer
      className={`py-8 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:text-left">
        {/* Column 1: Company Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold">Digiwyse Solutions</h2>
          <p>Site by Digiwyse</p>
        </div>

        {/* Column 2: Time and Address */}
        <div>
          <p>
            {time.toLocaleTimeString("en-AU", {
              timeZone: "Australia/Sydney",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>
          <p>
            Innovation Campus, iAccelerate (Bld 239, Suite 9 Squires Way, North
            Wollongong NSW 2500
          </p>
        </div>

        {/* Column 3: Legal Links */}
        <div className="space-y-4">
          {" "}
          {/* Increased spacing */}
          <Link href="/legal" className="hover:underline">
            LEGAL
          </Link>
          <br />
          <Link href="/disclaimer" className="hover:underline">
            DISCLAIMER
          </Link>
          <p>All rights reserved by Digiwyse</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

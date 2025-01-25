"use client";

import Link from "next/link";
import navStyles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={navStyles.mainNav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/games">Games</Link>
        </li>
        <li>
          <Link href="/officers">Officers</Link>
        </li>
      </ul>
      <ul className={navStyles.logo}>
        <li>LOGO</li>
      </ul>
    </nav>
  );
}

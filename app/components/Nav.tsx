"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.scss";
import {getLocalizedUrl} from "@/app/utils/i18n";

export const Nav = ({ locale }: { locale: string }) => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href={getLocalizedUrl('/', locale)}
      >
        Home
      </Link>
        <Link
            className={`${styles.link} ${pathname === `/${locale}/login` ? styles.active : ""}`}
            href={getLocalizedUrl('/login', locale)}
        >
            Login
        </Link>
      <Link
        className={`${styles.link} ${
          pathname === `/${locale}/verify` ? styles.active : ""
        }`}
        href={getLocalizedUrl('/verify', locale)}
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === `/${locale}/quotes` ? styles.active : ""
        }`}
        href={getLocalizedUrl("/quotes", locale)}
      >
        Quotes
      </Link>
    </nav>
  );
};

import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "../StoreProvider";
import { Nav } from "../components/Nav";

import {i18n, LocaleType} from '@/configs/i18n';

import styles from "../styles/layout.module.scss";
import ToastContainerComponent from "@/app/components/toastContainer/ToastContainer";
import {ToastProvider} from "@/contexts/ToastContext";
import "../styles/globals.scss";
import LanguageSwitcher from "@/app/components/LanguageSwitcher/LanguageSwitcher";
import {Footer} from "@/app/components/Footer/Footer";

interface Props {
  readonly children: ReactNode;
  auth: ReactNode;
  readonly params: {
    lang: LocaleType
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Layout({ children, auth, params }: Props) {
  const { lang} = params;
  const direction = i18n.langDirection[lang];

  return (
    <StoreProvider>
        <html lang={lang} dir={direction}>
        <body>
        <ToastProvider>
          <ToastContainerComponent/>

          <section className={styles.container}>
            <Nav locale={params.lang}/>
            <header className={styles.header}>
              <div>&nbsp;</div>

              <Image
                  src="/logo.svg"
                  className={styles.logo}
                  alt="logo"
                  width={100}
                  height={100}
              />

              <div style={{ width: 0 }}>
                <LanguageSwitcher />
              </div>

            </header>

            <main className={styles.main}>
              {children}
              {auth}
            </main>

            <Footer/>
          </section>
        </ToastProvider>
        </body>
        </html>

    </StoreProvider>
  );
}

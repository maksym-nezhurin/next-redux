"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {AvailableLocales, type Locale, LocaleKeys, LocaleType} from "@/configs/i18n";

export default function LocaleSwitcher() {
    const pathName = usePathname();
    const redirectedPathName = (locale: Locale) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <div style={{ float: 'right', padding: '1rem' }}>
            <p>Locale switcher:</p>
            <ul>
                {Object.keys(AvailableLocales).map((key) => {
                    const locale = AvailableLocales[key as LocaleKeys];

                    return (
                        <li key={locale}>
                            <Link href={redirectedPathName(locale)}>{key}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
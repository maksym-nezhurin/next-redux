import type {Metadata} from "next";
import {Counter} from "../components/counter/Counter";
import {TestComponent} from "@/app/components/TestComponent/TestComponent";
import {getDictionary} from "@/app/utils/getDictionary";
import {i18n, LocaleType} from "@/configs/i18n";
import LanguageSwitcher from "@/app/components/LanguageSwitcher/LanguageSwitcher";

export default async function IndexPage({params: {lang}}: { params: { lang: LocaleType } }) {
    if (!i18n.locales.includes(lang)) {
        return <div>Buy</div>
    }
    const dict = await getDictionary(lang) // en

    return <>
        <h2>{dict.welcome}</h2>
        <LanguageSwitcher/>
        <TestComponent/>

        <Counter/>
    </>;
}

export const metadata: Metadata = {
    title: "Localized Redux Toolkit with scss",
};

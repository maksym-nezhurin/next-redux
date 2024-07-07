import {getDictionary} from "@/app/utils/getDictionary";
import {LocaleType} from "@/configs/i18n";

export default async function VerifyPage({params: {lang}}: { params: { lang: LocaleType } }) {
    const dict = await getDictionary(lang);
    return (
        <>
            <h2>{dict.pages.verify.title}</h2>

            <p>
                {dict.pages.verify.description}
            </p>
        </>
    );
}

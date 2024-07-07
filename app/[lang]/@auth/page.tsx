import Link from "next/link";
import {getLocalizedUrl} from "@/app/utils/i18n";
import {LocaleType} from "@/configs/i18n";

export default async function AuthPage({params: {lang}}: { params: { lang: LocaleType } }) {
    return <div>
        <h4>Auth page</h4>
        <div>
            <Link href={getLocalizedUrl('/login', lang)}>Open login modal</Link>
            <Link href={getLocalizedUrl('/signup', lang)}>Open register modal</Link>
        </div>
    </div>
}
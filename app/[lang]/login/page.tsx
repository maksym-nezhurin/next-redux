import {LoginForm} from "@/app/components/Login/Login";
import {getDictionary} from "@/app/utils/getDictionary";
import {LocaleType} from "@/configs/i18n";

export default async function LoginPage({ params: { lang }}: { params: { lang: LocaleType}}) {
    const dict = await getDictionary(lang);

    return (<div>
        <h2>{dict.pages.login.title}</h2>

        <p>{dict.pages.login.description}</p>

        <LoginForm />
    </div>)
}
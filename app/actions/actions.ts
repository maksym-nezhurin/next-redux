"use server";

export type State =
    | {
    status: "success" | "warning" | "error";
    data?: {};
    message: string;
}
    | null;

export async function getFullName(
    prevState: State | null,
    data: FormData,
): Promise<State> {
    // we're gonna put a delay in here to simulate some kind of data processing like persisting data
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("server action", data);

    return {
        status: "success",
        message: `Welcome, ${data.get("firstName")} ${data.get("lastName")}!`,
    };
}

export async function sendFormDataToServer(
    prevState: State | null,
    data: FormData,
): Promise<State> {
    // const response = await fetch('api/counter', {
    //     method: 'POST',
    //     body: data
    // })
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = { message: 'Welcome 2', status: 200 };
    const { message, status } = res;

    return {
        status: "success",
        message,
    };
}

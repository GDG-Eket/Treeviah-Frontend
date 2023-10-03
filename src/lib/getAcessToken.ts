import { cookies } from "next/headers";

const getAcessToken = (name: any) => {
  const cookieStore: any = cookies();

  const sessionTokenCookie = cookieStore?._parsed?.get(
    "next-auth.session-token"
  );

  if (sessionTokenCookie) {
    const sessionTokenValue = sessionTokenCookie.value;
    console.log("Session Token: issss", sessionTokenValue);
    return sessionTokenValue;
  } else {
    console.error("Session Token not found in cookies.");
  }
  // const value = `; ${cookieStore}`;
  // const parts: any = value.split(`; ${name}=`);
  // if (parts.length === 2) return parts?.pop().split(";").shift();
};

export default getAcessToken;

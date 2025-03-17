import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(() => {
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/api/uploadthing(.*)", // Certifique-se que a API do UploadThing está sendo interceptada
    "/((?!_next|favicon.ico).*)", // Intercepta todas as rotas, exceto arquivos estáticos
  ],
};

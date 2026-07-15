import { Outlet, ScrollRestoration } from "react-router";
import { Nav, Footer, WhatsAppFAB } from "../shared";
export default function Root() {
  return (
    <>
      <ScrollRestoration />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

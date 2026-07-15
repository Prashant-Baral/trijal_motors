import { Outlet, ScrollRestoration } from "react-router";
import { Nav, Footer, WhatsAppFAB } from "../shared";
import { OrganizationSchema } from "../components/SeoSchemas";
export default function Root() {
  return (
    <>
      <OrganizationSchema />
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

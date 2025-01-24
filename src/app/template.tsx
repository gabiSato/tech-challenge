import { ToastContainer } from "react-toastify";

import { UserAccountProvider } from "@/contexts/user-account-context";
import { getUserAccount } from "@/actions";

import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default async function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserAccount("joana@gmail.com");

  return (
    <UserAccountProvider userData={user}>
      <Header />

      <Container className="flex gap-24 py-24">
        <Sidebar />

        <main className="w-full">
          <div className="flex flex-col lg:flex-row gap-24 sm:gap-32 lg:gap-24">
            <Navbar />

            {children}
          </div>
        </main>
      </Container>

      <ToastContainer />
    </UserAccountProvider>
  );
}

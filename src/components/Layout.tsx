import type { PropsWithChildren } from "react";
import Header from "./Header";
import SearchHistory from "./SearchHistory";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen flex-col ">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SearchHistory />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default Layout;

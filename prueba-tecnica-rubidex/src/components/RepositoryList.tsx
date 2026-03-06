import type { PropsWithChildren } from "react";

export function RepositoryList({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
}

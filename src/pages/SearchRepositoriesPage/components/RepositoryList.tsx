import type { PropsWithChildren } from "react";

export function RepositoryList({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

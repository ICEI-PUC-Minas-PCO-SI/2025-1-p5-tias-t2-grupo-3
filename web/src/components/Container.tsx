import type { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mt-10 px-5 w-full">
        {children}
    </main>
  )
}

export default Container;
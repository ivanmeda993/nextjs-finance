import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export const UserButtonLoading = () => {
  return (
    <>
      <ClerkLoaded>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: { userButtonPopoverCard: { pointerEvents: "initial" } },
          }}
        />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="size-8 animate-spin text-slate-400" />
      </ClerkLoading>
    </>
  );
};

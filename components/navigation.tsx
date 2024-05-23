"use client";

import { usePathname, useRouter } from "next/navigation";
import { NavLink } from "@/components/nav-link";
import { useState } from "react";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { UserButtonLoading } from "@/components/user-button-loading";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isMobile = useMedia("(max-width: 1024px)", false);

  const [isOpened, setIsOpened] = useState(false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpened(false);
  };

  if (isMobile) {
    return (
      <div className=" ml-auto flex items-center gap-2">
        <Sheet open={isOpened} onOpenChange={setIsOpened}>
          <SheetTrigger
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className:
                "font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
            })}
          >
            <Menu className="size-4" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="px-2 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-y-2 pt-6">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  variant={route.href === pathname ? "secondary" : "ghost"}
                  onClick={() => onClick(route.href)}
                  className="w-full justify-start"
                >
                  {route.label}
                </Button>
              ))}
            </nav>
            <div className="px-2 flex justify-between items-center">
              <UserButtonLoading />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between w-full ml-8">
      <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
        {routes.map((route) => (
          <NavLink
            key={route.href}
            href={route.href}
            label={route.label}
            isActive={pathname === route.href}
          />
        ))}
      </nav>
      <UserButtonLoading />
    </div>
  );
};

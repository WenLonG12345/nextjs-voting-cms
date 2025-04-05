"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

import { Settings, LogOut, LoaderCircle, SquareUserRound } from "lucide-react";
import { useRouter } from "next/navigation";

export function UserDropdown() {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();

  const onSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.replace("/login");
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          {isPending ? (
            <LoaderCircle className="size-6 animate-spin" />
          ) : (
            <Avatar className="size-8">
              <AvatarImage
                src={`https://api.dicebear.com/9.x/notionists/svg?seed=${data?.user?.name}`}
                width={32}
                height={32}
                alt="Profile image"
              />
              <AvatarFallback>{data?.user?.name}</AvatarFallback>
            </Avatar>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {data?.user?.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {data?.user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <SquareUserRound
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
            <span>Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings size={16} className="opacity-60" aria-hidden="true" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onSignOut}>
          <LogOut size={16} className="opacity-60" aria-hidden="true" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

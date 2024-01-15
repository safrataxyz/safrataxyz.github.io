"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { DesktopIcon, SunIcon, CircleIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const DarkModeMenu = ({ open, setOpen }: Props) => {
  const { setTheme } = useTheme();

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for theme setting..." />
        <CommandList>
          <CommandGroup heading="Theme selection">
            <CommandItem
              onSelect={async () => {
                setTheme("system");
                // setOpen(false);
              }}
            >
              <DesktopIcon className="mr-2 h-2 w-2" />
              <span>System settings</span>
            </CommandItem>
            <CommandItem
              onSelect={async () => {
                setTheme("dark");
                // setOpen(false);
              }}
            >
              {" "}
              <CircleIcon className="mr-2 h-2 w-2" />
              <span>Dark theme</span>
            </CommandItem>
            <CommandItem
              onSelect={async () => {
                setTheme("light");
                // setOpen(false);
              }}
            >
              {" "}
              <SunIcon className="mr-2 h-2 w-2" />
              <span>Light theme</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

"use client"

import * as React from "react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import { Button } from "./ui/button"
import { DarkModeMenu } from "./dark-mode-menu"

interface Props {
  links: { url: string; title: string }[]
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false)
  const [darkModeOpen, setDarkModeOpen] = React.useState(false)

  const openDarkModeMenu = async () => {
    setOpen(false)
    setDarkModeOpen(true)
  }

  const closeAndPrint = async () => {
    setOpen(false)
    await new Promise((resolve) => setTimeout(resolve, 300))
    window.print()
  }

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        closeAndPrint()
      }
      if (e.key === "d" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        openDarkModeMenu()
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p
        onClick={() => setOpen((open) => !open)}
        className="fixed cursor-pointer bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white dark:bg-black p-1 text-center text-sm text-muted-foreground print:hidden xl:block"
      >
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        to open the command menu
      </p>

      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 text-xl pt-[2px] right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
      >
        ⌘
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={async () => {
                closeAndPrint()
              }}
            >
              <span>Print</span>
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={async () => {
                openDarkModeMenu()
              }}
            >
              <span>Switch brightness mode</span>
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false)
                  window.open(url, "_blank")
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
      <DarkModeMenu open={darkModeOpen} setOpen={setDarkModeOpen} />
    </>
  )
}

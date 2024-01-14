"use client"

import React, { useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ChevronDownSquareIcon, ChevronLeftSquareIcon } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
export default function NavBar() {
  const currentPathName = usePathname();
  const [open, setOpen] = useState(false)

  const paths = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About us',
      path: '/about'
    },
    {
      name: 'Schedules',
      path: '/schedules'
    },
    {
      name: 'Classes',
      path: '/about'
    }
  ]
  
  return (
    <div>
      <nav className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 lg:px-[20vh] sm:px-[10vh] p-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between ">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse mr-5">
              <img src="/static/tam-logo.png" className="h-8" alt="Tam Yoga Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tâm Yoga</span>
          </Link>
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button className="w-10 h-10 p-0 rounded" onClick={() => setOpen(!open)}>
                  {open ? (
                    <ChevronDownSquareIcon className="text-white colo h-[2rem] w-[2rem] " />
                  ) : (
                    <ChevronLeftSquareIcon className="text-white h-[2rem] w-[2rem]" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] md:w-[540px] bg-white">
                <ScrollArea className="my-4 h-[calc(100vh-9rem)] pb-10">
                  <div className="flex flex-col items-center justify-center gap-10 py-2">
                    <nav className="flex flex-col items-center justify-center flex-1 space-y-4">
                      {paths.map((p, id) => {
                        return (
                            <Link
                              key={id}
                              href={p.path}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                                {
                                  "border-b-2 border-b-primary border-opacity-100 text-primary decoration-2 decoration-primary ":
                                  currentPathName === p.path,
                                }
                              )}>
                              {p.name}
                          </Link>
                        )
                      })}
                    </nav>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4  mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {paths.map((p, id) => {
                return (
                  <li key={id}>
                    <Link
                      href={p.path}
                      className={cn(
                        "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                        {
                          "border-b-2 border-b-primary border-opacity-100 text-primary decoration-2 decoration-primary ":
                          currentPathName === p.path,
                        }
                      )}>
                      {p.name}
                  </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          </div>
      </nav>
    </div>
  )
}

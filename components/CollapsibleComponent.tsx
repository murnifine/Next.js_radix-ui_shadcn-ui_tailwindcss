"use client";

import * as React from "react";
import { ChevronsUpDown, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function CollapsibleComponent() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    // <Collapsible
    //   open={isOpen}
    //   onOpenChange={setIsOpen}
    //   className="w-[350px] space-y-2"
    // >
    //   {/* <h4 className="text-sm font-semibold">
    //     @peduarte starred 3 repositories
    //   </h4> */}
    //   <CollapsibleTrigger>
    //     <Button variant="ghost" size="sm" className="p-0 w-9">
    //       Halo
    //     </Button>
    //   </CollapsibleTrigger>
    //   <CollapsibleContent>
    //     Yes. Free to use for personal and commercial projects. No attribution
    //     required.
    //   </CollapsibleContent>
    // </Collapsible>

    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between px-4 space-x-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger>
          {/* <ChevronsUpDown className="w-4 h-4" />
          <span className="sr-only">Toggle</span> */}
          {/* <Button className="p-0 w-9"> */}
          <div>
            <ChevronsUpDown className="w-4 h-4" />
            <span className="sr-only">Toggle</span>
          </div>
          {/* Hai */}
          {/* </Button> */}
          {/* <Button variant="ghost" size="sm" className="p-0 w-9">
            <ChevronsUpDown className="w-4 h-4" />
            <span className="sr-only">Toggle</span>
          </Button> */}
          {/* Change */}
        </CollapsibleTrigger>
      </div>
      <div className="px-4 py-3 font-mono text-sm border rounded-md">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="px-4 py-3 font-mono text-sm border rounded-md">
          @radix-ui/colors
        </div>
        <div className="px-4 py-3 font-mono text-sm border rounded-md">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

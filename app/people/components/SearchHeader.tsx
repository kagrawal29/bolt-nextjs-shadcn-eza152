"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Settings2, ChevronDown } from "lucide-react";

export function SearchHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="outline" className="gap-2">
          Default view <ChevronDown className="h-4 w-4" />
        </Button>
        <Button variant="outline" className="gap-2">
          Show Filters <span className="text-xs">1</span>
        </Button>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="w-[300px] pl-10"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">Save as new search</Button>
        <Button variant="outline" className="gap-2">
          Relevance <ChevronDown className="h-4 w-4" />
        </Button>
        <Button variant="outline">
          <Settings2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
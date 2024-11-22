"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Link as LinkIcon, Settings2, ChevronDown } from "lucide-react";

const companies = [
  {
    name: "Google",
    logo: "https://www.google.com/favicon.ico",
    employees: "303,000",
    links: true,
    linkedin: true,
    website: true,
  },
  {
    name: "Amazon",
    logo: "https://www.amazon.com/favicon.ico",
    employees: "722,000",
    links: true,
    linkedin: true,
    website: true,
  },
  {
    name: "LinkedIn",
    logo: "https://www.linkedin.com/favicon.ico",
    employees: "26,000",
    links: true,
    linkedin: true,
    website: true,
  },
  {
    name: "Microsoft",
    logo: "https://www.microsoft.com/favicon.ico",
    employees: "244,000",
    links: true,
    linkedin: true,
    website: true,
  },
  {
    name: "Apple",
    logo: "https://www.apple.com/favicon.ico",
    employees: "165,000",
    links: true,
    linkedin: true,
    website: true,
  },
];

export default function CompaniesPage() {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Companies</h1>
          <Button variant="outline" className="gap-2">
            Default view <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="gap-2">
            Hide Filters <span className="text-xs">1</span>
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

      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Actions</TableHead>
              <TableHead>Links</TableHead>
              <TableHead className="text-right">Number of Employees</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.name}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-8 w-8 rounded-md"
                    />
                    <span className="font-medium">{company.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Save
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {company.website && (
                      <LinkIcon className="h-4 w-4 text-muted-foreground" />
                    )}
                    {company.linkedin && (
                      <svg
                        className="h-4 w-4 text-muted-foreground"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {company.employees}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
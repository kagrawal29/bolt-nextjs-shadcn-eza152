"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Mail, Phone, MoreHorizontal, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const people = [
  {
    name: "Bill G",
    title: "Co-chair",
    company: {
      name: "Bill & Melinda Gates Foundation",
      logo: "https://logo.clearbit.com/gatesfoundation.org",
    },
    hasEmail: true,
    hasPhone: true,
  },
  {
    name: "Robert Gates",
    title: "Principal Cloud Solution Architect",
    company: {
      name: "Microsoft",
      logo: "https://logo.clearbit.com/microsoft.com",
    },
    hasEmail: true,
    hasPhone: true,
  },
  {
    name: "Jeff Weiner",
    title: "Executive Chairman",
    company: {
      name: "LinkedIn",
      logo: "https://logo.clearbit.com/linkedin.com",
    },
    hasEmail: true,
    hasPhone: true,
  },
];

export function PeopleTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">
            <Checkbox />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {people.map((person) => (
          <TableRow key={person.name}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <span className="font-medium hover:underline cursor-pointer">
                {person.name}
              </span>
            </TableCell>
            <TableCell>{person.title}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <img
                  src={person.company.logo}
                  alt={person.company.name}
                  className="h-6 w-6 rounded"
                />
                <span>{person.company.name}</span>
              </div>
            </TableCell>
            <TableCell>
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Access email
              </Button>
            </TableCell>
            <TableCell>
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Access Mobile
              </Button>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
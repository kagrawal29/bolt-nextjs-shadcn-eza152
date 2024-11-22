"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Home,
  Users,
  Building2,
  List,
  Database,
  Play,
  Mail,
  Phone,
  Calendar,
  MessageCircle,
  DollarSign,
  ClipboardList,
  Workflow,
  Settings,
  Search,
  Command,
} from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 border-r h-screen p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-6 bg-blue-600 rounded"></div>
        <span className="font-semibold">Apollo.io</span>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input className="pl-9" placeholder="Quick search" />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <kbd className="text-xs bg-muted px-1.5 py-0.5 rounded">⌘K</kbd>
        </div>
      </div>

      <div className="space-y-6 flex-1">
        <div>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Home className="h-4 w-4" />
            Home
          </Button>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-2 px-4">
            Prospect & enrich
          </div>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              People
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Building2 className="h-4 w-4" />
              Companies
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <List className="h-4 w-4" />
              Lists
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Database className="h-4 w-4" />
              Data enrichment
            </Button>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-2 px-4">
            Engage
          </div>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Play className="h-4 w-4" />
              Sequences
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Mail className="h-4 w-4" />
              Emails
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Phone className="h-4 w-4" />
              Calls
            </Button>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-2 px-4">
            Win & close
          </div>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Calendar className="h-4 w-4" />
              Meetings
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <MessageCircle className="h-4 w-4" />
              Conversations
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <DollarSign className="h-4 w-4" />
              Deals
            </Button>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-muted-foreground mb-2 px-4">
            Tools & automations
          </div>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <ClipboardList className="h-4 w-4" />
              Tasks
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Workflow className="h-4 w-4" />
              Workflows
              <span className="ml-auto text-xs bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded">
                New
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-4">
        <Button variant="secondary" className="w-full">
          Upgrade
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
        <div className="flex items-center gap-3 px-4">
          <div className="h-8 w-8 rounded-full bg-blue-600"></div>
          <div className="flex-1">
            <div className="text-sm font-medium">Kshitiz Agrawal</div>
            <div className="text-xs text-muted-foreground">Pro Plan</div>
          </div>
        </div>
      </div>
    </div>
  );
}
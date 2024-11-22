import { SearchHeader } from "./components/SearchHeader";
import { PeopleTable } from "./components/PeopleTable";

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">People</h1>
      </div>
      
      <SearchHeader />

      <div className="rounded-lg border bg-card">
        <PeopleTable />
      </div>
    </div>
  );
}
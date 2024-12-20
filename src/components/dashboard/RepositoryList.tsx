import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Plus, Database } from "lucide-react";
import { repositories } from "@/constants";

export function RepositoryList() {
  return (
    <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8 flex flex-col h-full bg-white m-3 rounded-xl">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row ">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Repositories</h1>
          <p className="mt-1 text-sm text-gray-500">33 total repositories</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Refresh All</span>
            Refresh All
          </Button>
          <Button className="bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Repository
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <Input
          type="search"
          placeholder="Search Repositories"
          className="max-w-md"
        />
      </div>
      <div className="mt-2 divide-y divide-gray-200 scrollbar-hidden overflow-scroll overflow-y-auto flex-1">
        {repositories.map((repo) => (
          <div
            key={repo.name}
            className="flex items-center justify-between py-4"
          >
            <div className="min-w-0 flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-medium text-gray-900">
                  {repo.name}
                </h2>
                <Badge className="bg-blue-100 text-blue-700" variant="outline">
                  {repo.visibility}
                </Badge>
              </div>
              <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  {repo.language}
                </div>
                <span className="flex items-center gap-1">
                  <Database className="h-4 w-4" />
                  {repo.size}
                </span>
                <span>{repo.updatedAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

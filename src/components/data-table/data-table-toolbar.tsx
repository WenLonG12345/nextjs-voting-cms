"use client";

import type { Table } from "@tanstack/react-table";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { X } from "lucide-react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-[1px]">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        {table.getColumn("error") && (
          <DataTableFacetedFilter
            column={table.getColumn("error")}
            title="Request"
            options={[
              // once we include 'degraded' requests, we can revert error to a number
              { value: true, label: "Failed" },
              { value: false, label: "Success" },
            ]}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => {
              const period = searchParams.get("period");
              table.resetColumnFilters();
              if (period) {
                router.replace(`?period=${period}`, {
                  scroll: false,
                });
              }
            }}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

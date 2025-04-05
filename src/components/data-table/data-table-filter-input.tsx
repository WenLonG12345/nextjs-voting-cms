"use client";

import type { Table } from "@tanstack/react-table";

import { Input } from "@/components/ui/input";

interface DataTableFilterInputProps<TData> {
  table: Table<TData>;
  columnId: string;
  placeholder?: string;
}

export function DataTableFilterInput<TData>({
  table,
  columnId,
  placeholder = "Filter...",
}: DataTableFilterInputProps<TData>) {
  // const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <Input
      placeholder={placeholder}
      value={(table.getColumn(columnId)?.getFilterValue() as string) ?? ""}
      onChange={(event) => {
        table.getColumn(columnId)?.setFilterValue(event.target.value);
      }}
      className="h-8 w-[150px] lg:w-[250px]"
    />
  );
}

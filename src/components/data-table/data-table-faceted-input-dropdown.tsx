import type { Column } from "@tanstack/react-table";
import { PlusCircle } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface DataTableFacetedInputDropdownProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: {
    label: string;
    value: string | number | boolean;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export function DataTableFacetedInputDropdown<TData, TValue>({
  column,
  title,
  options,
}: DataTableFacetedInputDropdownProps<TData, TValue>) {
  const selectedValue = column?.getFilterValue() as {
    input?: number;
    select?: string;
  };

  return (
    <div className="group border-input ring-offset-background focus-within:ring-ring flex h-8 items-center overflow-hidden rounded-md border border-dashed bg-transparent text-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:outline-none">
      <Select
        value={selectedValue?.select || ""}
        onValueChange={(value) => {
          column?.setFilterValue({
            ...selectedValue,
            select: value,
          });
        }}
      >
        <SelectTrigger className="hover:bg-muted focus:ring-offet-0 h-8 max-w-min space-x-2 rounded-none border-0 ring-offset-inherit focus:ring-0">
          <SelectValue
            placeholder={
              <div className="flex items-center text-xs font-medium">
                <PlusCircle className="mr-2 h-4 w-4" />
                {title}
              </div>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options?.map((option) => {
              return (
                <SelectItem
                  key={String(option.value)}
                  value={String(option.value)}
                >
                  {option.icon && (
                    <option.icon className="text-muted-foreground mr-2 h-4 w-4" />
                  )}
                  {option.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="h-4" />
      <input
        className="bg-background placeholder:text-muted-foreground w-24 rounded-md px-3 py-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        type="number"
        placeholder="4000"
        min={0}
        value={selectedValue?.input || ""}
        onChange={(e) => {
          column?.setFilterValue({
            ...selectedValue,
            input: Number.parseInt(e.target.value),
          });
        }}
      />
      <div className="border-input bg-muted flex h-full items-center p-2 text-sm">
        ms
      </div>
    </div>
  );
}

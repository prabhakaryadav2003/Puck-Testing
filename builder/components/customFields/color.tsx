import type { CustomField } from "@puckeditor/core";
import { FieldLabel } from "@puckeditor/core";
import { Palette } from "lucide-react";

export const createColorField = ({
  label,
}: {
  label: string;
}): CustomField<string> => ({
  type: "custom",
  label,

  render: ({ name, value = "#000000", onChange, readOnly }) => (
    <FieldLabel
      el='div'
      label={label ?? name}
      readOnly={readOnly}
      icon={<Palette className='h-4 w-4' strokeWidth={2} />}
    >
      <div className='flex h-10 overflow-hidden rounded-sm border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900'>
        {/* Color Picker */}
        <div className='relative flex w-10 shrink-0 items-center justify-center border-r border-zinc-200 dark:border-zinc-700'>
          {/* Visible swatch */}
          <div
            className='h-5 w-5 rounded border border-black/20 dark:border-white/20'
            style={{ backgroundColor: value }}
          />

          {/* Invisible native picker */}
          <input
            type='color'
            value={value}
            disabled={readOnly}
            onChange={(e) => onChange(e.target.value)}
            className='absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-default'
          />
        </div>

        {/* Hex Input */}
        <input
          type='text'
          value={value}
          disabled={readOnly}
          placeholder='#000000'
          onChange={(e) => onChange(e.target.value)}
          className='
            h-full flex-1 bg-transparent
            px-3 font-mono text-sm
            text-zinc-900 dark:text-zinc-100
            placeholder:text-zinc-400 dark:placeholder:text-zinc-500
            focus:outline-none
            disabled:opacity-50
          '
        />
      </div>
    </FieldLabel>
  ),
});

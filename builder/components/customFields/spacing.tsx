import { type SpacingValue } from "@/builder/types/customFields.types";
import { CustomField, FieldLabel } from "@puckeditor/core";
import { Link2, Unlink2 } from "lucide-react";
import React from "react";

const defaultSpacing: SpacingValue = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const NumberInput = ({
  value,
  disabled,
  onChange,
}: {
  value: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}) => (
  <div className='flex h-9 w-[72px] overflow-hidden rounded-sm border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900'>
    <input
      type='number'
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(Number(e.target.value))}
      className='
        h-full min-w-0 flex-1
        bg-transparent
        px-2 text-center text-sm
        outline-none
        disabled:cursor-not-allowed disabled:opacity-50
        [appearance:textfield]
        [&::-webkit-inner-spin-button]:appearance-none
        [&::-webkit-outer-spin-button]:appearance-none
      '
    />

    <span className='flex items-center border-l border-zinc-200 px-2 text-[11px] text-zinc-500 select-none dark:border-zinc-700 dark:text-zinc-400'>
      PX
    </span>
  </div>
);

export const createSpacingField = ({
  label,
}: {
  label: string;
}): CustomField<SpacingValue> => ({
  type: "custom",

  render: ({ name, value = defaultSpacing, onChange, readOnly }) => {
    const [linked, setLinked] = React.useState(false);

    const update = (key: keyof SpacingValue, newValue: number) => {
      if (linked) {
        onChange({
          top: newValue,
          right: newValue,
          bottom: newValue,
          left: newValue,
        });
        return;
      }

      onChange({
        ...value,
        [key]: newValue,
      });
    };

    return (
      <FieldLabel el='div' label={label ?? name} readOnly={readOnly}>
        <div className='relative mx-auto my-3 h-[150px] w-[210px]'>
          {/* Top */}
          <div className='absolute left-1/2 top-0 -translate-x-1/2'>
            <NumberInput
              value={value.top}
              disabled={readOnly}
              onChange={(v) => update("top", v)}
            />
          </div>

          {/* Left */}
          <div className='absolute left-0 top-1/2 -translate-y-1/2'>
            <NumberInput
              value={value.left}
              disabled={readOnly}
              onChange={(v) => update("left", v)}
            />
          </div>

          {/* Center */}
          <button
            type='button'
            onClick={() => setLinked((v) => !v)}
            disabled={readOnly}
            aria-label={linked ? "Unlink values" : "Link values"}
            className={`
              absolute left-1/2 top-1/2
              flex h-9 w-9 -translate-x-1/2 -translate-y-1/2
              items-center justify-center
              rounded-sm border
              transition-colors
              disabled:pointer-events-none disabled:opacity-50
              ${
                linked
                  ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                  : "border-zinc-300 bg-white text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              }
            `}
          >
            {linked ? (
              <Link2 className='h-4 w-4' strokeWidth={2} />
            ) : (
              <Unlink2 className='h-4 w-4' strokeWidth={2} />
            )}
          </button>

          {/* Right */}
          <div className='absolute right-0 top-1/2 -translate-y-1/2'>
            <NumberInput
              value={value.right}
              disabled={readOnly}
              onChange={(v) => update("right", v)}
            />
          </div>

          {/* Bottom */}
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
            <NumberInput
              value={value.bottom}
              disabled={readOnly}
              onChange={(v) => update("bottom", v)}
            />
          </div>
        </div>
      </FieldLabel>
    );
  },
});

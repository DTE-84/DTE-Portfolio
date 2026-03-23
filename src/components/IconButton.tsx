"use client";

import { Icon } from "@iconify/react";

type Props = {
  icon: string;
  className?: string;
  onClick?: () => void;
  "aria-label": string;
};

export const IconButton = ({ icon, className, onClick, "aria-label": ariaLabel }: Props) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex items-center justify-center ${className || "text-accent group-hover:text-white transition-colors"}`}
    aria-label={ariaLabel}
  >
    <Icon icon={icon} width={20} height={20} />
  </button>
);


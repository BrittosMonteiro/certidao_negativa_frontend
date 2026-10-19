const variants = {
  primary: "bg-emerald-800 text-white hover:bg-emerald-800/90",
  secondary: "bg-white text-zinc-900 border border-gray-300 hover:bg-gray-50",
  danger: "bg-white text-red-700 border border-red-700 hover:bg-red-700/5",
  ghost: "bg-transparent text-zinc-900 hover:bg-gray-100",
} as const;

const sizes = {
  sm: "text-sm",
  md: "text-base",
} as const;

export {sizes, variants}
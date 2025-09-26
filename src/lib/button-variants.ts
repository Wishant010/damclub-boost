import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-green-700 text-white hover:bg-green-800 shadow-md", // Duidelijk zichtbare groene knop
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-md",
        outline: "border-2 border-green-700 bg-transparent text-green-700 hover:bg-green-700 hover:text-white shadow-sm",
        secondary: "bg-green-100 text-green-800 hover:bg-green-200 shadow-sm",
        ghost: "text-green-700 hover:bg-green-100 hover:text-green-800",
        link: "text-green-700 underline-offset-4 hover:underline hover:text-green-800",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
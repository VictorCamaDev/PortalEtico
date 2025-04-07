import * as React from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Variantes para los estilos del dropdown
const dropdownVariants = cva(
  "relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface DropdownMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownVariants> {
  asChild?: boolean
}

const DropdownMenuComponent = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? "div" : "div" // Cambia esto si prefieres usar un Slot de Radix UI
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className={cn(dropdownVariants({ variant, size, className }))}>
          {children}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          className="z-50 min-w-[200px] bg-white border border-gray-300 rounded-md shadow-lg"
          ref={ref}
          {...props}
        >
          <DropdownMenu.Item className="p-2 hover:bg-gray-100">Option 1</DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-gray-100">Option 2</DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-gray-100">Option 3</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    )
  }
)

DropdownMenuComponent.displayName = "DropdownMenuComponent"

// Exportar los componentes directamente desde Radix UI para usarlos en otras partes
export { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
export { DropdownMenuComponent, dropdownVariants }

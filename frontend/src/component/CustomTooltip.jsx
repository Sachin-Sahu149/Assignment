import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipArrow
} from "@radix-ui/react-tooltip"; // Ensure this path is correct

export const CustomTooltip = ({ children, text, position = "top" }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={position} sideOffset={1} className="rounded bg-gray-800 text-white px-3 py-2 text-sm shadow-md border border-gray-700">
          {text}
          <TooltipArrow className="fill-gray-800" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};


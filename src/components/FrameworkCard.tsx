
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FrameworkCardProps {
  name: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export const FrameworkCard = ({
  name,
  description,
  color,
  icon,
  onClick,
}: FrameworkCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "p-6 rounded-xl backdrop-blur-sm bg-white/90 shadow-lg cursor-pointer transition-all",
        "border border-gray-200 hover:border-gray-300",
        "flex flex-col items-start gap-4"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          `bg-${color}/10 text-${color}`
        )}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

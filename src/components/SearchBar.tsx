
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export const SearchBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search components..."
          className="w-full px-12 py-3 rounded-full border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 outline-none transition-all"
        />
      </div>
    </motion.div>
  );
};


import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SAPUI5Components = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Frameworks
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-sapui">SAPUI5 Components</h1>
          <p className="text-gray-600 text-lg">
            Explore and implement enterprise-ready SAPUI5 components
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Component cards will be added here in future updates */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 rounded-xl bg-white shadow-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
            <p className="text-gray-600">
              SAPUI5 components will be available here shortly
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SAPUI5Components;

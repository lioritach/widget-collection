
import { motion } from "framer-motion";
import { FrameworkCard } from "@/components/FrameworkCard";
import { SearchBar } from "@/components/SearchBar";
import { Code2, Layers, Box } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const frameworks = [
    {
      name: "SAPUI5",
      description: "Enterprise-ready web components for business applications",
      color: "sapui",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      name: "Angular",
      description: "Platform for building web applications",
      color: "angular",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      name: "Vue.js",
      description: "Progressive JavaScript framework",
      color: "vue",
      icon: <Box className="w-6 h-6" />,
    },
  ];

  const handleFrameworkClick = (framework: string) => {
    console.log(`Clicked ${framework}`);
    if (framework === "SAPUI5") {
      navigate("/sapui5");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Component Storybook</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore and implement reusable components across different frameworks
          </p>
        </motion.div>

        <div className="mb-16">
          <SearchBar />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {frameworks.map((framework) => (
            <FrameworkCard
              key={framework.name}
              {...framework}
              onClick={() => handleFrameworkClick(framework.name)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

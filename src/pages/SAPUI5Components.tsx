
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface Component {
  name: string;
  description: string;
  code: string;
}

const SAPUI5Components = () => {
  const [components, setComponents] = useState<Component[]>([]);
  const [newComponent, setNewComponent] = useState<Component>({
    name: "",
    description: "",
    code: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComponent.name || !newComponent.description || !newComponent.code) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setComponents([...components, newComponent]);
    setNewComponent({ name: "", description: "", code: "" });
    toast({
      title: "Success",
      description: "Component added successfully",
    });
  };

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
          <p className="text-gray-600 text-lg mb-8">
            Explore and implement enterprise-ready SAPUI5 components
          </p>

          {/* Add New Component Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add New Component</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Component Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={newComponent.name}
                    onChange={(e) => setNewComponent({ ...newComponent, name: e.target.value })}
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., Button, Table, Dialog"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    value={newComponent.description}
                    onChange={(e) => setNewComponent({ ...newComponent, description: e.target.value })}
                    className="w-full p-2 border rounded-md"
                    placeholder="Brief description of the component"
                  />
                </div>
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
                    Component Code
                  </label>
                  <textarea
                    id="code"
                    value={newComponent.code}
                    onChange={(e) => setNewComponent({ ...newComponent, code: e.target.value })}
                    className="w-full p-2 border rounded-md font-mono"
                    rows={8}
                    placeholder="Paste your SAPUI5 component code here"
                  />
                </div>
                <Button type="submit">Add Component</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Component Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6 rounded-xl bg-white shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2">{component.name}</h3>
              <p className="text-gray-600 mb-4">{component.description}</p>
              <div className="bg-gray-50 p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
                  <code>{component.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}

          {components.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6 rounded-xl bg-white shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2">No Components Yet</h3>
              <p className="text-gray-600">
                Add your first SAPUI5 component using the form above
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SAPUI5Components;

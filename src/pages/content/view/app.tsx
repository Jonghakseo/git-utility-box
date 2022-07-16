import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return (
    <ChakraProvider>
      <div className="content-view">content view</div>
    </ChakraProvider>
  );
}

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import { PrescriptionProvider } from "./contexts/PrescriptionContext";
import PharmacyAIChatbot from "./components/PharmacyAIChatbot";
import Home from "./pages/Home";
import MedicineCatalog from "./pages/MedicineCatalog";
import MedicineDetail from "./pages/MedicineDetail";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import UploadPrescription from "./pages/UploadPrescription";
import UploadPrescriptionEnhanced from "./pages/UploadPrescriptionEnhanced";
import PharmacistDashboard from "./pages/PharmacistDashboard";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/catalog" component={MedicineCatalog} />
      <Route path="/medicine/:id" component={MedicineDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/orders" component={Orders} />
      <Route path="/upload-prescription" component={UploadPrescription} />
      <Route path="/upload-prescription-ai" component={UploadPrescriptionEnhanced} />
      <Route path="/pharmacist-dashboard" component={PharmacistDashboard} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <CartProvider>
          <PrescriptionProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
              {/* Floating Pharmacy AI Chatbot */}
              <PharmacyAIChatbot 
                medicines={["بنادول", "أسبرين", "ديكلوفيناك", "أموكسيسيلين"]}
                allergies={[]}
                conditions={[]}
              />
            </TooltipProvider>
          </PrescriptionProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

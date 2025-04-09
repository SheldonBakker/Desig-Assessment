import "./App.css";
import PageLayout from "./components/layout/PageLayout";
import { AppRouter } from "./routes";

function App() {
  return (
    <PageLayout>
      <AppRouter />
    </PageLayout>
  );
}

export default App;

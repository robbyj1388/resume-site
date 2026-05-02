import { AppProviders } from "./providers";
import { Portfolio } from "../features/portfolio/Portfolio";

export function App() {
  return (
    <AppProviders>
      <Portfolio />
    </AppProviders>
  );
}

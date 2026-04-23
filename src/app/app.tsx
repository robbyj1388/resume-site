import { AppProviders } from "./providers";
import { Folder } from "../features/portfolio/components/Folder";

export function App() {
  return (
    <AppProviders>
      <Folder />
    </AppProviders>
  );
}

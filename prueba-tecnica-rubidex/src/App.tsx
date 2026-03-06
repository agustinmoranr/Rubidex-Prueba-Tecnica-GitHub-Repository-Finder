/**
 * 1. instalar react-query, zustand, pendiente integrar tailwindcss al proyecto
 * 2. definir estructura de carpetas para mi proyecto y justificarlo
 *
 * -src
 * --components
 *    --SearchRepositoryInput.tsx
 *    --RepositoryList.tsx
 *    --RepositoryCard.tsx
 * --hooks
 * --stores
 *
 *
 * 3. Hacer del endpoint de github utilizando react-query + fetch
 * 4. generación de componente input de busqueda
 * 5. generación componente RepostoryList y RepositoryCard
 */

import SearchRepositoriesPage from "./pages/SearchRepositoriesPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <SearchRepositoriesPage />
    </Layout>
  );
}

export default App;

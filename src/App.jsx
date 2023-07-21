import './App.css'
import People from './people/components/People'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <People />
      <ReactQueryDevtoolsPanel isOpen={false} />
    </QueryClientProvider>
  )
}

export default App

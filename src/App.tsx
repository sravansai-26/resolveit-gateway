import Routes from "./Routes";

const App = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Logic: Routes contains the ErrorBoundary, ScrollToTop, and all Page definitions */}
      <Routes />
    </main>
  );
};

export default App;
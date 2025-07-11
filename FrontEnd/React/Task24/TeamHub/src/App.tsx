import Header from "./components/Header";
import TeamGrid from "./components/TeamGrid";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="py-10">
        <TeamGrid />
      </main>
    </div>
  );
}

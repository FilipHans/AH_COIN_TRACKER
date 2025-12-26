import { Header } from '@/components/Header';
import { PortfolioStats } from '@/components/PortfolioStats';
import { GoldChart } from '@/components/GoldChart';
import { InvestmentTable } from '@/components/InvestmentTable';
import { mockInvestments, mockGoldHistory } from '@/data/mockInvestments';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Portfolio Stats */}
        <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <PortfolioStats investments={mockInvestments} />
        </section>

        {/* Gold Chart */}
        <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <GoldChart data={mockGoldHistory} />
        </section>

        {/* Investment Table */}
        <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <InvestmentTable investments={mockInvestments} />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>Data refreshes from the Auction House API • Prices in gold</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Investment, getTotalPortfolioValue, getTotalInvested, formatGold } from '@/data/mockInvestments';
import { Coins, TrendingUp, TrendingDown, Package } from 'lucide-react';

interface PortfolioStatsProps {
  investments: Investment[];
}

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down';
}

const StatCard = ({ title, value, subtitle, icon, trend }: StatCardProps) => (
  <div className="card-elevated p-5 group hover:border-primary/30 transition-all duration-300">
    <div className="flex items-start justify-between mb-3">
      <span className="text-muted-foreground text-sm font-medium">{title}</span>
      <div className="text-primary/70 group-hover:text-primary transition-colors">
        {icon}
      </div>
    </div>
    <p className="font-display text-2xl gold-text mb-1">{value}</p>
    {subtitle && (
      <p className={`text-sm flex items-center gap-1 ${
        trend === 'up' ? 'profit' : trend === 'down' ? 'loss' : 'text-muted-foreground'
      }`}>
        {trend === 'up' && <TrendingUp className="w-3 h-3" />}
        {trend === 'down' && <TrendingDown className="w-3 h-3" />}
        {subtitle}
      </p>
    )}
  </div>
);

export const PortfolioStats = ({ investments }: PortfolioStatsProps) => {
  const totalValue = getTotalPortfolioValue(investments);
  const totalInvested = getTotalInvested(investments);
  const totalProfit = totalValue - totalInvested;
  const percentChange = ((totalProfit) / totalInvested) * 100;
  const isProfit = totalProfit >= 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Portfolio Value"
        value={`${formatGold(totalValue)}g`}
        icon={<Coins className="w-5 h-5" />}
      />
      <StatCard
        title="Total Invested"
        value={`${formatGold(totalInvested)}g`}
        icon={<Package className="w-5 h-5" />}
      />
      <StatCard
        title="Total Profit/Loss"
        value={`${isProfit ? '+' : ''}${formatGold(totalProfit)}g`}
        subtitle={`${isProfit ? '+' : ''}${percentChange.toFixed(1)}% overall`}
        icon={isProfit ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
        trend={isProfit ? 'up' : 'down'}
      />
      <StatCard
        title="Active Positions"
        value={investments.length.toString()}
        subtitle="Items being tracked"
        icon={<Package className="w-5 h-5" />}
      />
    </div>
  );
};

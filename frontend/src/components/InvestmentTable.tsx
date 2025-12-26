import { Investment, calculateProfitLoss, formatGold } from '@/data/mockInvestments';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface InvestmentTableProps {
  investments: Investment[];
}

const rarityStyles = {
  common: 'text-foreground/80',
  uncommon: 'text-green-400',
  rare: 'text-blue-400',
  epic: 'text-purple-400',
  legendary: 'text-orange-400',
};

export const InvestmentTable = ({ investments }: InvestmentTableProps) => {
  return (
    <div className="card-elevated overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="font-display text-xl gold-text">Active Investments</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/30">
              <th className="text-left p-4 text-muted-foreground font-medium text-sm">Item</th>
              <th className="text-right p-4 text-muted-foreground font-medium text-sm">Quantity</th>
              <th className="text-right p-4 text-muted-foreground font-medium text-sm">Buy Price</th>
              <th className="text-right p-4 text-muted-foreground font-medium text-sm">Current Price</th>
              <th className="text-right p-4 text-muted-foreground font-medium text-sm">Total Value</th>
              <th className="text-right p-4 text-muted-foreground font-medium text-sm">Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((investment, index) => {
              const stats = calculateProfitLoss(investment);
              
              return (
                <tr 
                  key={investment.id} 
                  className="border-b border-border/50 hover:bg-secondary/20 transition-colors"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{investment.itemIcon}</span>
                      <div>
                        <p className={`font-medium ${rarityStyles[investment.rarity]}`}>
                          {investment.itemName}
                        </p>
                        <p className="text-muted-foreground text-xs capitalize">
                          {investment.rarity}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right font-mono">
                    {investment.quantity.toLocaleString()}
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-primary font-mono">{formatGold(investment.purchasePrice)}g</span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-primary font-mono">{formatGold(investment.currentPrice)}g</span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-primary font-mono font-semibold">
                      {formatGold(stats.totalCurrent)}g
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className={`flex items-center justify-end gap-2 ${stats.isProfit ? 'profit' : 'loss'}`}>
                      {stats.isProfit ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <div className="text-right">
                        <p className="font-mono font-semibold">
                          {stats.isProfit ? '+' : ''}{formatGold(stats.difference)}g
                        </p>
                        <p className="text-xs opacity-80">
                          {stats.isProfit ? '+' : ''}{stats.percentChange.toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

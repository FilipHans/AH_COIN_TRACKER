import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { GoldHistory, formatGold } from '@/data/mockInvestments';

interface GoldChartProps {
  data: GoldHistory[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="card-elevated p-3 border border-primary/20">
        <p className="text-muted-foreground text-sm">{label}</p>
        <p className="text-primary font-display text-lg">
          {payload[0].value.toLocaleString()}g
        </p>
      </div>
    );
  }
  return null;
};

export const GoldChart = ({ data }: GoldChartProps) => {
  return (
    <div className="card-elevated p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-xl gold-text">Portfolio Value Over Time</h2>
        <span className="text-muted-foreground text-sm">Last 7 days</span>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(43 74% 55%)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="hsl(43 74% 55%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(220 15% 55%)', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(220 15% 55%)', fontSize: 12 }}
              tickFormatter={(value) => formatGold(value)}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="gold"
              stroke="hsl(43 74% 55%)"
              strokeWidth={2}
              fill="url(#goldGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

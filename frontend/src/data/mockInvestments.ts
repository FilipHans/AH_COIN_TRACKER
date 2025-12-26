export interface Investment {
  id: string;
  itemName: string;
  itemIcon: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
  purchaseDate: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

export interface GoldHistory {
  date: string;
  gold: number;
}

export const mockInvestments: Investment[] = [
  {
    id: '1',
    itemName: 'Ethereal Oil',
    itemIcon: '🧪',
    quantity: 200,
    purchasePrice: 45,
    currentPrice: 78,
    purchaseDate: '2024-12-15',
    rarity: 'rare',
  },
  {
    id: '2',
    itemName: 'Windswept Herb',
    itemIcon: '🌿',
    quantity: 500,
    purchasePrice: 12,
    currentPrice: 8,
    purchaseDate: '2024-12-18',
    rarity: 'uncommon',
  },
  {
    id: '3',
    itemName: 'Arcane Crystal',
    itemIcon: '💎',
    quantity: 50,
    purchasePrice: 350,
    currentPrice: 520,
    purchaseDate: '2024-12-10',
    rarity: 'epic',
  },
  {
    id: '4',
    itemName: 'Storm Silver Ore',
    itemIcon: '⛏️',
    quantity: 1000,
    purchasePrice: 25,
    currentPrice: 32,
    purchaseDate: '2024-12-20',
    rarity: 'common',
  },
  {
    id: '5',
    itemName: 'Dragon Scale',
    itemIcon: '🐉',
    quantity: 15,
    purchasePrice: 2500,
    currentPrice: 3200,
    purchaseDate: '2024-12-08',
    rarity: 'legendary',
  },
  {
    id: '6',
    itemName: 'Enchanted Dust',
    itemIcon: '✨',
    quantity: 300,
    purchasePrice: 18,
    currentPrice: 15,
    purchaseDate: '2024-12-19',
    rarity: 'uncommon',
  },
];

export const mockGoldHistory: GoldHistory[] = [
  { date: 'Dec 10', gold: 125000 },
  { date: 'Dec 12', gold: 132500 },
  { date: 'Dec 14', gold: 128000 },
  { date: 'Dec 16', gold: 145000 },
  { date: 'Dec 18', gold: 142000 },
  { date: 'Dec 20', gold: 168000 },
  { date: 'Dec 22', gold: 185500 },
];

export const calculateProfitLoss = (investment: Investment) => {
  const totalPurchase = investment.purchasePrice * investment.quantity;
  const totalCurrent = investment.currentPrice * investment.quantity;
  const difference = totalCurrent - totalPurchase;
  const percentChange = ((totalCurrent - totalPurchase) / totalPurchase) * 100;
  
  return {
    totalPurchase,
    totalCurrent,
    difference,
    percentChange,
    isProfit: difference >= 0,
  };
};

export const formatGold = (amount: number): string => {
  if (amount >= 10000) {
    return `${(amount / 1000).toFixed(1)}k`;
  }
  return amount.toLocaleString();
};

export const getTotalPortfolioValue = (investments: Investment[]): number => {
  return investments.reduce((total, inv) => total + (inv.currentPrice * inv.quantity), 0);
};

export const getTotalInvested = (investments: Investment[]): number => {
  return investments.reduce((total, inv) => total + (inv.purchasePrice * inv.quantity), 0);
};

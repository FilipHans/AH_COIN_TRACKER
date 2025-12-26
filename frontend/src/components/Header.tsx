import { Coins, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
            <Coins className="w-6 h-6 text-primary animate-pulse-fel" />
          </div>
          <div>
            <h1 className="font-display text-xl md:text-2xl fel-text">
              TBC Auction House Tracker
            </h1>
            <p className="text-muted-foreground text-xs md:text-sm">
              Track your WoW investments
            </p>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          className="gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span className="hidden sm:inline">Refresh Prices</span>
        </Button>
      </div>
    </header>
  );
};

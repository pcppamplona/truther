import { useState, useEffect } from "react";
import axios from "axios";

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
}

const API_KEY = "CG-hRigno1SULLd1ZZV8rP7qgvF";

export function useFetchCoins() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const API_URL = "https://api.coingecko.com/api/v3/coins/markets";

        const response = await axios.get<Coin[]>(API_URL, {
          headers: {
            accept: "application/json",
            "x-cg-pro-api-key": API_KEY,
          },
          params: {
            vs_currency: "usd",
          },
        });

        setCoins(response.data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar dados");
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return { coins, loading, error };
}

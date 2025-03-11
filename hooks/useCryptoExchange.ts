import { useEffect, useState } from "react";

// Interface para representar uma moeda retornada pela API
interface CryptoCoin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
}

export function useCryptoExchange() {
  const [coins, setCoins] = useState<CryptoCoin[]>([]);
  const [fromCoin, setFromCoin] = useState<string>("bitcoin");
  const [toCoin, setToCoin] = useState<string>("ethereum");
  const [amount, setAmount] = useState<string>("1");
  const [convertedValue, setConvertedValue] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Busca lista de moedas da CoinGecko
  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );
        const data: CryptoCoin[] = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Erro ao buscar moedas:", error);
      }
    }
    fetchCoins();
  }, []);

  // Função para buscar conversão
  useEffect(() => {
    async function fetchConversion() {
      if (!amount || isNaN(Number(amount))) return;
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${fromCoin},${toCoin}&vs_currencies=usd`
        );
        const data: Record<string, { usd: number }> = await response.json();

        const fromPrice = data[fromCoin]?.usd ?? 0;
        const toPrice = data[toCoin]?.usd ?? 0;

        if (fromPrice > 0 && toPrice > 0) {
          const result = (parseFloat(amount) * fromPrice) / toPrice;
          setConvertedValue(result.toFixed(6)); // Exibir até 6 casas decimais
        }
      } catch (error) {
        console.error("Erro ao buscar conversão:", error);
      }
      setLoading(false);
    }
    fetchConversion();
  }, [fromCoin, toCoin, amount]);

  return {
    coins,
    fromCoin,
    toCoin,
    amount,
    convertedValue,
    loading,
    setFromCoin,
    setToCoin,
    setAmount,
  };
}

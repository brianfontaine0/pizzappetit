import { useWalletStore } from "@front-end/src/Store/WalletStore";
import { pizzasList } from "@front-end/src/utils/PizzasList";
import Image from "next/image";
import React from "react";

function SectionMenu() {
  const { setWallet, wallet } = useWalletStore();
  return (
    <section className="h-auto bg-gray-surface-200 relative py-3" id="menu">
      <h1 className="text-5xl text-primary/95 font-Pacifico text-center p-4">
        Découvrez notre
      </h1>
      <h2 className="text-4xl text-gray-surface-100 font-Pacifico text-center -py-2">
        Sélection de pizzas
      </h2>
      <div className="w-full px-4 flex flex-wrap md:flex-nowrap gap-3 mt-5">
        {pizzasList.map((pizza, index) => (
          <div
            key={index}
            className="w-full border border-gray-100 rounded-xl bg-white"
          >
            <Image
              src={pizza.image}
              alt={pizza.name}
              width={500}
              height={300}
              objectFit="cover"
              className="rounded-t-xl"
            />
            <div className="space-y-2 p-2">
              <h3 className="text-2xl text-primary font-Pacifico text-center p-2">
                {pizza.name}
              </h3>
              <p className="text-base text-secondary font-OpenSans text-center min-h-20">
                {pizza.description}
              </p>
              <div className="">
                <button
                  className="text-base text-white font-OpenSans text-center w-full rounded-full bg-secondary px-4 py-2 "
                  onClick={() => {
                    const walets = Number(wallet);
                    const TenPercent = Number(pizza.price) * 0.1;
                    const newWallet = walets + TenPercent;
                    setWallet(newWallet.toFixed(2));
                  }}
                >
                  Commander {pizza.price}€
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionMenu;

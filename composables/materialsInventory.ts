import I_MaterialsInventory from "~/interfaces/materialsInventory"

export const useMaterialsInventory = () => {
  const materialsInventory = useState<I_MaterialsInventory>('materialsInventory', () => ({
    wood: 0,
    wealth: 0,
  }))

  const setWood = (newWood: number) => {
    materialsInventory.value.wood = newWood
  }

  const setWealth = (newWealth: number) => {
    materialsInventory.value.wealth = newWealth
  }

  return {
    materialsInventory,
    setWood,
    setWealth
  }
}
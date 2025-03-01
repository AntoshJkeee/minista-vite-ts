import { Metadata } from "minista";
import { Hero, Categories, Devices, Questions, Plans } from "@/sections"
import { IndexStore } from "@/store/index.store"

export const metadata: Metadata = {
  title: 'Home',
  isHeaderFixed: true,
  withCss: true
}

export default () => {
  return (
      <>
        <Hero  {...IndexStore.Hero}/>
        <Categories {...IndexStore.Categories} />
        <Devices {...IndexStore.Devices} />
        <Questions {...IndexStore.Questions} />
        <Plans {...IndexStore.Plans} />
      </>
  )
}

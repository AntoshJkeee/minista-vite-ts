import { Metadata } from "minista";
import { Support, Questions } from "@/sections"
import { IndexStore } from "@/store/index.store"

export const metadata: Metadata = {
  title: 'Support',
}

export default () => {
  return (
    <>
      <Support />
      <Questions {...IndexStore.Questions}/>
    </>
  )
}

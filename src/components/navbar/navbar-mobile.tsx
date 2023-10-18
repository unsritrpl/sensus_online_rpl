import { Dispatch } from "react"
import { Transition } from "@headlessui/react"

export default function NavbarMobile({
  openState,
  setOpenState
}: {
  openState: boolean
  setOpenState: Dispatch<boolean>
}) {
  return (
    <Transition
      show={openState}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
    </Transition>
  )
}
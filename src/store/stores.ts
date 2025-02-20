import {create} from "zustand"

type State = {
    modalState: boolean
}

type Action = {
    toggleModalState: (state: State['modalState']) => void
}

export const useModalStateStore = create<State & Action>((set) => ({
    modalState: false,
    toggleModalState: () => set((state) => ({ modalState: !state.modalState }))
}))
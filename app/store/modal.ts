// store/modal.ts
import { create } from "zustand";


interface ModalState {
  isModalOpen: boolean;
  secondModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openSecondModal: () => void;
  closeSecondModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  secondModalOpen: false,
  isModalOpen: false,
  openModal: () => {
    console.log("🔵 Opening first modal");
    set({ isModalOpen: true });
  },
  closeModal: () => {
    console.log("🟢 closing first modal");
    set({ isModalOpen: false });
  },
  openSecondModal: () => 
    {
      console.log('🟢 Opening second modal');
      set({ secondModalOpen: true })},
  closeSecondModal: () => {
    console.log('🟢 closing second modal');
    set({ secondModalOpen: false })},
  
}));

export default useModalStore;




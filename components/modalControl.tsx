import { deleteEvent } from '@/lib/actions/user';
import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  deleteEvent: (id: string) => Promise<void>;
  id: string;
  getId: (id: string) => void;
}

export const useDeleteModal = create<ModalState>((set) => ({
  isOpen: false,
  onOpen: () =>
    set({
      isOpen: true,
    }),
  onClose: () => set({ isOpen: false }),
  id: '',
  getId: (id: string) => set({ id }),
  deleteEvent: async (id: string) => {
    try {
      await deleteEvent(id);
    } catch (error) {
      console.log(error);
    }
  },
}));

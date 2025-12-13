import { create } from 'zustand';

export const domain = 'http://82.112.241.233:2007';

export const selectedCategory = create((set) => ({
  value: '',
  setCategory: (documentId) => set(() => ({ value: documentId })),
}));

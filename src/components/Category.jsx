import { selectedCategory } from '../store';

export default function Category({ category }) {
  const { setCategory } = selectedCategory();
  return (
    <div className="w-full">
      <label className="flex w-full items-center gap-3 ">
        <input onChange={() => setCategory(category.documentId)} type="radio" name="filter" />
        {category?.name}
      </label>
    </div>
  );
}

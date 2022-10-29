import { Controller, useForm } from 'react-hook-form';
import { Category } from 'types/category';
import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import './styles.css';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { requestBackend } from 'utils/requests';

type ProductFilterData = {
  name: string;
  category: Category;
};

export const ProductFilter = () => {
  const [selectCategories, setSelectCategories] = useState<Category[]>([]);
  const { register, handleSubmit, control } = useForm<ProductFilterData>();

  useEffect(() => {
    requestBackend({ url: '/categories' }).then((response) =>
      setSelectCategories(response.data.content)
    );
  }, []);

  const onSubmit = (formData: ProductFilterData) => {
    console.log('Eniviou', formData);
  };

  return (
    <div className="base-card product-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="product-filter-form">
        <div className="product-filter-name-container">
          <input
            {...register('name')}
            type="text"
            className="form-control"
            placeholder="Nome do Produto"
            name="name"
          />
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className="product-filter-bottom-container">
          <div className="product-filter-category-container">
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectCategories}
                  isClearable
                  classNamePrefix="product-crud-select"
                  getOptionLabel={(category: Category) => category.name}
                  getOptionValue={(category: Category) =>
                    category.id.toString()
                  }
                  placeholder="Categoria"
                />
              )}
            />
          </div>
          <button className="btn btn-outline-secondary">LIMPAR</button>
        </div>
      </form>
    </div>
  );
};

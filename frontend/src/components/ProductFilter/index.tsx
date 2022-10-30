import { Controller, useForm } from 'react-hook-form';
import { Category } from 'types/category';
import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import './styles.css';
import Select, { SingleValue } from 'react-select';
import { useEffect, useState } from 'react';
import { requestBackend } from 'utils/requests';

export type ProductFilterData = {
  name: string;
  category: Category | null;
};

type Props = {
  onSubmitFilter: (data: ProductFilterData) => void;
};

export const ProductFilter = ({ onSubmitFilter }: Props) => {
  const [selectCategories, setSelectCategories] = useState<Category[]>([]);
  const { register, handleSubmit, control, setValue, getValues } =
    useForm<ProductFilterData>();

  useEffect(() => {
    requestBackend({ url: '/categories' }).then((response) =>
      setSelectCategories(response.data.content)
    );
  }, []);

  const onSubmit = (formData: ProductFilterData) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    setValue('name', '');
    setValue('category', null);
  };

  const handleOnChangeCategory = (value: Category) => {
    setValue('category', value);
    const obj = {
      name: getValues('name'),
      category: getValues('category'),
    } as ProductFilterData;
    onSubmitFilter(obj);
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
          <button className="product-filter-button-seacrh-icon">
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
                  classNamePrefix="product-filter-select"
                  onChange={(value) =>
                    handleOnChangeCategory(value as Category)
                  }
                  getOptionLabel={(category: Category) => category.name}
                  getOptionValue={(category: Category) =>
                    category.id.toString()
                  }
                  placeholder="Categoria"
                />
              )}
            />
          </div>
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary btn-product-filter-clear"
          >
            LIMPAR <span className="btn-product-filter-word"> FILTRO</span>
          </button>
        </div>
      </form>
    </div>
  );
};

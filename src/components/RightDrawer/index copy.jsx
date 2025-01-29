
import { useEffect, useState } from 'react';
import Image from 'next/image';
import qs from "qs";
import { Axios } from '@/config/Axios';
import { useRouter, useSearchParams } from 'next/navigation';

const RightDrawer = ({ categories, specificCategorries, setProducts, currentPageIndex }) => {
  const [generalCheckedValues, setGeneralCheckedValues] = useState([]);
  const [specificCheckedValues, setSpecificCheckedValues] = useState([]);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isGeneralCategories, setIsGeneralCategories] = useState(true);
  const router = useRouter()
  const [queryParams, setQueryParams] = useState({});
  
  const searchParams = useSearchParams();
  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setQueryParams(params);
  }, [searchParams]);
  
  const toggleDrawer = () => setIsDrawerVisible(!isDrawerVisible);

  const queryParam = new URLSearchParams(queryParams).toString();

  const handleCheckboxChange = async (e) => {
    const value = e.target.value;
    if (isGeneralCategories) {
      setGeneralCheckedValues((prev) => {
        const updatedGValues = e.target.checked
          ? [...prev, value]
          : prev.filter((item) => item !== value);
          const gcaterories = updatedGValues.join(',')
          setQueryParams({...queryParams, "categories" : gcaterories, type: 'general' })
        return updatedGValues;
      });

    } else {
      setSpecificCheckedValues((prev) => {
        const updatedSValues = e.target.checked
          ? [...prev, value]
          : prev.filter((item) => item !== value);
        const scaterories = updatedSValues.join(',')
        setQueryParams({...queryParams, "categories" : scaterories, type: 'specific' })
        return updatedSValues;
      });
    }
  };

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setSelectAllChecked(checked);

    const selectedOptions = checked ? options.map((option) => option.Slug) : [];
    if (isGeneralCategories) {
      setGeneralCheckedValues(selectedOptions);
    } else {
      setSpecificCheckedValues(selectedOptions);
    }
  };

  const handleSwitchCategory = () => {
    setGeneralCheckedValues([]);
    setSpecificCheckedValues([]);
    setSelectAllChecked(false);
    setIsGeneralCategories((prev) => !prev);
  };

  const handleSearch = async () => {
    router.push(`?${queryParam}`)
    const params = qs.stringify({
      populate: ['Image', 'general_categories', 'specific_category'],
      filters: {
        specific_category: {
          Slug: {
            $in: specificCheckedValues,
          },
        },
        general_category: {
          Slug: {
            $in: generalCheckedValues
          },
        },
      },
      pagination: {
        page: currentPageIndex ? currentPageIndex : 1,
        pageSize: 20
      }
    });

    const response = await Axios.get(`/products?${params}`);
    setProducts(response?.data);
  }

  const options = isGeneralCategories ? categories : specificCategorries;

  return (
    <div className='relative'>
      <button
        onClick={toggleDrawer}
        className="flex items-center justify-center gap-[12px] w-[115px] h-[55px] px-4 py-2 bg-[text-theme-main] text-white bg-theme-main"
      >
        <p className='text-[14px] md:text-[18px]'>Filter</p>
        <Image
          width={24}
          height={24}
          alt='search-icon'
          src='/svg/page_info.svg'
          className=''
        />
      </button>

      {isDrawerVisible && (
        <div className="absolute right-0 w-full min-w-[355px] md:w-[402px] md:w-[390px] bg-[#EBEDFF] shadow-lg py-[30px] z-[9999]">
          <div className="flex gap-[30px] justify-between items-center pb-[30px] px-[30px]">
            <p className="flex-1 text-[25px] md:text-[30px] leading-[30px] md:font-bold text-theme-main font_calibri">Filter</p>
            <button className='text-lg leading-[18px] text-theme-main font_calibri'>Clear</button>
            <button
              onClick={toggleDrawer}
              className="text-theme-main text-lg hover:text-gray-700"
            >
              &times;
            </button>
          </div>

          <div className="w-full h-[2px] bg-white" />
          <p className="p-[30px] flex-1 text-[30px] leading-[30px] font-bold text-theme-main font_calibri">
            {isGeneralCategories ? 'General' : 'Specific'} Category
          </p>
          <div className="space-y-[12px] hideScrollBar h-[315px] overflow-y-auto px-[30px]">
            {isGeneralCategories && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="selectAll"
                  checked={selectAllChecked}
                  onChange={handleSelectAllChange}
                  className="hidden peer"
                />
                <label
                  htmlFor="selectAll"
                  className="w-[18px] h-[18px] border-2 border-theme-main rounded-sm flex items-center justify-center cursor-pointer"
                >
                  {selectAllChecked && (
                    <span className={`bg-theme-main w-3 h-3 text-lg opacity-1`}></span>
                  )}
                </label>
                <label className='ml-2 text-lg leading-[18px] text-theme-main font_calibri cursor-pointer' htmlFor="selectAll">
                  All
                </label>
              </div>
            )}
            {options
              ?.sort((a, b) => a?.attributes?.Name.localeCompare(b?.attributes?.Name))
              .map((option) => (
                <div key={option?.attributes?.Slug} className="flex items-center">
                  <input
                    id={option?.attributes?.Slug}
                    type="checkbox"
                    value={option?.attributes?.Slug}
                    checked={
                      isGeneralCategories
                        ? generalCheckedValues.includes(option?.attributes?.Slug)
                        : specificCheckedValues.includes(option?.attributes?.Slug)
                    }
                    onChange={handleCheckboxChange}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={option?.attributes?.Slug}
                    className="w-[18px] h-[18px] border-2 border-theme-main rounded-sm flex items-center justify-center cursor-pointer"
                  >
                    {(isGeneralCategories
                      ? generalCheckedValues
                      : specificCheckedValues
                    ).includes(option?.attributes?.Slug) && (
                        <span className={`bg-theme-main w-3 h-3 text-lg opacity-1`}></span>
                      )}
                  </label>
                  <label
                    htmlFor={option?.attributes?.Slug}
                    className="ml-2 text-lg leading-[18px] text-theme-main font_calibri cursor-pointer"
                  >
                    {option?.attributes?.Name}
                  </label>
                </div>
              ))}

          </div>

          <div className="px-[30px] flex flex-col justify-center items-center gap-[8px] mt-[30px]">
            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-[12px] w-[240px] md:w-full h-[55px] px-4 py-2 bg-[text-theme-main] text-white bg-theme-main"
            >
              {isGeneralCategories ? "Search General Category" : "Search"}
            </button>
            <button
              onClick={handleSwitchCategory}
              className={`flex items-center ${isGeneralCategories ? 'justify-between' : 'justify-center'} gap-[12px] w-[240px] md:w-full h-[55px] px-[30px] py-[20px] border border-theme-main text-theme-main`}
            >
              {isGeneralCategories ? (
                <>
                  Show Specific Category
                  <Image
                    width={24}
                    height={24}
                    alt='search-icon'
                    src='/svg/arrow_circle_right.svg'
                    className=''
                  />
                </>
              ) : (
                <>
                  <Image
                    width={24}
                    height={24}
                    alt='search-icon'
                    src='/svg/arrow_circle_left.svg'
                    className=''
                  />
                  General Category
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightDrawer;

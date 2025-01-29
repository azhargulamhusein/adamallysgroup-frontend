'use client'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const defaultValues = {
  companyName: '',
  vessel: '',
  refNo: '',
  country: '',
  portOfArrival: '',
  eta: '',
  etd: '',
  contactPerson: '',
  phoneCode: '+',
  phone: '',
  fax: '',
  email: '',
  file: null,
  comments: ''
}

const requiredFields = [
  { field: 'companyName', message: 'Company Name is required!' },
  { field: 'vessel', message: 'Vessel is required!' },
  { field: 'refNo', message: 'Ref No. is required!' },
  { field: 'phone', message: 'Phone No. is required!' },
  { field: 'phoneCode', message: 'Phone Code is required!' },
  { field: 'email', message: 'Email is required!' },
];

const RequestAQuoteTemplate = ({ ports }) => {
  const [formData, setFormData] = useState(defaultValues);
  const [countries, setCountries] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryData = response.data.map(country => ({
          name: country.name.common,
          code: country.cca2,
          phoneCode: country.idd ? country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '') : ''
        }));

        const sortedCountries = countryData.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setCountries(sortedCountries);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  const portList = [
    ...ports?.attributes?.Oman?.map(({ Name }) => ({ label: Name, value: Name })),
    ...ports?.attributes?.UAE_Ports?.map(({ Name }) => ({ label: Name, value: Name })),
  ];
  portList.sort((a, b) => a.label.localeCompare(b.label));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors(prev => {
      let errors = { ...prev };
      delete errors[name]
      return errors
    })
    if (name === 'country') {
      return setFormData(prevData => ({
        ...prevData,
        country: value,
        phoneCode: value,
      }));
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePhoneChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    setFormData(prevData => ({
      ...prevData,
      phone: inputValue
    }));
    setFormErrors(prev => {
      let errors = { ...prev };
      delete errors.phone
      return errors
    })
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type !== 'application/pdf') {
      toast.error('Please upload a PDF file.');
      return;
    }

    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
      toast.error('File size should not exceed 5MB.');
      return;
    }

    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("files", selectedFile);

        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_BASE_URL}/api/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          setFormData((prevData) => ({
            ...prevData,
            file: response?.data[0]?.url,
          }));
        }
      } catch (error) {
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    for (let { field, message } of requiredFields) {
      if (!formData?.[field]) {
        errors[field] = message;
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post(`/api/send-request-a-quote`, formData);
      if (response?.status === 200) {
        toast.success('Email sended successfully!')
        setFormData({ ...defaultValues })
      } else {
        toast.error("Something went wrong!")
      }
    } catch (error) {
      toast.error("Something went wrong!")
    }
  };

  const handleCancel = () => {
    setFormData(defaultValues)
  }

  return (
    <main className='mt-[3rem] md:mt-[6rem] mb-[40px] lg:mb-[88px] container mx-auto px-[18px] md:px-0'>
      <div className="pt-[30px] md:pt-[60px]">
        <h1 className='font_calibri capitalize text-[25px] md:text-[40px] leading-[40px] text-center font-bold text-theme-main mb-[8px]'>Request a Quote</h1>
        <div className='w-[49px] h-[2px] bg-[#8B8B8B] md:hidden mx-auto my-3' />
        <p className='font_calibri max-w-[262px] md:max-w-full mx-auto text-center text-[12px] md:text-lg leading[26px] text-theme-main'>Inquire by emailing adamallys@adamallys-llc.com OR fill out the form below</p>
        <form onSubmit={handleSubmit} className='max-w-[690px] mx-auto mt-[26px]'>
          <div className="flex flex-col gap-4">
            <div>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Company Name*</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                placeholder="Type here"
                className="w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '');
                }}
              />
              {formErrors.companyName && (
                <p className="text-red-600 text-sm mt-1">{formErrors.companyName}</p>
              )}
            </div>
            <div>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Vessel *</label>
              <input
                type="text"
                name="vessel"
                value={formData.vessel}
                placeholder="Type here"
                className="w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                onChange={handleChange}
              />
              {formErrors.vessel && (
                <p className="text-red-600 text-sm mt-1">{formErrors.vessel}</p>
              )}
            </div>
            <div>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Ref No. *</label>
              <input
                type="text"
                name="refNo"
                value={formData.refNo}
                placeholder="Type here"
                className="w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                onChange={handleChange}
              />
              {formErrors.refNo && (
                <p className="text-red-600 text-sm mt-1">{formErrors.refNo}</p>
              )}
            </div>
            <div className='relative'>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading-[26px] text-theme-main'>
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                className="w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main appearance-none"
                onChange={handleChange}
                style={{
                  background: 'url(/svg/arrow_drop_down.svg) no-repeat right 10px center',
                  backgroundSize: '15px 7.5px',
                }}
              >
                <option value="" disabled hidden>Select</option>
                {countries.map(country => (
                  <option
                    value={country?.phoneCode}
                    key={country?.phoneCode + country?.name}
                  >
                    {country?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='relative'>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Port of Arrival</label>
              <select
                name="portOfArrival"
                value={formData.portOfArrival}
                className="w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main appearance-none"
                onChange={handleChange}
                style={{
                  background: 'url(/svg/arrow_drop_down.svg) no-repeat right 10px center',
                  backgroundSize: '15px 7.5px',
                }}
              >
                <option value="" disabled hidden>Select</option>
                {portList?.map(({ label, value }) =>
                  <option key={value} value={value}>{label}</option>
                )}
              </select>
            </div>
            <div>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Estimated Time of Arrival</label>
              <input
                type="date"
                name="eta"
                value={formData.eta}
                className="cursor-pointer w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                style={{
                  background: "url(/svg/calendar_month_theme.svg) no-repeat right 10px center",
                  backgroundSize: '36px 36px',
                }}
                onChange={handleChange}
                onClick={(e) => e?.target?.showPicker()}
              />
            </div>
            <div>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Estimated Time of Departure</label>
              <input
                type="date"
                name="etd"
                value={formData.etd}
                className="cursor-pointer w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                style={{
                  background: "url(/svg/calendar_month_theme.svg) no-repeat right 10px center",
                  backgroundSize: '36px 36px',
                }}
                onChange={handleChange}
                onClick={(e) => e?.target?.showPicker()}
              />
            </div>
            <div>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Contact Person *</label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                placeholder="Type here"
                className="w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '');
                }}
              />
              {formErrors.contactPerson && (
                <p className="text-red-600 text-sm mt-1">{formErrors.contactPerson}</p>
              )}
            </div>
            <div>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Phone *</label>
              <div className="flex gap-2">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  className="w-[106px] max-w-[200px] h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main appearance-none"
                  onChange={handleChange}
                  style={{
                    background: 'url(/svg/arrow_drop_down.svg) no-repeat right 10px center',
                    backgroundSize: '15px 7.5px',
                  }}
                >
                  <option className='w-[200px]' value="" disabled hidden>Code</option>
                  {countries.map(country => (
                    <option className='w-[200px]'
                      value={country?.phoneCode}
                      key={country?.phoneCode + country?.name}
                    >
                      {country?.phoneCode}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder="Type here"
                  className="w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                  onChange={handlePhoneChange}
                />
              </div>
              {formErrors.phone && (
                <p className="text-red-600 text-sm mt-1">{formErrors.phone}</p>
              )}
            </div>
            <div>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Fax</label>
              <input
                type="text"
                name="fax"
                value={formData.fax}
                placeholder="Type here"
                className="w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Type here"
                className="w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                onChange={handleChange}
              />
              {formErrors.email && (
                <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Attach file, if any (Max: 5MB // Only .pdf format)</label>
              <div className="relative">
                <input
                  type="file"
                  name="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <input
                  readOnly
                  type="text"
                  value={formData.file ? formData.file.name : ''}
                  className="pl-[162px] w-full h-[55px] px-4 py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main pr-24"
                />
                <label
                  htmlFor="fileInput"
                  style={{ transform: 'translateY(-50%)' }}
                  className="absolute w-[139px] h-[41px] flex items-center justify-center left-[8px] top-[50%] text-white text-lg bg-theme-main border border-theme-main cursor-pointer hover:bg-theme-hover transition"
                >
                  Choose File
                </label>
              </div>
            </div>
            <div>
              <label className='block ml-[25px] mb-2 font_calibri text-[14px] md:text-lg leading[26px] text-theme-main'>Comments</label>
              <textarea
                name="comments"
                rows={6}
                value={formData.comments}
                placeholder="Type here"
                className="w-full px-4 min-h-[182px] py-2 border border-theme-main focus:outline-none text-theme-main focus:text-theme-main"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col-reverse items-center sm:flex-row gap-[8px] mt-[30px]">
            <button
              type="button"
              onClick={handleCancel}
              className={`flex font-bold w-[132px] sm:w-full text-[14px] md:text-lg items-center justify-center gap-[12px] w-full h-[55px] px-[30px] py-[20px] border border-theme-main text-theme-main`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex font-bold w-[132px] sm:w-full text-[14px] md:text-lg items-center justify-center gap-[12px] w-full h-[55px] px-4 py-2 bg-[text-theme-main] text-white bg-theme-main"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default RequestAQuoteTemplate;
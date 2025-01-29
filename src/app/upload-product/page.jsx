"use client"
import axios from 'axios';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import path from 'path';
import qs from "qs"

const strapiUrl = 'https://monkfish-app-ecq7g.ondigitalocean.app/api';
const authToken = '84ee029fe3241b6f36511c5800efffc2db34db0eac30ded8767b0729e9b1443cb2f6df956356785fd805050adc4e5d45612c8124ce1f1430575923233c1aff0c6d69e286b101b62b888186339528d728b8b50bcbec141ae71a0e2939e4490076444f7f0a3f36038c1f5ad6b1ab3322facc48410f60dd3de799b0b4bd0b496c4c';


function UploadProducts() {

    const [data, setData] = useState([]);

    const products = [
        {
            "BASE CATEGORY": "PROVISIONS",
            "SECONDARY CATEGORY": "00. Provisions",
            "GENERAL CATEGORY": "Vegetables",
            "SPECIFIC CATEGORY": "Fresh Vegetables",
            "SKU CODE": "000101",
            "ITEM DESCRIPTION": "ASPARAGUS GREEN FRESH",
            "UOM": "KGS",
            "MTML UOM": "KGM",
            "Picture": "000101.JPG"
        },
        {
            "BASE CATEGORY": "PROVISIONS",
            "SECONDARY CATEGORY": "00. Provisions",
            "GENERAL CATEGORY": "Vegetables",
            "SPECIFIC CATEGORY": "Fresh Vegetables",
            "SKU CODE": "000103",
            "ITEM DESCRIPTION": "BAMBOO SHOOT FRESH",
            "UOM": "KGS",
            "MTML UOM": "KGM",
            "Picture": "000103.JPG"
        }
    ];
    const folderPath = '../../../../../wetransfer_products-images_2025-01-02_0948/Products_Images';

    const generateSlug = (text) => {
        return text
            .toLowerCase() // Convert to lowercase
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    };

    // Function to upload a batch of products
    const uploadProductBatch = async (batch) => {
        const requests = batch.map(async (product) => {
            try {
                const imagePath = path.join(folderPath, product.Picture);
                const Slug = generateSlug(product['ITEM DESCRIPTION'])

                if (imagePath) {

                    // const imgId = await axios.post(`/api/upload-image`, {
                    //     imagePath
                    // })

                    var productData = {
                        Title: product['ITEM DESCRIPTION'],
                        Slug,
                        MTML: product['MTML UOM'],
                        UOM: product['UOM'],
                        SKU: product['SKU CODE']
                    }

                    // Check Base Category Exist in DB 

                    const baseCategoryRes = await CheckBaseCategory(product['BASE CATEGORY'])
                    if(baseCategoryRes?.id){
                        productData.base_categories = [1]
                    }


                    await axios.post(`${strapiUrl}/products`, {
                        data: {...productData},
                    }, {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    });

                    console.log(`Uploaded ${product.name} with image.`);
                } else {
                    console.log(`Image for ${product.name} not found: ${product.imageName}`);
                }
            } catch (error) {
                console.error(`Error uploading product ${product.name}:`, error);
            }
        });

        await Promise.all(requests);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const binaryStr = event.target.result;
            const workbook = XLSX.read(binaryStr, { type: 'binary' });
            // Assuming the first sheet
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            // Convert sheet to JSON
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setData(jsonData);
        };

        reader.readAsBinaryString(file);
    };

    const addProductsToStrapi = async () => {
        const batchSize = 500;  // Adjust batch size as needed

        try {
            for (let i = 0; i < products.length; i += batchSize) {
                const batch = products.slice(i, i + batchSize);
                await uploadProductBatch(batch);
                console.log(`Batch ${Math.floor(i / batchSize) + 1} uploaded successfully.`);

                // Optional: Add a delay between batches to avoid rate limiting
                await new Promise(resolve => setTimeout(resolve, 1000));  // 1 second delay
            }

            console.log('All products have been uploaded.');
        } catch (error) {
            console.error('Error uploading products:', error);
        }
    };


    const handleProductUpload = async () => {
        console.log("🚀 ~ handleProductUpload ~ data:", data)
        // const res = await Axios.get('/base-category')
        addProductsToStrapi()
    }

    return (
        <div className='m-20'>
            <h2>Upload an Excel File</h2>
            <button className='px-5 py-2 my-10 bg-black text-white font-medium block' onClick={handleProductUpload}>Upload Products</button>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
            <div>
                <h3>Data from Excel File:</h3>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    );
}

export default UploadProducts;




const CheckBaseCategory = async (category) => {
    const bcParams = qs.stringify({
        filters: {
            Name: {
                $eq: category
            }
        }
    })
    const res = await axios.get(`${strapiUrl}/base-categories?${bcParams}`)
    return res?.data?.data?.[0]
}
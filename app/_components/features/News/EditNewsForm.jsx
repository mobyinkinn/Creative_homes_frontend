


// import React, { useEffect, useState } from "react";
// import Input from "../../ui/Input";
// import TagInput from "../../ui/TagInput";
// import { useAgents } from "../../admin/agents/useAgents";
// import TiptapEditor from "../../admin/news/Tiptapeditor";
// import FileInput from "../../ui/FileInput";

// import Select from "react-select";
// const EditNewsForm = ({
//   resourceName,
//   editData={},
//   setEditData,
//   onConfirm,
//   onCloseModal,
//   aboutContent,
//   setAboutContent
// }) => {
//   console.log("edit", editData)
//   // const [description, setDescription] = useState(editData?.description || "");
//   // const [propertyImages, setPropertyImages] = useState(
//   //   editData?.multipleImages || []
//   // );
//   // const [mobilemultipleImages, setmobilemultipleImages] = useState(
//   //   editData?.mobilemultipleImages || []
//   // );
//   const [propertyImages, setPropertyImages] = useState(
//     (editData || {}).multipleImages || []
//   );
//   const [mobilemultipleImages, setmobilemultipleImages] = useState(
//     (editData || {}).mobilemultipleImages || []
//   );


//   const [newImages, setNewImages] = useState([]);
//   const [mobilenewImages, setmobileNewImages] = useState([]);

//   // useEffect(() => {
//   //   setDescription(editData.description || "");
//   //   setPropertyImages(editData.multipleImages || []);
//   //   setmobilemultipleImages(editData.mobilemultipleImages || []);
//   // }, [editData]);
//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setEditData((prev) => ({ ...prev, [name]: value }));
//   // };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };


//   useEffect(() => {
//     if (editData) {
//       setPropertyImages(editData?.multipleImages || []);
//       setmobilemultipleImages(editData?.mobilemultipleImages || []);
//     }
//   }, [editData]);
//   // useEffect(() => {
//   //   setEditData((prev) => ({
//   //     ...prev,
//   //     multipleImages: propertyImages,
//   //     mobilemultipleImages: mobilemultipleImages,
//   //   }));
//   // }, [
//   //   propertyImages,
//   //   mobilemultipleImages,
//   // ]);
//   useEffect(() => {
//     if (editData) {
//       // Only update the state if the values have changed
//       if (
//         JSON.stringify(editData?.multipleImages) !==
//         JSON.stringify(propertyImages)
//       ) {
//         setEditData((prev) => ({
//           ...prev,
//           multipleImages: propertyImages,
//         }));
//       }
//       if (
//         JSON.stringify(editData?.mobilemultipleImages) !==
//         JSON.stringify(mobilemultipleImages)
//       ) {
//         setEditData((prev) => ({
//           ...prev,
//           mobilemultipleImages: mobilemultipleImages,
//         }));
//       }
//     }
//   }, [propertyImages, mobilemultipleImages, editData]);

  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onConfirm(editData);
//   };

//   const handleMobileImageChange = (e) => {
//     const files = Array.from(e.target.files); // Convert the file list to an array
//     console.log("Selected mobile images:", files); // Check if files are selected correctly
//     setmobilemultipleImages(files); // Update state with selected files

//     setEditData((prev) => ({
//       ...prev,
//       mobilemultipleImages: files,
//     }));
//   };

//   const handleRemoveMobileImage = (index) => {
//     const updatedImages = mobilemultipleImages.filter(
//       (_, idx) => idx !== index
//     );
//     setmobilemultipleImages(updatedImages);

//     setEditData((prev) => ({
//       ...prev,
//       mobilemultipleImages: updatedImages,
//     }));
//   };


//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4"
//     >
//       <h3 className="text-lg font-semibold text-blue-950">
//         Edit {resourceName}
//       </h3>

//       <div className="space-y-4">
//         <div className="gap-2 flex flex-row">
//           <div className="w-[50%]">
//             <label className="text-sm font-medium text-gray-700">Name</label>
//             <Input
//               type="text"
//               name="title"
//               value={editData.title}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="w-[50%]">
//             <label className="text-sm font-medium text-gray-700">Date</label>
//             <Input
//               type="text"
//               name="date"
//               value={editData.date}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-[50%]">
//             <label className="text-sm font-medium text-gray-700">Order</label>
//             <Input
//               type="text"
//               name="order"
//               value={editData.order}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div>
//           <label className="text-sm font-medium text-gray-700">
//             Description
//           </label>
//           {/* <TiptapEditor content={description} setContent={setDescription} /> */}
//         </div>
//         <div>
//           <label className="text-sm font-medium text-gray-700 mb-2 block">
//             Existing Property Images
//           </label>
//           <div className="flex flex-wrap gap-3">
//             {propertyImages.map((img, idx) => (
//               <div key={idx} className="relative w-24 h-24">
//                 <img
//                   src={img}
//                   alt={`property-${idx}`}
//                   className="w-full h-full object-cover rounded"
//                 />
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setPropertyImages(
//                       propertyImages.filter((_, i) => i !== idx)
//                     )
//                   }
//                   className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="text-sm font-medium text-gray-700 mt-4 block">
//             Add New Property Images
//           </label>
//           <FileInput
//             id="multipleImages"
//             accept="image/*"
//             multiple
//             onChange={(e) => {
//               const files = Array.from(e.target.files);
//               setNewImages(files);
//               setEditData((prev) => ({ ...prev, newImages: files }));
//             }}
//           />
//         </div>
//         <div>
//           <label className="text-sm font-medium text-gray-700 mb-2 block">
//             Existing Mobile Property Images
//           </label>
//           <div className="flex flex-wrap gap-3">
//             {mobilemultipleImages.map((img, idx) => (
//               <div key={idx} className="relative w-24 h-24">
//                 <img
//                   src={img} // Create an object URL for the image file (if it's a new file)
//                   alt={`property-mobile-image-${idx}`}
//                   className="w-full h-full object-cover rounded"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => handleRemoveMobileImage(idx)} // Remove image on click
//                   className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="text-sm font-medium text-gray-700 mt-4 block">
//             Add New Property Images
//           </label>
//           <FileInput
//             id="mobileMultipleImages"
//             accept="image/*"
//             multiple
//             onChange={handleMobileImageChange} // Trigger the handler when files are selected
//           />
//         </div>

//         <div className="flex justify-end space-x-3">
//           <button
//             type="button"
//             onClick={onCloseModal}
//             className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
//           >
//             Update Property
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default EditNewsForm;


import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import TagInput from "../../ui/TagInput";
import { useAgents } from "../../admin/agents/useAgents";
import TiptapEditor from "../../admin/news/Tiptapeditor";
import FileInput from "../../ui/FileInput";
import Select from "react-select";

const EditNewsForm = ({
  resourceName,
  editData = {},
  setEditData,
  onConfirm,
  onCloseModal,
  aboutContent,
  setAboutContent,
}) => {
  console.log("edit", editData);

  const [propertyImages, setPropertyImages] = useState([]);
  const [mobilemultipleImages, setmobilemultipleImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [mobilenewImages, setmobileNewImages] = useState([]);

  // Initialize local state when editData changes
  useEffect(() => {
    console.log("EditData changed:", editData);
    if (editData && Object.keys(editData).length > 0) {
      setPropertyImages(editData?.multipleImages || []);
      setmobilemultipleImages(editData?.mobilemultipleImages || []);
    }
  }, [editData]); // Use entire editData object as dependency

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Field changed:", name, value);
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Include current image states in the final data
    const finalData = {
      ...editData,
      multipleImages: propertyImages,
      mobilemultipleImages: mobilemultipleImages,
      newImages: newImages,
      mobilenewImages: mobilenewImages,
    };
    onConfirm(finalData);
  };

  const handleMobileImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log("Selected mobile images:", files);
    setmobileNewImages(files); // Set to new images state instead

    setEditData((prev) => ({
      ...prev,
      mobilenewImages: files,
    }));
  };

  const handleRemoveMobileImage = (index) => {
    const updatedImages = mobilemultipleImages.filter(
      (_, idx) => idx !== index
    );
    setmobilemultipleImages(updatedImages);

    setEditData((prev) => ({
      ...prev,
      mobilemultipleImages: updatedImages,
    }));
  };

  const handleRemovePropertyImage = (index) => {
    const updatedImages = propertyImages.filter((_, idx) => idx !== index);
    setPropertyImages(updatedImages);

    setEditData((prev) => ({
      ...prev,
      multipleImages: updatedImages,
    }));
  };

  const handleNewImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setNewImages(files);
    setEditData((prev) => ({
      ...prev,
      newImages: files,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4"
    >
      <h3 className="text-lg font-semibold text-blue-950">
        Edit {resourceName}
      </h3>

      <div className="space-y-4">
        <div className="gap-2 flex flex-row">
          <div className="w-[50%]">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <Input
              type="text"
              name="title"
              value={editData.title || ""}
              onChange={handleChange}
            />
          </div>

          <div className="w-[50%]">
            <label className="text-sm font-medium text-gray-700">Date</label>
            <Input
              type="text"
              name="date"
              value={editData.date || ""}
              onChange={handleChange}
            />
          </div>
          <div className="w-[50%]">
            <label className="text-sm font-medium text-gray-700">Order</label>
            <Input
              type="text"
              name="order"
              value={editData.order || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          {/* <TiptapEditor content={description} setContent={setDescription} /> */}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Existing Property Images
          </label>
          <div className="flex flex-wrap gap-3">
            {propertyImages.map((img, idx) => (
              <div key={idx} className="relative w-24 h-24">
                <img
                  src={img}
                  alt={`property-${idx}`}
                  className="w-full h-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemovePropertyImage(idx)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mt-4 block">
            Add New Property Images
          </label>
          <FileInput
            id="multipleImages"
            accept="image/*"
            multiple
            onChange={handleNewImagesChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Existing Mobile Property Images
          </label>
          <div className="flex flex-wrap gap-3">
            {mobilemultipleImages.map((img, idx) => (
              <div key={idx} className="relative w-24 h-24">
                <img
                  src={typeof img === "string" ? img : URL.createObjectURL(img)}
                  alt={`property-mobile-image-${idx}`}
                  className="w-full h-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveMobileImage(idx)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mt-4 block">
            Add New Mobile Property Images
          </label>
          <FileInput
            id="mobileMultipleImages"
            accept="image/*"
            multiple
            onChange={handleMobileImageChange}
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCloseModal}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
          >
            Update Property
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditNewsForm;
import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import TagInput from "../../ui/TagInput";
import ImagePreviewContainer from "../../ui/ImagePreviewContainer";
import { useUpdateAgentImage } from "../../admin/agents/useAgents";
import Spinner from "../../ui/Spinner";

const EditAgentForm = ({
  id,
  resourceName,
  editData,
  setEditData,
  onConfirm,
  onCloseModal,
}) => {
  const { mutate: updateAgentImage, isPending: isImageUpdating } =
    useUpdateAgentImage();
  const [tags, setTags] = useState(editData.languages || []);

  useEffect(() => {
    setEditData((prev) => ({ ...prev, languages: tags }));
  }, [tags, setEditData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(editData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const formDataImage = new FormData();
    formDataImage.append("image", file);

    updateAgentImage({
      id,
      formData: formDataImage,
    });
    if (file) {
      setEditData({ ...editData, image: file });
    }
  };

  if (isImageUpdating) return <Spinner />;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4"
    >
      <h3 className="text-lg font-semibold text-blue-950">
        Edit {resourceName}
      </h3>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <Input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleChange}
          />
        </div>


        <div>
          <label className="text-sm font-medium text-gray-700">Phone No.</label>
          <Input
            type="text"
            name="phoneNo"
            value={editData.phoneNo}
            onChange={handleChange}
          />
        </div>


        <div>
          <label className="text-sm font-medium text-gray-700">
            Designation
          </label>
          <Input
            type="text"
            name="designation"
            value={editData.designation}
            onChange={handleChange}
          />
        </div>


        <div>
          <label className="text-sm font-medium text-gray-700">About</label>
          <Input
            type="text"
            name="about"
            value={editData.about}
            onChange={handleChange}
          />
        </div>

        <ImagePreviewContainer
          image={editData.image}
          onImageChange={handleImageChange}
        />

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
            Update Agent
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditAgentForm;

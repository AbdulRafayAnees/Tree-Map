"use client";

const TreeForm = ({
  location,
  formData,
  setFormData,
  onSave,
}) => {
  if (!location) {
    return (
      <div className="rounded-lg border bg-white p-5">
        <h2 className="text-lg font-semibold">
          Plant a Tree
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Click anywhere on the map to select a location.
        </p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.userName || !formData.treeName) {
      alert("Please enter user name and tree name.");
      return;
    }

    onSave();
  };

  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Plant a Tree
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="mb-1 block text-sm font-medium">
            User Name
          </label>

          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Tree Name
          </label>

          <input
            type="text"
            name="treeName"
            value={formData.treeName}
            onChange={handleChange}
            placeholder="e.g. Neem"
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">

          <div>
            <label className="mb-1 block text-sm font-medium">
              Latitude
            </label>

            <input
              type="text"
              value={location.lat.toFixed(6)}
              readOnly
              className="w-full rounded-md border bg-gray-100 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Longitude
            </label>

            <input
              type="text"
              value={location.lng.toFixed(6)}
              readOnly
              className="w-full rounded-md border bg-gray-100 px-3 py-2"
            />
          </div>

        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
        >
          🌳 Plant Tree
        </button>

      </form>
    </div>
  );
};

export default TreeForm;
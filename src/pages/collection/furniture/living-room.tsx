import { useState } from "react";

const LivingRoom = () => {
  // State để lưu trạng thái của checkbox
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Hàm xử lý khi thay đổi checkbox
  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      // Nếu được check, thêm giá trị vào state
      setSelectedTypes([...selectedTypes, value]);
    } else {
      // Nếu bỏ check, loại bỏ giá trị khỏi state
      setSelectedTypes(selectedTypes.filter((type) => type !== value));
    }
  };

  return (
    <div className="lex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter option */}
      <div className="w-min-60">
        {/* Type Filter  */}
        <div
          className={
            "border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block"
          }
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Furniture"
                onChange={handleTypeChange} // Thêm onChange tại đây
              />
              Furniture
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Sofa"
                onChange={handleTypeChange} // Thêm onChange tại đây
              />
              Sofa
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Sofa"
                onChange={handleTypeChange} // Thêm onChange tại đây
              />
              Sofa
            </p>
          </div>
        </div>
        {/* Price Filter */}
        <div>
          <p className="mb-3 text-sm font-medium">Price</p>
          <div className="flex flex=col gap-2 text-sm text-gray-700">
            <p className="flex gap-2"></p>
            <input
              className="w-3"
              type="checkbox"
              value="price"
              onChange={handleTypeChange}
            />{" "}
            $50 - $100
          </div>
        </div>
        {/* Color Filter */}
        <div></div>
        {/* Material Filter */}
        <div></div>
        #endregion
      </div>
      {/* Right Side */}
      <div>
        {/* Hiển thị giá trị đã chọn */}
        <h3 className="text-lg font-medium">Selected Types:</h3>
        <ul className="list-disc pl-5">
          {selectedTypes.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LivingRoom;

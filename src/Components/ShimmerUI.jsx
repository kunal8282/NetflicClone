const ShimmerUI = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded-md mb-4"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default ShimmerUI;

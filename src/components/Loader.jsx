const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-[1px] bg-opacity-15">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-800 border-solid">
        <div className="h-full w-full rounded-full border-2 border-red-800 border-solid animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;

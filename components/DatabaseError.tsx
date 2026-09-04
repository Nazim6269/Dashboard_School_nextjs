const DatabaseError = ({ message }: { message: string }) => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
          <span className="text-3xl">⚠️</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          Database Connection Error
        </h2>
        <p className="text-sm text-gray-500 text-center max-w-md">{message}</p>
        <a
          href="javascript:location.reload()"
          className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Try Again
        </a>
      </div>
    </div>
  );
};

export default DatabaseError;

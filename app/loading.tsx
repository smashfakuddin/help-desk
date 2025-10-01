export default function loading() {
  return (
    <div className="container">
      <div className="container mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* SummaryCard */}
        <div className="col-span-1 order-1 md:order-2 lg:order-3 md:sticky md:top-6 self-start">
          <div className=" h-96 w-full bg-gray-200 rounded-lg animate-pulse "></div>
        </div>

        {/* Posts */}
        <div className="col-span-2 order-2 md:order-1 lg:order-1 gap-5">
          <div className="flex items-center justify-center h-32 w-full mb-5 bg-gray-200 rounded-lg animate-pulse " />
          <div className="flex items-center justify-center h-32 w-full mb-5 bg-gray-200 rounded-lg animate-pulse " />

          <div className="pt-5 h-screen w-full bg-gray-200 rounded-lg animate-pulse ">
            {Array.from({ length: 1 }).map((_, index) => (
              <div key={index}>
                <div className="flex items-center mb-5 px-5 gap-3">
                  <div className="rounded-full bg-gray-300 h-10 w-10 animate-pulse "></div>
                  <div className="w-full">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 w-48"></div>
                  </div>
                </div>
                <div className="px-5 mb-5">
                  <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <div className="h-64 max-w-md px-5 mx-5 w-full mb-5 bg-gray-400 rounded-lg animate-pulse "></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

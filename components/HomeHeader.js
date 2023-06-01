import { useSession } from "next-auth/react";

const HomeHeader = () => {
    const {data:session} = useSession();
  return (
    <div className="text-blue-900 flex justify-between">
      <h2 className="mt-0">
        Hello, <b>{session?.user?.name}</b>
      </h2>

      <div className="">
        <div className="bg-gray-300 flex  gap-1 text-black rounded-lg overflow-hidden">
          <img
            src={session?.user?.image}
            alt="user-image"
            className="w-6 h-6"
          />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </div>
  );
};
export default HomeHeader;

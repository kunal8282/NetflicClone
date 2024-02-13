import { useSelector } from "react-redux";
import  CardComponent  from "../Components/CardComponent";

const MyListPage = () => {
  const myList = useSelector((state) => state?.wishlist);
  document.title = "My List";

  if (myList.length === 0) {
    return (
      <div className="text-white h-screen flex justify-center items-center">
        <p className="text-4xl">Your List is Empty</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-11/12 m-auto py-10">
      <h1 className="text-white text-4xl py-5">My List</h1>
        <div className="flex w-full gap-5 py-2 flex-wrap">
            {myList &&
            myList?.map((items) => (
                <CardComponent key={items.id} {...items} />
            ))}
      </div>
    </div>
  );
};

export default MyListPage;

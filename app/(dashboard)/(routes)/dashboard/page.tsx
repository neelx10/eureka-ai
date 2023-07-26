//import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const DashBoardPage = () => {
  return (
    <div>
      <p>DashBoard Page (Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashBoardPage;

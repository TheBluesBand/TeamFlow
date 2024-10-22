import BarChart from "@/components/BarChart";
import PageTitle from "@/components/PageTitle";
import Card, { CardContent, CardProps } from "@/components/card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total lines today",
    amount: "2,145",
    discription: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Pull requests open",
    amount: "20",
    discription: "+2.3",
    icon: Users,
  },
  {
    label: "Bugs found",
    amount: "15",
    discription: "-15% down from last month",
    icon: CreditCard,
  },
  {
    label: "Time to first review",
    amount: "4.9 hours",
    discription: "+201 from last month",
    icon: Activity,
  },
];

const userSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    salesAmount: "+2,134 lines",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    salesAmount: "+2,134 lines",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    salesAmount: "+2,134 lines",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    salesAmount: "+2,134 lines",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    salesAmount: "+2,134 lines",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            amount={data.amount}
            discription={data.discription}
            icon={data.icon}
            label={data.label}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Team</p>
            <p className="text-sm text-gray-400">5 Team Memebers</p>
          </section>
          {userSalesData.map((data, index) => (
            <SalesCard
              key={index}
              email={data.email}
              name={data.name}
              salesAmount={data.salesAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}

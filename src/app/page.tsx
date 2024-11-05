import LineChart from "@/components/LineChart";
import PageTitle from "@/components/PageTitle";
import Card, { CardContent, CardProps } from "@/components/card";
import { ArrowUpRight } from "lucide-react";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import AreaChart from "@/components/AreaChart";

const cardData: CardProps[] = [
  {
    label: "Total lines today",
    amount: "2,145",
    description: "+20.1% from last month",
    icon: ArrowUpRight,
  },
  {
    label: "Pull requests open",
    amount: "20",
    description: "+2.3",
    icon: ArrowUpRight,
  },
  {
    label: "Bugs found",
    amount: "15",
    description: "-15% down from last month",
    icon: ArrowUpRight,
  },
  {
    label: "Time to first review",
    amount: "4.9 hours",
    description: "+201 from last month",
    icon: ArrowUpRight,
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
      {/* <PageTitle title="Dashboard" /> */}
      <div className="flex flex-col w-full gap-4 gap-x-8 transition-all sm:flex-row sm:justify-between">
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-2">
          {cardData.map((data, index) => (
            <Card
              key={index}
              amount={data.amount}
              description={data.description}
              icon={data.icon}
              label={data.label}
            />
          ))}
        </section>
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-2">
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Team</p>
              <p className="text-sm text-gray-400">5 Team Memebers</p>
            </section>
            {userSalesData.slice(0, 2).map((data, index) => (
              <SalesCard
                key={index}
                email={data.email}
                name={data.name}
                salesAmount={data.salesAmount}
              />
            ))}
          </CardContent>
          {cardData.slice(0, 1).map((data, index) => (
            <Card
              key={index}
              amount={data.amount}
              description={data.description}
              icon={data.icon}
              label={data.label}
            />
          ))}
        </section>
      </div>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Lines of Code</p>
          <LineChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Code Frequency</p>
          </section>
          <AreaChart />
        </CardContent>
      </section>
    </div>
  );
}

import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';

import AddMemberForm from '@/components/AddMemberForm';
import { fetchTeam } from '@/lib/actions/user';
import { Card, CardContent } from '@/components/ui/card';
import { Team } from '@/lib/types';
export default async function Home() {
  const team = await fetchTeam();

  const displayTeam =
    team?.length > 0 ? (
      team?.map((item: Team, i) => (
        <Card key={i} className="!h-fit mb-4">
          <CardContent className="flex justify-between flex-col sm:!flex-row space-y-2 items-center pt-4">
            <div className="rounded-full relative w-20 h-20 overflow-hidden">
              <Image
                fill
                priority
                alt="image"
                src={item?.imgUrl}
                className=" object-cover"
              />
            </div>
            <div>
              <p className="uppercase text-bold">{item?.name}</p>
              <p className="capitalize text-semibold">{item?.job}</p>
            </div>
          </CardContent>
        </Card>
      ))
    ) : (
      <h2 className="text-center font-bold text-xl">Nobody On The Team Yet</h2>
    );
  return (
    <div className="py-[100px]  w-[90%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20 gap-y-8">
        <div className="space-y-16">
          <h2 className="text-center font-bold text-xl">Add A Member</h2>
          <AddMemberForm />
        </div>
        <div className="space-y-16">
          <h2 className="text-center font-bold text-xl">All Team Members</h2>
          <ScrollArea className="max-h-[500px]">{displayTeam}</ScrollArea>
        </div>
      </div>
    </div>
  );
}

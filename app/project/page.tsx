import Image from 'next/image';

import { ScrollArea } from '@/components/ui/scroll-area';

import { fetchProject } from '@/lib/actions/user';
import { Card, CardContent } from '@/components/ui/card';
import AddProject from '@/components/AddProject';
export default async function Project() {
  const projects = await fetchProject();

  const displayTeam =
    projects?.length > 0 ? (
      projects?.map((item, i) => (
        <Card key={i} className="!h-fit mb-4">
          <CardContent className="flex justify-between flex-col sm:!flex-row space-y-2 items-center pt-4">
            <div className="rounded-full relative w-20 h-20 overflow-hidden">
              <Image
                fill
                priority
                alt="image"
                src={item.imgUrl}
                className=" object-cover"
              />
            </div>
            <div>
              <p className="uppercase text-bold">{item.name}</p>
            </div>
          </CardContent>
        </Card>
      ))
    ) : (
      <h2 className="text-center font-bold text-xl">No Projects Yet</h2>
    );
  return (
    <div className="py-[100px]  w-[90%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20 gap-y-8">
        <div className="space-y-16">
          <h2 className="text-center font-bold text-xl">Add A Project</h2>
          <AddProject />
        </div>
        <div className="space-y-16">
          <h2 className="text-center font-bold text-xl">Project</h2>
          <ScrollArea className="max-h-[500px]">{displayTeam}</ScrollArea>
        </div>
      </div>
    </div>
  );
}

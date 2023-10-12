import Image from 'next/image';
import { Container, ScrollArea, Title } from '@mantine/core';
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
      <Title ta={'center'} order={2}>
        No Projects Yet
      </Title>
    );
  return (
    <Container className="mt-[100px] md:mt-[200px]" mt={20} h={'100%'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20 gap-y-8">
        <div className="space-y-16">
          <Title ta={'center'} order={3}>
            Add A Project
          </Title>
          <AddProject />
        </div>
        <div className="space-y-16">
          <Title order={3} ta={'center'}>
            Project
          </Title>
          <ScrollArea h={'500px'}>{displayTeam}</ScrollArea>
        </div>
      </div>
    </Container>
  );
}

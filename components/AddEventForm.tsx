'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import UploadComponent from './Upload';
import { useToast } from './ui/use-toast';
import { useRouter } from 'next/navigation';
import { createEvent } from '@/lib/actions/user';
import { useEffect, useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),

  imageUrl: z.string().min(2, {
    message: 'Image url is required',
  }),
  venue: z.string().min(3, {
    message: 'Venue is required',
  }),
  date: z.date().min(new Date(), { message: 'Please select a valid date' }),
});
type Props = {};

const AddEvent = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      imageUrl: '',
      date: new Date(),
      venue: '',
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onInvalid = (errors: any) => console.error(errors);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createEvent(
        values.name,
        values.imageUrl,
        values.venue,
        values.date
      );
      toast({
        variant: 'success',
        title: 'Success',
        description: 'You have added a new Event',
      });
      form.reset();
      router.refresh();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Something went wrong',
      });
    }
  }
  if (!isMounted) return null;
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onInvalid)}
          className="!space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="Event Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="venue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Venue</FormLabel>
                <FormControl>
                  <Input placeholder="Venue" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  {/* <DateTimePicker
                    label="Pick date and time"
                    placeholder="Date and Time"
                    value={field.value}
                    onChange={field.onChange}
                  /> */}
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <UploadComponent
                    endpoint="eventImage"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            variant={'purple'}
            className="w-full"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddEvent;

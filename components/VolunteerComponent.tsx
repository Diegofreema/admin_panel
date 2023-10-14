'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';

type Props = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dob: string;
  address: string;
  skill: string;
  country: string;
  reason: string;
  id: string;
};

const VolunteerComponent = ({
  email,
  firstName,
  lastName,
  phoneNumber,
  dob,
  address,
  skill,
  country,
  reason,
  id,
}: Props) => {
  const handleDelete = (id: string) => {
    console.log(id);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1 className="text-center font-bold text-xl">
            {firstName} {lastName}
          </h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center font-bold text-xl">Email: {email}</p>
        <p className="text-center font-bold text-xl">
          Phone Number: {phoneNumber}
        </p>
        <p className="text-center font-bold text-xl">Date of Birth: {dob}</p>
        <p className="text-center font-bold text-xl">Address: {address}</p>
        <p className="text-center font-bold text-xl">Skill: {skill}</p>
        <p className="text-center font-bold text-xl">Country: {country}</p>
        <p className="text-center font-bold text-xl">Reason: {reason}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant={'destructive'}
          className="w-full"
          size={'lg'}
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VolunteerComponent;

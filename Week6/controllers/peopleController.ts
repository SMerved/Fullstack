import { NextFunction, Request, Response } from 'express';
import AppError from '../utility/appError';
import catchAsync from '../utility/catchAsync';
import PeopleModel from '../models/peopleModel';
import fs from 'fs';

type personT = {
  id : number
  name : string
  age : number
  city : string
}
const data : Buffer = fs.readFileSync('people.json')
const people : personT[] = JSON.parse(data.toString('utf-8')).person

export const getPerson = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const person = people.find((p)=> p.id ==  parseInt(req.params.id));

    if (!person) {
      return next(new AppError('No object found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        person,
      },
    });
  }
);
export const createPerson = catchAsync(async (req: Request, res: Response) => {
  const { name, age, city }: {name:string, age:number, city:string} = req.body;
  const id = people[-1].id
  const newPerson = { id: id+1, name, age, city }
  people.push(newPerson)
  fs.writeFileSync('people.json', JSON.stringify(people, null, 2));

  res.status(201).json({
    status: 'success',
    data: newPerson,
  });
});

/*export const createObject2 = catchAsync(async (req: Request, res: Response) => {
  const newObject = await Object.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      car: newObject,
    },
  });
});
export const getPerson2 = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const person = await PeopleModel.findById(req.params.id);

    if (!person) {
      return next(new AppError('No object found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        person,
      },
    });
  }
);*/
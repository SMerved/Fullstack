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
const people : personT[] = JSON.parse(data.toString('utf-8'))

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
export const createPerson = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { name, age, city }: {name:string, age:number, city:string} = req.body;
  const id : number = people[people.length-1].id
  const newPerson = { id: id+1, name, age, city }
  if (!newPerson){
    return next(new AppError('No object to create', 404));
  }
  people.push(newPerson)
  fs.writeFileSync('people.json', JSON.stringify(people, null, 2));

  res.status(201).json({
    status: 'success',
    data: newPerson,
  });
});
export const getAllPeople = async (req: Request, res: Response, next: NextFunction) => {
  if (!people){
    return next(new AppError('No objects found', 404));
  }
  return res.status(200).json({
          status: 'success',
          data: people,
      });
  };
  export const updatePersonFull = async (req: Request, res: Response, next: NextFunction) => {
        const { name, age, city }: {name:string, age:number, city:string} = req.body;
        if(!name || !age || !city){
          return next(new AppError('Insufficient data provided', 404));
        }
        const person = people.find((p: personT) => p.id === parseInt(req.params.id));
        if (!person) {
          return next(new AppError('No object found', 404));
        }
        person.name = name
        person.age = age
        person.city = city
        fs.writeFileSync('people.json', JSON.stringify(people, null, 2));

        res.status(200).json({
            status: 'success',
            data: person,
        });
};
export const updatePersonPartial = async (req: Request, res: Response, next: NextFunction) => {
  const changes = req.body;
  const person = people.find((p: personT) => p.id === parseInt(req.params.id));
  if (!person) {
    return next(new AppError('No object found', 404));
  }
  if(changes.name){
    person.name = changes.name
  }
  if(changes.age){
    person.age = changes.age
  }
  if(changes.city){
    person.city = changes.city
  }
  fs.writeFileSync('people.json', JSON.stringify(people, null, 2));

  res.status(200).json({
      status: 'success',
      data: person,
  });
};
export const deletePerson = async (req: Request, res: Response, next: NextFunction) => {
      const peopleDeleted = people.filter((p: personT) => p.id !== parseInt(req.params.id));
      if (people.length === peopleDeleted.length) {
        return next(new AppError('No object deleted', 404));
      }
      fs.writeFileSync('people.json', JSON.stringify(peopleDeleted, null, 2));
          res.status(200).json({
          status: 'success',
          message: 'Person deleted',
      })};

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
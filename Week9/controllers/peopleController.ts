import { NextFunction, Request, Response } from 'express';
import AppError from '../utility/appError';
import catchAsync from '../utility/catchAsync';
import PeopleModel from '../models/peopleModel';

type personT = {
  id?: number
  name: string
  age: number
  city: string
}

export const getPerson = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const person: personT | null = await PeopleModel.findById(req.params.id);
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
  const newPerson: personT = await PeopleModel.create(req.body)
  if (!newPerson) {
    return next(new AppError('No object to create', 404));
  }
  res.status(201).json({
    status: 'success',
    data: newPerson,
  });
});

export const getAllPeople = async (req: Request, res: Response, next: NextFunction) => {
  const people: personT[] = await PeopleModel.find({}, { __v: 0 });
  if (!people) {
    return next(new AppError('No objects found', 404));
  }
  return res.status(200).json({
    status: 'success',
    data: people,
  });
};
export const updatePersonFull = async (req: Request, res: Response, next: NextFunction) => {
  const { name, age, city }: { name: string, age: number, city: string } = req.body;
  if (!name || !age || !city) {
    return next(new AppError('Insufficient data provided', 404));
  }
  const person = await PeopleModel.findByIdAndUpdate(req.params.id, { name, age, city }, { new: true });
  if (!person) {
    return next(new AppError('No object found', 404));
  }
  res.status(200).json({
    status: 'success',
    data: person,
  });
};
export const updatePersonPartial = async (req: Request, res: Response, next: NextFunction) => {
  const changes = req.body;
  const person = await PeopleModel.findByIdAndUpdate(req.params.id, { name: changes?.name, age: changes?.age, city: changes?.city }, { new: true });
  if (!person) {
    return next(new AppError('No object found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: person,
  });
};
export const deletePerson = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deletedPerson = await PeopleModel.findByIdAndRemove(req.params.id);
    if (!deletedPerson) {
      return next(new AppError('No object deleted', 404));
    }
    res.status(200).json({
      status: 'success',
      message: 'Person deleted',
    })
  }
  catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    })
  }

};
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { CatModel } from '../src/Models/CatModel';
import { CatsService } from '../src/services/Cats.service';


describe('CatModel', () => {

  it('should create a CatModel instance', () => {
    const cat = new CatModel('cat.jpg', 'Whiskers', 'A fluffy cat!');
    expect(cat).toBeInstanceOf(CatModel);
    expect(cat.url).toBe('cat.jpg');
    expect(cat.name).toBe('Whiskers');
    expect(cat.fact).toBe('A fluffy cat!');
  });
  it('should create a CatModel instance without a fact', () => {
    const cat = new CatModel('cat2.jpg', 'Mittens');
    expect(cat).toBeInstanceOf(CatModel);
    expect(cat.url).toBe('cat2.jpg');
    expect(cat.name).toBe('Mittens');
    expect(cat.fact).toBe('');
  });
})


describe('CatsService', () => {
  it('should create a CatsService instance', () => {
    const catsService = new CatsService('https://api.example.com/cats');
    expect(catsService).toBeInstanceOf(CatsService);
  });

});
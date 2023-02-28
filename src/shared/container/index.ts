import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/respositories/ICategoriesRepositort";
import { CategoriesRepository } from "../../modules/cars/respositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/respositories/implementations/SpecificationsRepository";

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { ISpecificationsRepository } from "../../modules/cars/respositories/ISpecificationsRepository";
// ICategoryRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

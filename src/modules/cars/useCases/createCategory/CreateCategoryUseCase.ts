import {inject, injectable} from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { ICategoriesRepository } from "../../respositories/ICategoriesRepositort";

interface IRequest{
    name:string;
    description:string;
}
/**
 * []Definir Tipo de Retorno
 * []Alterar o retorno de erro
 * []Acessar o repositorio
 * []Retornar algo
 */

@injectable()
class CreateCategoryUseCase {
    
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository : ICategoriesRepository
        ) {}
    
    async execute({description, name}: IRequest  ): Promise<void>{
        
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists) {
         throw new AppError("Category already exists!");
        }
     
         this.categoriesRepository.create({name, description});
    }
}

export {CreateCategoryUseCase}
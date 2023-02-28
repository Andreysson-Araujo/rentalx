import { AppError } from "../errors/AppError";
import { ICategoriesRepository } from "../modules/cars/respositories/ICategoriesRepositort";


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

class CreateCategoryService {
    
    constructor(private categoriesRepository : ICategoriesRepository) {}
    

    execute({description, name}: IRequest  ): void{
        
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists) {
         throw new AppError("Category already exists!");
        }
     
         this.categoriesRepository.create({name, description});
    }
}

export {CreateCategoryService}
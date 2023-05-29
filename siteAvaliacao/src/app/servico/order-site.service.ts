import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderSiteService {

  constructor() { }
  produtoDetails = [
    {
      id: 1,
      foodName: "Bolo de Chocolate com Morango",
      foodDetails: "Delicioso bolo de chocolate com recheio de morango, coberto com granulado e massa macia de chocolate.",
      foodPrice: 15,
      foodImg: "https://www.estadao.com.br/resizer/klm0z9ljHnZ6P_vZz-HgRA1RxD8=/1200x900/filters:format(jpg):quality(80):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/estadao/FIVYQFU6J5ND3PYRA6XQHR4NW4.jpg"

    },
    {
      id: 2,
      foodName: "Torta de Limão",
      foodDetails: "Refrescante torta de limão com base crocante de massa de biscoito, proporcionando uma explosão de frescor a cada mordida.",
      foodPrice: 20,
      foodImg: "https://www.oetker.com.br/Recipe/Recipes/oetker.com.br/br-pt/dessert/image-thumb__98508__RecipeDetailsLightBox/torta-de-limao.jpg"

    },
    {
      id: 3,
      foodName: "Pavê de Paçoca",
      foodDetails: "Irresistível pavê de paçoca, camadas cremosas de creme de amendoim e biscoitos, com um toque de crocância e sabor inconfundível da paçoca.",
      foodPrice: 10,
      foodImg: "https://i.ytimg.com/vi/4Tskgb7Yk5M/maxresdefault.jpg"

    },
    {
      id: 4,
      foodName: "Pudim de Leite Condensado",
      foodDetails: "Delicioso pudim de leite condensado, com sua textura macia e cremosa, envolvido em uma calda de caramelo dourada e irresistível.",
      foodPrice: 25,
      foodImg: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/9954f57d1ba0fc9a818b8bbf267e31ce.jpg"

    }
  ]
}


import { DataSource } from "typeorm";
import { CityEntity } from "../Entities/city.entity";

export const cityProvider = [
  {
    provide: 'CITY_REPOSITORY',
    useFactory: (DataSource: DataSource) => 
      DataSource.getRepository(CityEntity),
    inject: ['DataSource']
  },
];
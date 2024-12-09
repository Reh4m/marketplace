import { Field, ObjectType } from "type-graphql";

import { Product } from "@models/products.model";

@ObjectType()
export class InfiniteScrollProducts {
  @Field((type) => [Product])
  products: Product[];

  @Field()
  hasMore: boolean;
}

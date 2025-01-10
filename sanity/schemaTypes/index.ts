import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import { productType } from './productType'
import { orderType } from './orderType'
import { saleType } from './saleType'
import { userType } from './userType'
import trendType from './trendType'
import specification from './specification'
import colorVariation from './colorVariation'
import sizeVariation from './sizeVariation'
import quantityPrize from './quantityPrize'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, orderType, productType,saleType, userType, trendType ,specification, sizeVariation, colorVariation,quantityPrize],
}

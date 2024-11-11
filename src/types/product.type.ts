import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProductGgsjFields {
  title: EntryFieldTypes.Symbol;
  category: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  slug: EntryFieldTypes.Symbol;
  cover: EntryFieldTypes.AssetLink;
}

export type TypeProductGgsjSkeleton = EntrySkeletonType<
  TypeProductGgsjFields,
  "productGgsj"
>;

export interface TypeProductGgsjAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName?: string;
      contentType?: string;
    };
  };
}

export type TypeProductGgsj<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeProductGgsjSkeleton, Modifiers, Locales>;
